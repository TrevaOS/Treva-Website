import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { products } from '../data/products';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Treva',
  url: 'https://treva.in',
  logo: 'https://treva.in/logo.png',
  description: 'Treva is a Bangalore-based 360° growth partner combining performance marketing, social media, web & app development, Treva CRM, Restaurant Dashboard, and Creator Hub UGC.',
  address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
  sameAs: ['https://www.instagram.com/treva.in', 'https://www.linkedin.com/company/treva-in'],
};

const clientList = [
  { src: '/logos/1.svg',  name: 'N Salon' },
  { src: '/logos/2.svg',  name: 'Brother Barley' },
  { src: '/logos/3.svg',  name: 'District 6' },
  { src: '/logos/4.svg',  name: 'The Watering Hole' },
  { src: '/logos/5.svg',  name: 'Balcony Bar' },
  { src: '/logos/6.svg',  name: 'The Biere Club' },
  { src: '/logos/7.svg',  name: 'Hoot Craft Work' },
  { src: '/logos/8.svg',  name: 'Nailashes' },
  { src: '/logos/9.svg',  name: 'Zolo' },
  { src: '/logos/10.svg', name: 'Zmanda' },
  { src: '/logos/11.svg', name: 'Toyota' },
  { src: '/logos/12.svg', name: 'La Glaze' },
  { src: '/logos/13.svg', name: 'Deck of Brews' },
  { src: '/logos/14.svg', name: 'Almarooj Dairy' },
  { src: '/logos/15.svg', name: 'Chifa Yong' },
  { src: '/logos/16.svg', name: 'Amazon' },
  { src: '/logos/17.png', name: 'La Glaze' },
  { src: '/logos/18.png', name: 'Legends Microbrewery' },
];
const clients = [...clientList, ...clientList];

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

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const product = products[activeProduct];

  const moveProduct = (step) => {
    setActiveProduct((current) => (current + step + products.length) % products.length);
  };

  return (
    <>
      <SEOHead
        title="Treva — 360° Growth Partner | Marketing, Tech & Creator Commerce | Bangalore"
        description="Treva is your growth partner — combining performance marketing, social media, web & app development, Treva CRM, Restaurant Dashboard, and Creator Hub UGC into one growth system. Based in Bangalore."
        url="https://www.treva.in"
        keywords="digital marketing agency, digital marketing agency near me, digital marketing agency Bangalore, full service digital marketing agency, branding agency, branding agency Bangalore, web agency, performance marketing agency, social media marketing agency, social media marketing, Google Ads agency, PPC agency, online marketing, digital advertising, marketing company near me, growth marketing agency"
        schema={orgSchema}
      />

      {/* Hero — full viewport, heading + subheading + 2 CTAs */}
      <section className="relative overflow-hidden bg-white flex min-h-screen items-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(41,200,213,0.07),transparent_55%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(41,200,213,0.04),transparent_60%)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.06)] px-5 py-2 text-sm font-semibold tracking-wider text-[#1AA8B4]"
          >
            Digital Marketing Agency · Bengaluru
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-4 font-black text-gray-900 leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            Your 360° Growth Partner{' '}
            <span className="teal-gradient-text">in Bangalore</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mb-10 mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 font-normal"
          >
            We build brands, run campaigns, ship products and close the loop — so your marketing compounds over time.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-col gap-4 sm:flex-row items-center justify-center"
          >
            <Link href="/services" className="btn-primary">
              See How We Work <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client logos marquee */}
      <section className="border-y border-gray-100 bg-white py-8">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <div key={`${client.src}-${index}`} className="marquee-logo-card flex h-32 w-52 flex-col items-center justify-center gap-2 rounded-2xl p-5">
                <img src={client.src} alt={client.name} className="object-contain" style={{ maxHeight: '4.5rem', maxWidth: '10rem' }} />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Partner. Every Growth Layer. */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-3 font-black text-gray-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              One Partner. <span className="teal-gradient-text">Every Growth Layer.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { heading: 'Performance Marketing', copy: 'Google Ads, Meta Ads, SEO — tracked to revenue, not just clicks.' },
              { heading: 'Tech That Works For You', copy: 'Treva CRM, Restaurant Dashboard, custom web & app development.' },
              { heading: 'Creator Commerce & UGC', copy: 'Creator Hub matches your brand to video creators your audience trusts.' },
            ].map((card, i) => (
              <FadeIn key={card.heading} delay={i * 0.08}>
                <div className="card-glow rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{card.heading}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{card.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Running a Restaurant? */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              Running a Restaurant? We Built Something for You.
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
              Treva&apos;s Restaurant Dashboard gives F&amp;B owners one view of operations, reservations and marketing performance. Used by Bangalore&apos;s top bars and breweries.
            </p>
            <Link href="/products" className="btn-primary">
              Explore Restaurant Dashboard <ArrowUpRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* UGC That Actually Converts */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              UGC That Actually Converts
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
              Creator Hub is Treva&apos;s platform connecting brands to vetted video creators — filtered by category and budget. No middleman. Real results.
            </p>
            <Link href="/products/creator-hub" className="btn-primary">
              See Creator Hub <ArrowUpRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]">Who we are</p>
            <h2 className="mb-5 font-black text-gray-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              From Bengaluru, Building a Practical Growth Stack
            </h2>
            <p className="mb-7 text-base leading-relaxed text-gray-500">
              Treva is a digital marketing agency and technology growth partner, not a disconnected vendor. Our products give teams cleaner systems
              while our services turn strategy into campaigns, websites, apps, and brand assets that compound over time.
            </p>
            <Link href="/about" className="btn-primary">
              About Treva <ArrowUpRight size={14} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
            {[
              { href: '/services#branding', label: 'Branding Agency', detail: 'Brand identity, logo design, and voice systems' },
              { href: '/services#web-development', label: 'Web Development', detail: 'SEO-ready websites built to rank and convert' },
              { href: '/services#performance-marketing', label: 'Performance Marketing', detail: 'Google Ads, PPC, and paid social media management' },
            ].map((service, index) => (
              <FadeIn key={service.href} delay={index * 0.08}>
                <Link href={service.href} className="card-glow block min-h-[220px] rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{service.label}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{service.detail}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#29C8D5]">
                    Explore <ArrowUpRight size={13} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]">Our Products</p>
            <h2 className="mb-3 font-black text-gray-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Product Showcase
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-500">
              Intelligent platforms built to help modern brands operate smarter and grow faster.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeIn>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#29C8D5]">{product.status}</p>
                <h3 className="mb-4 text-3xl font-black text-gray-900">{product.name}</h3>
                <p className="mb-6 text-base leading-relaxed text-gray-500">
                  {product.desc}
                </p>
                <div className="mb-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href={product.ctaHref || `/products/${product.slug}`} className="btn-primary" style={{ background: product.color }}>
                    {product.ctaLabel} <ArrowUpRight size={14} />
                  </Link>
                  <button type="button" onClick={() => moveProduct(-1)} className="btn-outline px-4" aria-label="Previous product">
                    <ChevronLeft size={18} />
                  </button>
                  <button type="button" onClick={() => moveProduct(1)} className="btn-outline px-4" aria-label="Next product">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-50">
                  <img src={product.image} alt={product.name} className={`h-full w-full ${product.imageClassName || 'object-cover'}`} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {products.map((item, index) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => setActiveProduct(index)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        index === activeProduct
                          ? 'border-[#29C8D5] bg-[rgba(41,200,213,0.08)] text-[#29C8D5]'
                          : 'border-gray-200 text-gray-400 hover:border-[#29C8D5]/50 hover:text-[#29C8D5]'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Answers FAQ */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn className="mb-10 text-center">
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              Quick Answers
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              {
                q: 'What does Treva do?',
                a: 'Treva is a Bangalore-based 360° growth partner combining performance marketing (Google Ads, Meta), social media management, branding, web and app development, Treva CRM, Restaurant Dashboard, and Creator Hub UGC into one compounding system.',
              },
              {
                q: 'Is Treva a marketing agency or a tech company?',
                a: 'Both. Treva runs campaigns and builds products. Our services and proprietary technology work together so your marketing data feeds your CRM, your CRM informs your ads, and your UGC content drives your social — all from one partner.',
              },
              {
                q: 'Does Treva work with businesses outside Bangalore?',
                a: 'Yes. While Treva is headquartered in Bangalore, we work with brands across India. Creator Hub operates nationally.',
              },
            ].map((item) => (
              <FadeIn key={item.q}>
                <details className="group rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-semibold text-gray-900 list-none">
                    {item.q}
                    <span className="shrink-0 text-[#29C8D5] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-gray-500">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-10 shadow-sm md:p-12">
              <h2 className="mb-4 text-3xl font-black text-gray-900">
                Ready to Build Your Ecosystem? <span className="teal-gradient-text">Let&apos;s Talk.</span>
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-500">
                Book a call with Treva, your digital marketing agency in Bangalore, to connect your branding, website, social media marketing, and Google Ads campaigns into one clear growth system.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Book a Call <ArrowUpRight size={16} />
                </Link>
                <Link href="/faq" className="btn-outline">
                  Read FAQ <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
