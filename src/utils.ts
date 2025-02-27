// 添加 HTML 转义函数
export function tagPurify(content: string): string {
  return content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
