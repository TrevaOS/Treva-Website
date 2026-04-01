import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

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

export const blogPosts = [
  {
    slug: 'seo-to-geo-search-strategy-2026',
    tag: 'Strategy',
    title: 'From SEO to GEO: Why Your Search Strategy is Obsolete in 2026',
    excerpt: 'The race to #1 on Google is over. In 2026, brands must own AI-generated answers not just blue links. Here\'s how Treva is helping clients become the source AI trusts.',
    readTime: '6 min read',
    date: 'Mar 5, 2026',
    featured: true,
  },
  {
    slug: 'agentic-ai-autonomous-marketing-teams',
    tag: 'AI & Technology',
    title: 'Agentic AI: Moving from Content Tools to Autonomous Marketing Teams',
    excerpt: 'Forget using AI to write. In 2026, AI executes entire campaigns. Learn how agentic systems are replacing repetitive marketing tasks and giving human teams back their most valuable resource: time.',
    readTime: '7 min read',
    date: 'Feb 20, 2026',
    featured: false,
  },
  {
    slug: 'privacy-first-personalization-paradox',
    tag: 'Marketing',
    title: 'The Privacy-First Personalization Paradox: High Conversion Without the Creep',
    excerpt: 'Third-party cookies are dead. Privacy laws are stricter. Yet users demand personalization. At Treva, we solve this with Zero-Party Data strategies that build trust and drive conversions simultaneously.',
    readTime: '5 min read',
    date: 'Feb 8, 2026',
    featured: false,
  },
  {
    slug: 'surviving-zero-click-apocalypse',
    tag: 'SEO',
    title: 'Surviving the Zero-Click Apocalypse: Building Authority in the Snippet Era',
    excerpt: '65% of searches end without a click. Google has become an answer engine. Discover how Treva\'s "Brand Impression Strategy" ensures your brand wins visibility even when users never visit your site.',
    readTime: '6 min read',
    date: 'Jan 25, 2026',
    featured: false,
  },
  {
    slug: 'conversational-everything-next-website-dialogue',
    tag: 'Web & Design',
    title: 'Conversational Everything: Why Your Next Website Will Be a Dialogue',
    excerpt: 'The static brochure website is dying. In 2026, top-performing sites ask questions, adapt in real-time, and guide visitors like a personal consultant. Treva is building the next generation of conversational web experiences.',
    readTime: '5 min read',
    date: 'Jan 12, 2026',
    featured: false,
  },
];

const tagColors = {
  'Strategy': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'AI & Technology': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'SEO': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Web & Design': 'bg-[rgba(41,200,213,0.1)] text-[#29C8D5] border-[rgba(41,200,213,0.2)]',
};

export default function Blog() {
  const [featured, ...rest] = blogPosts;

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
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-pill">
            The Treva Blog
          </motion.span>
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
              href={`/blog/${featured.slug}`}
              className="group block bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl overflow-hidden card-glow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-72 lg:h-auto bg-[#0D1117] relative flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 group-hover:opacity-80 transition-opacity"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.15), transparent 70%)' }}
                  />
                  <span className="relative text-[7rem] font-black text-[rgba(41,200,213,0.06)] select-none">AI</span>
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
            {rest.map(({ slug, tag, title, excerpt, readTime, date }, i) => (
              <FadeIn key={slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${slug}`}
                  className="group block bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl overflow-hidden card-glow h-full"
                >
                  <div className="h-44 bg-[#0D1117] relative flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 group-hover:opacity-80 transition-opacity"
                      style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.08), transparent 70%)' }}
                    />
                    <span className="relative text-[4rem] font-black text-[rgba(41,200,213,0.05)] select-none">
                      {tag.split(' ')[0]}
                    </span>
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
    </>
  );
}
