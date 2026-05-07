import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ArrowUpRight, Search } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import InternalTextLink from '../../components/InternalTextLink';
import { blogPosts, blogContent } from '../../data/blogData';
import { products } from '../../data/products';

const blogIndexHref = '/blog';
const blogHref = (slug) => `/blog/${slug}`;
const blogExportHref = (slug) => `/blog/${slug}.html`;
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
    Strategy: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'AI & Technology': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Marketing: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    SEO: 'bg-green-500/10 text-green-400 border-green-500/20',
    'Web & Design': 'bg-[rgba(41,200,213,0.1)] text-[#29C8D5] border-[rgba(41,200,213,0.2)]',
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

      <article className="bg-[#000000] pb-20 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href={blogIndexHref} as="/blog.html" className="mb-8 inline-flex items-center gap-2 text-sm text-[#8A9AB0] transition-colors hover:text-white">
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-600 ${tagColors[post.tag]}`}>
                {post.tag}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#8A9AB0]">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-xs text-[#8A9AB0]">{post.date}</span>
            </div>

            <h1
              className="mb-6 font-black leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-3 border-b border-[rgba(41,200,213,0.1)] pb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(41,200,213,0.2)] bg-[rgba(41,200,213,0.1)]">
                <span className="text-sm font-700 text-[#29C8D5]">T</span>
              </div>
              <div>
                <p className="text-sm font-600 text-white">Treva Team</p>
                <p className="text-xs text-[#8A9AB0]">Published by Treva Digital Agency</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mb-10 h-64 overflow-hidden rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] md:h-80"
          >
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/35 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose-treva"
          >
            <p className="mb-8 border-l-2 border-[#29C8D5] pl-5 text-lg italic leading-relaxed text-[#8A9AB0]">
              {content?.intro}
            </p>

            {content?.sections.map(({ heading, body }) => (
              <div key={heading} className="mb-8">
                <h2 className="mb-3 text-xl font-800 text-white">{heading}</h2>
                <p className="text-base leading-relaxed text-[#8A9AB0]">
                  <InternalTextLink text={body} />
                </p>
              </div>
            ))}

            {relatedServices.length > 0 && (
              <div className="mt-12 border-t border-[rgba(41,200,213,0.1)] pt-8">
                <h3 className="mb-4 text-lg font-700 text-white">Relevant Treva Services</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedServices.map((svc) => (
                    <Link
                      key={svc.id}
                      href={svc.url}
                      className="rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.05)] px-4 py-1.5 text-sm text-[#29C8D5] transition-colors hover:bg-[rgba(41,200,213,0.1)]"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Product Mapping Section */}
            {relatedProducts.length > 0 && (
              <div className="mt-8 border-t border-[rgba(41,200,213,0.1)] pt-8">
                <h3 className="mb-4 text-lg font-700 text-white">Related Treva Products</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={productHref(p)}
                      className="rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.05)] px-4 py-1.5 text-sm text-[#29C8D5] transition-colors hover:bg-[rgba(41,200,213,0.1)]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section with Search Pill */}
            {content?.faqs && content.faqs.length > 0 && (
              <div id="faq" className="mt-12 scroll-mt-28 border-t border-[rgba(41,200,213,0.2)] pt-12">
                <h3 className="mb-6 text-center text-2xl font-800 text-white">
                  Frequently Asked Questions
                </h3>
                
                {/* Search Pill */}
                <div className="mb-8 flex justify-center">
                  <div className="relative max-w-lg w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A9AB0]" size={18} />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search all FAQs..."
                      value={faqSearch}
                      onChange={(e) => setFaqSearch(e.target.value)}
                      className="w-full rounded-full border border-[rgba(41,200,213,0.2)] bg-[#080C10] py-3 pl-11 pr-5 text-white placeholder-[#8A9AB0] focus:border-[#29C8D5] focus:outline-none focus:ring-1 focus:ring-[#29C8D5] transition-all"
                    />
                    {faqSearch && (
                      <button
                        onClick={() => setFaqSearch('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9AB0] hover:text-white"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredFaqs.length === 0 ? (
                    <p className="text-center text-[#8A9AB0] py-8">No FAQs match your search.</p>
                  ) : (
                    filteredFaqs.map((faq, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] p-6 card-glow hover:border-[rgba(41,200,213,0.2)] transition-colors"
                      >
                        <h4 className="mb-2 text-white font-600 text-base leading-relaxed">{faq.question}</h4>
                        <p className="text-[#8A9AB0] text-sm leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            )}

            <div
              className="mt-12 rounded-2xl border border-[rgba(41,200,213,0.2)] p-8 text-center"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.05), transparent), #080C10' }}
            >
              <h3 className="mb-2 text-xl font-800 text-white">Want to Apply These Strategies?</h3>
              <p className="mb-6 text-sm text-[#8A9AB0]">
                Book a free strategy call with the Treva team. We&apos;ll audit your current approach and show you exactly where the opportunities are.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Free Strategy Call
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-[rgba(41,200,213,0.08)] bg-[#080C10] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-800 text-white">More from the Blog</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={blogHref(item.slug)}
                  as={blogExportHref(item.slug)}
                  className="group block rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#000000] p-6 card-glow"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-600 text-[#29C8D5]">{item.tag}</span>
                    <span className="text-xs text-[#8A9AB0]">{item.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-700 leading-tight text-white transition-colors group-hover:text-[#29C8D5]">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-[#8A9AB0]">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
