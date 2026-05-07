import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { products } from '../data/products';

const clients = [
  '/logos/1.svg', '/logos/2.svg', '/logos/3.svg', '/logos/4.svg',
  '/logos/5.svg', '/logos/6.svg', '/logos/7.svg', '/logos/8.svg',
  '/logos/9.svg', '/logos/10.svg', '/logos/11.svg', '/logos/12.svg',
  '/logos/13.svg', '/logos/14.svg', '/logos/15.svg', '/logos/16.svg',
  '/logos/17.png', '/logos/18.png',
  '/logos/1.svg', '/logos/2.svg', '/logos/3.svg', '/logos/4.svg',
  '/logos/5.svg', '/logos/6.svg', '/logos/7.svg', '/logos/8.svg',
  '/logos/9.svg', '/logos/10.svg', '/logos/11.svg', '/logos/12.svg',
  '/logos/13.svg', '/logos/14.svg', '/logos/15.svg', '/logos/16.svg',
  '/logos/17.png', '/logos/18.png',
];

const serviceCards = [
  { href: '/services#branding', label: 'Branding', detail: 'Identity, voice, and design systems' },
  { href: '/services#web-development', label: 'Web Development', detail: 'Fast websites built to rank and convert' },
  { href: '/services#performance-marketing', label: 'Performance Marketing', detail: 'Google Ads, paid media, and conversion growth' },
];

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
  const heroProducts = useMemo(() => products.slice(0, 4), []);

  const moveProduct = (step) => {
    setActiveProduct((current) => (current + step + products.length) % products.length);
  };

  return (
    <>
      <SEOHead
        title="Treva - Product + Service Ecosystem for Modern Brands"
        description="Treva combines intelligent product platforms with branding, web development, app development, social media marketing, and performance marketing services."
        url="https://www.treva.in"
        keywords="Treva, Treva CRM, Treva OS, Treva AI, performance marketing, branding, web development"
      />

      <section className="relative overflow-hidden bg-[#000000] pt-24 lg:flex lg:h-[calc(100vh-116px)] lg:min-h-[660px] lg:max-h-[860px] lg:items-center lg:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_25%,rgba(41,200,213,0.1),transparent_45%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex rounded-full border border-[rgba(41,200,213,0.28)] bg-[rgba(41,200,213,0.06)] px-5 py-2 text-sm font-600 tracking-wider text-[#29C8D5]"
            >
              Product + Service Ecosystem
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-5 font-black leading-[0.98] text-white"
              style={{ fontSize: 'clamp(3rem, 5.6vw, 5.75rem)', letterSpacing: '-0.03em' }}
            >
              Build Better.<br />
              <span className="teal-gradient-text">Grow Faster.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-7 max-w-xl text-base leading-relaxed text-[#8A9AB0] md:text-lg"
            >
              A unified ecosystem of intelligent products and strategic services. From Treva CRM and analytics platforms to branding, web development, and performance marketing, everything you need to scale lives in one place.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowDown size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                View Services <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {heroProducts.map((item) => (
              <Link
                key={item.slug}
                href={item.ctaHref || `/products/${item.slug}`}
                className="group min-h-[145px] rounded-2xl border border-[rgba(41,200,213,0.16)] bg-[#080C10] p-5 transition-all hover:-translate-y-1 hover:border-[rgba(41,200,213,0.45)]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(41,200,213,0.25)] bg-[rgba(41,200,213,0.08)] text-sm font-800 text-[#29C8D5]">
                    {item.name.replace('Treva ', '').slice(0, 5)}
                  </div>
                  <span className="rounded-full border border-[rgba(41,200,213,0.22)] bg-[rgba(41,200,213,0.08)] px-3 py-1 text-xs text-[#29C8D5]">
                    {item.status === 'Now Live' ? 'Live' : 'Soon'}
                  </span>
                </div>
                <h2 className="mb-3 text-base font-700 text-white transition-colors group-hover:text-[#29C8D5]">{item.name}</h2>
                <ul className="space-y-2">
                  {item.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#8A9AB0]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#29C8D5]/55" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[rgba(41,200,213,0.08)] bg-[#080C10] py-8">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {clients.map((logo, index) => (
              <div key={`${logo}-${index}`} className="marquee-logo-card flex h-24 w-40 items-center justify-center rounded-2xl p-5">
                <img src={logo} alt="Treva client logo" className="max-h-14 max-w-28 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#000000] py-16 lg:flex lg:min-h-[calc(100vh-116px)] lg:items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <h2 className="mb-5 font-black text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              From Bengaluru, Building a Practical Growth Stack
            </h2>
            <p className="mb-7 text-base leading-relaxed text-[#8A9AB0]">
              Treva works as a technology and growth partner, not a disconnected agency. Our products give teams cleaner systems while our services turn strategy into campaigns, websites, apps, and brand assets that can actually compound.
            </p>
            <Link href="/about" className="btn-primary">
              About Treva <ArrowUpRight size={14} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
            {serviceCards.map((service, index) => (
              <FadeIn key={service.href} delay={index * 0.08}>
                <Link href={service.href} className="card-glow block min-h-[220px] rounded-2xl border border-[rgba(41,200,213,0.12)] bg-[#080C10] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(41,200,213,0.38)]">
                  <h3 className="mb-3 text-lg font-800 text-white">{service.label}</h3>
                  <p className="text-sm leading-relaxed text-[#8A9AB0]">{service.detail}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-600 text-[#29C8D5]">
                    Explore <ArrowUpRight size={13} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080C10] py-16 lg:flex lg:min-h-[calc(100vh-116px)] lg:items-center">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-3 font-black text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Product Showcase
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#8A9AB0]">
              Choose the platform you want to explore. Every card uses real product assets already present in the site.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeIn>
              <div className="rounded-2xl border border-[rgba(41,200,213,0.14)] bg-[#000000] p-6 md:p-8">
                <p className="mb-3 text-xs font-700 uppercase tracking-widest text-[#29C8D5]">{product.status}</p>
                <h3 className="mb-4 text-3xl font-black text-white">{product.name}</h3>
                <p className="mb-6 text-base leading-relaxed text-[#8A9AB0]">
                  {product.desc}
                </p>
                <div className="mb-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-[#8A9AB0]">
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
              <div className="rounded-2xl border border-[rgba(41,200,213,0.14)] bg-[#000000] p-4">
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-[#0D1117]">
                  <img src={product.image} alt={product.name} className={`h-full w-full ${product.imageClassName || 'object-cover'}`} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {products.map((item, index) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => setActiveProduct(index)}
                      className={`rounded-full border px-4 py-2 text-sm font-600 transition-colors ${
                        index === activeProduct
                          ? 'border-[#29C8D5] bg-[rgba(41,200,213,0.12)] text-[#29C8D5]'
                          : 'border-white/10 text-[#8A9AB0] hover:border-[#29C8D5]/50 hover:text-[#29C8D5]'
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

      <section className="bg-[#000000] py-16 lg:flex lg:min-h-[calc(100vh-116px)] lg:items-center">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <div className="rounded-3xl border border-[rgba(41,200,213,0.2)] bg-[#080C10] p-10 md:p-12">
              <h2 className="mb-4 text-3xl font-black text-white">
                Ready to Build Your Ecosystem? <span className="teal-gradient-text">Let&apos;s Talk.</span>
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#8A9AB0]">
                Book a call with Treva to connect your product stack, website, brand, and growth campaigns into one clearer operating system.
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
