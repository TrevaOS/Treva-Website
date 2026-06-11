import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Palette, Smartphone, Megaphone, LineChart, Search as SearchIcon,
  ArrowUpRight, CheckCircle, ArrowRight, Search
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What digital marketing services does Treva offer?', acceptedAnswer: { '@type': 'Answer', text: 'Treva offers branding, social media marketing, Google Ads and Meta performance marketing, SEO, website development, mobile app development, UGC creator commerce through Creator Hub, and Treva CRM. All services are connected into one growth system.' } },
    { '@type': 'Question', name: 'Does Treva offer SEO services in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Treva provides on-page SEO, technical audits, content strategy, and local SEO. SEO is integrated with our broader digital marketing system so rankings feed into paid campaigns and conversion tracking.' } },
  ],
};

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
    desc: 'Treva is a social media marketing agency in Bangalore managing organic growth across Instagram, LinkedIn, Facebook, and more. Our social media marketing services include content strategy, social media management, paid social ads, and monthly performance reporting. Built for small businesses, startups, and enterprises alike.',
    features: ['Monthly content calendar & strategy', 'Graphic, carousel & reel planning', 'Caption writing & hashtag research', 'Social media management & scheduling', 'Paid social media advertising', 'Monthly performance reports'],
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
    desc: 'As a PPC agency and Google Ads partner in Bangalore, we specialise in performance marketing covering Google Search Ads, Performance Max, Shopping campaigns, and Meta Ads. Our paid media agency services include strategy, optimisation, conversion tracking, and ROAS reporting for small businesses, SaaS, ecommerce, and enterprise brands.',
    features: ['Google Ads campaign setup & management', 'Meta & paid social ads strategy', 'Conversion tracking and analytics setup', 'Landing page and funnel recommendations', 'Audience and keyword research', 'Weekly optimisation and ROAS reporting'],
  },
  {
    id: 'seo',
    icon: SearchIcon,
    title: 'Search Engine Optimisation (SEO)',
    tagline: 'Get found. On Google. In Bangalore and beyond.',
    label: 'SEO Agency Bangalore',
    desc: 'We get your brand found. On-page SEO, technical audits, content strategy and local SEO for Bangalore and beyond — all tied to your broader growth system.',
    features: ['On-page SEO & metadata optimisation', 'Technical SEO audits', 'Content strategy & keyword planning', 'Local SEO for Bangalore', 'Backlink strategy', 'SEO performance reporting'],
  },
  {
    id: 'creator-commerce',
    icon: Megaphone,
    title: 'Creator Commerce & UGC',
    tagline: 'Real creators. Real audiences. Real results.',
    label: 'UGC & Creator Commerce',
    desc: 'Through Creator Hub, we match your brand with vetted video creators filtered by niche and budget. UGC content that builds trust and converts — at scale.',
    features: ['Creator matching by category & budget', 'UGC video content delivery', 'F&B, beauty, tech, lifestyle & more', 'End-to-end campaign management', 'Content rights & brand ownership', 'Available across India'],
    ctaHref: '/products/creator-hub',
  },
];

const servicesFAQ = [
  { q: 'Which services does Treva offer?', a: 'Treva offers five core digital marketing services: Branding, Social Media Marketing, Web Development, App Development, and Performance Marketing (Google Ads & paid media). All designed to work together as a unified growth ecosystem.' },
  { q: 'Do you build SEO-friendly websites?', a: 'Yes. Our web development agency builds SEO-ready websites with clean page structure, metadata optimisation, responsive mobile-first design, Core Web Vitals performance, and technical SEO foundations built in from day one.' },
  { q: 'Can you manage both organic social media and Google Ads?', a: 'Yes. As a full-service digital marketing agency, we combine organic social media marketing and content strategy with Google Ads, paid social, and performance marketing campaigns, including conversion tracking and data-driven optimisation for measurable ROI.' },
  { q: 'Are you a branding agency too, not just a digital agency?', a: 'Yes. Treva is a branding agency offering logo design, brand identity systems, brand style guides, and brand voice frameworks. We combine branding with web development and digital marketing for cohesive brand experiences.' },
  { q: 'Is Treva a good marketing agency for small business?', a: 'Yes. We work with startups, small businesses, and enterprises. Our digital marketing packages for small businesses cover social media management, Google Ads, branding, and web development, tailored to your budget and growth goals.' },
  { q: 'Do you work with businesses outside Bangalore?', a: 'Yes. Treva serves clients across Bangalore, India, and globally. Our digital marketing services, including SEO, Google Ads, social media marketing, and web development, cater to national and international markets.' },
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
        title="Digital Marketing Services Bangalore | Social, Performance, Web, App & Creator Commerce | Treva"
        description="Treva offers 360° digital services: branding, social media marketing, Google Ads performance marketing, website & app development, influencer UGC, and Treva CRM. Your growth partner in Bangalore."
        url="https://www.treva.in/services"
        keywords="digital marketing services, digital marketing services near me, branding agency, social media marketing agency, social media marketing services, web development agency, website development company, app development company, mobile app development, performance marketing agency, Google Ads agency, PPC agency, content marketing services, digital marketing agency for small business, marketing agency for startups, lead generation agency"
        faqSchema={servicesFaqSchema}
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
            className="font-black text-gray-900 mb-4 leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Everything a Growing Business Needs —{' '}
            <span className="teal-gradient-text">Under One Roof</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            From brand identity to performance campaigns, website to mobile app, CRM to UGC creator commerce — Treva is the team that connects all of it.
          </motion.h2>
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

      {/* How It All Connects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-8">
            <h2 className="font-black text-gray-900 mt-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              How It All Connects
            </h2>
            <p className="text-gray-500 mt-3 text-base">We&apos;re not a menu of services — we&apos;re a connected system.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-gray-700">
                {['Brand & Strategy', 'Social & Content', 'Performance Ads', 'Web / App', 'CRM & Data', 'UGC & Creators'].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.06)] px-4 py-2 text-[#1AA8B4]">{step}</span>
                    {i < arr.length - 1 && <span className="text-gray-300">→</span>}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-gray-500">
                When every layer talks to the next, your marketing compounds. That&apos;s the Treva difference.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Growth Partner, Not Just an Agency */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-8">
            <h2 className="font-black text-gray-900 mt-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              Growth Partner, Not Just an Agency
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              'Agencies report on campaigns. We build systems that make every campaign smarter than the last.',
              'We own the tech stack — Treva CRM and Restaurant Dashboard are not third-party tools.',
              'We connect marketing to revenue, not just metrics.',
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                  <CheckCircle size={18} className="text-[#29C8D5] mt-0.5 shrink-0" />
                  <p className="text-gray-700 text-base leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
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
