import { useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  );
}

const principles = [
  { title: 'Measurement drives every decision', desc: 'If we cannot measure an outcome, we cannot improve it. Every product feature and service engagement comes with clear success metrics defined upfront.' },
  { title: 'Your business goals are our north star', desc: 'Platform recommendations and service strategies are designed around your specific objectives, not preset templates. We align technology and tactics to your unique business model.' },
  { title: 'We surface issues before they become problems', desc: 'Proactive monitoring is built into our products and services. If a platform underperforms or a campaign veers off track, we identify it first with a clear remediation plan.' },
  { title: 'You work directly with the experts', desc: 'No account managers as intermediaries. The product specialists and strategists building your solutions are the ones in regular communication with your team.' },
];

const learnings = [
  { title: 'Siloed tools create fragmented customer experiences', desc: 'After analyzing hundreds of business stacks the pattern is clear. Disconnected platforms create data gaps and broken workflows. Integrated product ecosystems eliminate friction between touchpoints.' },
  { title: 'The gap between tool adoption and business outcome is where value is lost', desc: 'A technically perfect platform without strategic implementation is potential unrealized. Our services ensure every product feature maps to measurable business impact.' },
  { title: 'Data without action is just expensive storage', desc: 'Dashboards full of metrics mean nothing if they are not tied to decisions. Every insight we surface connects directly to an executable next step for your team.' },
];

export default function About() {
  return (
    <>
      <Script
        src="https://api.treva.in/reserve.js?key=rsv_f417c58a6a914aa699126b5a99fed74c"
        strategy="afterInteractive"
      />
      <SEOHead
        title="About Treva | Growth Partner, Not Just an Agency | Bangalore"
        description="Treva is a Bangalore-based growth partner combining 360° digital marketing, proprietary tech (Treva CRM, Restaurant Dashboard) and Creator Hub UGC into one compounding growth system."
        url="https://www.treva.in/about"
        keywords="digital marketing agency Bangalore, performance marketing agency, Google Ads agency Bengaluru, branding agency Bangalore, growth marketing agency, marketing company near me, digital marketing company, advertising agency Bangalore, best digital marketing agency near me"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Treva',
          url: 'https://treva.in',
          foundingLocation: 'Bangalore, India',
          description: "Treva is a Bangalore-based 360° growth partner combining digital marketing, proprietary technology including Treva CRM and Restaurant Dashboard, and Creator Hub UGC into one growth system.",
          address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
          sameAs: ['https://www.instagram.com/treva.in', 'https://www.linkedin.com/company/treva-in'],
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.07), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]"
            >
              About Treva
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-gray-900 mt-3 mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', letterSpacing: '-0.03em' }}
            >
              We&apos;re Not Your Agency.{' '}
              <span className="teal-gradient-text">We&apos;re Your Growth Partner.</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-base leading-relaxed mb-7 max-w-lg font-normal"
            >
              Treva combines marketing, technology and creator commerce so your business compounds — not just runs campaigns.
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link href="/contact" className="btn-primary text-sm">
                Explore Our Solutions <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '5+',    label: 'Intelligent Products' },
              { value: '5',     label: 'Core Services' },
              { value: '₹15Cr+', label: 'Client Growth Engineered' },
              { value: '200+',  label: 'Solutions Delivered' },
            ].map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 card-glow shadow-sm flex flex-col justify-between" style={{ height: '130px' }}>
                <div className="font-black text-[#29C8D5]" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em' }}>{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-black text-gray-900 mt-3 mb-6"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              From Bengaluru, Built for Results
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>We decided to build something different: an integrated ecosystem of intelligent products and strategic services that work seamlessly together. Too many businesses juggle disconnected tools while growth opportunities slip through the cracks.</p>
              <p>Since then we have helped clients engineer over <strong className="text-gray-900">₹15 Crore in growth outcomes</strong>, serving brands ranging from McKinsey-grade enterprises to bootstrapped D2C founders. We built a reputation in Bengaluru for measurable results through Treva CRM, web development, branding, and performance marketing.</p>
              <p>We are based in Vijayanagar, Bengaluru. We are not a 500-person agency. We are a focused team of product builders and strategists who believe that the right system, implemented with purpose, creates compounding advantages.</p>
              <p>Treva is built differently. Most agencies run campaigns and send reports. We build systems — marketing, technology and creator commerce that connect to each other, feed each other&apos;s data, and get smarter over time. That&apos;s what we mean by growth partner.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Growth Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-8">
            <h2 className="font-black text-gray-900 mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Why Growth Partner — Not Agency?
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              'An agency manages your campaigns. A growth partner connects your campaigns to your CRM, your CRM to your content, and your content to your revenue.',
              "We built Treva CRM and Restaurant Dashboard because we needed tools our clients' marketing data could actually plug into.",
              "Creator Hub exists because UGC is the highest-converting content format — and we wanted to connect brands to creators without the traditional agency markup.",
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                  <CheckCircle size={18} className="text-[#29C8D5] mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-2">
            <h2 className="font-black text-gray-900 mt-3 mb-1"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Our Stack
            </h2>
            <p className="text-gray-500 text-sm mb-8">Services and products that work as one.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FadeIn delay={0.05}>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-3">
                  {['Performance Marketing (Google Ads, Meta)', 'Social Media Management', 'Branding & Identity', 'Web & App Development', 'SEO'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#29C8D5] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Products</h3>
                <ul className="space-y-3">
                  {['Treva CRM', 'Restaurant Dashboard', 'Creator Hub'].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#29C8D5] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { value: '[X]+ Clients Served' },      /* [UPDATE] replace with real numbers */
              { value: '[X]+ Years Experience' },    /* [UPDATE] replace with real numbers */
              { value: '₹[X]Cr+ Revenue Driven' },  /* [UPDATE] replace with real numbers */
            ].map(({ value }, i) => (
              <FadeIn key={value} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm text-center card-glow">
                  <div className="font-black text-[#29C8D5] text-3xl mb-2">{value}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="font-black text-gray-900 mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              ₹15 Crore in Ad Spend Managed.{' '}
              <span className="teal-gradient-text">Here Is What We Learned.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {learnings.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="h-full">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 card-glow shadow-sm flex flex-col h-full" style={{ minHeight: '180px' }}>
                  <h3 className="font-semibold text-gray-900 text-base mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="font-black text-gray-900 mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Our Principles. Why Clients Stay With Treva{' '}
              <span className="teal-gradient-text">Year After Year.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08} className="h-full">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 card-glow shadow-sm flex gap-4 items-start h-full" style={{ minHeight: '150px' }}>
                  <CheckCircle size={18} className="text-[#29C8D5] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="font-black text-gray-900 mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Our Bengaluru Office.{' '}
              <span className="teal-gradient-text">Because Local Matters.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-lg mx-auto bg-white border border-gray-100 rounded-2xl p-7 card-glow shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#29C8D5]" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm mb-1">Vijayanagar, Bengaluru</p>
                  <p className="text-gray-500 text-sm">#93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar, Bengaluru 560040</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-[#29C8D5]" />
                </div>
                <a href="tel:+917022922526" className="text-gray-900 font-semibold text-sm hover:text-[#29C8D5] transition-colors">+91-7022922526</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-[#29C8D5]" />
                </div>
                <a href="mailto:info@treva.in" className="text-gray-900 font-semibold text-sm hover:text-[#29C8D5] transition-colors">info@treva.in</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-gray-100 rounded-3xl p-10 bg-white shadow-sm">
              <h2 className="font-black text-gray-900 mb-3"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                Ready to See What ₹15 Crore of Google Ads Experience{' '}
                <span className="teal-gradient-text">Can Do for Your Business?</span>
              </h2>
              <p className="text-gray-500 text-sm mb-7 max-w-md mx-auto">
                Get a free Google Ads audit. We will show you exactly where your budget is going and how to improve your ROI.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Claim My Free Audit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
