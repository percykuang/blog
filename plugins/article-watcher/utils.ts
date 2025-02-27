import sortBy from 'lodash/sortBy';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 生成唯一且稳定的数据ID
function generateStableId(data: any): string {
  // 方法 1：使用 JSON.stringify 后取 hash
  const str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return String(Math.abs(hash));
}

// 处理标签行，将字符串形式的标签转换为数组
function parseTags(tagLine: string): string[] {
  // 假设标签行的格式为 @tag: [tag1, tag2, tag3]
  const match = tagLine.match(/@tag:\s*\[(.*)\]/);
  if (match && match[1]) {
    return match[1].split(',').map((tag) => tag.trim());
  }
  return []; // 返回空数组如果没有匹配
}

function countWords(content: string): number {
  // 移除 markdown 语法标记
  const cleanText = content
    .replace(/```[\s\S]*?```/g, '') // 代码块
    .replace(/`.*?`/g, '') // 行内代码
    .replace(/\[.*?\]\(.*?\)/g, '') // 链接
    .replace(/[#*_~`]/g, '') // 其他 markdown 标记
    .trim();

  // 计算中文字符和英文单词
  const chineseChars = (cleanText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = cleanText.match(/[a-zA-Z]+/g)?.length || 0;

  return chineseChars + englishWords;
}

// 生成文章列表的函数
export function generateArticleList() {
  const articlesDir = join(process.cwd(), 'articles');
  if (!existsSync(articlesDir)) {
    mkdirSync(articlesDir, { recursive: true });
  }

  const articles = readdirSync(articlesDir).map((fileName) => {
    const content = readFileSync(join(articlesDir, fileName), 'utf-8');
    const lines = content.split('\n');
    const date = lines[0].replace('@date: ', '');
    const tagLine = lines[1];
    const tags = parseTags(tagLine);
    const fileContent = lines.slice(2).join('\n');

    const wordCount = countWords(fileContent);

    const data = {
      title: fileName.replace('.md', ''),
      date,
      tags,
      fileName,
      content: fileContent,
      wordCount,
    };

    return {
      id: generateStableId(data),
      ...data,
    };
  });

  // 对文章列表根据最新日期进行排序
  const sortedArticles = sortBy(articles, (article) => new Date(article.date).getTime()).reverse();

  writeFileSync(join(process.cwd(), 'src', 'articles.json'), JSON.stringify(sortedArticles, null, 2));
}
