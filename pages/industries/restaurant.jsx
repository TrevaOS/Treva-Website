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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Treva — Restaurant Marketing',
  description: "Treva specialises in restaurant and F&B marketing in Bangalore — social media, Google Ads, UGC, and Restaurant Dashboard.",
  url: 'https://treva.in/industries/restaurant',
  address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
  areaServed: 'Bangalore',
};

const clients = ['The Biere Club', 'District 6', 'The Watering Hole', 'Brother Barley'];

const services = [
  {
    heading: 'Social Media Management',
    copy: 'Content calendars, Reels, Stories, and engagement — built around your menu, events, and vibe.',
    link: null,
  },
  {
    heading: 'Google Ads & Performance Marketing',
    copy: 'Show up when hungry people are searching. We run and optimise campaigns tied to footfall, not just clicks.',
    link: null,
  },
  {
    heading: 'UGC Creator Content',
    copy: 'Through Creator Hub, we match your restaurant to food creators who make authentic video content your audience trusts.',
    link: { label: 'See Creator Hub →', href: '/products/creator-hub' },
  },
  {
    heading: 'Restaurant Dashboard',
    copy: 'Get a single view of covers, reservations, and marketing performance. Built specifically for F&B operations.',
    link: null,
  },
];

export default function RestaurantIndustry() {
  return (
    <>
      <SEOHead
        title="Restaurant Marketing Agency Bangalore | F&B Social Media & Performance | Treva"
        description="Treva specialises in restaurant and F&B marketing in Bangalore — social media management, Google Ads, UGC content, and our Restaurant Dashboard for operations data. Book a free strategy call."
        url="https://treva.in/industries/restaurant"
        schema={localBusinessSchema}
        keywords="restaurant marketing agency Bangalore, F&B marketing agency, restaurant social media marketing, restaurant Google Ads, food and beverage marketing, restaurant digital marketing"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white flex min-h-screen items-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(245,158,11,0.07),transparent_60%)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex rounded-full border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.06)] px-5 py-2 text-sm font-semibold tracking-wider text-amber-600"
          >
            F&amp;B Marketing · Bangalore
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-4 font-black text-gray-900 leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.03em' }}
          >
            Restaurant &amp; F&amp;B Marketing That Fills Tables{' '}
            <span className="teal-gradient-text">and Builds Loyal Regulars</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mb-10 mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 font-normal"
          >
            From Instagram content to Google Ads, restaurant dashboards to UGC creator content — Treva is the growth partner Bangalore&apos;s best restaurants trust.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-col gap-4 sm:flex-row items-center justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Book a Free Strategy Call <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]">Trusted By Bangalore&apos;s Best F&amp;B Brands</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {clients.map((name) => (
                <span key={name} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-400">And more restaurants, bars, and breweries across Bangalore.</p>
          </FadeIn>
        </div>
      </section>

      {/* What We Do For Restaurants */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              What We Do For Restaurants
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((svc, i) => (
              <FadeIn key={svc.heading} delay={i * 0.08}>
                <div className="card-glow rounded-2xl border border-gray-100 bg-white p-8 shadow-sm h-full flex flex-col">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{svc.heading}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 flex-grow">{svc.copy}</p>
                  {svc.link && (
                    <Link href={svc.link.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#29C8D5]">
                      {svc.link.label}
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Hook */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]">See What We&apos;ve Done</p>
              <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
                Growing a Bangalore Brewery&apos;s Footfall
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-500">
                We partnered with one of Bangalore&apos;s most-loved breweries to build their full digital presence — social content, Google Ads, UGC creator campaigns, and a unified restaurant dashboard. The result: consistent growth in covers, stronger repeat visits, and a brand people talk about.
              </p>
              <Link href="/contact" className="btn-primary">
                Talk to Us About Your Restaurant <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-12 shadow-sm">
              <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
                Ready to Fill More Tables?
              </h2>
              <p className="mb-8 mx-auto max-w-lg text-base leading-relaxed text-gray-500">
                Book a free 30-minute strategy call — we&apos;ll map out a growth plan specific to your restaurant.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Free Strategy Call <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
