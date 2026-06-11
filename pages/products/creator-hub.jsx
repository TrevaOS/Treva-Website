import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Creator Hub',
  description: "Creator Hub is Treva's platform connecting brands to UGC video creators filtered by category and budget. No agency middleman. Available across India.",
  brand: { '@type': 'Brand', name: 'Treva' },
  url: 'https://treva.in/products/creator-hub',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Creator Hub Works',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brand Sets the Brief', text: 'Tell us your product category, target audience, content goals, and budget.' },
    { '@type': 'HowToStep', position: 2, name: 'Hub Identifies Matched Creators', text: 'Creator Hub surfaces vetted UGC creators who match your niche.' },
    { '@type': 'HowToStep', position: 3, name: 'UGC Delivered', text: 'Receive authentic video content made by real creators your audience trusts.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Creator Hub?', acceptedAnswer: { '@type': 'Answer', text: "Creator Hub is Treva's platform that connects brands to UGC video creators filtered by category and budget. It removes the agency middleman and delivers authentic video content at scale." } },
    { '@type': 'Question', name: 'Is Creator Hub influencer marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Creator Hub focuses on UGC — user generated content you own and can run as paid ads or organic content. We match you to creators based on niche fit and content quality, not just follower count.' } },
    { '@type': 'Question', name: 'Is Creator Hub available outside Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Creator Hub connects brands to UGC creators across India. While Treva is based in Bangalore, Creator Hub operates nationally.' } },
  ],
};

const categories = [
  'F&B / Restaurants',
  'Beauty & Skincare',
  'Tech & Gadgets',
  'Lifestyle',
  'Fashion',
  'Fitness',
  'Home & Decor',
  'Travel',
];

export default function CreatorHub() {
  return (
    <>
      <SEOHead
        title="Creator Hub by Treva | UGC Video Marketing Platform | Connect Brands & Influencers India"
        description="Creator Hub is Treva's platform that connects brands to UGC video creators filtered by category and budget. No agency middleman. Real creators. Measurable results. Available across India."
        url="https://treva.in/products/creator-hub"
        schema={[productSchema, howToSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white flex min-h-screen items-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex rounded-full border border-[rgba(236,72,153,0.3)] bg-[rgba(236,72,153,0.06)] px-5 py-2 text-sm font-semibold tracking-wider text-[#EC4899]"
          >
            Creator Hub · Treva Product
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-4 font-black text-gray-900 leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.03em' }}
          >
            Creator Hub — Connect Your Brand to UGC Creators{' '}
            <span style={{ background: 'linear-gradient(135deg, #EC4899, #F472B6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Who Actually Convert
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mb-10 mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 font-normal"
          >
            Filter by category. Set your budget. Get matched to creators who make videos your audience trusts.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-col gap-4 sm:flex-row items-center justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Connect With Creator Hub <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#EC4899]">The Process</p>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              How It Works
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { num: '1', heading: 'Brand Sets the Brief', copy: 'Tell us your product category, target audience, content goals, and budget. Takes 5 minutes.' },
              { num: '2', heading: 'Hub Identifies Matched Creators', copy: 'Creator Hub surfaces vetted UGC creators who match your niche — F&B, beauty, tech, lifestyle, fashion, and more.' },
              { num: '3', heading: 'UGC Delivered', copy: 'Receive authentic video content made by real people your audience already follows and trusts.' },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="card-glow rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full text-white font-black text-lg" style={{ background: '#EC4899' }}>
                    {step.num}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{step.heading}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{step.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn className="mb-10">
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              Perfect For Brands Who Want:
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              "Real video content that doesn't look like an ad",
              'Creators who already speak to your exact audience',
              "Flexible budget — whether you're a local restaurant or a D2C brand scaling nationally",
              'Speed — from brief to delivered content, not months',
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#EC4899' }} />
                  <p className="text-base text-gray-700 leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* UGC vs Influencer FAQ */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
              <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                Is Creator Hub Influencer Marketing?
              </h2>
              <p className="text-base leading-relaxed text-gray-500">
                Not exactly. Influencer marketing pays for reach — a creator&apos;s follower count. UGC focuses on authentic video creation that you own and can run as paid ads, on your website, or across organic channels. Creator Hub does both: we match you with creators who are great at making content AND who have real audiences in your niche.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn className="mb-10">
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              Find Creators In Your Industry
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
                  style={{ borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.05)', color: '#be185d' }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA above footer */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <div className="rounded-3xl border border-gray-100 bg-white p-12 shadow-sm">
              <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
                Ready to Get Video Content That Converts?
              </h2>
              <p className="mb-8 mx-auto max-w-lg text-base leading-relaxed text-gray-500">
                Tell us your brand and budget — we&apos;ll show you matched creators within 48 hours.
              </p>
              <Link href="/contact" className="btn-primary">
                Connect With Creator Hub <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
