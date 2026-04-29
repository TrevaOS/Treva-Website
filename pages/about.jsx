import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
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

// Issue #1: no em-dashes anywhere
const principles = [
  { title: 'We track everything or we do not run it', desc: 'If we cannot measure it we cannot optimise it. Every campaign comes with full conversion tracking set up before a single rupee is spent.' },
  { title: 'Your CPL target is our north star not Google\'s suggested bid', desc: "Google's recommendations are designed to spend your budget not protect your ROI. We set targets based on your business model and hold ourselves accountable to them." },
  { title: 'We tell you when something is not working before you ask', desc: 'Proactive communication is not optional. If a campaign underperforms you hear from us first with a plan not excuses.' },
  { title: 'The strategist running your account is the person you speak to', desc: 'No account managers as middlemen. The expert optimising your Google Ads is the one answering your calls and emails.' },
];

const learnings = [
  { title: 'Most accounts are structured to spend not to convert', desc: 'After auditing hundreds of accounts the pattern is clear. Campaigns are built to satisfy Google\'s spend recommendations not the client\'s cost per lead goals.' },
  { title: 'The gap between ad click and business outcome is where money is lost', desc: 'A technically perfect ad pointing to a weak landing page is money wasted. Performance marketing covers the full funnel not just the ad.' },
  { title: 'Data without strategy is just expensive reports', desc: 'Dashboards full of impressions and clicks mean nothing if they are not tied to revenue. Every metric we report maps back to business outcome.' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Treva — Bengaluru's Performance Marketing Specialists | ₹15 Cr+ Google Ads Managed"
        description="Treva is a Bengaluru-based performance marketing agency in Vijayanagar. We have managed ₹15 Cr+ in Google Ads and obsess over one thing: your ROI."
        url="https://www.treva.in/about"
        keywords="about Treva, performance marketing agency Bengaluru, Google Ads agency Vijayanagar Bangalore, Treva performance marketing team"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Where is Treva located?', acceptedAnswer: { '@type': 'Answer', text: 'Treva is based in Vijayanagar, Bengaluru, Karnataka, India. We serve clients across India and internationally.' } },
            { '@type': 'Question', name: 'How much Google Ads budget has Treva managed?', acceptedAnswer: { '@type': 'Answer', text: 'Treva has managed over ₹15 Crore in Google Ads spend across SaaS, eCommerce, real estate, education and healthcare verticals.' } },
            { '@type': 'Question', name: 'What makes Treva different from other digital marketing agencies?', acceptedAnswer: { '@type': 'Answer', text: 'Treva specialises exclusively in Google Ads performance marketing. Every client speaks directly to the strategist managing their account and every decision is tied back to CPL or ROAS targets.' } },
          ],
        }}
      />

      {/* Issue #5 and #9: hero fits one screen, compact layout */}
      <section className="pt-28 pb-16 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.1), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="section-pill">
              Who We Are
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mt-3 mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', letterSpacing: '-0.03em' }}
            >
              We Started Treva Because Great Google Ads Management Was Rare.{' '}
              <span className="teal-gradient-text">Your Business Deserved Better.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8A9AB0] text-base leading-relaxed mb-7 max-w-lg"
            >
              Treva was built in Bengaluru by performance marketers who had spent years watching businesses waste crores on Google Ads. Generic strategies, opaque reporting and account managers who changed every quarter.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link href="/contact" className="btn-primary text-sm">
                Get Your Free Google Ads Audit
              </Link>
            </motion.div>
          </div>

          {/* Issue #6: all 4 stat cards same fixed height */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '₹15 Cr+', label: 'Google Ads Managed' },
              { value: '3.8x',    label: 'Average ROAS' },
              { value: '42%',     label: 'Avg. CPL Reduction' },
              { value: '200+',    label: 'Campaigns Launched' },
            ].map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                className="bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl p-6 card-glow flex flex-col justify-between" style={{ height: '130px' }}>
                <div className="font-black text-[#29C8D5]" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em' }}>{value}</div>
                <div className="text-[#8A9AB0] text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story — compact */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="section-pill">Our Story</span>
            <h2 className="font-black text-white mt-3 mb-6"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              From Bengaluru, Built for Results
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-[#8A9AB0] text-sm leading-relaxed">
              <p>We decided to build something different. A performance marketing agency that operates more like a growth partner than a vendor. Where you speak directly to the strategist running your campaigns. Where every decision is tied back to one metric: does this improve your ROI?</p>
              <p>Since then we have managed over <strong className="text-white">₹15 Crore in Google Ads budget</strong>, served brands ranging from McKinsey-grade enterprises to bootstrapped D2C founders and built a reputation in Bengaluru for one thing: measurable results.</p>
              <p>We are based in Vijayanagar, Bengaluru. We are not a 500-person agency. We are a focused team of Google Ads specialists who believe depth beats breadth every time.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Learned — equal height cards, no em-dash */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <span className="section-pill">Expertise</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              ₹15 Crore in Ad Spend Managed.{' '}
              <span className="teal-gradient-text">Here Is What We Learned.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {learnings.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow flex flex-col" style={{ minHeight: '180px' }}>
                  <h3 className="font-700 text-white text-base mb-3">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed flex-grow">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principles — equal height cards */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <span className="section-pill">How We Work</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Our Principles. Why Clients Stay With Treva{' '}
              <span className="teal-gradient-text">Year After Year.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow flex gap-4 items-start" style={{ minHeight: '120px' }}>
                  <CheckCircle size={18} className="text-[#29C8D5] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-700 text-white text-sm mb-1.5">{title}</h3>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Office — compact */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <span className="section-pill">Where We Are</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Our Bengaluru Office.{' '}
              <span className="teal-gradient-text">Because Local Matters.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-lg mx-auto bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-7 card-glow space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#29C8D5]" />
                </div>
                <div>
                  <p className="text-white font-600 text-sm mb-1">Vijayanagar, Bengaluru</p>
                  <p className="text-[#8A9AB0] text-sm">#93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar, Bengaluru 560040</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-[#29C8D5]" />
                </div>
                <a href="tel:+917022922526" className="text-white font-600 text-sm hover:text-[#29C8D5] transition-colors">+91-7022922526</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-[#29C8D5]" />
                </div>
                <a href="mailto:info@treva.in" className="text-white font-600 text-sm hover:text-[#29C8D5] transition-colors">info@treva.in</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-[rgba(41,200,213,0.2)] rounded-3xl p-10"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.06), transparent 70%), #000000' }}>
              <h2 className="font-black text-white mb-3"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                Ready to See What ₹15 Crore of Google Ads Experience{' '}
                <span className="teal-gradient-text">Can Do for Your Business?</span>
              </h2>
              <p className="text-[#8A9AB0] text-sm mb-7 max-w-md mx-auto">
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
