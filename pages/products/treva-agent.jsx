import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Bot, Search, Mail, Calendar, TrendingDown, Clock, ArrowUpRight, CheckCircle } from 'lucide-react';
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
  { icon: Search, title: 'Lead Research & Qualification', desc: 'Automatically researches incoming leads, checks their company, funding status, and intent signals before routing to your sales team.' },
  { icon: TrendingDown, title: 'Ad Performance Monitoring', desc: 'Watches your campaigns 24/7. If a creative underperforms against KPIs, the agent pauses it and tests a new variation autonomously.' },
  { icon: Calendar, title: 'Meeting Booking', desc: 'Qualifies leads based on your ICP and books meetings directly into your calendar  only for leads that match your criteria.' },
  { icon: Mail, title: 'Automated Email Sequences', desc: 'Sends personalized follow-up emails based on lead behavior and engagement signals, at exactly the right moment in the buyer journey.' },
  { icon: Bot, title: 'Persistent Brand Context', desc: 'Unlike generic tools, Treva Agent learns your brand voice, past campaigns, and long-term goals  every action is on-brand.' },
  { icon: Clock, title: '24/7 Autonomous Operation', desc: 'Never sleeps. Never needs a break. The agent keeps your marketing engine running even at 3 AM, across time zones.' },
];

export default function TrevaAgent() {
  const { register, handleSubmit, setError, formState: { isSubmitSuccessful, errors } } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xwvrokge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'Treva Agent Waitlist', ...data }),
    });
    if (!res.ok) {
      setError('root', { message: 'Something went wrong. Please try again.' });
      throw new Error('Submission failed');
    }
  };

  return (
    <>
      <SEOHead
        title="Treva Agent  Your Autonomous AI Marketing Agent"
        description="Treva Agent is a 24/7 autonomous AI marketing agent that qualifies leads, monitors campaigns, sends emails, and books meetings without human intervention."
        url="https://www.treva.in/products/treva-agent"
      />

      <section className="pt-32 pb-20 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06), transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Bot size={24} className="text-purple-400" />
              </div>
              <span className="section-pill">Coming Soon</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              Treva <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Agent</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-[#8A9AB0] text-xl mb-3 font-500 italic">
              Your 24/7 Autonomous Marketing Agent
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-[#8A9AB0] text-base leading-relaxed mb-8 max-w-lg">
              Imagine a marketing team member who never sleeps. Treva Agent qualifies leads, pauses
              underperforming ads, sends follow-ups, and books meetings  completely autonomously.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <a href="#waitlist" style={{ background: '#7C3AED' }} className="btn-primary">
                Join the Waitlist <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Activity feed mock */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#080C10] border border-purple-500/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="text-purple-400 text-xs font-600 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" /> AGENT ACTIVITY LOG
            </div>
            <div className="space-y-3">
              {[
                { time: '2s ago', action: 'Qualified lead: Rahul S. from TechCorp  ICP match: 94%', type: 'success' },
                { time: '12m ago', action: 'Paused Campaign #7  CTR dropped below 1.2% threshold', type: 'warning' },
                { time: '28m ago', action: 'Booked meeting: Demo call with Priya N.  Thu 3PM IST', type: 'info' },
                { time: '1h ago', action: 'Sent follow-up email sequence to 14 warm leads', type: 'info' },
                { time: '2h ago', action: 'Launched creative variant B for Campaign #4', type: 'success' },
              ].map(({ time, action, type }) => (
                <div key={action} className="flex gap-3 items-start p-3 bg-[#0D1117] rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    type === 'success' ? 'bg-green-400' : type === 'warning' ? 'bg-yellow-400' : 'bg-purple-400'
                  }`} />
                  <div>
                    <p className="text-white text-xs leading-relaxed">{action}</p>
                    <span className="text-[#8A9AB0] text-xs">{time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Capabilities</span>
            <h2 className="font-black text-white mt-2 text-3xl md:text-4xl">
              What Treva Agent <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Does</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-[#000000] border border-purple-500/10 rounded-2xl p-7 hover:border-purple-500/25 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 bg-[#000000]">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <div className="bg-[#080C10] border border-purple-500/20 rounded-2xl p-10 text-center">
              <h2 className="font-black text-white text-3xl mb-3">Join the <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Agent</span> Waitlist</h2>
              <p className="text-[#8A9AB0] mb-8">Get early access and founding member pricing when Treva Agent launches.</p>
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle size={40} className="text-purple-400" />
                  <p className="text-white font-600">You're on the list!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input {...register('email', { required: true })} type="email" placeholder="Enter your email"
                      className="flex-1 bg-[#0D1117] border border-purple-500/15 rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none focus:border-purple-500 transition-colors" />
                    <button type="submit" style={{ background: '#7C3AED' }} className="btn-primary whitespace-nowrap">
                      Join Waitlist <ArrowUpRight size={14} />
                    </button>
                  </div>
                  {errors.root && <p className="text-red-400 text-xs text-center">{errors.root.message}</p>}
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
