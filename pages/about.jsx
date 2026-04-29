import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Target, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  );
}

const principles = [
  { title: 'We track everything or we do not run it', desc: 'If we cannot measure it, we cannot optimise it. Every campaign comes with full conversion tracking set up before a single rupee is spent.' },
  { title: 'Your CPL target is our north star, not Google\'s suggested bid', desc: "Google's recommendations are designed to spend your budget, not protect your ROI. We set targets based on your business model — and hold ourselves accountable to them." },
  { title: 'We tell you when something is not working — before you ask', desc: 'Proactive communication is not optional. If a campaign underperforms, you hear from us first with a plan, not excuses.' },
  { title: 'The strategist running your account is the person you speak to', desc: 'No account managers as middlemen. The expert optimising your Google Ads is the one answering your calls and emails.' },
];

const learnings = [
  { title: 'Most Google Ads accounts are structured to spend, not to convert', desc: 'After auditing hundreds of accounts, the pattern is clear: campaigns are built to satisfy Google\'s spend recommendations, not the client\'s cost per lead goals.' },
  { title: 'The gap between ad click and business outcome is where money dies', desc: 'A technically perfect ad pointing to a weak landing page is money wasted. Performance marketing includes the full funnel — not just the ad.' },
  { title: 'Data without strategy is just expensive reports', desc: 'Dashboards full of impressions and clicks mean nothing if they are not tied to revenue. Every metric we report maps back to business outcome.' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Treva — Bengaluru's Performance Marketing Specialists | ₹15 Cr+ Google Ads Managed"
        description="Treva is a Bengaluru-based performance marketing agency based in Vijayanagar. We've managed ₹15 Cr+ in Google Ads and obsess over one thing: your ROI. No fluff. Only results."
        url="https://www.treva.in/about"
        keywords="about Treva, performance marketing agency Bengaluru, Google Ads agency Vijayanagar Bangalore, Treva performance marketing team, Bengaluru Google Ads specialists"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where is Treva located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Treva is based in Vijayanagar, Bengaluru, Karnataka, India. We serve clients across India and internationally.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much Google Ads budget has Treva managed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Treva has managed over ₹15 Crore in Google Ads spend across SaaS, eCommerce, real estate, education, and healthcare verticals.',
              },
            },
            {
              '@type': 'Question',
              name: 'What makes Treva different from other digital marketing agencies?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Treva specialises exclusively in Google Ads performance marketing — not broad digital services. Every client speaks directly to the strategist managing their account, and every decision is tied back to CPL or ROAS targets.',
              },
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="section-pill">
              Who We Are
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mt-2 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              We Started Treva Because Great Google Ads Management Was Rare —{' '}
              <span className="teal-gradient-text">and Your Business Deserved Better.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8A9AB0] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Treva was built in Bengaluru by performance marketers who had spent years watching businesses waste crores on Google Ads with nothing to show for it — generic strategies, opaque reporting, account managers who changed every quarter.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link href="/contact" className="btn-primary">
                Get Your Free Google Ads Audit <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '₹15 Cr+', label: 'Google Ads Managed' },
              { value: '3.8x', label: 'Average ROAS' },
              { value: '42%', label: 'Avg. CPL Reduction' },
              { value: '200+', label: 'Campaigns Launched' },
            ].map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl p-8 card-glow">
                <div className="font-black text-[#29C8D5] mb-2" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>{value}</div>
                <div className="text-[#8A9AB0] text-sm font-500">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="section-pill">Our Story</span>
            <h2 className="font-black text-white mt-4 mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              From Bengaluru, Built for Results —{' '}
              <span className="teal-gradient-text">The Treva Story</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-[#8A9AB0] text-base leading-relaxed">
              <p>
                We decided to build something different. A performance marketing agency that operates more like a growth partner than a vendor. Where you speak directly to the strategist running your campaigns. Where every decision is tied back to one metric: does this improve your ROI?
              </p>
              <p>
                Since then, we have managed over <strong className="text-white">₹15 Crore in Google Ads budget</strong>, served brands ranging from McKinsey-grade enterprises to bootstrapped D2C founders, and built a reputation in Bengaluru's marketing community for one thing: measurable results.
              </p>
              <p>
                We are based in Vijayanagar, Bengaluru. We are not a 500-person agency. We are a focused team of Google Ads specialists who believe that depth beats breadth — every time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Learned */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Expertise</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              ₹15 Crore in Ad Spend Managed.{' '}
              <span className="teal-gradient-text">Here's What We Learned.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learnings.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow h-full">
                  <h3 className="font-700 text-white text-lg mb-3">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">How We Work</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Our Principles — Why Clients Stay With Treva{' '}
              <span className="teal-gradient-text">Year After Year</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow flex gap-5">
                  <CheckCircle size={22} className="text-[#29C8D5] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-700 text-white text-base mb-2">{title}</h3>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Where We Are</span>
            <h2 className="font-black text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Our Bengaluru Office —{' '}
              <span className="teal-gradient-text">Because Local Matters</span>
            </h2>
            <p className="text-[#8A9AB0] mt-4 max-w-xl mx-auto">
              We are not a remote-only agency. Being physically present in Bengaluru means faster decisions, local market understanding, and face-to-face accountability.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-xl mx-auto bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#29C8D5]" />
                </div>
                <div>
                  <p className="text-white font-600 text-sm mb-1">Vijayanagar, Bengaluru</p>
                  <p className="text-[#8A9AB0] text-sm">#93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar, Bengaluru – 560040</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#29C8D5]" />
                </div>
                <a href="tel:+917022922526" className="text-white font-600 text-sm hover:text-[#29C8D5] transition-colors">+91-7022922526</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#29C8D5]" />
                </div>
                <a href="mailto:info@treva.in" className="text-white font-600 text-sm hover:text-[#29C8D5] transition-colors">info@treva.in</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-[rgba(41,200,213,0.2)] rounded-3xl p-12"
              style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.06), transparent 70%), #000000' }}>
              <h2 className="font-black text-white text-3xl mb-4">
                Ready to See What ₹15 Cr+ of Google Ads Experience{' '}
                <span className="teal-gradient-text">Can Do for Your Business?</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8">
                Get a free Google Ads audit. We will show you exactly where your budget is going and how to improve your ROI in 30 days.
              </p>
              <Link href="/contact" className="btn-primary">
                Claim My Free Audit <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
