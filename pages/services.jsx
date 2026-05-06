import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Palette, Smartphone, Megaphone, LineChart,
  ArrowUpRight, CheckCircle, ArrowRight
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
    desc: 'Complete brand identity for businesses that need a clear, premium, and consistent market presence across every touchpoint.',
    features: ['Logo design & brand mark system', 'Brand style guide & color palette', 'Typography selection & hierarchy', 'Brand voice & messaging framework', 'Social media visual identity kit', 'Business card & collateral design'],
  },
  {
    id: 'social-media-marketing',
    icon: Megaphone,
    title: 'Social Media Marketing',
    tagline: 'Content that keeps your brand active and relevant.',
    desc: 'Strategy, creatives, captions, account management, and reporting for brands that want consistent visibility on Instagram, LinkedIn, Facebook, and more.',
    features: ['Monthly content calendar & strategy', 'Graphic, carousel & reel planning', 'Caption writing & hashtag research', 'Community management guidance', 'Competitor and trend analysis', 'Monthly performance reports'],
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    tagline: 'Websites that rank, load fast, and convert.',
    desc: 'Modern business websites built with SEO architecture, responsive design, fast performance, and clear conversion journeys from the first release.',
    features: ['Next.js / React frontend development', 'SEO setup from page structure to metadata', 'Mobile-first responsive design', 'Core Web Vitals optimisation', 'CMS or form integration when needed', 'Launch support and maintenance'],
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Apps your users can rely on every day.',
    desc: 'Custom mobile app development for iOS and Android, shaped around smooth UX, clean UI, reliable backend architecture, and scalable releases.',
    features: ['iOS & Android app development', 'React Native / Flutter builds', 'UI/UX design included', 'Backend API development', 'Testing and release readiness', 'App Store and Play Store support'],
  },
  {
    id: 'performance-marketing',
    icon: LineChart,
    title: 'Performance Marketing',
    tagline: 'Campaigns built around measurable growth.',
    desc: 'Paid media strategy and optimisation across high-intent channels, focused on lead generation, ROAS, conversion tracking, and budget efficiency.',
    features: ['Google Ads campaign setup & management', 'Meta Ads strategy and optimisation', 'Conversion tracking and analytics setup', 'Landing page and funnel recommendations', 'Audience and keyword planning', 'Weekly optimisation and reporting'],
  },
];

const servicesFAQ = [
  { q: 'Which services does Treva offer?', a: 'Treva offers five core services: Branding, Social Media Marketing, Web Development, App Development, and Performance Marketing.' },
  { q: 'Do you build SEO-friendly websites?', a: 'Yes. Our web development includes SEO-ready page structure, metadata, responsive design, performance optimisation, and clean technical foundations.' },
  { q: 'Can Treva handle both organic and paid growth?', a: 'Yes. Social Media Marketing supports organic brand presence, while Performance Marketing focuses on paid campaigns, leads, ROAS, and conversion tracking.' },
  { q: 'Do you provide design along with development?', a: 'Yes. Branding, web development, and app development can include visual identity, UI/UX, and launch-ready design systems.' },
  { q: 'Do you work with businesses outside Bangalore?', a: 'Yes. Treva works with clients across Bangalore, India, and remote markets depending on the project scope.' },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Branding, Social Media, Web, App & Performance Marketing Services | Treva"
        description="Explore Treva's five core digital services: Branding, Social Media Marketing, Web Development, App Development, and Performance Marketing with SEO-ready execution."
        url="https://www.treva.in/services"
        keywords="branding agency Bangalore, social media marketing Bangalore, web development Bangalore, app development India, performance marketing services, SEO website development, digital marketing services Bangalore, Treva services"
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
      <section className="pt-32 pb-16 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.06), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mt-2 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Digital Services{' '}
            <span className="teal-gradient-text">Built for Growth</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-xl max-w-2xl mx-auto mb-8">
            Treva keeps the service stack focused: Branding, Social Media Marketing, Web Development, App Development, and Performance Marketing. No clutter, just the core work a modern business needs to look sharp, rank better, and grow.
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
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="font-black text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
              Five Focused Services.{' '}
              <span className="teal-gradient-text">One Growth-Focused Team.</span>
            </h2>
            <p className="text-[#8A9AB0] mt-4 max-w-2xl mx-auto">
              Each service is built to support the next: a stronger brand, better content, faster websites, usable apps, and campaigns that can be measured clearly.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stat: '5', label: 'Core Services', sub: 'Clear, focused offerings' },
              { stat: 'SEO', label: 'Ready Foundations', sub: 'Built into web projects' },
              { stat: 'Full', label: 'Digital Growth Support', sub: 'Brand, build, market, measure' },
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
      <section id="services" className="py-20 bg-[#000000] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <span className="section-pill">Our Services</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              The Five Services{' '}
              <span className="teal-gradient-text">Treva Offers</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {services.map(({ id, icon: Icon, title, tagline, desc, features }, i) => (
              <FadeIn key={id} delay={0.05}>
                <div id={id} className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Treva Service</span>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                          <Icon size={22} className="text-[#29C8D5]" />
                        </div>
                        <div>
                          <h2 className="font-800 text-white text-2xl">{title}</h2>
                          <p className="text-[#8A9AB0] text-sm italic mt-1">{tagline}</p>
                        </div>
                      </div>
                      <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">{desc}</p>
                      <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                        Get Started <ArrowUpRight size={12} />
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">What's Included</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((f) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="section-pill">FAQ</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions About{' '}
              <span className="teal-gradient-text">Our Services</span>
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {servicesFAQ.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow">
                  <h3 className="font-700 text-white mb-2 text-base">{q}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-[rgba(41,200,213,0.2)] rounded-3xl p-12"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.06), transparent 70%), #080C10' }}>
              <h2 className="font-black text-white text-3xl mb-4">
                Not Sure Which Service You <span className="teal-gradient-text">Need?</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8 max-w-lg mx-auto">
                Book a free strategy call. We will understand your brand, website, app, content, and marketing needs, then recommend the right starting point.
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
