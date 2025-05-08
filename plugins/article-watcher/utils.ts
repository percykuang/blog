import sortBy from 'lodash/sortBy';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 用于缓存文件修改时间和解析后的文章
interface FileCache {
  mtime: number;
  article: any;
}

const fileCache: Record<string, FileCache> = {};

// 生成唯一且稳定的数据ID - 使用更高效的哈希算法
function generateStableId(data: any): string {
  const str = JSON.stringify(data);
  return createHash('md5').update(str).digest('hex').substring(0, 8);
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
  // 移除 markdown 语法标记 - 使用更高效的正则表达式
  const cleanText = content
    .replace(/```[\s\S]*?```/g, '') // 代码块
    .replace(/`[^`]*`/g, '') // 行内代码 - 优化正则
    .replace(/\[[^\]]*\]\([^)]*\)/g, '') // 链接 - 优化正则
    .replace(/[#*_~`]/g, '') // 其他 markdown 标记
    .trim();

  // 计算中文字符和英文单词 - 合并为一次正则匹配
  const chineseChars = (cleanText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (cleanText.match(/[a-zA-Z]+/g) || []).length;

  return chineseChars + englishWords;
}

// 解析单个文章文件
function parseArticleFile(filePath: string, fileName: string): any {
  const stats = statSync(filePath);
  const mtime = stats.mtimeMs;

  // 检查缓存
  if (fileCache[filePath] && fileCache[filePath].mtime === mtime) {
    return fileCache[filePath].article;
  }

  // 解析文件内容
  const content = readFileSync(filePath, 'utf-8');
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

  const article = {
    id: generateStableId(data),
    ...data,
  };

  // 更新缓存
  fileCache[filePath] = { mtime, article };

  return article;
}

// 生成文章列表的函数
export function generateArticleList() {
  const articlesDir = join(process.cwd(), 'articles');
  if (!existsSync(articlesDir)) {
    mkdirSync(articlesDir, { recursive: true });
  }

  // 读取现有的文章列表（如果存在）
  const articlesJsonPath = join(process.cwd(), 'src', 'articles.json');
  let existingArticles: any[] = [];
  if (existsSync(articlesJsonPath)) {
    try {
      existingArticles = JSON.parse(readFileSync(articlesJsonPath, 'utf-8'));
    } catch (e) {
      console.warn('解析现有的 articles.json 失败，正在重新生成所有文章');
    }
  }

  // 注意：这里我们可以使用现有文章列表进行优化，但目前暂未实现
  // 未来可以通过比较现有文章和新文章来减少处理

  const articles = readdirSync(articlesDir)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = join(articlesDir, fileName);
      return parseArticleFile(filePath, fileName);
    });

  // 对文章列表根据最新日期进行排序
  const sortedArticles = sortBy(articles, (article) => new Date(article.date).getTime()).reverse();

  writeFileSync(articlesJsonPath, JSON.stringify(sortedArticles, null, 2));
}
