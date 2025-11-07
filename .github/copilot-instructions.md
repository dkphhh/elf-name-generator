---
applyTo: '**'
---

# Elf Name Generator - AI Coding Instructions

## 项目架构

### 技术栈

- **框架**: SvelteKit (使用 Svelte 5 runes: `$state`, `$derived`, `$effect`, `$props`)
- **运行时**: Bun (开发、构建、生产环境)
- **样式**: Tailwind CSS 4 + daisyUI (通过 CSS `@plugin` 导入)
- **部署**：使用 Vercel 进行部署
- **数据监控**：Google Analytics 4、Microsoft Clarity、Vercel Web Analytics

## 开发约定

### Svelte 5 模式

- 使用 runes 管理状态：`let count = $state(0)` 替代 `let count = 0`
- 派生状态：`let doubled = $derived(count * 2)`
- Props：`let { propName } = $props()` 替代 `export let propName`
- **不要**在组件顶层 export 任何 `$state` 变量

### 类型定义

- 每个功能模块有独立的 `types.d.ts` 或 其他`**.d.ts` 文件
- 全局类型：`src/app.d.ts`
- 使用 JSDoc 中文注释描述复杂类型和函数

### TODO 注释

- 所有需要实现、未完成的功能，用 `TODO：`注明。例如:

```typescript

export async function generateName(options: GeneratorOptions): Promise<GeneratedName> {
    // TODO：实现名字生成算法
    return {
        name: "示例名字",
        pronunciationUrl: null,
    };
}


```

## 开发工作流

### 启动开发服务器

```bash
bun run dev  # 默认监听所有网络接口 (--host)
```

### 构建和部署

```bash
bun run build      # 构建到 build/ 目录
bun run production # 生产环境运行
./deploy.sh        # 自动 rsync 到服务器并重启 Docker 容器
```

### 代码检查

```bash
bun run lint   # ESLint
bun run check  # svelte-check
```
