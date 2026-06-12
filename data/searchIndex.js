import { products } from './products';
import { blogPosts } from './blogData';

// Services are kept in sync with pages/services.jsx
export const searchServices = [
  {
    id: 'branding',
    title: 'Branding',
    label: 'Brand Identity Agency',
    desc: 'End-to-end brand identity services including logo design, brand style guides, and comprehensive brand strategy for startups and enterprises.',
    href: '/services#branding',
    icon: 'Palette',
    color: '#EC4899',
    keywords: 'branding logo design brand identity style guide brand voice business card',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    label: 'Social Media Marketing Agency',
    desc: 'Organic growth across Instagram, LinkedIn, and Facebook with content strategy, social media management, paid social ads, and monthly reporting.',
    href: '/services#social-media-marketing',
    icon: 'Megaphone',
    color: '#29C8D5',
    keywords: 'social media marketing instagram facebook linkedin content calendar reels paid social',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    label: 'Website Development Company',
    desc: 'SEO-ready websites built with Next.js / React, mobile-first responsive design, and Core Web Vitals optimisation that rank and convert.',
    href: '/services#web-development',
    icon: 'Globe',
    color: '#3B82F6',
    keywords: 'web development website design nextjs react seo core web vitals landing page',
  },
  {
    id: 'app-development',
    title: 'App Development',
    label: 'Mobile App Development',
    desc: 'iOS & Android app development with React Native / Flutter, UI/UX design, backend API integration, and App Store / Play Store support.',
    href: '/services#app-development',
    icon: 'Smartphone',
    color: '#22C55E',
    keywords: 'app development mobile ios android react native flutter app store play store',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    label: 'Performance Marketing Agency',
    desc: 'Google Ads, Performance Max, Shopping campaigns, and Meta Ads with conversion tracking, optimisation, and ROAS reporting.',
    href: '/services#performance-marketing',
    icon: 'LineChart',
    color: '#F59E0B',
    keywords: 'performance marketing google ads ppc meta ads paid media roas conversion tracking',
  },
];

export const searchProducts = products.map((product) => ({
  id: product.slug,
  title: product.name,
  label: product.tagline,
  desc: product.desc,
  href: product.ctaHref || `/products/${product.slug}`,
  status: product.status,
  image: product.image,
  imageClassName: product.imageClassName,
  color: product.color,
  keywords: `${product.name} ${product.tagline} ${product.features?.join(' ') || ''}`,
}));

export const searchBlogPosts = blogPosts.map((post) => ({
  id: post.slug,
  title: post.title,
  label: post.tag,
  desc: post.excerpt,
  href: `/blog/${post.slug}`,
  date: post.date,
  readTime: post.readTime,
  image: post.image,
  featured: post.featured,
  keywords: `${post.title} ${post.tag} ${post.excerpt}`,
}));

function normalize(value) {
  return (value || '').toString().toLowerCase();
}

function scoreMatch(item, terms) {
  const haystack = normalize(`${item.title} ${item.label} ${item.desc} ${item.keywords}`);
  let score = 0;
  for (const term of terms) {
    if (!term) continue;
    if (normalize(item.title).includes(term)) score += 3;
    if (haystack.includes(term)) score += 1;
  }
  return score;
}

export function getDefaultContent() {
  const featuredBlogPosts = searchBlogPosts.filter((post) => post.featured);
  const recentBlogPosts = searchBlogPosts.slice(0, 3);

  return {
    services: searchServices.map((item) => ({ ...item, type: 'service' })),
    products: searchProducts.slice(0, 3).map((item) => ({ ...item, type: 'product' })),
    blogPosts: (featuredBlogPosts.length ? featuredBlogPosts : recentBlogPosts)
      .concat(recentBlogPosts)
      .filter((post, index, all) => all.findIndex((p) => p.id === post.id) === index)
      .slice(0, 3)
      .map((item) => ({ ...item, type: 'blog' })),
  };
}

export function searchAll(query) {
  const normalized = normalize(query).trim();
  if (!normalized) {
    return { services: [], products: [], blogPosts: [] };
  }

  const terms = normalized.split(/\s+/).filter(Boolean);

  const rank = (items, type) =>
    items
      .map((item) => ({ ...item, type, score: scoreMatch(item, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

  return {
    services: rank(searchServices, 'service'),
    products: rank(searchProducts, 'product'),
    blogPosts: rank(searchBlogPosts, 'blog'),
  };
}
