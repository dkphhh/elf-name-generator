import { VOLC_ACCESS_KEY_ID, VOLC_SECRET_KEY } from '$env/static/private';
import crypto from 'crypto';

/**
 * 计算 SHA256 哈希并转换为十六进制小写
 */
function sha256Hex(data: string): string {
	return crypto.createHash('sha256').update(data, 'utf8').digest('hex');
}

/**
 * HMAC-SHA256 签名（输出十六进制）
 */
function hmacSha256Hex(key: string | Buffer, data: string): string {
	const hmac = crypto.createHmac('sha256', key);
	hmac.update(data, 'utf8');
	return hmac.digest('hex');
}

/**
 * 计算火山引擎 API 签名
 */
function calculateVolcEngineSignature(params: {
	method: 'GET' | 'POST';
	host: string;
	uri: string;
	queryString: string;
	headers: Record<string, string>;
	body: string;
	accessKeyId: string;
	secretAccessKey: string;
	region: string;
	service: string;
	date: string; // YYYYMMDD'T'HHMMSS'Z' 格式
}): string {
	const {
		method,
		uri,
		queryString,
		headers,
		body,
		accessKeyId,
		secretAccessKey,
		region,
		service,
		date
	} = params;

	// 步骤二：创建规范请求（CanonicalRequest）
	// 先将 headers 转换为小写键的对象，避免大小写问题
	const lowercaseHeaders: Record<string, string> = {};
	for (const key in headers) {
		lowercaseHeaders[key.toLowerCase()] = headers[key];
	}

	const canonicalHeaders = Object.keys(lowercaseHeaders)
		.sort()
		.map((key) => `${key}:${lowercaseHeaders[key].trim()}`)
		.join('\n');

	const signedHeaders = Object.keys(lowercaseHeaders).sort().join(';');

	const hashedPayload =
		method === 'GET'
			? 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' // 空字符串的 SHA256
			: sha256Hex(body);

	const canonicalRequest = [
		method,
		uri,
		queryString,
		canonicalHeaders,
		'',
		signedHeaders,
		hashedPayload
	].join('\n');

	// 步骤三：创建待签名字符串（StringToSign）
	const shortDate = date.split('T')[0]; // YYYYMMDD
	const credentialScope = `${shortDate}/${region}/${service}/request`;
	const hashedCanonicalRequest = sha256Hex(canonicalRequest);

	const stringToSign = ['HMAC-SHA256', date, credentialScope, hashedCanonicalRequest].join('\n');

	// 步骤四：派生签名密钥（kSigning）
	const kDate = hmacSha256Hex(secretAccessKey, shortDate);
	const kRegion = hmacSha256Hex(Buffer.from(kDate, 'hex'), region);
	const kService = hmacSha256Hex(Buffer.from(kRegion, 'hex'), service);
	const kSigning = hmacSha256Hex(Buffer.from(kService, 'hex'), 'request');

	// 步骤五：计算签名（Signature）
	const signature = hmacSha256Hex(Buffer.from(kSigning, 'hex'), stringToSign);

	// 步骤六：构建 Authorization 头
	const authorization = `HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

	return authorization;
}

type VolcJimengResponse = {
	code: number;
	data: {
		task_id: string;
	};
	message: string;
	request_id: string;
	status: number;
	time_elapsed: string;
};

/**
 * 创建即梦 4.0 图像生成任务
 * @param option - 生成选项
 * @param option.race - 精灵种族
 * @param option.gender - 性别
 * @param option.prompt - 提示词（中英文均可，最长800字符）
 * @returns task_id - 任务ID，用于查询结果
 * @throws 当 API 请求失败或业务返回错误时抛出异常
 */
export async function createImgGenTask(option: {
	race: ElfRace;
	gender: ElfGender;
	prompt: string;
}): Promise<string> {
	// 请求参数，参考火山引擎文档：https://www.volcengine.com/docs/85621/1817045

	const host = 'visual.volcengineapi.com';
	const service = 'cv'; // 固定值
	const region = 'cn-north-1'; // 固定值
	const method = 'POST';
	const uri = '/';
	const queryString = 'Action=CVSync2AsyncSubmitTask&Version=2022-08-31';

	const date = new Date()
		.toISOString()
		.replace(/[-:]/g, '')
		.replace(/\.\d{3}/, '');

	// 请求 Body 参数
	const body = JSON.stringify({
		req_key: 'jimeng_t2i_v40',
		prompt: option.prompt,
		width: 1440,
		height: 2560,
		force_single: true
		// TODO: 添加其他必需参数
	});

	const headers = {
		Host: host,
		'Content-Type': 'application/json',
		'X-Date': date
	};

	const authorization = calculateVolcEngineSignature({
		method,
		host,
		uri,
		queryString,
		headers,
		body,
		accessKeyId: VOLC_ACCESS_KEY_ID,
		secretAccessKey: VOLC_SECRET_KEY,
		region,
		service,
		date
	});

	const url = `https://${host}${uri}?${queryString}`;

	const res = await fetch(url, {
		method,
		headers: {
			...headers,
			Authorization: authorization
		},
		body
	});

	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`火山引擎 API 请求失败，状态码：${res.status}，错误信息：${errorText}`);
	}

	const result = (await res.json()) as VolcJimengResponse;

	// 检查业务返回码
	if (result.code !== 10000) {
		throw new Error(
			`即梦 API 业务错误，code: ${result.code}, message: ${result.message}, request_id: ${result.request_id}`
		);
	}

	return result.data.task_id;
}

type TaskStatus = 'in_queue' | 'generating' | 'done' | 'not_found' | 'expired';

type QueryTaskResponse = {
	code: number;
	data: {
		binary_data_base64: string[] | null;
		image_urls: string[] | null;
		status: TaskStatus;
	};
	message: string;
	request_id: string;
	status: number;
	time_elapsed: string;
};

/**
 * 图像生成任务查询结果类型
 */
type TaskQueryResult =
	| {
			status: 'in_queue' | 'generating';
			message: string;
	  }
	| {
			status: 'done';
			/**
			 * 图像的url，和base64二进制数据二选一返回，需要通过数组长度进行判断
			 */
			imageUrls: string[];
			/**
			 * 图片的 base64二进制数据，和图像的url二选一返回，需要通过数组长度进行判断
			 */
			binaryDataBase64: string[];
	  }
	| {
			status: 'error';
			code: number;
			message: string;
	  };

/**
 * 查询即梦 4.0 图像生成任务状态（生成器函数）
 * @param taskId - 任务ID（由 createImgGenTask 返回）
 * @param options - 查询选项
 * @param options.returnUrl - 是否返回图片 URL（true 返回 URL，false 返回 base64 二进制数据）, 默认为 true
 * @param options.pollingInterval - 轮询间隔（毫秒），默认 3000ms
 * @param options.maxAttempts - 最大查询次数，默认 100 次（约 5 分钟）
 * @yields TaskQueryResult - 任务状态信息
 * @throws 当任务失败、超时或出现错误时抛出异常
 *
 * @example
 * ```typescript
 * const taskId = await createImgGenTask({ race: 'high-elf', gender: 'male', prompt: '...' });
 *
 * for await (const result of taskQuery(taskId)) {
 *   if (result.status === 'done') {
 *     console.log('图片生成完成:', result.image_urls);
 *     break;
 *   } else if (result.status === 'error') {
 *     console.error('任务失败:', result.message);
 *     break;
 *   } else {
 *     console.log('生成中...', result.message);
 *   }
 * }
 * ```
 */
export async function* taskQuery(
	taskId: string,
	options: {
		returnUrl: boolean;
		pollingInterval?: number;
		maxAttempts?: number;
	} = { returnUrl: true }
): AsyncGenerator<TaskQueryResult, void, unknown> {
	const { pollingInterval = 3000, maxAttempts = 100 } = options;

	const host = 'visual.volcengineapi.com';
	const service = 'cv';
	const region = 'cn-north-1';
	const method = 'POST';
	const uri = '/';
	const queryString = 'Action=CVSync2AsyncGetResult&Version=2022-08-31';

	let attempts = 0;

	while (attempts < maxAttempts) {
		attempts++;

		const date = new Date()
			.toISOString()
			.replace(/[-:]/g, '')
			.replace(/\.\d{3}/, '');

		// 请求 Body 参数
		const reqJson = {
			return_url: options.returnUrl // 返回图片 URL（24小时有效期）
		};

		const body = JSON.stringify({
			req_key: 'jimeng_t2i_v40',
			task_id: taskId,
			req_json: JSON.stringify(reqJson)
		});

		const headers = {
			Host: host,
			'Content-Type': 'application/json',
			'X-Date': date
		};

		const authorization = calculateVolcEngineSignature({
			method,
			host,
			uri,
			queryString,
			headers,
			body,
			accessKeyId: VOLC_ACCESS_KEY_ID,
			secretAccessKey: VOLC_SECRET_KEY,
			region,
			service,
			date
		});

		const url = `https://${host}${uri}?${queryString}`;

		const res = await fetch(url, {
			method,
			headers: {
				...headers,
				Authorization: authorization
			},
			body
		});

		if (!res.ok) {
			const errorText = await res.text();
			yield {
				status: 'error',
				code: res.status,
				message: `HTTP 请求失败：${res.status} - ${errorText}`
			};
			return;
		}

		const result = (await res.json()) as QueryTaskResponse;

		// 检查业务返回码
		if (result.code !== 10000) {
			yield {
				status: 'error',
				code: result.code,
				message: `业务错误 (code: ${result.code}): ${result.message}, request_id: ${result.request_id}`
			};
			return;
		}

		const taskStatus = result.data.status;

		// 根据任务状态决定下一步操作
		switch (taskStatus) {
			case 'in_queue':
				yield {
					status: 'in_queue',
					message: `任务排队中 (${attempts}/${maxAttempts})`
				};
				break;

			case 'generating':
				yield {
					status: 'generating',
					message: `图片生成中 (${attempts}/${maxAttempts})`
				};
				break;

			case 'done': {
				// 根据 req_json 配置，可能只返回 URL 或只返回 base64
				const hasImageUrls = result.data.image_urls && result.data.image_urls.length > 0;
				const hasBase64 =
					result.data.binary_data_base64 && result.data.binary_data_base64.length > 0;

				if (!hasImageUrls && !hasBase64) {
					yield {
						status: 'error',
						code: 50500,
						message: '任务完成但未返回任何图片数据'
					};
					return;
				}

				yield {
					status: 'done',
					imageUrls: result.data.image_urls || [],
					binaryDataBase64: result.data.binary_data_base64 || []
				};
				return;
			}

			case 'not_found':
				yield {
					status: 'error',
					code: 404,
					message: '任务未找到，可能已过期或不存在'
				};
				return;

			case 'expired':
				yield {
					status: 'error',
					code: 410,
					message: '任务已过期（超过12小时），请重新提交'
				};
				return;

			default:
				yield {
					status: 'error',
					code: 50500,
					message: `未知任务状态: ${taskStatus}`
				};
				return;
		}

		// 等待一段时间后继续轮询
		await new Promise((resolve) => setTimeout(resolve, pollingInterval));
	}

	// 达到最大查询次数
	yield {
		status: 'error',
		code: 408,
		message: `查询超时：已尝试 ${maxAttempts} 次，请稍后重试`
	};
}

/**
 * 完整的图像生成流程：提交任务 → 轮询状态 → 返回图片 URL
 * @param option - 生成选项
 * @param onProgress - 进度回调函数（可选）
 * @returns 图片 URL 数组
 * @throws 当任务失败或超时时抛出异常
 *
 * @example
 * ```typescript
 * const imageUrls = await generateElfImage(
 *   {
 *     race: 'high-elf',
 *     gender: 'male',
 *     prompt: '一个手持长剑的高等精灵战士'
 *   },
 *   (status, message) => {
 *     console.log(`[${status}] ${message}`);
 *   }
 * );
 * console.log('生成完成:', imageUrls);
 * ```
 */
export async function generateElfImage(option: {
	race: ElfRace;
	gender: ElfGender;
	prompt: string;
}): Promise<{
	imageUrls: string[];
	binaryDataBase64: string[];
}> {
	const { race, gender } = option;

	// 步骤 1：提交任务
	console.log(`race:${race},gender:${gender}-`, '正在提交图像生成任务...');
	const taskId = await createImgGenTask(option);
	console.log(`race:${race},gender:${gender}-`, `任务已提交，task_id: ${taskId}`);

	// 步骤 2：轮询任务状态
	for await (const result of taskQuery(taskId)) {
		if (result.status === 'done') {
			console.log(`race:${race},gender:${gender}-`, '图像生成完成！');
			return {
				imageUrls: result.imageUrls,
				binaryDataBase64: result.binaryDataBase64
			};
		} else if (result.status === 'error') {
			throw new Error(
				`race:${race},gender:${gender}-图像生成失败: ${result.message} (code: ${result.code})`
			);
		} else {
			console.log(`race:${race},gender:${gender}-`, result.status, result.message);
		}
	}

	throw new Error(`race:${race},gender:${gender}-未知错误：生成器异常退出`);
}
