import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Target, Eye, Heart, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const values = [
  {
    icon: Zap,
    title: 'Speed with Purpose',
    desc: "We move fast but never recklessly. Every decision is data-backed and every creative choice is intentional. Speed without strategy is just noise.",
  },
  {
    icon: Target,
    title: 'Results Over Vanity',
    desc: 'Likes and impressions are nice. Revenue, retention, and ROI are better. We obsess over metrics that actually move your business forward.',
  },
  {
    icon: Heart,
    title: 'Brand Love',
    desc: "We treat every client's brand as if it were our own. Deep care for your story, your audience, and your long-term legacy not just the campaign.",
  },
];


export default function About() {
  return (
    <>
      <SEOHead
        title="About Treva Our Story, Mission & Values"
        description="Learn about Treva's story, mission, and values. Bengaluru's full-service digital agency blending creativity with intelligent technology."
        url="https://www.treva.in/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#000000] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08), transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="section-pill"
            >
              Who We Are
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mt-2 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              We Build Brands <br /><span className="teal-gradient-text">That Last.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8A9AB0] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Treva was built on a simple belief: great brands are built at the intersection of
              compelling creativity and intelligent strategy. We're a team of designers, marketers,
              engineers, and storytellers operating from the heart of Bengaluru with a global standard.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact" className="btn-primary">
                Work With Us
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '15+', label: 'Years in Business' },
              { value: '20+', label: 'Brand Clients' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '11+', label: 'Industries' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl p-8 card-glow"
              >
                <div className="font-black text-[#29C8D5] mb-2" style={{ fontSize: '2.8rem', letterSpacing: '-0.02em' }}>
                  {value}
                </div>
                <div className="text-[#8A9AB0] text-sm font-500">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-[#000000] border border-[rgba(41,200,213,0.12)] rounded-2xl p-10 card-glow h-full">
                <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-6">
                  <Target size={22} className="text-[#29C8D5]" />
                </div>
                <h2 className="font-800 text-white text-2xl mb-4">Our Mission</h2>
                <p className="text-[#8A9AB0] leading-relaxed">
                  To democratize access to world-class marketing and technology for Indian brands
                  helping them compete and win on a global stage without compromise. We make
                  enterprise-grade strategy accessible to startups and established businesses alike.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#000000] border border-[rgba(41,200,213,0.12)] rounded-2xl p-10 card-glow h-full">
                <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-6">
                  <Eye size={22} className="text-[#29C8D5]" />
                </div>
                <h2 className="font-800 text-white text-2xl mb-4">Our Vision</h2>
                <p className="text-[#8A9AB0] leading-relaxed">
                  To be the most trusted creative-technology partner for 500+ brands by 2028
                  recognized not just for campaigns that win awards, but for businesses we've helped
                  scale. A future where every Treva client has an unfair advantage in their market.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">What Drives Us</span>
            <h2
              className="font-black text-white mt-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Our <span className="teal-gradient-text">Core Values</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#29C8D5]" />
                  </div>
                  <h3 className="font-700 text-white text-lg mb-3">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div
              className="relative rounded-3xl p-8 md:p-10 text-center overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at bottom left, rgba(41,200,213,0.3) 0%, rgba(41,200,213,0.05) 40%, #0D1117 70%)',
              }}
            >
              <h2
                className="font-black text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                Ready to <span className="teal-gradient-text">Grow Your Brand?</span>
              </h2>
              <p className="text-[#8A9AB0] text-lg mb-8 max-w-lg mx-auto">
                Book a free strategy call and let's build something remarkable together.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Free Call
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
