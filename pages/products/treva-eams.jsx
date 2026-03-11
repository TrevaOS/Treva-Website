import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, FileText, Users, TrendingUp, Globe, Lock, ArrowUpRight, CheckCircle } from 'lucide-react';
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

const green = '#10B981';

const features = [
  { icon: BarChart3, title: 'Unified Analytics Dashboard', desc: 'Aggregate data from Google Analytics, Meta Ads, Google Ads, and more into one clean, filterable report.' },
  { icon: FileText, title: 'Smart Asset Management', desc: 'A central library for all brand assets  images, videos, copy templates, and brand guidelines  with version control.' },
  { icon: Users, title: 'Team Collaboration', desc: 'Multi-user access with role-based permissions. Comment, approve, and collaborate on campaigns in real time.' },
  { icon: TrendingUp, title: 'Predictive Performance Models', desc: 'AI-powered forecasting that predicts campaign outcomes based on historical data, helping you budget smarter.' },
  { icon: Globe, title: 'Multi-brand Support', desc: 'Manage multiple brands, clients, or product lines from a single EAMS instance with full data separation.' },
  { icon: Lock, title: 'Enterprise-grade Security', desc: 'SOC2-compliant data handling, encrypted storage, SSO support, and detailed audit logs for every action.' },
];

export default function TrevaEAMS() {
  const { register, handleSubmit, setError, formState: { isSubmitSuccessful, errors } } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xwvrokge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'Treva EAMS Waitlist', ...data }),
    });
    if (!res.ok) {
      setError('root', { message: 'Something went wrong. Please try again.' });
      throw new Error('Submission failed');
    }
  };

  return (
    <>
      <SEOHead
        title="Treva EAMS  Enterprise Analytics & Management Suite"
        description="Treva EAMS is a coming-soon enterprise analytics and asset management platform with unified reporting, AI forecasting, and multi-brand support."
        url="https://treva.in/products/treva-eams"
      />

      <section className="pt-32 pb-20 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${green}0D, transparent 70%)` }} />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${green}15`, border: `1px solid ${green}30` }}>
                <BarChart3 size={24} style={{ color: green }} />
              </div>
              <span className="section-pill">Coming Soon</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              Treva <span style={{ background: `linear-gradient(135deg, ${green}, #34D399)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>EAMS</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-[#8A9AB0] text-xl mb-3 font-500 italic">
              Enterprise Analytics & Management Suite
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-[#8A9AB0] text-base leading-relaxed mb-8 max-w-lg">
              Stop drowning in disconnected data. Treva EAMS unifies your analytics, assets, team
              workflows, and predictive intelligence into one enterprise-grade platform.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <a href="#waitlist" className="btn-primary" style={{ background: green, color: '#000' }}>
                Join the Waitlist <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Analytics mock */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#080C10] rounded-2xl p-6 border" style={{ borderColor: `${green}20` }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-600 uppercase tracking-widest" style={{ color: green }}>
                Performance Overview
              </span>
              <span className="text-[#8A9AB0] text-xs">Last 30 days</span>
            </div>
            {[
              { label: 'Total Impressions', value: '2.4M', change: '+18%', positive: true },
              { label: 'Conversions', value: '12,840', change: '+34%', positive: true },
              { label: 'Total Spend', value: '₹4.2L', change: '-8%', positive: false },
              { label: 'Blended ROAS', value: '3.8x', change: '+0.4x', positive: true },
            ].map(({ label, value, change, positive }) => (
              <div key={label} className="bg-[#0D1117] rounded-xl p-4 mb-2 flex items-center justify-between">
                <div>
                  <div className="text-[#8A9AB0] text-xs mb-1">{label}</div>
                  <div className="text-white font-700 text-lg">{value}</div>
                </div>
                <span className={`text-xs font-600 px-2 py-1 rounded-full ${positive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {change}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Features</span>
            <h2 className="font-black text-white mt-2 text-3xl md:text-4xl">
              Built for <span style={{ background: `linear-gradient(135deg, ${green}, #34D399)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Enterprise</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-[#000000] rounded-2xl p-7 card-glow border" style={{ borderColor: `${green}10` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${green}10`, border: `1px solid ${green}20` }}>
                    <Icon size={20} style={{ color: green }} />
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
            <div className="bg-[#080C10] rounded-2xl p-10 text-center border" style={{ borderColor: `${green}20` }}>
              <h2 className="font-black text-white text-3xl mb-3">
                Early Access to <span style={{ background: `linear-gradient(135deg, ${green}, #34D399)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>EAMS</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8">Get priority access and enterprise founding pricing for Treva EAMS.</p>
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle size={40} style={{ color: green }} />
                  <p className="text-white font-600">You're on the early access list!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input {...register('email', { required: true })} type="email" placeholder="Enter your business email"
                      className="flex-1 bg-[#0D1117] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none transition-colors border"
                      style={{ borderColor: `${green}20` }} />
                    <button type="submit" className="btn-primary whitespace-nowrap" style={{ background: green, color: '#000' }}>
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
