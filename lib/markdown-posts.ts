import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import products from '@/content/products.json';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface PostMeta {
  title: string;
  description: string;
  keywords: string[];
  featuredImage?: string;
  products: string[];
  author?: string;
  updatedDate?: string;
  readTime?: number;
}

export interface MarkdownPost {
  slug: string;
  content: string;
  meta: PostMeta;
}

export async function getPostBySlug(slug: string): Promise<MarkdownPost | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    // Process markdown to HTML with product linking
    const processedContent = await processMarkdownContent(content, data.products || []);

    return {
      slug,
      content: processedContent,
      meta: data as PostMeta,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

async function processMarkdownContent(content: string, productIds: string[]): Promise<string> {
  // First, inject product links into content
  let processed = content;

  productIds.forEach(productId => {
    const product = products.products.find(p => p.id === productId);
    if (!product) return;

    // Create link HTML
    const link = `<a href="https://amazon.com/dp/${product.asin}?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=${productId}" style="color: var(--ember); font-weight: 600; text-decoration: none; border-bottom: 1px solid var(--ember);">${product.name}</a>`;

    // Replace product mentions (avoid double-linking)
    const regex = new RegExp(`(?<!<a[^>]*>)\\b${product.name.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b(?!</a>)`, 'g');
    processed = processed.replace(regex, link);
  });

  // Convert markdown to HTML
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, {
      sanitize: false,
      allowDangerousHtml: true,
    })
    .process(processed);

  return result.toString();
}

export function getProductsForPost(productIds: string[]) {
  return productIds
    .map(id => products.products.find(p => p.id === id))
    .filter(Boolean);
}
