// ISO 8601 格式：YYYYMMDD'T'HHMMSS'Z'
const t = new Date()
	.toISOString()
	.replace(/[-:]/g, '')
	.replace(/\.\d{3}/, '');
console.log(t); // 示例输出：20251105T062345Z
