import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Users, BarChart3, Zap, Mail, FileText,
  ArrowUpRight, CheckCircle, ChevronRight, Star,
  LayoutDashboard, PieChart, Bell, Shield, Globe, Layers,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

/* ─── helpers ──────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const variants = {
    up:    { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── data ──────────────────────────────────────────────── */
const features = [
  {
    icon: Users,
    title: 'Contact & Lead Management',
    desc: 'Capture every lead, track lifecycle stages from New to Won, and keep every conversation in one place.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Real-time pipeline insights, win rates, revenue forecasts, and sales activity in one unified view.',
    color: 'text-[#29C8D5]',
    bg: 'bg-[rgba(41,200,213,0.1)] border-[rgba(41,200,213,0.2)]',
  },
  {
    icon: Layers,
    title: 'Deals & Pipeline',
    desc: 'Table, Pipeline, and Forecast views. Track deal value, expected close dates, and assigned owners.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Mail,
    title: 'Email & Inbox Integration',
    desc: 'Connect Gmail or Outlook. Send emails directly from the CRM, link threads to contacts and deals.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: FileText,
    title: 'Payments & Billing',
    desc: 'Generate invoices, track paid/pending/overdue bills, and manage your revenue — all inside Treva.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Automate follow-ups, reminders, and repeatable tasks so nothing falls through the cracks.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
  },
  {
    icon: Shield,
    title: 'Support Centre',
    desc: 'Raise and track tickets directly inside the CRM. Built-in support so your team never misses an issue.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
  {
    icon: Globe,
    title: 'CSV & Excel Import',
    desc: 'Import hundreds of contacts in seconds with smart field mapping and duplicate detection.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: PieChart,
    title: 'Account Management',
    desc: 'Manage companies, organizations, and business accounts with full contact and deal associations.',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/20',
  },
];

const steps = [
  { step: '01', title: 'Create your account', desc: 'Sign up free — no credit card needed. Get started in 30 seconds.' },
  { step: '02', title: 'Set up your workspace', desc: 'Choose your business type and fill in org details. Done in under 2 minutes.' },
  { step: '03', title: 'Import your contacts', desc: 'Upload a CSV or Excel file. Treva maps your fields automatically.' },
  { step: '04', title: 'Start closing deals', desc: 'Add deals, track stages, automate follow-ups, and watch your pipeline grow.' },
];

const stats = [
  { value: 'Free', label: 'Forever for early teams' },
  { value: '2 min', label: 'Average setup time' },
  { value: '50+', label: 'Contacts importable at once' },
  { value: '6', label: 'Dashboard modules' },
];

const testimonials = [
  {
    quote: "Treva CRM replaced three separate tools for us. The import feature alone saved us hours.",
    name: 'Arjun Mehta',
    role: 'Founder, Sharma & Associates',
    rating: 5,
  },
  {
    quote: "The email integration and deal pipeline are exactly what a growing agency needs. Clean UI, zero learning curve.",
    name: 'Priya Nair',
    role: 'Sales Lead, TechOrbit India',
    rating: 5,
  },
  {
    quote: "We switched from a bloated CRM and never looked back. Treva CRM is fast, free, and just works.",
    name: 'Rohan Desai',
    role: 'Director, Pinnacle Solutions',
    rating: 5,
  },
];

/* ─── screen tabs ───────────────────────────────────────── */
/* ─── component ─────────────────────────────────────────── */
export default function TrevaCRM() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);


  return (
    <>
      <SEOHead
        title="Treva CRM — Free CRM for Modern Sales Teams"
        description="Treva CRM is live and free. Manage contacts, track deals, automate follow-ups, and run customer workflows — all in one clean platform."
        url="https://www.treva.in/products/treva-crm"
        keywords="free CRM India, CRM software Bengaluru, sales pipeline software, workflow automation CRM, Treva CRM"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Treva CRM',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
          description: 'Treva CRM — free CRM for sales, pipelines, and customer workflows.',
          url: 'https://www.treva.in/products/treva-crm',
        }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen bg-[#000000] overflow-hidden flex flex-col items-center justify-center pt-28 pb-12 px-6">
        {/* ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.10) 0%, transparent 65%)' }} />
          <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.05) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.05) 0%, transparent 70%)' }} />
        </div>

        {/* grid overlay */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(41,200,213,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(41,200,213,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto max-w-5xl text-center">
          {/* pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.08)] text-[#29C8D5] text-sm font-600"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29C8D5] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#29C8D5]" />
            </span>
            Now Live · Free for Early Teams
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
          >
            The CRM built for<br />
            <span style={{
              background: 'linear-gradient(135deg, #29C8D5 0%, #7FE7FF 50%, #29C8D5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              teams that move fast
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#8A9AB0] text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Treva CRM gives your team one clean workspace for contacts, deals, emails, billing, and automation.
            No bloat. No cost. Just results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://crm.treva.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-700 text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(41,200,213,0.5)]"
              style={{ background: 'linear-gradient(135deg, #29C8D5, #7FE7FF)' }}
            >
              Get Free Access
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(41,200,213,0.3)] text-white font-600 text-base hover:border-[#29C8D5] hover:bg-[rgba(41,200,213,0.05)] transition-all duration-300"
            >
              Book a Demo
            </Link>
          </motion.div>

          {/* stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-[#8A9AB0] mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(41,200,213,0.2)] shadow-[0_0_80px_rgba(41,200,213,0.15),0_40px_100px_rgba(0,0,0,0.8)]">
            {/* fake browser bar */}
            <div className="bg-[#0D1117] border-b border-[rgba(41,200,213,0.1)] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-md px-3 py-1 text-xs text-[#8A9AB0] flex items-center gap-2 max-w-xs mx-auto">
                  <Shield size={10} className="text-[#29C8D5]" />
                  crm.treva.in
                </div>
              </div>
            </div>
            <img
              src="/images/crm.png"
              alt="Treva CRM Dashboard"
              className="w-full object-cover"
            />
            {/* glow overlay */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.4) 100%)' }} />
          </div>
          {/* floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-[#080C10] border border-[rgba(41,200,213,0.3)] rounded-xl px-4 py-3 shadow-lg hidden md:flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[rgba(41,200,213,0.15)] flex items-center justify-center">
              <Bell size={14} className="text-[#29C8D5]" />
            </div>
            <div>
              <p className="text-white text-xs font-700">Deal Won 🎉</p>
              <p className="text-[#8A9AB0] text-xs">₹1,20,000 closed</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-4 -left-4 bg-[#080C10] border border-[rgba(41,200,213,0.3)] rounded-xl px-4 py-3 shadow-lg hidden md:flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
              <CheckCircle size={14} className="text-green-400" />
            </div>
            <div>
              <p className="text-white text-xs font-700">50 contacts imported</p>
              <p className="text-[#8A9AB0] text-xs">in under 60 seconds</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── LOGO BAR ─────────────────────────────────────── */}
      <section className="bg-[#000000] border-t border-[rgba(41,200,213,0.06)] py-12 overflow-hidden">
        <FadeIn className="text-center mb-8">
          <p className="text-[#8A9AB0] text-sm uppercase tracking-widest">Trusted by teams using Treva</p>
        </FadeIn>
        <div className="flex gap-12 items-center justify-center flex-wrap opacity-40 px-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img key={n} src={`/logos/${n}.svg`} alt="" className="h-7 object-contain grayscale" />
          ))}
        </div>
      </section>

      {/* ── PRODUCT SCREENSHOTS TABS ─────────────────────── */}
      <section className="bg-[#000000] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="section-pill mb-4">Product Tour</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              Everything your team needs,<br />
              <span className="teal-gradient-text">nothing they don't</span>
            </h2>
            <p className="text-[#8A9AB0] mt-4 max-w-xl mx-auto text-lg">
              Navigate between modules — every view is designed for speed and clarity.
            </p>
          </FadeIn>

          {/* tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'contacts',  label: 'Contacts',  icon: Users },
              { id: 'deals',     label: 'Deals',     icon: BarChart3 },
              { id: 'billing',   label: 'Billing',   icon: FileText },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-600 transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-[#29C8D5] text-black shadow-[0_0_20px_rgba(41,200,213,0.4)]'
                    : 'border border-[rgba(41,200,213,0.15)] text-[#8A9AB0] hover:border-[#29C8D5] hover:text-white'
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* screenshot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-[rgba(41,200,213,0.15)] shadow-[0_0_60px_rgba(41,200,213,0.08)]"
            >
              <div className="bg-[#0D1117] border-b border-[rgba(41,200,213,0.1)] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="text-xs text-[#8A9AB0]">crm.treva.in · {activeTab}</div>
              </div>
              <img
                src="/images/crm.png"
                alt={`Treva CRM ${activeTab}`}
                className="w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────── */}
      <section className="bg-[#080C10] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="section-pill mb-4">Features</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              Built for every part<br />of your revenue operation
            </h2>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-[rgba(41,200,213,0.08)] bg-[#000000] p-7 hover:border-[rgba(41,200,213,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(41,200,213,0.06)]">
                  <div className={`mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl border ${bg}`}>
                    <Icon size={18} className={color} />
                  </div>
                  <h3 className="text-white font-700 text-lg mb-2">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="bg-[#000000] py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="section-pill mb-4">How it works</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              Up and running<br />
              <span className="teal-gradient-text">in under 2 minutes</span>
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] p-8 hover:border-[rgba(41,200,213,0.3)] transition-colors group">
                  <div className="text-[4rem] font-black text-[rgba(41,200,213,0.07)] leading-none mb-4 select-none group-hover:text-[rgba(41,200,213,0.12)] transition-colors">
                    {step}
                  </div>
                  <h3 className="text-white font-700 text-xl mb-2">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT: ONBOARDING SCREENSHOTS ────────────────── */}
      <section className="bg-[#080C10] py-28 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeIn direction="left">
              <span className="section-pill mb-4 inline-block">Sign up</span>
              <h2 className="font-black text-white mt-3 mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em' }}>
                Start in seconds,<br />not days
              </h2>
              <p className="text-[#8A9AB0] leading-relaxed mb-8">
                Create your free account, sign in with Google or email, and you're inside your CRM workspace within seconds. No onboarding calls. No credit card. No friction.
              </p>
              <ul className="space-y-3">
                {['Google OAuth or email sign-in', 'Free — no credit card required', 'Workspace ready in 30 seconds'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#8A9AB0] text-sm">
                    <CheckCircle size={16} className="text-[#29C8D5] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-[rgba(41,200,213,0.15)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img src="/images/crm.png" alt="Sign in to Treva CRM" className="w-full object-cover" />
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-[rgba(41,200,213,0.15)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img src="/images/crm.png" alt="Import contacts to Treva CRM" className="w-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <span className="section-pill mb-4 inline-block">Import & Grow</span>
              <h2 className="font-black text-white mt-3 mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em' }}>
                Bring your contacts.<br />
                <span className="teal-gradient-text">We handle the rest.</span>
              </h2>
              <p className="text-[#8A9AB0] leading-relaxed mb-8">
                Upload a CSV or Excel file and Treva maps your columns to contact fields automatically. Import 50+ contacts in one shot, with lifecycle stages, source tags, and industry data intact.
              </p>
              <ul className="space-y-3">
                {['CSV & Excel import with field mapping', 'Duplicate detection built-in', 'Contact detail panel with full history'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#8A9AB0] text-sm">
                    <CheckCircle size={16} className="text-[#29C8D5] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-[#000000] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="section-pill mb-4">What teams say</span>
            <h2 className="font-black text-white mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              Real teams. Real results.
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map(({ quote, name, role, rating }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-[rgba(41,200,213,0.1)] bg-[#080C10] p-8 flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-[#29C8D5] fill-[#29C8D5]" />
                    ))}
                  </div>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed flex-1 italic mb-6">"{quote}"</p>
                  <div>
                    <p className="text-white font-700 text-sm">{name}</p>
                    <p className="text-[#8A9AB0] text-xs mt-0.5">{role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="bg-[#080C10] py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn direction="scale">
            <div className="relative rounded-3xl overflow-hidden border border-[rgba(41,200,213,0.2)] p-12 md:p-16 text-center"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(41,200,213,0.12), transparent 60%), #080C10' }}>
              <div className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(41,200,213,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(41,200,213,0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[rgba(41,200,213,0.3)] bg-[rgba(41,200,213,0.08)] text-[#29C8D5] text-sm font-600">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29C8D5] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#29C8D5]" />
                  </span>
                  Free while in early access
                </div>
                <h2 className="font-black text-white mb-4"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                  Your pipeline is waiting.
                </h2>
                <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto mb-10">
                  Set up your Treva CRM workspace in under 2 minutes. No credit card, no onboarding call, no bloat.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://crm.treva.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-10 py-4 rounded-full text-black font-700 text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(41,200,213,0.5)]"
                    style={{ background: 'linear-gradient(135deg, #29C8D5, #7FE7FF)' }}
                  >
                    Get Free Access
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(41,200,213,0.3)] text-white font-600 hover:border-[#29C8D5] hover:bg-[rgba(41,200,213,0.05)] transition-all duration-300"
                  >
                    Book a Demo
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
