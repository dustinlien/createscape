import fs from 'fs';
import path from 'path';
import products from '@/content/products.json';

export interface PostFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  featuredImage?: string;
  products: string[]; // product IDs
  author?: string;
  updatedDate?: string;
  readTime?: number;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export function getProducts() {
  return products.products;
}

export function getProductById(id: string) {
  return products.products.find(p => p.id === id);
}

export function getProductsByCategory(category: string) {
  return products.products.filter(p => p.category === category);
}

export function buildAffiliateUrl(asin: string, source: string = 'blog') {
  return `https://amazon.com/dp/${asin}?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=${source}`;
}

export function processPostContent(content: string, productIds: string[]): string {
  let processed = content;

  // Replace product mentions with links
  productIds.forEach(productId => {
    const product = getProductById(productId);
    if (!product) return;

    // Replace product name with link (avoid linking if already in a link)
    const regex = new RegExp(`(?<!<a[^>]*>)\\b${product.name.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b(?!</a>)`, 'g');
    processed = processed.replace(regex, `<a href="${buildAffiliateUrl(product.asin.toString(), productId)}" style="color: var(--ember); font-weight: 600; text-decoration: none;">${product.name}</a>`);
  });

  return processed;
}
