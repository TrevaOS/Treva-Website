import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Palette, Smartphone, Megaphone, LineChart,
  ArrowUpRight, CheckCircle, ArrowRight, Search
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import InternalTextLink from '../components/InternalTextLink';

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

// Keyword groups per service (top volume from Excel)
const serviceKeywords = {
  branding: [
    'Brand Identity Agency',
    'Brand Identity Studio',
    'Best Brand Identity Agency',
    'Professional Brand Identity Agency',
    'Brand Identity Agency for Startups',
    'Logo Branding Firm',
    'Graphic Design Company',
    'Branding Agency Bangalore',
    'Brand Style Guide',
    'Brand Identity Services'
  ],
  socialMedia: [
    'Content Marketing Services',
    'Best Content Strategy Services',
    'Social Media Marketing Agency',
    'Instagram Marketing Agency',
    'Content Strategy Agency',
    'Video Production Agency',
    'Content Marketing for Startups',
    'Social Media Content Services',
    'Content Strategy Services Bangalore'
  ],
  webDev: [
    'Web Development Agency',
    'Web Development Services',
    'Web Development Company',
    'Best Web Development Agency',
    'Website Development Company',
    'Web Development Solutions',
    'Web Development Studio',
    'SEO Website Development',
    'Website Development Bangalore',
    'Web Development for Startups'
  ],
  appDev: [
    'App Development Company',
    'App Development Services',
    'Mobile App Development',
    'App Store Optimization Services',
    'App Development India',
    'Best App Development Company',
    'Android App Development',
    'iOS App Development',
    'Mobile App Growth',
    'App Development Agency'
  ],
  performance: [
    'Digital Marketing Agency',
    'Best Digital Marketing Agency',
    'Performance Marketing Services',
    'Online Marketing Services',
    'Digital Marketing Bangalore',
    'Digital Marketing for Startups',
    'Digital Marketing Strategy',
    'Google Ads Agency',
    'Facebook Ads Services',
    'Paid Media Strategy'
  ]
};

const services = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding',
    tagline: 'Build a brand people remember.',
    desc: 'As a premier Brand Identity Agency in Bangalore, we provide end-to-end brand identity services including logo design, brand style guides, and comprehensive brand strategy. Our professional branding solutions help startups and enterprises build premium, consistent market presence with a brand identity studio that delivers graphic design and copywriting expertise under one roof.',
    features: ['Logo design & brand mark system', 'Brand style guide & color palette', 'Typography selection & hierarchy', 'Brand voice & messaging framework', 'Social media visual identity kit', 'Business card & collateral design'],
  },
  {
    id: 'social-media-marketing',
    icon: Megaphone,
    title: 'Social Media Marketing',
    tagline: 'Content that keeps your brand active and relevant.',
    desc: 'Our Content Marketing Services span social media marketing, content strategy, and video production for brands across Bangalore. As a content strategy agency, we deliver content marketing for startups and social media content services that drive organic visibility on Instagram, LinkedIn, Facebook, and more platforms.',
    features: ['Monthly content calendar & strategy', 'Graphic, carousel & reel planning', 'Caption writing & hashtag research', 'Community management guidance', 'Competitor and trend analysis', 'Monthly performance reports'],
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    tagline: 'Websites that rank, load fast, and convert.',
    desc: 'As a Web Development Agency and Website Development Company based in Bangalore, we specialise in SEO website development for startups and enterprises. Our web development services cover everything from modern front-end engineering to performance optimisation, ensuring fast-loading websites built to rank and convert.',
    features: ['Next.js / React frontend development', 'SEO setup from page structure to metadata', 'Mobile-first responsive design', 'Core Web Vitals optimisation', 'CMS or form integration when needed', 'Launch support and maintenance'],
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Apps your users can rely on every day.',
    desc: 'We are an App Development Company offering mobile app development services across India. From Android and iOS development to app store optimisation, our app development agency builds scalable applications for startups and enterprises, covering everything from UI/UX design to backend API integration.',
    features: ['iOS & Android app development', 'React Native / Flutter builds', 'UI/UX design included', 'Backend API development', 'Testing and release readiness', 'App Store and Play Store support'],
  },
  {
    id: 'performance-marketing',
    icon: LineChart,
    title: 'Performance Marketing',
    tagline: 'Campaigns built around measurable growth.',
    desc: 'As a full-service Digital Marketing Agency in Bangalore, we specialise in Performance Marketing with a focus on Google Ads, Facebook Ads, and paid media strategy. Our digital marketing services cover strategy, optimisation, and conversion tracking to drive measurable ROAS for brands of all sizes.',
    features: ['Google Ads campaign setup & management', 'Meta Ads strategy and optimisation', 'Conversion tracking and analytics setup', 'Landing page and funnel recommendations', 'Audience and keyword planning', 'Weekly optimisation and reporting'],
  },
];

const servicesFAQ = [
  { q: 'Which services does Treva offer?', a: 'Treva offers five core services: Branding, Social Media Marketing, Web Development, App Development, and Performance Marketing — all designed to work together as a unified growth ecosystem.' },
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
      q.toLowerCase().includes(search) ||
      a.toLowerCase().includes(search)
    );
  }, [faqSearch]);

  return (
    <>
      <SEOHead
        title="Branding Agency, Content Marketing, Web Development, App Development & Digital Marketing | Treva"
        description="Treva is a leading digital agency offering Brand Identity Agency services, Content Marketing Services, Website Development Company solutions, Mobile App Development, and Digital Marketing Agency services in Bangalore."
        url="https://www.treva.in/services"
        keywords="Brand Identity Agency, Branding Agency Bangalore, Best Brand Identity Agency, Content Marketing Services, Social Media Marketing Agency, Content Strategy Services, Web Development Agency, Website Development Company, Best Web Development Agency, SEO Website Development, App Development Company, Mobile App Development, App Store Optimization Services, Digital Marketing Agency, Best Digital Marketing Agency, Performance Marketing Services, Digital Marketing Bangalore"
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#000000] py-16 lg:flex lg:h-[calc(100vh-116px)] lg:min-h-[620px] lg:max-h-[820px] lg:items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.06), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mt-2 mb-5 leading-[1.02]"
            style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.8rem)', letterSpacing: '-0.03em' }}
          >
            Digital Services<br />
            <span className="teal-gradient-text">Built for Growth</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            <InternalTextLink text="Treva is your Brand Identity Agency and Digital Marketing partner. We offer Content Marketing Services, Web Development, App Development, and Performance Marketing. As a leading branding agency in Bangalore and website development company, we deliver SEO-ready solutions for business growth." />
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project <ArrowUpRight size={16} />
            </Link>
            <Link href="/about" className="btn-outline">
              About Treva <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-16 bg-[#080C10] lg:flex lg:min-h-[calc(100vh-116px)] lg:items-center">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="font-black text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
              Top Branding Agency & Digital Marketing Services.{' '}
              <span className="teal-gradient-text">One Growth-Focused Team.</span>
            </h2>
            <p className="text-[#8A9AB0] mt-4 max-w-2xl mx-auto">
              <InternalTextLink text="Five focused services: Brand Identity Agency, Content Marketing Services, Website Development Company, Mobile App Development, and Digital Marketing Agency. Each service supports the next - from brand identity to web, app, and performance marketing." />
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stat: '5', label: 'Core Services', sub: 'Branding to Performance Marketing' },
              { stat: 'SEO', label: 'Ready Foundations', sub: 'Built into web projects' },
              { stat: 'Full', label: 'Digital Growth', sub: 'Brand, Build, Market, Measure' },
            ].map(({ stat, label, sub }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow text-center">
                  <div className="font-black text-[#29C8D5] text-4xl mb-2">{stat}</div>
                  <div className="text-white font-600 text-sm">{label}</div>
                  <div className="text-[#8A9AB0] text-xs mt-1">{sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-[#000000] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              The Five Services{' '}
              <span className="teal-gradient-text">Treva Offers</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {/* BRANDING SERVICE */}
            <FadeIn delay={0.05}>
              <div id="branding" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Brand Identity Agency</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <Palette size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Branding</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Build a brand people remember.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      <InternalTextLink text="As a premier Brand Identity Agency and Branding Agency Bangalore, we deliver professional brand identity services including brand identity studio, logo branding firm solutions, brand style guide creation, and comprehensive brand identity design. Our best brand identity agency services help startups and businesses build premium brand presence. We offer graphic design services, copywriting expertise, and complete branding solutions for companies seeking professional brand identity agency partnerships." />
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">Brand Services Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Logo design & brand mark system', 'Brand style guide & color palette', 'Typography selection & hierarchy', 'Brand voice & messaging framework', 'Social media visual identity kit', 'Business card & collateral design'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* SOCIAL MEDIA SERVICE */}
            <FadeIn delay={0.05}>
              <div id="social-media-marketing" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Content Marketing Services</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <Megaphone size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Social Media Marketing</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Content that keeps your brand active and relevant.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      <InternalTextLink text="Our Content Marketing Services include Social Media Marketing strategy, content strategy services, video production, and content marketing for startups. As a content strategy agency in Bangalore, we provide Instagram marketing agency solutions, content marketing services for small business, and best content strategy services. We manage social media content, content planning, and deliver measurable organic growth through strategic content marketing." />
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">Content & Social Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Monthly content calendar & strategy', 'Graphic, carousel & reel planning', 'Caption writing & hashtag research', 'Community management guidance', 'Competitor and trend analysis', 'Monthly performance reports'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* WEB DEVELOPMENT SERVICE */}
            <FadeIn delay={0.05}>
              <div id="web-development" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Website Development Company</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <Globe size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Web Development</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Websites that rank, load fast, and convert.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      <InternalTextLink text="As a Web Development Agency and Website Development Company in Bangalore, we provide comprehensive web development services, web development solutions, and SEO website development. Our best web development agency team delivers web development for startups, website development, and modern web applications. We are a web development studio focused on performance, SEO architecture, and conversion optimisation." />
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">Web Development Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Next.js / React frontend development', 'SEO setup from page structure to metadata', 'Mobile-first responsive design', 'Core Web Vitals optimisation', 'CMS or form integration when needed', 'Launch support and maintenance'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* APP DEVELOPMENT SERVICE */}
            <FadeIn delay={0.05}>
              <div id="app-development" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Mobile App Development</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <Smartphone size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">App Development</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Apps your users can rely on every day.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      <InternalTextLink text="As an App Development Company offering Mobile App Development services in India, we provide app development solutions, app store optimization services, and custom app development for startups. Our app development agency delivers Android app development, iOS app development, and comprehensive mobile app growth strategies. We are a best app development company delivering scalable applications." />
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">App Development Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['iOS & Android app development', 'React Native / Flutter builds', 'UI/UX design included', 'Backend API development', 'Testing and release readiness', 'App Store and Play Store support'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* PERFORMANCE MARKETING SERVICE */}
            <FadeIn delay={0.05}>
              <div id="performance-marketing" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Digital Marketing Agency</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <LineChart size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Performance Marketing</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Campaigns built around measurable growth.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      <InternalTextLink text="As a Digital Marketing Agency offering Performance Marketing Services, we deliver online marketing services including Google Ads agency, Facebook Ads services, digital marketing strategy, and paid media strategy. Our best digital marketing agency in Bangalore provides digital marketing for startups and comprehensive online marketing solutions focused on lead generation, ROAS, and conversion tracking." />
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">Performance Marketing Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Google Ads campaign setup & management', 'Meta Ads strategy and optimisation', 'Conversion tracking and analytics setup', 'Landing page and funnel recommendations', 'Audience and keyword planning', 'Weekly optimisation and reporting'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#080C10] lg:flex lg:min-h-[calc(100vh-116px)] lg:items-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions About{' '}
              <span className="teal-gradient-text">Our Services</span>
            </h2>
          </FadeIn>
          <FadeIn className="mb-8">
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A9AB0]" size={18} />
              <input
                type="text"
                value={faqSearch}
                onChange={(event) => setFaqSearch(event.target.value)}
                placeholder="Search service FAQs..."
                className="w-full rounded-full border border-[rgba(41,200,213,0.25)] bg-[#000000] py-3.5 pl-12 pr-5 text-white placeholder-[#8A9AB0] outline-none transition-all focus:border-[#29C8D5] focus:ring-1 focus:ring-[#29C8D5]"
              />
            </div>
          </FadeIn>
          <div className="space-y-4">
            {filteredServiceFaqs.length === 0 ? (
              <div className="rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#000000] p-6 text-center text-sm text-[#8A9AB0]">
                No service FAQs match your search.
              </div>
            ) : filteredServiceFaqs.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow">
                  <h3 className="font-700 text-white mb-2 text-base">{q}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">
                    <InternalTextLink text={a} />
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#000000] lg:flex lg:min-h-[calc(100vh-116px)] lg:items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-[rgba(41,200,213,0.2)] rounded-3xl p-12"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.06), transparent 70%), #080C10' }}>
              <h2 className="font-black text-white text-3xl mb-4">
                Not Sure Which Service You <span className="teal-gradient-text">Need?</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8 max-w-lg mx-auto">
                Book a free strategy call with our Brand Identity Agency. We'll understand your brand, website, app, content, and digital marketing needs, then recommend the right service from our portfolio.
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
