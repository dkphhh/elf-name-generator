/**
 * 博客文章元数据
 */
export interface BlogPost extends BlogFrontmatter {
	/** 文章唯一标识（文件名） */
	slug: string;

	/** Markdown 内容 */
	content: string;
}

/**
 * 博客文章 Frontmatter（YAML 头部）
 */
export interface BlogFrontmatter {
	/** 文章标题 */
	title: string;
	/** 文章描述/摘要 */
	description: string;
	/** 发布日期 */
	date: string;
	/** 作者 */
	author: string;
	/** 标签 */
	tags: string[];
}
