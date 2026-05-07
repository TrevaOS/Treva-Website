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
  'Strategy': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'AI & Technology': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'SEO': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Web & Design': 'bg-[rgba(41,200,213,0.1)] text-[#29C8D5] border-[rgba(41,200,213,0.2)]',
};

const blogHref = (slug) => `/blog/${slug}`;
const blogExportHref = (slug, hash = '') => `/blog/${slug}.html${hash}`;

export default function Blog() {
  const [featured, ...rest] = blogPosts;
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
        title="Blog AI, Marketing & Technology Insights"
        description="Treva's blog covers the latest in AI marketing, GEO, performance marketing, web development, and digital strategy for modern brands in 2026."
        url="https://www.treva.in/blog"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#000000] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.06), transparent 70%)' }}
        />
         <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.1 }}
             className="font-black text-white mt-2 mb-6"
             style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
           >
             Insights for the <span className="teal-gradient-text">Bold Brand</span>
           </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-xl max-w-xl mx-auto">
            Where marketing intelligence meets practical strategy. No fluff, just ideas you can act on today.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Featured Post */}
          <FadeIn className="mb-12">
            <Link
              href={blogHref(featured.slug)}
              as={blogExportHref(featured.slug)}
              className="group block bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl overflow-hidden card-glow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-72 lg:h-auto bg-[#0D1117] relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#29C8D5] text-black text-xs font-700 px-3 py-1 rounded-full uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-600 px-3 py-1 rounded-full border ${tagColors[featured.tag]}`}>
                      {featured.tag}
                    </span>
                    <span className="text-[#8A9AB0] text-xs flex items-center gap-1">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span className="text-[#8A9AB0] text-xs">{featured.date}</span>
                  </div>
                  <h2 className="font-800 text-white text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#29C8D5] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[#29C8D5] text-sm font-600">
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
                  as={blogExportHref(slug)}
                  className="group block bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl overflow-hidden card-glow h-full"
                >
                  <div className="h-44 bg-[#0D1117] relative overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/45 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-600 px-2.5 py-1 rounded-full border ${tagColors[tag]}`}>
                        {tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#8A9AB0] text-xs flex items-center gap-1">
                        <Clock size={11} /> {readTime}
                      </span>
                      <span className="text-[#8A9AB0] text-xs">{date}</span>
                    </div>
                    <h3 className="font-700 text-white text-lg mb-3 leading-tight group-hover:text-[#29C8D5] transition-colors">
                      {title}
                    </h3>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[#29C8D5] text-xs font-600">
                      Read More <ArrowUpRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Search Section */}
      <section className="py-20 bg-[#080C10]">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl font-800 text-white">
              Explore All Blog FAQs
            </h2>
            <p className="mb-8 text-[#8A9AB0]">
              Search through all blog posts to find answers to common questions
            </p>
            
            {/* Search Pill */}
            <div className="mb-8 flex justify-center">
              <div className="relative max-w-lg w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A9AB0]" size={18} />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(event) => setFaqSearch(event.target.value)}
                  placeholder="Search all blog FAQs..."
                  className="w-full rounded-full border border-[rgba(41,200,213,0.2)] bg-[#080C10] py-3 pl-11 pr-5 text-white placeholder-[#8A9AB0] focus:border-[#29C8D5] focus:outline-none focus:ring-1 focus:ring-[#29C8D5] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredFaqs.map(({ question, answer, post }) => (
                <Link
                  key={`${post.slug}-${question}`}
                  href={`${blogHref(post.slug)}#faq`}
                  as={blogExportHref(post.slug, '#faq')}
                  className="group rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#000000] p-6 text-left card-glow transition-all hover:border-[rgba(41,200,213,0.2)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-600 text-[#29C8D5]">{post.tag}</span>
                    <span className="text-xs text-[#8A9AB0]">{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-700 leading-tight text-white transition-colors group-hover:text-[#29C8D5]">
                    {question}
                  </h3>
                  <p className="line-clamp-2 text-sm text-[#8A9AB0]">
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
