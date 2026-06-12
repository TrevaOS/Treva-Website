import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { products } from '../data/products';

const clientList = [
  { src: '/logos/1.svg',  name: 'N Salon' },
  { src: '/logos/2.svg',  name: 'Brother Barley' },
  { src: '/logos/3.svg',  name: 'District 6' },
  { src: '/logos/4.svg',  name: 'The Watering Hole' },
  { src: '/logos/5.svg',  name: '153 Bier Street' },
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

const serviceOptions = [
  'Social Media Marketing',
  'Performance Marketing',
  'SEO Services',
  'Influencer Marketing',
  'Branding',
  'Content Marketing',
  'Lead Generation',
  'Website Development',
  'App Development',
  'Marketing Services',
];

const locationOptions = [
  'Bangalore',
  'Mysore',
  'Chitradurga',
  'Mangalore',
  'Hubli',
  'Belgaum',
  'Davangere',
];

const industryOptions = [
  { value: 'Restaurants', headline: 'Restaurants', copy: 'restaurant businesses' },
  { value: 'Real Estate', headline: 'Real Estate Companies', copy: 'real estate businesses' },
  { value: 'Healthcare', headline: 'Healthcare Businesses', copy: 'healthcare businesses' },
  { value: 'Education', headline: 'Education Businesses', copy: 'education businesses' },
  { value: 'E-commerce', headline: 'E-commerce Brands', copy: 'e-commerce businesses' },
  { value: 'Fashion', headline: 'Fashion Brands', copy: 'fashion businesses' },
  { value: 'Startups', headline: 'Startups', copy: 'startup teams' },
  { value: 'Manufacturing', headline: 'Manufacturing Businesses', copy: 'manufacturing businesses' },
  { value: 'Hospitality', headline: 'Hospitality Businesses', copy: 'hospitality businesses' },
];

const heroSuggestions = [
  { label: 'Website Development', service: 'Website Development', href: '/services#web-development' },
  { label: 'Performance Marketing', service: 'Performance Marketing', href: '/services#performance-marketing' },
  { label: 'Social Media Marketing', service: 'Social Media Marketing', href: '/services#social-media-marketing' },
  { label: 'App Development', service: 'App Development', href: '/services#app-development' },
  { label: 'Branding', service: 'Branding', href: '/services#branding' },
];

function normalizeValue(value) {
  if (Array.isArray(value)) return normalizeValue(value[0]);
  if (!value || typeof value !== 'string') return '';
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function matchOption(rawValue, options) {
  const normalized = normalizeValue(rawValue);
  if (!normalized) return '';
  return options.find((option) => normalizeValue(option) === normalized) || '';
}

function matchIndustry(rawValue) {
  const normalized = normalizeValue(rawValue);
  if (!normalized) return null;
  return industryOptions.find((option) => normalizeValue(option.value) === normalized) || null;
}

function detectService(intent) {
  const normalized = normalizeValue(intent);
  if (!normalized) return '';

  const exact = serviceOptions.find((service) => normalized.includes(normalizeValue(service)));
  if (exact) return exact;

  if (/\bseo\b|search engine/.test(normalized)) return 'SEO Services';
  if (/performance|ppc|paid ads|google ads|meta ads/.test(normalized)) return 'Performance Marketing';
  if (/social media|instagram|facebook/.test(normalized)) return 'Social Media Marketing';
  if (/influencer|creator/.test(normalized)) return 'Influencer Marketing';
  if (/brand|logo|identity/.test(normalized)) return 'Branding';
  if (/content|copywriting|blog/.test(normalized)) return 'Content Marketing';
  if (/lead generation|leads/.test(normalized)) return 'Lead Generation';
  if (/website|web development|web design/.test(normalized)) return 'Website Development';
  if (/app|mobile app|android|ios/.test(normalized)) return 'App Development';
  if (/marketing|agency|company/.test(normalized)) return 'Marketing Services';
  return '';
}

function detectLocation(intent) {
  const normalized = normalizeValue(intent);
  return locationOptions.find((location) => normalized.includes(normalizeValue(location))) || '';
}

function detectIndustry(intent) {
  const normalized = normalizeValue(intent);
  if (!normalized) return null;
  if (/restaurant|cafe|food|bar|brewery/.test(normalized)) return industryOptions[0];
  return industryOptions.find((industry) => normalized.includes(normalizeValue(industry.value))) || null;
}

function buildHeroContent(query) {
  const searchIntent = normalizeValue(query.q || query.search || query.intent);
  const service = matchOption(query.service, serviceOptions) || detectService(searchIntent);
  const location = matchOption(query.location || query.city, locationOptions) || detectLocation(searchIntent);
  const industry = matchIndustry(query.industry) || detectIndustry(searchIntent);

  if (service && industry && location) {
    return {
      service,
      location,
      industry,
      headline: `Looking for ${service} for ${industry.headline} in ${location}?`,
      subheading: `Helping ${industry.copy} across ${location} generate more leads, sales, customers, and brand visibility through expert ${service.toLowerCase()} strategies.`,
      searchValue: searchIntent,
    };
  }

  if (service && location) {
    return {
      service,
      location,
      industry,
      headline: `Looking for ${service} in ${location}?`,
      subheading: `Helping businesses across ${location} grow faster through proven ${service.toLowerCase()} strategies that deliver measurable results.`,
      searchValue: searchIntent,
    };
  }

  if (service && industry) {
    return {
      service,
      location,
      industry,
      headline: `Looking for ${service} for ${industry.headline}?`,
      subheading: `Helping ${industry.copy} attract more customers and grow faster through expert ${service.toLowerCase()} solutions.`,
      searchValue: searchIntent,
    };
  }

  if (service) {
    return {
      service,
      location,
      industry,
      headline: `Looking for ${service} Near You?`,
      subheading: `Helping local businesses grow through proven ${service.toLowerCase()} strategies that drive leads, sales, and long-term growth.`,
      searchValue: searchIntent,
    };
  }

  return {
    service,
    location,
    industry,
    headline: 'Looking for Marketing Services Near You?',
    subheading: 'Helping businesses like yours generate more leads, customers, and revenue through modern digital marketing solutions.',
    searchValue: searchIntent,
  };
}

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

function renderHeroHeadline(headline) {
  const target = 'Services Near You?';
  if (!headline.includes(target)) return headline;

  const [before, after] = headline.split(target);
  return (
    <>
      {before}
      <span className="text-[#29C8D5]">{target}</span>
      {after}
    </>
  );
}

export default function Home() {
  const router = useRouter();
  const [activeProduct, setActiveProduct] = useState(0);
  const product = products[activeProduct];
  const hero = useMemo(() => buildHeroContent(router.query), [router.query]);

  const moveProduct = (step) => {
    setActiveProduct((current) => (current + step + products.length) % products.length);
  };

  const handleHeroSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = String(formData.get('hero-search') || '').trim();
    if (!query) return;
    router.push({ pathname: '/search', query: { q: query } });
  };

  return (
    <>
      <SEOHead
        title="Treva – Your Growth Partner in Bangalore | 360 Marketing, Tech & Creator-Led Growth"
        description="Treva is your growth partner in Bangalore, combining social media, performance marketing, web and app development, Treva CRM, restaurant dashboards, and creator-led UGC into one compounding growth system."
        url="https://www.treva.in"
        keywords="growth partner Bangalore, 360 marketing agency Bangalore, digital marketing agency Bangalore, creator led growth, UGC marketing agency India, Treva CRM, restaurant dashboard, performance marketing agency, social media marketing agency, web development agency, app development company, branding agency Bangalore"
      />

      {/* Hero */}
      <section className="relative isolate flex h-[100svh] items-center overflow-hidden bg-[#101418] pt-20 text-white lg:pt-24">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="/assets/0_Office_Co_working_Space_1920x1080.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.66)_42%,rgba(0,0,0,0.32)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:py-10">
          <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-4 max-w-4xl font-semibold leading-[1.02] text-white"
            style={{ fontSize: 'clamp(2.25rem, 5.2vw, 5.25rem)' }}
          >
            {renderHeroHeadline(hero.headline)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mb-5 max-w-3xl text-base leading-relaxed text-white/82 md:text-lg"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mb-4"
          >
            <form key={router.asPath} onSubmit={handleHeroSearch} className="flex w-full max-w-5xl items-center rounded-xl bg-white p-2 shadow-2xl shadow-black/30">
              <label htmlFor="hero-search" className="sr-only">Search marketing services</label>
              <input
                id="hero-search"
                name="hero-search"
                type="search"
                defaultValue={hero.searchValue}
                placeholder="Search for any service..."
                className="min-w-0 flex-1 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400 md:px-5 md:text-lg"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#20242a] text-white transition-colors hover:bg-[#29C8D5] md:h-14 md:w-14"
              >
                <Search size={26} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="relative mb-5"
          >
            <div className="no-scrollbar flex gap-2 overflow-x-auto pr-10 md:flex-wrap md:overflow-visible md:pr-0">
              {heroSuggestions.map((suggestion) => (
                <Link
                  key={suggestion.label}
                  href={suggestion.href}
                  className="inline-flex min-h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-white/40 bg-black/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:border-[#29C8D5] hover:bg-[#29C8D5]/20 md:text-sm"
                >
                  {suggestion.label}
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-1/2 flex h-full -translate-y-1/2 items-center bg-gradient-to-l from-black/60 via-black/35 to-transparent pl-8 pr-1 text-white md:hidden">
              <ArrowRight size={18} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Get Free Consultation <ArrowUpRight size={16} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-7 py-[13px] text-sm font-bold uppercase tracking-[0.05em] text-white transition-colors hover:border-[#29C8D5] hover:text-[#29C8D5]">
              View Case Studies <ArrowUpRight size={16} />
            </Link>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Client logos marquee */}
      <section className="border-y border-gray-100 bg-white py-8">
        <div className="mx-auto mb-5 max-w-7xl px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-gray-400">Trusted by growing brands</p>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <div key={`${client.src}-${index}`} className="marquee-logo-card flex h-32 w-52 flex-col items-center justify-center gap-2 rounded-2xl p-5">
                <img src={client.src} alt={client.name} className="object-contain" style={{ maxHeight: '6rem', maxWidth: '12rem' }} />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{client.name}</span>
              </div>
            ))}
          </div>
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

          {/* Mobile: image card with overlay content */}
          {(() => {
            const isLightImage = (product.imageClassName || '').includes('bg-white');
            return (
              <FadeIn className="lg:hidden">
                <div className={`relative flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-gray-100 ${isLightImage ? 'bg-white' : ''}`}>
                  <img src={product.image} alt={product.name} className={`absolute inset-0 h-full w-full ${product.imageClassName || 'object-cover'}`} />
                  {!isLightImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  )}
                  <span
                    className={`relative z-10 m-4 self-start px-3 py-1 text-xs font-700 ${
                      product.status === 'Now Live'
                        ? 'section-pill-live border border-[#29C8D5]/30 bg-[#29C8D5]/10 text-[#0D1117]'
                        : 'rounded-full bg-white text-black'
                    }`}
                  >
                    {product.status}
                  </span>

                  <div className={`relative z-10 mt-auto flex flex-col p-6 text-center ${isLightImage ? 'bg-white' : ''}`}>
                    <h3 className={`mb-2 text-2xl font-black ${isLightImage ? 'text-gray-900' : 'text-white'}`}>{product.name}</h3>
                    <p className={`mb-5 text-sm leading-relaxed ${isLightImage ? 'text-gray-500' : 'text-gray-300'}`}>
                      {product.desc}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                      <Link
                        href={product.ctaHref || `/products/${product.slug}`}
                        className="rounded-full px-6 py-3 text-sm font-700"
                        style={{ background: product.color, color: '#000' }}
                      >
                        {product.ctaLabel}
                      </Link>
                      <button type="button" onClick={() => moveProduct(-1)} className={`flex h-11 w-11 items-center justify-center rounded-full ${isLightImage ? 'border border-gray-200 text-gray-900' : 'border border-white/30 text-white'}`} aria-label="Previous product">
                        <ChevronLeft size={18} />
                      </button>
                      <button type="button" onClick={() => moveProduct(1)} className={`flex h-11 w-11 items-center justify-center rounded-full ${isLightImage ? 'border border-gray-200 text-gray-900' : 'border border-white/30 text-white'}`} aria-label="Next product">
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {products.map((item, index) => (
                        <button
                          key={item.slug}
                          type="button"
                          onClick={() => setActiveProduct(index)}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                            index === activeProduct
                              ? 'border-[#29C8D5] bg-[rgba(41,200,213,0.08)] text-[#29C8D5]'
                              : isLightImage
                                ? 'border-gray-200 text-gray-400 hover:border-[#29C8D5]/50 hover:text-[#29C8D5]'
                                : 'border-white/30 text-gray-300 hover:border-[#29C8D5]/50 hover:text-[#29C8D5]'
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })()}

          {/* Desktop: side-by-side layout */}
          <div className="hidden grid-cols-1 gap-10 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
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
