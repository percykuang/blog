export interface Article {
  id: string;
  title: string; // 从文件名获取
  date: string; // 从文件内容第一行获取
  tags: string[]; // 从文件内容第二行获取
  content: string; // 文件内容（除了第一行、第二行）
  fileName: string; // 原始文件名
  wordCount: number; // 内容字数
}
