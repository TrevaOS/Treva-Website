import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, ArrowUpRight, Search } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import InternalTextLink from '../../components/InternalTextLink';
import { blogPosts, blogContent } from '../../data/blogData';
import { products } from '../../data/products';

const blogIndexHref = '/blog';
const blogHref = (slug) => `/blog/${slug}`;
const productHref = (product) => product.detailHref || product.ctaHref || `/products/${product.slug}`;

const serviceOptions = [
  {
    id: 'branding',
    name: 'Branding',
    url: '/services#branding',
    keywords: ['brand', 'branding', 'identity', 'trust', 'web3'],
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing',
    url: '/services#social-media-marketing',
    keywords: ['social media', 'content', 'creator', 'influencer', 'organic'],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    url: '/services#web-development',
    keywords: ['website', 'web development', 'web', 'geo', 'seo', 'conversational'],
  },
  {
    id: 'app-development',
    name: 'App Development',
    url: '/services#app-development',
    keywords: ['app', 'application', 'mobile', 'integration', 'api'],
  },
  {
    id: 'performance-marketing',
    name: 'Performance Marketing',
    url: '/services#performance-marketing',
    keywords: ['performance', 'ads', 'paid', 'campaign', 'roas', 'conversion', 'marketing'],
  },
];

const productKeywordMap = {
  'treva-crm': ['crm', 'customer', 'lead', 'sales', 'pipeline', 'follow-up'],
  'make-my-cake': ['cake', 'bakery', 'delivery', 'marketplace', 'artisan'],
  'treva-os': ['operating system', 'dashboard', 'analytics', 'campaign manager', 'brand health'],
  'treva-agent': ['ai', 'agent', 'autonomous', 'automation', 'lead qualification'],
  'creator-hub': ['creator', 'influencer', 'content', 'collaboration', 'monetize'],
};

function getArticleText(post, content) {
  return [
    post.title,
    post.excerpt,
    post.tag,
    content?.intro,
    ...(content?.sections || []).flatMap(({ heading, body }) => [heading, body]),
    ...(content?.faqs || []).flatMap(({ question, answer }) => [question, answer]),
  ].filter(Boolean).join(' ').toLowerCase();
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const content = blogContent[params.slug] || null;
  if (!post) return { notFound: true };
  return { props: { post, content } };
}

export default function BlogDetail({ post, content }) {
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const articleText = getArticleText(post, content);
  const relatedServices = serviceOptions
    .filter((service) => service.keywords.some((keyword) => articleText.includes(keyword)))
    .slice(0, 4);
  const relatedProducts = products
    .filter((product) => (productKeywordMap[product.slug] || []).some((keyword) => articleText.includes(keyword)))
    .slice(0, 3);

  const tagColors = {
    Strategy: 'bg-blue-50 text-blue-600 border-blue-100',
    'AI & Technology': 'bg-purple-50 text-purple-600 border-purple-100',
    Marketing: 'bg-orange-50 text-orange-600 border-orange-100',
    SEO: 'bg-green-50 text-green-600 border-green-100',
    'Web & Design': 'bg-[rgba(41,200,213,0.08)] text-[#1AA8B4] border-[rgba(41,200,213,0.2)]',
  };

  const [faqSearch, setFaqSearch] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(content?.faqs || []);
  const searchRef = useRef(null);

  useEffect(() => {
    setFilteredFaqs(
      (content?.faqs || []).filter((faq) =>
        faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
      )
    );
  }, [faqSearch, content]);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={`https://treva.in/blog/${post.slug}`}
        type="article"
      />

      <article className="bg-white pb-20 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div>
            <Link href={blogIndexHref} className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-700">
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tagColors[post.tag] || 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                {post.tag}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>

            <h1
              className="mb-6 font-black leading-tight text-gray-900"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-3 border-b border-gray-100 pb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(41,200,213,0.2)] bg-[rgba(41,200,213,0.08)]">
                <span className="text-sm font-bold text-[#29C8D5]">T</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Treva Team</p>
                <p className="text-xs text-gray-400">Published by Treva Digital Agency</p>
              </div>
            </div>
          </div>

          <div className="relative mb-10 h-64 overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 md:h-80">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="prose-treva">
            <p className="mb-8 border-l-4 border-[#29C8D5] pl-5 text-lg italic leading-relaxed text-gray-500">
              {content?.intro}
            </p>

            {content?.sections.map(({ heading, body }) => (
              <div key={heading} className="mb-8">
                <h2 className="mb-3 text-xl font-bold text-gray-900">{heading}</h2>
                <p className="text-base leading-relaxed text-gray-600">
                  <InternalTextLink text={body} />
                </p>
              </div>
            ))}

            {relatedServices.length > 0 && (
              <div className="mt-12 border-t border-gray-100 pt-8">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Relevant Treva Services</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedServices.map((svc) => (
                    <Link
                      key={svc.id}
                      href={svc.url}
                      className="rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.06)] px-4 py-1.5 text-sm font-medium text-[#1AA8B4] transition-colors hover:bg-[rgba(41,200,213,0.12)]"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Related Treva Products</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={productHref(p)}
                      className="rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.06)] px-4 py-1.5 text-sm font-medium text-[#1AA8B4] transition-colors hover:bg-[rgba(41,200,213,0.12)]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {content?.faqs && content.faqs.length > 0 && (
              <div id="faq" className="mt-12 scroll-mt-28 border-t border-gray-100 pt-12">
                <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h3>

                <div className="mb-8 flex justify-center">
                  <div className="relative max-w-lg w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search all FAQs..."
                      value={faqSearch}
                      onChange={(e) => setFaqSearch(e.target.value)}
                      className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-5 text-gray-900 placeholder-gray-400 focus:border-[#29C8D5] focus:outline-none focus:ring-1 focus:ring-[#29C8D5] transition-all"
                    />
                    {faqSearch && (
                      <button
                        onClick={() => setFaqSearch('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredFaqs.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">No FAQs match your search.</p>
                  ) : (
                    filteredFaqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
                      >
                        <h4 className="mb-2 text-gray-900 font-semibold text-base leading-relaxed">{faq.question}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">Want to Apply These Strategies?</h3>
              <p className="mb-6 text-sm text-gray-500">
                Book a free strategy call with the Treva team. We&apos;ll audit your current approach and show you exactly where the opportunities are.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Free Strategy Call
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">More from the Blog</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={blogHref(item.slug)}
                  className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#29C8D5]">{item.tag}</span>
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#29C8D5]">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-500">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
