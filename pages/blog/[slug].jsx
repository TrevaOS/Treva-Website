import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { blogPosts, blogContent } from '../../data/blogData';

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
  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const tagColors = {
    Strategy: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'AI & Technology': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Marketing: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    SEO: 'bg-green-500/10 text-green-400 border-green-500/20',
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

      <article className="bg-[#000000] pb-20 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-[#8A9AB0] transition-colors hover:text-white">
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
