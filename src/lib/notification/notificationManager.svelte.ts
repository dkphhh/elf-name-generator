import { updated } from '$app/state';

/**
 * 通知管理器类。
 *
 * @class NotificationManager
 * @implements {NotificationMessage}
 *
 * 该类负责在应用程序中管理和显示通知消息。
 * 它使用 Svelte 5 的 runes (`$state`, `$effect`) 来实现响应式状态管理。
 *
 * @property {string} message - 通知的文本内容。
 * @property {"info" | "success" | "error" | "warning"} type - 通知的类型，默认为 "info"。
 * @property {boolean} visible - 控制通知的可见性。
 * @property {number} duration - 通知显示的持续时间（以毫秒为单位），默认为 3000ms。
 */
class NotificationManager implements NotificationMessage {
	message: string[] = $state([]);
	type: 'info' | 'success' | 'error' | 'warning' = $state('info');
	visible: boolean = $state(false);
	duration: number = $state(3000); // in ms

	/**
	 * @constructor
	 * 初始化 NotificationManager 实例。
	 * 构造函数内使用 `$effect.root` 和 `$effect` 创建了响应式副作用，
	 * 当检测到应用版本更新或页面导航时，会自动触发相应的通知。
	 */
	constructor() {
		$effect.root(() => {
			$effect(() => {
				if (updated.current) {
					this.sentMessage({ message: ['有版本更新，请刷新页面'] });
				}
			});
		});
	}
	/**
	 * 发送并显示一条新的通知。
	 *
	 * @method sentMessage
	 * @param {NewNotificationMessage} newMessage - 包含新通知信息的对象。
	 * @property {string[]} newMessage.message - 新通知的文本内容。
	 * @property {"info" | "success" | "error" | "warning"} [newMessage.type] - (可选) 新通知的类型。
	 * @property {number} [newMessage.duration] - (可选) 新通知的显示时长，单位：毫秒，1秒=1000毫秒。
	 */
	sentMessage(newMessage: NewNotificationMessage) {
		this.message = newMessage.message;
		if (newMessage.type) this.type = newMessage.type;
		if (newMessage.duration) this.duration = newMessage.duration;
		this.visible = true;

		// 自动关闭通知
		setTimeout(() => {
			this.closeMessage();
		}, this.duration);
	}
	/**
	 * 关闭当前显示的通知。
	 *
	 * @method closeMessage
	 * 该方法会将通知设置为不可见，并重置其图标、消息和类型状态。
	 */
	closeMessage() {
		this.visible = false;
		this.message = [];
		this.type = 'info';
	}
}

export const notificationManager = new NotificationManager();
