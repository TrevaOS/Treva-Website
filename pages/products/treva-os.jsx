import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Zap, BarChart3, Calendar, Users, Brain, Shield, ArrowUpRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { useForm } from 'react-hook-form';

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

const features = [
  { icon: BarChart3, title: 'Campaign Manager', desc: 'Plan, launch, and track campaigns across all channels from a single clean dashboard. No more tab-switching between platforms.' },
  { icon: Brain, title: 'AI Insights Engine', desc: 'Get AI-generated recommendations on budget allocation, content timing, and audience targeting based on your performance history.' },
  { icon: Calendar, title: 'Content Scheduler', desc: 'Plan and schedule content across Instagram, LinkedIn, Facebook, and more. Preview posts before they go live and manage approvals.' },
  { icon: Users, title: 'CRM Integration', desc: 'Track every lead from first click to closed deal. Integrated pipeline management with automated follow-up sequences.' },
  { icon: Zap, title: 'Brand Health Score', desc: 'A real-time score measuring your brand\'s sentiment, share of voice, and competitive position across the web.' },
  { icon: Shield, title: 'Multi-user & Roles', desc: 'Invite your entire team, clients, and collaborators. Granular permissions so everyone sees exactly what they need to.' },
];

export default function TrevaOS() {
  const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xwvrokge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'Treva OS Waitlist', ...data }),
    });
    if (!res.ok) throw new Error('Submission failed');
  };

  return (
    <>
      <SEOHead
        title="Treva OS  Your Brand's All-in-One Operating System"
        description="Treva OS is a coming-soon all-in-one business platform for managing campaigns, analytics, content, and CRM with AI-powered insights."
        url="https://treva.in/products/treva-os"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#000000] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.07), transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.1)] border border-[rgba(41,200,213,0.2)] flex items-center justify-center">
                <Zap size={24} className="text-[#29C8D5]" />
              </div>
              <span className="section-pill">Coming Soon</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              Treva <span className="teal-gradient-text">OS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#8A9AB0] text-xl mb-3 font-500 italic"
            >
              Your Brand's Operating System
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-[#8A9AB0] text-base leading-relaxed mb-8 max-w-lg"
            >
              Stop juggling 12 different tools. Treva OS brings your campaigns, analytics, content,
              CRM, and AI insights into one elegant, intelligent platform built for modern brands.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <a href="#waitlist" className="btn-primary">
                Join the Waitlist
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Mock UI preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#080C10] border border-[rgba(41,200,213,0.15)] rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-[#29C8D5]/50" />
            </div>
            {/* Fake dashboard */}
            <div className="space-y-3">
              <div className="bg-[#0D1117] rounded-xl p-4">
                <div className="text-[#29C8D5] text-xs font-600 mb-2">BRAND HEALTH SCORE</div>
                <div className="text-white font-800 text-3xl">87<span className="text-[#8A9AB0] text-sm">/100</span></div>
                <div className="mt-2 h-2 bg-[#0F1520] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#29C8D5] w-[87%]" style={{ transition: 'width 1.5s ease' }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Active Campaigns', value: '12' },
                  { label: 'Total Leads', value: '347' },
                  { label: 'Avg. ROAS', value: '3.2x' },
                  { label: 'Posts Scheduled', value: '28' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#0D1117] rounded-xl p-3">
                    <div className="text-[#8A9AB0] text-xs mb-1">{label}</div>
                    <div className="text-white font-700 text-lg">{value}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#0D1117] rounded-xl p-4">
                <div className="text-[#8A9AB0] text-xs mb-2">AI Recommendation</div>
                <p className="text-white text-xs leading-relaxed">
                  📈 Increase budget on Campaign #4 by 20%  it's converting at 4.2x ROAS vs 2.8x average.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Features</span>
            <h2 className="font-black text-white mt-2 text-3xl md:text-4xl">
              Everything You Need, <span className="teal-gradient-text">Nothing You Don't</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-7 card-glow">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#29C8D5]" />
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 bg-[#000000]">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <div className="bg-[#080C10] border border-[rgba(41,200,213,0.15)] rounded-2xl p-10 text-center">
              <h2 className="font-black text-white text-3xl mb-3">
                Be First on <span className="teal-gradient-text">Treva OS</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8">
                Join the waitlist and get early access with a founding member discount when we launch.
              </p>
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle size={40} className="text-[#29C8D5]" />
                  <p className="text-white font-600">You're on the list! We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3" noValidate>
                  <input
                    {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-[#0D1117] border border-[rgba(41,200,213,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none focus:border-[#29C8D5] transition-colors"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Join Waitlist <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
