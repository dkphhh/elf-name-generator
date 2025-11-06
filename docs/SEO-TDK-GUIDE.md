# SEO TDK 系统使用指南

## 概述

项目已经实现了完整的 SEO TDK（Title, Description, Keywords）管理系统，通过集中配置和 Svelte 组件复用，实现了高效的 SEO 优化。

## 文件结构

```
src/
├── lib/
│   ├── components/
│   │   └── SeoTDK.svelte           # TDK 组件
│   └── seo/
│       └── tdk-config.ts           # TDK 配置文件
└── routes/
    ├── +page.svelte                # 首页（使用默认 TDK）
    ├── about/+page.svelte          # About 页面
    ├── guide/+page.svelte          # Guide 页面
    ├── blog/+page.svelte           # Blog 页面
    └── generator/
        ├── +page.svelte            # 生成器索引页
        └── [page=generator]/
            └── +page.svelte        # 动态路由页面（种族/性别）
```

## TDK 组件使用

### 1. 基础用法（使用默认 TDK）

```svelte
<script>
	import SeoTDK from '$lib/components/SeoTDK.svelte';
</script>

<SeoTDK canonical="/" />
```

### 2. 自定义 TDK

```svelte
<script>
	import SeoTDK from '$lib/components/SeoTDK.svelte';
</script>

<SeoTDK
	title="Custom Page Title"
	description="Custom page description here"
	keywords={['keyword1', 'keyword2', 'keyword3']}
	canonical="/custom-page"
/>
```

### 3. 使用配置文件中的 TDK

```svelte
<script>
	import SeoTDK from '$lib/components/SeoTDK.svelte';
	import { PAGE_TDK } from '$lib/seo/tdk-config';
</script>

<SeoTDK
	title={PAGE_TDK.about.title}
	description={PAGE_TDK.about.description}
	keywords={PAGE_TDK.about.keywords}
	canonical="/about"
/>
```

## TDK 配置文件

### 位置

`src/lib/seo/tdk-config.ts`

### 配置类型

#### 1. 种族生成器 TDK

```typescript
export const RACE_GENERATOR_TDK: Record<ElfRace, {...}>
```

支持的种族：

- `high-elf` - 高等精灵
- `wood-elf` - 森林精灵
- `dark-elf` - 黑暗精灵
- `night-elf` - 暗夜精灵
- `blood-elf` - 血精灵
- `sun-elf` - 太阳精灵
- `moon-elf` - 月亮精灵
- `sea-elf` - 海洋精灵
- `snow-elf` - 雪精灵
- `wild-elf` - 野性精灵

#### 2. 性别生成器 TDK

```typescript
export const GENDER_GENERATOR_TDK: Record<ElfGender, {...}>
```

支持的性别：

- `male` - 男性
- `female` - 女性
- `neutral` - 中性

#### 3. 风格生成器 TDK

```typescript
export const STYLE_GENERATOR_TDK: Record<NameStyle, {...}>
```

支持的风格：

- `traditional` - 传统
- `fantasy` - 奇幻
- `dnd` - 龙与地下城
- `tolkien` - 托尔金风格
- `wow` - 魔兽世界
- `elder-scrolls` - 上古卷轴
- `modern` - 现代

#### 4. 其他页面 TDK

```typescript
export const PAGE_TDK = {
  guide: {...},
  about: {...},
  blog: {...}
}
```

## TDK 规则说明

### 标题（Title）规则

1. **默认标题**（首页）

   ```
   Elf Name Generator - Create Fantasy Elf Names Instantly
   ```

2. **子页面标题**（自动添加后缀）
   ```
   [自定义标题] | Elf Name Generator
   ```
   例如：`High Elf Name Generator - Noble & Elegant Names | Elf Name Generator`

### 描述（Description）规则

- 长度：150-160 字符
- 包含核心关键词
- 突出页面特点和价值
- 包含行动号召（CTA）

### 关键词（Keywords）规则

- 每页 5-7 个关键词
- 自定义关键词自动与默认关键词合并
- 自动去重

默认关键词：

```typescript
[
  'elf name generator',
  'fantasy name generator',
  'dnd elf names',
  'character name generator',
  'elf names',
  'd&d names',
  'fantasy character names'
]
```

### Canonical URL 规则

- 自动添加网站域名前缀
- 格式：`https://elfnamegenerator.com{path}`
- TODO：在 `SeoTDK.svelte` 中修改 `SITE_URL` 为实际域名

## 动态路由页面示例

`/generator/[page=generator]/+page.svelte` 使用动态 TDK：

```svelte
<script lang="ts">
	import { page } from '$app/stores';
	import SeoTDK from '$lib/components/SeoTDK.svelte';
	import { RACE_GENERATOR_TDK, GENDER_GENERATOR_TDK } from '$lib/seo/tdk-config';

	let pageParam = $derived($page.params.page);

	let tdkConfig = $derived.by(() => {
		if (pageParam in RACE_GENERATOR_TDK) {
			return RACE_GENERATOR_TDK[pageParam as ElfRace];
		} else if (pageParam in GENDER_GENERATOR_TDK) {
			return GENDER_GENERATOR_TDK[pageParam as ElfGender];
		}
		return null;
	});
</script>

{#if tdkConfig}
	<SeoTDK
		title={tdkConfig.title}
		description={tdkConfig.description}
		keywords={tdkConfig.keywords}
		canonical={`/generator/${pageParam}`}
	/>
{/if}
```

## Open Graph 和 Twitter Card

TDK 组件自动生成：

- Open Graph 标签（Facebook、LinkedIn）
- Twitter Card 标签
- 使用相同的 title 和 description
- TODO：添加 og:image 和 twitter:image

## 添加新页面 TDK

### 步骤 1：在配置文件中添加 TDK

编辑 `src/lib/seo/tdk-config.ts`：

```typescript
export const PAGE_TDK = {
  // ...existing pages
  newPage: {
    title: 'New Page Title',
    description: 'New page description here',
    keywords: ['keyword1', 'keyword2']
  }
};
```

### 步骤 2：在页面中使用

```svelte
<script>
	import SeoTDK from '$lib/components/SeoTDK.svelte';
	import { PAGE_TDK } from '$lib/seo/tdk-config';
</script>

<SeoTDK
	title={PAGE_TDK.newPage.title}
	description={PAGE_TDK.newPage.description}
	keywords={PAGE_TDK.newPage.keywords}
	canonical="/new-page"
/>
```

## SEO 最佳实践

### 1. 标题优化

- ✅ 保持在 50-60 字符
- ✅ 包含主要关键词
- ✅ 放置重要关键词在前面
- ✅ 每个页面使用唯一标题

### 2. 描述优化

- ✅ 保持在 150-160 字符
- ✅ 包含行动号召
- ✅ 自然融入关键词
- ✅ 准确描述页面内容

### 3. 关键词优化

- ✅ 使用长尾关键词
- ✅ 避免关键词堆砌
- ✅ 关注用户搜索意图
- ✅ 定期更新和优化

## TODO 列表

- [ ] 更新 `SeoTDK.svelte` 中的 `SITE_URL` 为实际域名
- [ ] 添加 og:image 和 twitter:image 支持
- [ ] 为博客文章创建动态 TDK 生成
- [ ] 添加结构化数据（JSON-LD）
- [ ] 实现多语言 TDK 支持
- [ ] 创建 TDK 测试工具

## 验证工具

推荐使用以下工具验证 SEO 设置：

- [Google Search Console](https://search.google.com/search-console)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Schema.org Validator](https://validator.schema.org/)
