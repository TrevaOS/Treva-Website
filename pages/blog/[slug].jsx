<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { blogPosts, blogContent } from '../../data/blogData';
=======
import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, ArrowUpRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { blogPosts } from './index';

// Full blog content keyed by slug
const blogContent = {
  'seo-to-geo-search-strategy-2026': {
    intro: 'For two decades, digital marketing was a race to the #1 spot on Google\'s "Blue Links." But in 2026, the landscape has fractured. Users are no longer just searching they are conversing with AI engines like Gemini, Perplexity, and ChatGPT. Generative Engine Optimization (GEO) is the new frontier.',
    sections: [
      {
        heading: 'The Shift from Rankings to Citations',
        body: 'It\'s no longer about how many keywords you stuff into a page. What matters now is whether an AI model trusts your brand enough to cite you as a definitive source. At Treva, we\'ve shifted our focus from "clicks" to "Answer Ownership." We position our clients as the go-to authority that AI models quote first.',
      },
      {
        heading: 'The 3 Pillars of a Successful GEO Strategy',
        body: '1. Semantic Depth over Keyword Density AI models look for the meaning behind your content. Blogs must answer the "Why" and "How," not just the "What." 2. Citation-Ready Formatting AI prefers structured data. High-density information blocks and clear FAQ schemas make it easy for AI to scrape and credit your website. 3. The Trust Factor (E-E-A-T) Google\'s "Experience, Expertise, Authoritativeness, and Trust" framework is more critical than ever.',
      },
      {
        heading: 'What This Means for Your Brand',
        body: 'If your agency is still talking about "Keyword Rankings" without mentioning "Generative Citations," they are living in 2020. At Treva, we help brands become the definitive source in their industry not just a link in the search results, but the answer itself. Our GEO audits, content restructuring, and entity-building campaigns have helped clients achieve "Answer Ownership" across their key topics.',
      },
      {
        heading: 'Key Takeaway',
        body: 'The future is being the answer, not just a link. Brands that invest in GEO today will dominate AI-generated search results for years to come. Start with a content audit, structure your expertise into citation-ready formats, and build your entity authority across the web.',
      },
    ],
  },
  'agentic-ai-autonomous-marketing-teams': {
    intro: 'In 2025, we used AI to help us write. In 2026, we use AI to execute. Agentic AI represents a massive leap forward. Unlike standard AI that needs a prompt for every task, an AI Agent can plan, reason, and take action across multiple platforms without human intervention at every step.',
    sections: [
      {
        heading: 'Beyond the Chatbot: The Era of the AI Agent',
        body: 'The upcoming TREVA Agent is a prime example of this shift. Rather than answering questions, it autonomously manages workflows from lead qualification to campaign monitoring to calendar booking. It doesn\'t just suggest; it acts.',
      },
      {
        heading: 'Autonomous Lead Qualification',
        body: 'Imagine an agent that doesn\'t just reply to a lead but researches their company, checks their funding status, and books a meeting on your calendar only if they meet your Ideal Customer Profile. No human needed at the top of the funnel until the lead is pre-qualified and ready.',
      },
      {
        heading: 'Real-time Campaign Orchestration',
        body: 'Agentic systems monitor your Meta and Google Ads 24/7. If a creative underperforms at 3 AM, the agent pauses it and tests a new variation based on real-time sentiment analysis. Your campaigns optimize while you sleep.',
      },
      {
        heading: 'The Competitive Advantage',
        body: 'The companies that win in 2026 will be those with the smallest "Decision Latency." By delegating execution to agents, your human team can focus on what matters most: Strategy and Creativity. The result is a leaner, faster, and smarter marketing operation.',
      },
    ],
  },
  'privacy-first-personalization-paradox': {
    intro: 'Third-party cookies are gone. Privacy regulations are stricter than ever. Yet consumers still demand a hyper-personalized experience. This is the Privacy Paradox. At Treva, we solve this by moving away from "tracking" and toward "consented interaction."',
    sections: [
      {
        heading: 'The Death of the Cookie',
        body: 'The ad industry spent decades building on third-party cookie data. Now that foundation is gone. Brands that haven\'t built first-party data strategies are flying blind. But the opportunity is actually greater than ever consumers are willing to share data if they trust you.',
      },
      {
        heading: 'Building a First-Party Data Powerhouse',
        body: 'The most valuable data is the data your customers give you willingly. We implement Zero-Party Data strategies interactive tools, calculators, and quizzes that provide genuine value to the user while teaching us about their needs, preferences, and purchase intent.',
      },
      {
        heading: 'Predictive Personalization Without Surveillance',
        body: 'Using AI to analyze current session behavior rather than tracking a user\'s 30-day history across the web allows for powerful personalization without the "creep" factor. When customers feel safe, they engage more deeply and convert at higher rates.',
      },
      {
        heading: 'The ROI of Respect',
        body: 'Brands that prioritize privacy see measurably higher retention rates. When customers feel respected, they become advocates. We help clients build digital ecosystems where personalization feels like a concierge service, not a surveillance state.',
      },
    ],
  },
  'surviving-zero-click-apocalypse': {
    intro: 'Google is no longer a search engine; it is an Answer Engine. With AI Overviews taking up the top half of the screen, users often get the information they need without ever clicking a website. The question isn\'t whether zero-click is happening it\'s what to do about it.',
    sections: [
      {
        heading: 'Why 65% of Searches Never Result in a Click',
        body: 'Featured snippets, knowledge panels, AI Overviews, and "People Also Ask" boxes now satisfy user intent directly on the SERP. For informational queries which make up the majority of search volume the user never needs to leave Google.',
      },
      {
        heading: 'The Brand Impression Strategy',
        body: 'If you can\'t get the click, you must win the Mention. We structure client content to be the Featured Snippet. Even if the user doesn\'t click, they see "According to Treva..." or "According to [your brand]..." building subconscious brand authority that influences future purchase decisions.',
      },
      {
        heading: 'Long-Tail Action Keywords Still Convert',
        body: 'While informational searches are zero-click, high-intent searches still drive massive traffic. We optimize relentlessly for action-oriented, long-tail keywords where the user has decision intent. These searches are worth exponentially more per click.',
      },
      {
        heading: 'Measuring Success in 2026',
        body: 'Stop measuring clicks alone. Track Share of Voice in AI answers, Brand Sentiment across social platforms, and Direct Traffic as a proxy for brand recall. Visibility is the new traffic. Build your brand so well that people search for you by name.',
      },
    ],
  },
  'conversational-everything-next-website-dialogue': {
    intro: 'The traditional "Header → About → Services → Contact" website structure is dying. In 2026, we are entering the era of Conversational UI. Your website shouldn\'t be a brochure it should be a consultant that guides visitors to exactly what they need.',
    sections: [
      {
        heading: 'The End of the Static Menu',
        body: 'Static navigation assumes users know exactly what they want. But most visitors arrive with a problem, not a product in mind. Conversational UI meets them where they are asking what they need and dynamically serving the most relevant content.',
      },
      {
        heading: 'Intent-Based Navigation',
        body: 'Instead of making a user hunt for a case study, your site asks "What business challenge are you facing today?" and dynamically reconfigures the layout to show the exact solution. The conversion path becomes shorter and far more relevant.',
      },
      {
        heading: 'Multimodal Interaction',
        body: 'A seamless blend of text, voice, and interactive visuals. Users can talk to your site while driving or tap through an interactive growth graph on their desktop. The interface adapts to the context and device of each visitor.',
      },
      {
        heading: "Treva's Vision for the Future",
        body: 'We are building websites that learn. Every interaction makes the next one smarter. With TREVA OS, we are turning standard business sites into living, breathing digital organisms that grow alongside your company and ours.',
      },
    ],
  },
};
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6

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
<<<<<<< HEAD
  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const tagColors = {
    Strategy: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'AI & Technology': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Marketing: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    SEO: 'bg-green-500/10 text-green-400 border-green-500/20',
=======

  const tagColors = {
    'Strategy': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'AI & Technology': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'SEO': 'bg-green-500/10 text-green-400 border-green-500/20',
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
    'Web & Design': 'bg-[rgba(41,200,213,0.1)] text-[#29C8D5] border-[rgba(41,200,213,0.2)]',
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={`https://treva.in/blog/${post.slug}`}
        type="article"
      />

<<<<<<< HEAD
      <article className="bg-[#000000] pb-20 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-[#8A9AB0] transition-colors hover:text-white">
=======
      <article className="pt-32 pb-20 bg-[#000000]">
        <div className="max-w-3xl mx-auto px-6">

          {/* Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#8A9AB0] hover:text-white text-sm mb-8 transition-colors">
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </motion.div>

<<<<<<< HEAD
=======
          {/* Meta */}
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
<<<<<<< HEAD
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
=======
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-600 px-3 py-1 rounded-full border ${tagColors[post.tag]}`}>
                {post.tag}
              </span>
              <span className="text-[#8A9AB0] text-xs flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-[#8A9AB0] text-xs">{post.date}</span>
            </div>

            <h1
              className="font-black text-white mb-6 leading-tight"
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h1>

<<<<<<< HEAD
            <div className="flex items-center gap-3 border-b border-[rgba(41,200,213,0.1)] pb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(41,200,213,0.2)] bg-[rgba(41,200,213,0.1)]">
                <span className="text-sm font-700 text-[#29C8D5]">T</span>
              </div>
              <div>
                <p className="text-sm font-600 text-white">Treva Team</p>
                <p className="text-xs text-[#8A9AB0]">Published by Treva Digital Agency</p>
=======
            {/* Author */}
            <div className="flex items-center gap-3 pb-8 border-b border-[rgba(41,200,213,0.1)]">
              <div className="w-10 h-10 rounded-full bg-[rgba(41,200,213,0.1)] border border-[rgba(41,200,213,0.2)] flex items-center justify-center">
                <span className="text-[#29C8D5] font-700 text-sm">T</span>
              </div>
              <div>
                <p className="text-white font-600 text-sm">Treva Team</p>
                <p className="text-[#8A9AB0] text-xs">Published by Treva Digital Agency</p>
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
              </div>
            </div>
          </motion.div>

<<<<<<< HEAD
=======
          {/* Hero visual */}
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
<<<<<<< HEAD
            className="relative mb-10 h-64 overflow-hidden rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] md:h-80"
          >
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/35 via-transparent to-transparent" />
          </motion.div>

=======
            className="h-64 md:h-80 bg-[#080C10] rounded-2xl mb-10 relative overflow-hidden border border-[rgba(41,200,213,0.1)] flex items-center justify-center"
          >
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.12), transparent 70%)' }}
            />
            <span className="relative text-[5rem] font-black text-[rgba(41,200,213,0.06)] select-none">
              {post.tag}
            </span>
          </motion.div>

          {/* Content */}
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose-treva"
          >
<<<<<<< HEAD
            <p className="mb-8 border-l-2 border-[#29C8D5] pl-5 text-lg italic leading-relaxed text-[#8A9AB0]">
              {content?.intro}
            </p>

            {content?.sections.map(({ heading, body }) => (
              <div key={heading} className="mb-8">
                <h2 className="mb-3 text-xl font-800 text-white">{heading}</h2>
                <p className="text-base leading-relaxed text-[#8A9AB0]">{body}</p>
              </div>
            ))}

            <div className="mt-10 grid gap-4 border-t border-[rgba(41,200,213,0.1)] pt-8 md:grid-cols-2">
              {previousPost ? (
                <Link href={`/blog/${previousPost.slug}`} className="rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] p-5 transition-colors hover:border-[#29C8D5]">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs font-600 uppercase tracking-wider text-[#8A9AB0]">
                    <ChevronLeft size={14} />
                    Previous
                  </div>
                  <p className="text-white">{previousPost.title}</p>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] p-5 text-right transition-colors hover:border-[#29C8D5]">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs font-600 uppercase tracking-wider text-[#8A9AB0]">
                    Next
                    <ChevronRight size={14} />
                  </div>
                  <p className="text-white">{nextPost.title}</p>
                </Link>
              ) : null}
            </div>

            <div
              className="mt-12 rounded-2xl border border-[rgba(41,200,213,0.2)] p-8 text-center"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.05), transparent), #080C10' }}
            >
              <h3 className="mb-2 text-xl font-800 text-white">Want to Apply These Strategies?</h3>
              <p className="mb-6 text-sm text-[#8A9AB0]">
                Book a free strategy call with the Treva team. We&apos;ll audit your current approach and show you exactly where the opportunities are.
=======
            {/* Intro */}
            <p className="text-[#8A9AB0] text-lg leading-relaxed mb-8 italic border-l-2 border-[#29C8D5] pl-5">
              {content?.intro}
            </p>

            {/* Sections */}
            {content?.sections.map(({ heading, body }) => (
              <div key={heading} className="mb-8">
                <h2 className="font-800 text-white text-xl mb-3">{heading}</h2>
                <p className="text-[#8A9AB0] leading-relaxed text-base">{body}</p>
              </div>
            ))}

            {/* CTA */}
            <div
              className="mt-12 rounded-2xl p-8 text-center border border-[rgba(41,200,213,0.2)]"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.05), transparent), #080C10' }}
            >
              <h3 className="font-800 text-white text-xl mb-2">Want to Apply These Strategies?</h3>
              <p className="text-[#8A9AB0] text-sm mb-6">
                Book a free strategy call with the Treva team. We'll audit your current approach and show you exactly where the opportunities are.
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
              </p>
              <Link href="/contact" className="btn-primary">
                Book Free Strategy Call
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

<<<<<<< HEAD
      {others.length > 0 && (
        <section className="border-t border-[rgba(41,200,213,0.08)] bg-[#080C10] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-800 text-white">More from the Blog</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
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
=======
      {/* Related Posts */}
      {others.length > 0 && (
        <section className="py-16 bg-[#080C10] border-t border-[rgba(41,200,213,0.08)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-800 text-white text-2xl mb-8">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#29C8D5] text-xs font-600">{p.tag}</span>
                    <span className="text-[#8A9AB0] text-xs">{p.readTime}</span>
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2 group-hover:text-[#29C8D5] transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[#8A9AB0] text-sm line-clamp-2">{p.excerpt}</p>
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
