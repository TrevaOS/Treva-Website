import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Target, BarChart3, TrendingUp, Zap, Video, Globe, Palette, Smartphone, Megaphone,
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

const performanceServices = [
  {
    id: 'google-search',
    icon: Target,
    title: 'Google Search Ads Management',
    tagline: 'Own the keywords that win you clients.',
    desc: "When someone types 'performance marketing agency Bangalore' or 'buy CRM software India' into Google, they are not browsing — they are ready to act. Google Search Ads put your brand in front of that intent at exactly the right moment. At Treva, Search Ads is the foundation of every client's performance strategy. We have managed over ₹15 Crore in Google Search budget across B2B, D2C, SaaS, real estate, and healthcare verticals.",
    features: [
      'Intent-based keyword architecture — every keyword mapped to a buying stage',
      'Ad copy that speaks to pain, not features',
      'Bidding strategy aligned to your CPL or ROAS target',
      'Negative keyword hygiene — stopping spend leakage every week',
      'Quality Score optimisation — reducing CPC while increasing ad rank',
      'Weekly optimisation reports with actionable insights',
    ],
    broken: [
      'Keyword sprawl: accounts with 500+ keywords that should have 80',
      'Broad match without controls: budget leaking to irrelevant queries',
      'Poor Quality Scores: ad copy not aligned to landing page intent',
      'Smart bidding without conversion data: garbage in, garbage out',
    ],
  },
  {
    id: 'performance-max',
    icon: BarChart3,
    title: 'Performance Max Campaigns',
    tagline: "Google's full network, managed with precision.",
    desc: "Performance Max is Google's most powerful — and most misunderstood — campaign type. Left on autopilot, it burns budget. In the right hands, it delivers ROAS across Search, Display, YouTube, Gmail, and Discover simultaneously. Treva manages PMax with full asset group strategy, audience signal design, brand exclusions, and search theme controls.",
    features: [
      'Asset group strategy — right creative for every audience segment',
      'Audience signal design — teaching Google who your best customers are',
      'Brand exclusions and search theme controls — protecting your budget',
      'ROAS governance — weekly performance review against targets',
      'Full asset production: headlines, descriptions, images, video scripts',
      'Performance Max vs. Search analysis — when to use each',
    ],
    broken: [
      'No asset group segmentation — one generic creative for all audiences',
      'Missing audience signals — Google targets cold, irrelevant traffic',
      'No brand exclusions — wasting budget on brand-term cannibalism',
      'Zero search term visibility — spending blind with no optimisation lever',
    ],
  },
  {
    id: 'shopping',
    icon: TrendingUp,
    title: 'Google Shopping Ads',
    tagline: 'Put your products in front of ready-to-buy shoppers.',
    desc: 'For eCommerce and D2C brands, Google Shopping is the highest-purchase-intent channel available. Feed quality, bidding granularity, and seasonal strategy separate the profitable campaigns from the expensive ones. Treva builds feed-optimised Shopping campaigns that drive high purchase-intent traffic with efficient ROAS.',
    features: [
      'Product feed audit and optimisation — titles, descriptions, images, GTINs',
      'Bidding by category vs. SKU — getting granular for better returns',
      'Seasonal demand spike preparation — Diwali, New Year, sale periods',
      'Smart Shopping vs. Standard Shopping analysis',
      'Competitor price positioning intelligence',
      'Integration with Performance Max for full-funnel eCommerce coverage',
    ],
    broken: [],
  },
  {
    id: 'remarketing',
    icon: Zap,
    title: 'Display & Remarketing',
    tagline: 'Recover the revenue you almost lost.',
    desc: "Most visitors do not convert on their first visit. Remarketing brings them back — at a fraction of the acquisition cost. We build segmented remarketing funnels that re-engage your warmest audiences with the right message at the right stage of their buying journey.",
    features: [
      'Audience segmentation — site visitors, cart abandoners, past customers',
      'Dynamic remarketing for eCommerce — show the exact product they viewed',
      'Frequency capping — preventing ad fatigue and wasted impressions',
      'Exclusion lists — not spending on existing customers or converted leads',
      'Custom intent audience targeting — reaching competitors\' audiences',
      'Display creative production — static, animated, and responsive ads',
    ],
    broken: [],
  },
  {
    id: 'youtube',
    icon: Video,
    title: 'YouTube Ads',
    tagline: 'Performance video that generates leads, not just views.',
    desc: 'YouTube is the second-largest search engine in the world. Performance-driven video campaigns on YouTube generate awareness and mid-funnel intent — tracked to actual conversions, not vanity view counts. Treva builds YouTube campaigns that work as a performance channel, not a branding afterthought.',
    features: [
      'TrueView In-Stream and Bumper Ad strategy',
      'Audience layering — remarketing, custom intent, in-market',
      'Video script brief and creative direction',
      'View-through conversion tracking',
      'YouTube + Search combined attribution modelling',
      'Brand Lift study setup for awareness campaigns',
    ],
    broken: [],
  },
  {
    id: 'cro',
    icon: Globe,
    title: 'Landing Page & CRO',
    tagline: 'Where clicks become customers.',
    desc: 'A great ad wasted on a weak landing page is money burned. The post-click experience is as important as the ad itself — sometimes more. Treva audits and optimises your landing pages to turn more of your paid clicks into qualified leads or purchases.',
    features: [
      'Landing page audit — load speed, message match, CTA clarity',
      'A/B testing — headline, CTA copy, form length, trust signals',
      'Heatmap and session recording analysis',
      'Lead form optimisation — fewer fields, higher conversion',
      'Thank you page and follow-up sequence optimisation',
      'Core Web Vitals improvement for Quality Score uplift',
    ],
    broken: [],
  },
];

const otherServices = [
  { id: 'branding', icon: Palette, title: 'Branding', tagline: 'Build a brand people remember.', desc: 'Complete brand identity including logo, brand style guide, visual guidelines, tone of voice, and strategic positioning.', features: ['Logo design & brand mark system', 'Full brand style guide & color palette', 'Typography selection & hierarchy', 'Brand voice & messaging framework', 'Social media visual identity kit', 'Business card & collateral design'] },
  { id: 'social', icon: Megaphone, title: 'Social Media Marketing', tagline: 'Own your audience. Own your market.', desc: 'Comprehensive content strategy, high-frequency posting, community management, and full account management across Instagram, LinkedIn, Facebook, and more.', features: ['Monthly content calendar & strategy', 'High-quality graphic & video posts', 'Community management & engagement', 'Hashtag research & optimisation', 'Monthly performance reports', 'Competitor analysis & insights'] },
  { id: 'web', icon: Globe, title: 'Web Development', tagline: 'Websites that rank, load fast, and convert.', desc: 'Next-level business website development built on modern frameworks with SEO at the foundation, blazing performance scores, and mobile-first design.', features: ['Next.js / React frontend development', 'SEO architecture from ground up', 'Mobile-first responsive design', 'Core Web Vitals optimisation', 'CMS integration (if needed)', '3 months post-launch support'] },
  { id: 'app', icon: Smartphone, title: 'App Development', tagline: 'Apps your users will love to open every day.', desc: 'Custom iOS and Android application development with a focus on seamless UX, beautiful UI, and robust backend architecture.', features: ['iOS & Android development', 'React Native / Flutter', 'UI/UX design included', 'Backend API development', 'App Store submission support', 'Post-launch maintenance plan'] },
];

const industries = [
  { name: 'Real Estate', desc: 'High CPCs, long sales cycles, lead quality problems — we have solved all three for Bangalore developers and brokers.' },
  { name: 'SaaS & Technology', desc: 'Trial signups, demo leads, and CAC optimisation for B2B and B2C software companies across India.' },
  { name: 'eCommerce & D2C', desc: 'Feed-optimised Shopping campaigns and Performance Max strategies for D2C brands scaling profitably.' },
  { name: 'Education & Edtech', desc: 'High-intent enrolment leads at lower CPL for institutions and edtech platforms across Bengaluru and India.' },
  { name: 'Healthcare', desc: 'Patient acquisition campaigns for hospitals, clinics, and health brands — compliant and conversion-focused.' },
  { name: 'Financial Services', desc: 'Lead generation for fintech, insurance, and financial advisory brands with strict audience targeting.' },
];

const servicesFAQ = [
  { q: 'What is your minimum Google Ads budget to work with Treva?', a: 'We work with clients starting from ₹50,000/month in ad spend up to ₹50 Lakh+ per month. Our management fees scale with spend.' },
  { q: 'How do you report on campaign performance?', a: 'You get access to a live dashboard — not a once-a-month PDF. We also provide weekly bid adjustment updates, monthly creative reviews, and quarterly strategy calls.' },
  { q: 'Do you manage Google Ads for both B2B and B2C businesses?', a: 'Yes. We manage campaigns for B2B SaaS companies, B2C eCommerce brands, real estate developers, edtech platforms, and healthcare providers across India.' },
  { q: 'What is Performance Max and should I be running it?', a: 'Performance Max is Google\'s full-network campaign type covering Search, Display, YouTube, Gmail, and Discover in one campaign. Whether you should run it depends on your conversion volume, budget, and goals. Treva assesses this in the free audit.' },
  { q: 'How long does it take to see results from Google Ads?', a: 'Most clients see improved CPL and ROAS within the first 4–6 weeks. Full campaign maturity typically reaches 90 days as smart bidding accumulates conversion data.' },
  { q: 'Do you offer Google Ads management outside of Bangalore?', a: 'Yes. While we are based in Vijayanagar, Bengaluru, we manage Google Ads campaigns for clients across Mumbai, Delhi, Hyderabad, Chennai, and Pan-India brands.' },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Google Ads & Performance Marketing Services in Bangalore | Treva"
        description="Expert Google Ads management, Performance Max, Shopping, and remarketing campaigns by Treva — Bangalore's performance marketing agency with ₹15 Cr+ in ad budget managed."
        url="https://www.treva.in/services"
        keywords="Google Ads management Bangalore, performance marketing services India, PPC agency Bengaluru, Google Search Ads management, Performance Max campaigns India, Google Shopping Ads India, remarketing agency Bangalore, lead generation Google Ads Bengaluru"
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
            Performance Marketing Services{' '}
            <span className="teal-gradient-text">That Pay for Themselves</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-xl max-w-2xl mx-auto mb-8">
            Every service at Treva is built around one question: will this generate a measurable return on your ad spend? We specialise in Google Ads performance — and we do it with obsessive depth.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get Your Free Google Ads Audit <ArrowUpRight size={16} />
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
              We Don't Offer Every Digital Service.{' '}
              <span className="teal-gradient-text">We Master One: Google Ads Performance.</span>
            </h2>
            <p className="text-[#8A9AB0] mt-4 max-w-2xl mx-auto">
              Generalist agencies spread thin. Treva specialises deep. With ₹15 Crore+ managed, we know Google Ads inside out — every campaign type, every bidding strategy, every optimisation lever.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stat: '₹15 Cr+', label: 'Google Ad Spend Managed', sub: 'Across all client accounts' },
              { stat: '3.8x', label: 'Average ROAS Delivered', sub: 'Across active campaigns' },
              { stat: '42%', label: 'Average CPL Reduction', sub: 'Post account restructure' },
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

      {/* Performance Services — Deep Copy */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <span className="section-pill">Google Ads Services</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Our Google Ads Services —{' '}
              <span className="teal-gradient-text">Built for Measurable ROI</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {performanceServices.map(({ id, icon: Icon, title, tagline, desc, features, broken }, i) => (
              <FadeIn key={id} delay={0.05}>
                <div id={id} className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Google Ads · Performance Marketing</span>
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
                      {broken.length > 0 && (
                        <div className="bg-[rgba(41,200,213,0.04)] border border-[rgba(41,200,213,0.1)] rounded-xl p-4 mb-4">
                          <p className="text-[#29C8D5] text-xs font-700 uppercase tracking-wider mb-2">Common problems we fix:</p>
                          {broken.map((b) => (
                            <p key={b} className="text-[#8A9AB0] text-xs leading-relaxed mb-1">✕ {b}</p>
                          ))}
                        </div>
                      )}
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

      {/* Industries */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Industries</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Industries We've Driven{' '}
              <span className="teal-gradient-text">Google Ads ROI For</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(({ name, desc }, i) => (
              <FadeIn key={name} delay={i * 0.08}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow h-full">
                  <h3 className="font-700 text-white mb-2">{name}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <span className="section-pill">Full-Service Capabilities</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Beyond Google Ads —{' '}
              <span className="teal-gradient-text">Full Digital Services</span>
            </h2>
            <p className="text-[#8A9AB0] mt-4 max-w-xl">
              While Google Ads is our core, we offer end-to-end digital services for brands that need a complete growth partner.
            </p>
          </FadeIn>
          <div className="space-y-6">
            {otherServices.map(({ id, icon: Icon, title, tagline, desc, features }, i) => (
              <FadeIn key={id} delay={0.05}>
                <div id={id} className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
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
                Book a free 30-minute strategy call. We will assess your current Google Ads setup and recommend the highest-ROI starting point for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free Google Ads Audit <ArrowUpRight size={16} />
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
