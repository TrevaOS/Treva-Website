import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Clock, Search } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { blogContent, blogPosts } from '../../data/blogData';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}>{children}</motion.div>
  );
}

const tagColors = {
  'Strategy': 'bg-blue-50 text-blue-600 border-blue-100',
  'AI & Technology': 'bg-purple-50 text-purple-600 border-purple-100',
  'Marketing': 'bg-orange-50 text-orange-600 border-orange-100',
  'SEO': 'bg-green-50 text-green-600 border-green-100',
  'Web & Design': 'bg-[rgba(41,200,213,0.08)] text-[#1AA8B4] border-[rgba(41,200,213,0.2)]',
};

const blogHref = (slug) => `/blog/${slug}`;

const categories = ['All', ...Object.keys(
  blogPosts.reduce((acc, post) => {
    acc[post.tag] = true;
    return acc;
  }, {})
)];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categoryCounts = useMemo(() => {
    const counts = { All: blogPosts.length };
    categories.slice(1).forEach((tag) => {
      counts[tag] = blogPosts.filter((post) => post.tag === tag).length;
    });
    return counts;
  }, []);
  const visiblePosts = useMemo(() => (
    activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.tag === activeCategory)
  ), [activeCategory]);
  const [featured, ...rest] = visiblePosts;
  const [faqSearch, setFaqSearch] = useState('');
  const blogFaqs = useMemo(() => blogPosts.flatMap((post) =>
    (blogContent[post.slug]?.faqs || []).map((faq) => ({ ...faq, post }))
  ), []);
  const filteredFaqs = useMemo(() => {
    const search = faqSearch.trim().toLowerCase();
    const results = search
      ? blogFaqs.filter(({ question, answer, post }) =>
          question.toLowerCase().includes(search) ||
          answer.toLowerCase().includes(search) ||
          post.title.toLowerCase().includes(search) ||
          post.tag.toLowerCase().includes(search)
        )
      : blogFaqs;
    return results.slice(0, 6);
  }, [blogFaqs, faqSearch]);

  return (
    <>
      <SEOHead
        title="Digital Marketing Blog | Strategy, SEO, Google Ads & Social Media | Treva"
        description="Treva's blog delivers expert insights on digital marketing, social media strategy, SEO, Google Ads, performance marketing, branding, and AI for modern brands in 2026."
        url="https://www.treva.in/blog"
        keywords="digital marketing blog, social media marketing strategy, SEO tips, Google Ads guide, performance marketing insights, branding strategy, content marketing, digital marketing 2026, online marketing tips"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.05), transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-gray-900 mt-2 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Insights for the <span className="teal-gradient-text">Bold Brand</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl max-w-xl mx-auto">
            Where marketing intelligence meets practical strategy. No fluff, just ideas you can act on today.
          </motion.p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Category Filter */}
          <FadeIn className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'border-[#29C8D5] bg-[#29C8D5] text-white'
                    : 'border-gray-200 bg-white text-gray-500 hover:border-[#29C8D5]/50 hover:text-[#29C8D5]'
                }`}
              >
                {category} <span className="opacity-70">({categoryCounts[category]})</span>
              </button>
            ))}
          </FadeIn>

          {visiblePosts.length === 0 ? (
            <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center text-gray-400 shadow-sm">
              No posts in this category yet.
            </div>
          ) : (
          <>
          {/* Featured Post */}
          <FadeIn className="mb-12">
            <Link
              href={blogHref(featured.slug)}
              className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-72 lg:h-auto bg-gray-100 relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#29C8D5] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColors[featured.tag] || 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                      {featured.tag}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span className="text-gray-400 text-xs">{featured.date}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#29C8D5] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[#29C8D5] text-sm font-semibold">
                    Read Article <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {rest.map(({ slug, tag, title, excerpt, readTime, date, image }, i) => (
              <FadeIn key={slug} delay={i * 0.08}>
                <Link
                  href={blogHref(slug)}
                  className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <div className="h-44 bg-gray-100 relative overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[tag] || 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                        {tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={11} /> {readTime}
                      </span>
                      <span className="text-gray-400 text-xs">{date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight group-hover:text-[#29C8D5] transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[#29C8D5] text-xs font-semibold">
                      Read More <ArrowUpRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          </>
          )}
        </div>
      </section>

      {/* FAQ Search */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Explore All Blog FAQs
            </h2>
            <p className="mb-8 text-gray-500">
              Search through all blog posts to find answers to common questions
            </p>

            <div className="mb-8 flex justify-center">
              <div className="relative max-w-lg w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(event) => setFaqSearch(event.target.value)}
                  placeholder="Search all blog FAQs..."
                  className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-5 text-gray-900 placeholder-gray-400 focus:border-[#29C8D5] focus:outline-none focus:ring-1 focus:ring-[#29C8D5] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredFaqs.map(({ question, answer, post }) => (
                <Link
                  key={`${post.slug}-${question}`}
                  href={`${blogHref(post.slug)}#faq`}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 text-left shadow-sm hover:shadow-md hover:border-[rgba(41,200,213,0.3)] transition-all"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#29C8D5]">{post.tag}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-base font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#29C8D5]">
                    {question}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    {answer.substring(0, 140)}...
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-[#29C8D5] opacity-0 transition-opacity group-hover:opacity-100">
                    View FAQs <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
