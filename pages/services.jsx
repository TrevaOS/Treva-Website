import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Palette, Video, Megaphone, Target, Globe, Smartphone,
  ArrowUpRight, CheckCircle, ArrowRight, Wrench
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
    category: 'Creative & Strategy',
    title: 'Branding',
    tagline: 'Build a brand people remember.',
    desc: 'Complete brand identity creation including logo direction, brand style guide, visual guidelines, tone of voice, and strategic positioning. We don\'t just design we architect your brand\'s entire personality.',
    features: [
      'Logo design & brand mark system',
      'Full brand style guide & color palette',
      'Typography selection & hierarchy',
      'Brand voice & messaging framework',
      'Business card, letterhead, collateral',
      'Social media visual identity kit',
    ],
  },
  {
    id: 'media',
    icon: Video,
    category: 'Creative & Strategy',
    title: 'Media Production',
    tagline: 'Content that captivates, converts, and goes viral.',
    desc: 'Professional video production, CGI, motion graphics, and content shooting handled by our elite in-house production team. From concept to final cut, we produce content that sets your brand apart.',
    features: [
      'Commercial video production',
      'CGI & 3D animation',
      'Motion graphics & reels',
      'Photography & product shoots',
      'Scriptwriting & storyboarding',
      'Post-production & color grading',
    ],
  },
  {
    id: 'social',
    icon: Megaphone,
    category: 'Digital Marketing',
    title: 'Social Media Marketing',
    tagline: 'Own your audience. Own your market.',
    desc: 'Comprehensive content strategy, high-frequency posting, community management, campaign planning, and full account management across Instagram, LinkedIn, Facebook, and more.',
    features: [
      'Monthly content calendar & strategy',
      'High-quality graphic & video posts',
      'Community management & engagement',
      'Hashtag research & optimization',
      'Monthly performance reports',
      'Competitor analysis & insights',
    ],
  },
  {
    id: 'performance',
    icon: Target,
    category: 'Digital Marketing',
    title: 'Performance Marketing',
    tagline: 'Every rupee working harder for your business.',
    desc: 'Precision-targeted paid advertising across Meta and Google, optimized for high-conversion lead generation and sales. We build, test, and optimize campaigns until they perform.',
    features: [
      'Meta Ads (Facebook & Instagram)',
      'Google Search, Display & Shopping',
      'Landing page optimization',
      'A/B testing & creative iteration',
      'Conversion tracking setup',
      'Weekly optimization reports',
    ],
  },
  {
    id: 'web',
    icon: Globe,
    category: 'Tech & Development',
    title: 'Web Development',
    tagline: 'Websites that rank, load fast, and convert.',
    desc: 'Next-level business website development built on modern frameworks with SEO at the foundation, blazing performance scores, mobile-first design, and ongoing maintenance included.',
    features: [
      'Next.js / React frontend development',
      'SEO architecture from ground up',
      'Mobile-first responsive design',
      'Core Web Vitals optimization',
      'CMS integration (if needed)',
      '3 months post-launch support',
    ],
  },
  {
    id: 'app',
    icon: Smartphone,
    category: 'Tech & Development',
    title: 'App Development',
    tagline: 'Apps your users will love to open every day.',
    desc: 'Custom iOS and Android application development with a focus on seamless UX, beautiful UI, and robust backend architecture. From MVP to scale-ready product.',
    features: [
      'iOS & Android development',
      'React Native / Flutter',
      'UI/UX design included',
      'Backend API development',
      'App Store submission support',
      'Post-launch maintenance plan',
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Digital Marketing Services in Bengaluru | Treva"
        description="Treva offers end-to-end digital marketing services in Bengaluru — branding, performance marketing, Google & Meta Ads, social media management, video production, web & app development."
        url="https://treva.in/services"
        keywords="digital marketing services Bengaluru, performance marketing agency, Google Ads management, Meta Ads agency, social media marketing agency, branding agency Bangalore, video production agency, web development Bengaluru, app development agency India"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#000000] relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.06), transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-pill">
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mt-2 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Services Built to <span className="teal-gradient-text">Perform</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-xl max-w-2xl mx-auto"
          >
            From brand identity to cutting-edge development every service at Treva
            is engineered for measurable results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map(({ id, icon: Icon, category, title, price, tagline, desc, features }, i) => (
            <FadeIn key={id} delay={0.05}>
              <div id={id} className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">{category}</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">{title}</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">{tagline}</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6">{desc}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-[#29C8D5] font-700 text-lg">{price}</span>
                      <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                        Get Started <ArrowUpRight size={12} />
                      </Link>
                    </div>
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
      </section>

      {/* Process */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Our Process</span>
            <h2 className="font-black text-white mt-2 text-3xl md:text-4xl">
              How We Deliver <span className="teal-gradient-text">Every Time</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Brief & Discovery', d: 'Deep-dive into your goals, audience, and competitive landscape.' },
              { n: '02', t: 'Strategy & Plan', d: 'Custom roadmap with clear deliverables, timelines, and KPIs.' },
              { n: '03', t: 'Create & Execute', d: 'Our team brings the strategy to life with precision and craft.' },
              { n: '04', t: 'Review & Optimize', d: 'Continuous iteration based on performance data and feedback.' },
            ].map(({ n, t, d }) => (
              <FadeIn key={n} delay={parseInt(n) * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[rgba(41,200,213,0.3)] flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#29C8D5] font-800">{n}</span>
                  </div>
                  <h3 className="text-white font-700 mb-2">{t}</h3>
                  <p className="text-[#8A9AB0] text-sm">{d}</p>
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
              <p className="text-[#8A9AB0] mb-8">
                Book a free 30-minute strategy call. We'll assess your brand and recommend the perfect starting point.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Free Strategy Call <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
