import { describe, it, expect } from 'vitest';
import { generateElfName } from './generator';

describe('generateElfName', () => {
	it('应该生成指定数量的名字', () => {
		const names = generateElfName({ count: 6, includeLastName: true });
		expect(names).toHaveLength(6);
	});

	it('性能测试：生成 100 个名字应在 10ms 内完成', () => {
		const start = performance.now();
		generateElfName({ count: 100, includeLastName: true });
		const duration = performance.now() - start;

		console.log(`生成 100 个名字耗时: ${duration.toFixed(2)}ms`);
		expect(duration).toBeLessThan(10); // 应该很快
	});
});
