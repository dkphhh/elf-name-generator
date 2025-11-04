declare global {
  /**
   * 通知消息对象的接口描述。
   *
   * 表示用于在应用中展示短时通知（如 toast、snackbar 等）的数据结构，
   * 包含渲染通知所需的基本信息和可选设置。
   *
   * @remarks
   * - 用于在 UI 中统一描述一条通知的内容、样式语义、可见性及持续时间。
   *
   * @property message - 要显示的文本消息内容。
   * @property type - 通知类型，可选值："info" | "success" | "error" | "warning"，用于决定展示样式或语义。
   * @property visible - 当前通知是否可见；true 表示应显示，false 表示应隐藏。
   * @property duration - 可选，通知显示的持续时间，单位为毫秒（ms）。未指定时由调用方或框架决定默认行为（例如永久显示或使用全局默认值）。
   */
  interface NotificationMessage {
    message: string[];
    type?: "info" | "success" | "error" | "warning";
    visible: boolean;
    duration?: number; // in ms
  }

  /**
   * 表示用于创建或发送新通知的消息类型，包含 NotificationMessage 的所有字段，但移除了 "visible" 字段。
   *
   * 用途：
   * - 当通知的可见性由外部控制（例如 UI 状态、通知管理器或调度逻辑）时使用此类型。
   * - 避免在创建时显式设置可见性，由接收方根据上下文决定何时展示通知。
   *
   * 关系：
   * - 基于 NotificationMessage，但省略了 "visible" 属性（等同于 Omit<NotificationMessage, "visible">）。
   *
   * 示例：
   * const msg: NewNotificationMessage = {
   *   title: "操作成功",
   *   body: "您的文件已上传完成",
   *   level: "info"
   * };
   *
   * 备注：
   * - 如果需要在创建时就确定可见性，请使用原始的 NotificationMessage 或在通知创建后由管理器附加可见性信息。
   *
   * @see NotificationMessage
   */
  type NewNotificationMessage = Omit<NotificationMessage, "visible">;
}

export {};
