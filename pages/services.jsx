import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Palette, Smartphone, Megaphone, LineChart,
  ArrowUpRight, CheckCircle, ArrowRight, Search
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

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

const services = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding',
    tagline: 'Build a brand people remember.',
    label: 'Brand Identity Agency',
    desc: 'As a premier Brand Identity Agency in Bangalore, we provide end-to-end brand identity services including logo design, brand style guides, and comprehensive brand strategy. Our professional branding solutions help startups and enterprises build premium, consistent market presence.',
    features: ['Logo design & brand mark system', 'Brand style guide & color palette', 'Typography selection & hierarchy', 'Brand voice & messaging framework', 'Social media visual identity kit', 'Business card & collateral design'],
  },
  {
    id: 'social-media-marketing',
    icon: Megaphone,
    title: 'Social Media Marketing',
    tagline: 'Content that keeps your brand active and relevant.',
    label: 'Content Marketing Services',
    desc: 'Our Content Marketing Services span social media marketing, content strategy, and video production for brands across Bangalore. We deliver content marketing for startups and social media content services that drive organic visibility on Instagram, LinkedIn, Facebook, and more.',
    features: ['Monthly content calendar & strategy', 'Graphic, carousel & reel planning', 'Caption writing & hashtag research', 'Community management guidance', 'Competitor and trend analysis', 'Monthly performance reports'],
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    tagline: 'Websites that rank, load fast, and convert.',
    label: 'Website Development Company',
    desc: 'As a Web Development Agency based in Bangalore, we specialise in SEO website development for startups and enterprises. Our web development services cover everything from modern front-end engineering to performance optimisation, ensuring fast-loading websites built to rank and convert.',
    features: ['Next.js / React frontend development', 'SEO setup from page structure to metadata', 'Mobile-first responsive design', 'Core Web Vitals optimisation', 'CMS or form integration when needed', 'Launch support and maintenance'],
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Apps your users can rely on every day.',
    label: 'Mobile App Development',
    desc: 'We are an App Development Company offering mobile app development services across India. From Android and iOS development to app store optimisation, our agency builds scalable applications for startups and enterprises, covering everything from UI/UX design to backend API integration.',
    features: ['iOS & Android app development', 'React Native / Flutter builds', 'UI/UX design included', 'Backend API development', 'Testing and release readiness', 'App Store and Play Store support'],
  },
  {
    id: 'performance-marketing',
    icon: LineChart,
    title: 'Performance Marketing',
    tagline: 'Campaigns built around measurable growth.',
    label: 'Digital Marketing Agency',
    desc: 'As a full-service Digital Marketing Agency in Bangalore, we specialise in Performance Marketing with a focus on Google Ads, Facebook Ads, and paid media strategy. Our services cover strategy, optimisation, and conversion tracking to drive measurable ROAS for brands of all sizes.',
    features: ['Google Ads campaign setup & management', 'Meta Ads strategy and optimisation', 'Conversion tracking and analytics setup', 'Landing page and funnel recommendations', 'Audience and keyword planning', 'Weekly optimisation and reporting'],
  },
];

const servicesFAQ = [
  { q: 'Which services does Treva offer?', a: 'Treva offers five core services: Branding, Social Media Marketing, Web Development, App Development, and Performance Marketing. All designed to work together as a unified growth ecosystem.' },
  { q: 'Do you build SEO-friendly websites?', a: 'Yes. Our web development includes SEO-ready page structure, metadata, responsive design, performance optimisation, and clean technical foundations for optimal search visibility and user experience.' },
  { q: 'Can you manage both organic and paid growth?', a: 'Yes. We combine organic Social Media Marketing and content strategy with Performance Marketing campaigns across paid channels, conversion tracking, and data-driven optimization for measurable ROI.' },
  { q: 'Do you provide design along with development?', a: 'Yes. Our Branding, Web Development, and App Development services include comprehensive visual identity, UI/UX design, and launch-ready design systems for cohesive brand experiences.' },
  { q: 'Do you work with businesses outside Bangalore?', a: 'Yes. Treva works with clients across Bangalore, India, and globally. Our services including app development, web development, and digital marketing cater to international markets.' },
];

export default function Services() {
  const [faqSearch, setFaqSearch] = useState('');
  const filteredServiceFaqs = useMemo(() => {
    const search = faqSearch.trim().toLowerCase();
    if (!search) return servicesFAQ;
    return servicesFAQ.filter(({ q, a }) =>
      q.toLowerCase().includes(search) || a.toLowerCase().includes(search)
    );
  }, [faqSearch]);

  return (
    <>
      <SEOHead
        title="Branding Agency, Content Marketing, Web Development, App Development & Digital Marketing | Treva"
        description="Treva is a leading digital agency offering Brand Identity Agency services, Content Marketing Services, Website Development Company solutions, Mobile App Development, and Digital Marketing Agency services in Bangalore."
        url="https://www.treva.in/services"
        keywords="Brand Identity Agency, Branding Agency Bangalore, Content Marketing Services, Social Media Marketing Agency, Web Development Agency, Website Development Company, App Development Company, Mobile App Development, Digital Marketing Agency, Performance Marketing Services, Digital Marketing Bangalore"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: servicesFAQ.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }}
      />

      {/* Hero — fits one viewport */}
      <section className="relative overflow-hidden bg-white flex min-h-screen items-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(41,200,213,0.07),transparent_55%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]"
          >
            Digital Marketing Agency · Bengaluru
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-black text-gray-900 mb-6 leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Digital Services<br />
            <span className="teal-gradient-text">Built for Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We are your branding, web development, app development, and performance marketing partner.
            As a leading digital agency in Bangalore, we deliver SEO-ready, growth-focused solutions for modern brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Discuss Your Project <ArrowUpRight size={16} />
            </Link>
            <Link href="/about" className="btn-outline">
              About Treva <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
              Top Branding &amp; Digital Marketing Services.{' '}
              <span className="teal-gradient-text">One Growth-Focused Team.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Five focused services: branding, content marketing, web development, app development, and performance marketing. Each supporting the next.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stat: '5', label: 'Core Services', sub: 'Branding to Performance Marketing' },
              { stat: 'SEO', label: 'Ready Foundations', sub: 'Built into web projects' },
              { stat: 'Full', label: 'Digital Growth', sub: 'Brand, Build, Market, Measure' },
            ].map(({ stat, label, sub }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 card-glow text-center shadow-sm">
                  <div className="font-black text-[#29C8D5] text-4xl mb-2">{stat}</div>
                  <div className="text-gray-900 font-semibold text-sm">{label}</div>
                  <div className="text-gray-400 text-xs mt-1">{sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section id="services" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-black text-gray-900 mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              The Five Services{' '}
              <span className="teal-gradient-text">Treva Offers</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.id} delay={0.05}>
                  <div id={service.id} className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 card-glow shadow-sm scroll-mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div>
                        <span className="text-[#29C8D5] text-xs font-semibold uppercase tracking-widest mb-3 block">{service.label}</span>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                            <Icon size={22} className="text-[#29C8D5]" />
                          </div>
                          <div>
                            <h2 className="font-bold text-gray-900 text-2xl">{service.title}</h2>
                            <p className="text-gray-400 text-sm italic mt-1">{service.tagline}</p>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                          {service.desc}
                        </p>
                        <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                          Get Started <ArrowUpRight size={12} />
                        </Link>
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-semibold text-sm mb-4 uppercase tracking-wider">What&apos;s Included</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((f) => (
                            <div key={f} className="flex items-start gap-2">
                              <CheckCircle size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                              <span className="text-gray-500 text-sm">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-black text-gray-900 mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions About{' '}
              <span className="teal-gradient-text">Our Services</span>
            </h2>
          </FadeIn>
          <FadeIn className="mb-8">
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={faqSearch}
                onChange={(event) => setFaqSearch(event.target.value)}
                placeholder="Search service FAQs..."
                className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#29C8D5] focus:ring-1 focus:ring-[#29C8D5]"
              />
            </div>
          </FadeIn>
          <div className="space-y-4">
            {filteredServiceFaqs.length === 0 ? (
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center text-sm text-gray-400 shadow-sm">
                No service FAQs match your search.
              </div>
            ) : filteredServiceFaqs.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 card-glow shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-gray-100 rounded-3xl p-12 bg-gray-50 shadow-sm">
              <h2 className="font-black text-gray-900 text-3xl mb-4">
                Not Sure Which Service You <span className="teal-gradient-text">Need?</span>
              </h2>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                Book a free strategy call. We&apos;ll understand your brand, website, app, content, and marketing needs,
                then recommend the right service from our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free Strategy Call <ArrowUpRight size={16} />
                </Link>
                <Link href="/about" className="btn-outline">
                  About Treva <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
