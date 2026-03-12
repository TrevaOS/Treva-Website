import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight, ChevronRight, Zap, Target, BarChart3, Globe,
  Smartphone, Megaphone, Video, Palette, TrendingUp, Users,
  Star, Quote, CheckCircle, ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const clients = [
  '/logos/1.svg',
  '/logos/2.svg',
  '/logos/3.svg',
  '/logos/4.svg',
  '/logos/5.svg',
  '/logos/6.svg',
  '/logos/7.svg',
  '/logos/8.svg',
  '/logos/9.svg',
  '/logos/10.svg',
  '/logos/11.svg',
  '/logos/12.svg',
  '/logos/13.svg',
  '/logos/14.svg',
  '/logos/15.svg',
  '/logos/16.svg',
  '/logos/1.svg',
  '/logos/2.svg',
  '/logos/3.svg',
  '/logos/4.svg',
  '/logos/5.svg',
  '/logos/6.svg',
  '/logos/7.svg',
  '/logos/8.svg',
  '/logos/9.svg',
  '/logos/10.svg',
  '/logos/11.svg',
  '/logos/12.svg',
  '/logos/13.svg',
  '/logos/14.svg',
  '/logos/15.svg',
  '/logos/16.svg',
  '/logos/1.svg',
  '/logos/2.svg',
  '/logos/3.svg',
  '/logos/4.svg',
  '/logos/5.svg',
  '/logos/6.svg',
  '/logos/7.svg',
  '/logos/8.svg',
  '/logos/9.svg',
  '/logos/10.svg',
  '/logos/11.svg',
  '/logos/12.svg',
  '/logos/13.svg',
  '/logos/14.svg',
  '/logos/15.svg',
  '/logos/16.svg',
];

const services = [
  { icon: Palette, title: 'Branding', desc: 'Complete brand identity  logo, visuals, and positioning that makes you unforgettable.', href: '/services#branding' },
  { icon: Video, title: 'Media Production', desc: 'Professional video, CGI, and motion graphics by our elite production team.', href: '/services#media' },
  { icon: Megaphone, title: 'Social Media Marketing', desc: 'High-frequency content strategy and full account management that grows your audience.', href: '/services#social' },
  { icon: Target, title: 'Performance Marketing', desc: 'Precision-targeted Meta & Google campaigns optimized for high-conversion ROI.', href: '/services#performance' },
  { icon: Globe, title: 'Web Development', desc: 'Next-level websites with SEO focus, blazing speed, and ongoing maintenance.', href: '/services#web' },
  { icon: Smartphone, title: 'App Development', desc: 'Custom iOS & Android applications with seamless UX and robust backend.', href: '/services#app' },
];

const workItems = [
  {
    client: 'Amazon', category: 'Performance Marketing',
    title: 'Driving 3x ROAS for Amazon Seller Central Campaign',
    metrics: ['3x ROAS', '40% Lower CPC', '85K+ Reach'],
    color: '#29C8D5',
  },
  {
    client: 'Zolo', category: 'Branding + Social Media',
    title: 'Full Brand Refresh and Social Growth Strategy',
    metrics: ['2.5x Engagement', '50K New Followers', 'NPS +42'],
    color: '#29C8D5',
  },
  {
    client: 'Edureka', category: 'Web Development',
    title: 'High-Performance Landing Page Suite for EdTech Courses',
    metrics: ['68% Faster Load', '+29% Conversions', 'SEO Top 3'],
    color: '#29C8D5',
  },
];

const products = [
  {
    name: 'Treva OS',
    tag: 'Coming Soon',
    desc: 'An all-in-one business operating system  manage your brand, campaigns, and analytics from a single intelligent dashboard.',
    icon: Zap,
    href: '/products/treva-os',
  },
  {
    name: 'Treva Agent',
    tag: 'Coming Soon',
    desc: 'An autonomous AI agent that qualifies leads, monitors campaigns, and books meetings  24/7 without human intervention.',
    icon: Target,
    href: '/products/treva-agent',
  },
  {
    name: 'Make My Cake',
    tag: 'Coming Soon',
    desc: 'A marketplace connecting cake lovers with artisan bakers near them. Smart discovery, seamless ordering.',
    icon: Star,
    href: '/products/make-my-cake',
  },
];

const testimonials = [
  {
    name: 'Rahul Sharma', role: 'CEO, Amazon Seller Partner', stars: 5,
    text: 'Treva transformed our Amazon advertising. Their performance marketing team cut our CPC by 40% while tripling our ROAS. Incredible ROI in just 90 days.',
  },
  {
    name: 'Priya Nair', role: 'Marketing Head, Zolo',  stars: 5,
    text: 'The brand refresh Treva delivered was exactly what we needed. Our social engagement doubled and we gained 50,000+ new followers within the first quarter.',
  },
  {
    name: 'Aditya Verma', role: 'Founder, District 6', stars: 5,
    text: 'Our event campaigns run like clockwork now. Treva\'s social team creates content that actually resonates with our crowd. House full, every time.Great Team',
  },
  {
    name: 'Sneha Kapoor', role: 'Co-founder, Edureka', stars: 5,
    text: 'The website Treva built for us loads 68% faster and conversions went up by 29% immediately. Their SEO work got us to top 3 on Google within 6 months.',
  },
];

const workflowSteps = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your brand, goals, and current challenges in a free 30-min session.' },
  { step: '02', title: 'Strategy Build', desc: 'Our team crafts a custom roadmap  channels, budget, content, and timelines.' },
  { step: '03', title: 'Creative Execution', desc: 'World-class design and content production that represents your brand perfectly.' },
  { step: '04', title: 'Launch & Activate', desc: 'We go live across all channels with precision tracking from day one.' },
  { step: '05', title: 'Optimize & Scale', desc: 'Continuous A/B testing, analytics review, and campaign optimization.' },
  { step: '06', title: 'Report & Grow', desc: 'Monthly performance reviews with clear metrics and next-quarter strategy.' },
];

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

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

// Particle Canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,200,213,${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
function ProductSlider() {
  const [active, setActive] = useState(0);

const items = [
  {
    name: 'Treva OS',
    image: '/images/1.svg',
    tag: 'Coming Soon',
    quote: 'One platform to manage your entire brand operation',
    desc: 'An all-in-one business operating system  manage your brand, campaigns, and analytics from a single intelligent dashboard.',
    impacts: ['Campaign Manager', 'AI Insights Engine', 'Brand Health Score', 'CRM Integration'],
    href: '/products/treva-os',
    color: '#29C8D5',
  },
  {
    name: 'Treva Agent',
    image: '/images/2.svg',
    tag: 'Coming Soon',
    quote: 'Your 24/7 autonomous marketing agent that never sleeps',
    desc: 'An autonomous AI agent that qualifies leads, monitors campaigns, and books meetings  24/7 without human intervention.',
    impacts: ['Lead Qualification', 'Auto Ad Optimization', 'Meeting Booking', 'Email Sequences'],
    href: '/products/treva-agent',
    color: '#7C3AED',
  },
  {
    name: 'Make My Cake',
    image: '/images/3.svg',
    tag: 'Coming Soon',
    quote: 'Connecting cake lovers with artisan bakers near them',
    desc: 'A two-sided marketplace connecting cake lovers with local artisan bakers. Smart discovery, seamless ordering, real-time tracking.',
    impacts: ['Baker Discovery', 'Custom Cake Orders', 'Real-time Tracking', 'Baker Dashboard'],
    href: '/products/make-my-cake',
    color: '#F59E0B',
  },
  {
    name: 'Treva EAMS',
    image: '/images/4.svg',
    tag: 'Coming Soon',
    quote: 'Enterprise analytics and asset management in one suite',
    desc: 'A powerful enterprise-grade analytics and asset management platform with unified reporting across all marketing channels.',
    impacts: ['Unified Analytics', 'Asset Management', 'Predictive Models', 'Multi-brand Support'],
    href: '/products/treva-eams',
    color: '#10B981',
  },
];

  const current = items[active];

  return (
    <div>
      {/* Main Card */}
      <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left  Visual */}
          <div className="relative overflow-hidden bg-[#0D1117]"
            style={{ minHeight: '280px' }}>
            
            {/* Tag */}
            <span className="absolute top-4 left-4 z-10 text-xs font-700 px-3 py-1 rounded-full bg-white text-black">
              {current.tag}
            </span>

            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Right  Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: current.color }}>
              {current.name}
            </p>
            <h3 className="font-black text-white text-xl md:text-2xl mb-4 leading-tight">
              "{current.quote}"
            </h3>
            <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6">
              {current.desc}
            </p>
            <Link href={current.href} className="btn-primary w-fit"
              style={{ background: current.color, color: '#000' }}>
              Learn More & Join Waitlist
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* DRAG TO EXPLORE nav */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button onClick={() => setActive((prev) => (prev - 1 + items.length) % items.length)}
          className="text-[#8A9AB0] hover:text-white transition-colors text-sm flex items-center gap-2">
          ← PREV
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === active ? current.color : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
        <button onClick={() => setActive((prev) => (prev + 1) % items.length)}
          className="text-[#8A9AB0] hover:text-white transition-colors text-sm flex items-center gap-2">
          NEXT →
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Treva | Digital Marketing Agency in Bengaluru | Branding, Ads & Web"
        description="Treva is Bengaluru's top digital marketing agency. We deliver performance marketing, Google & Meta Ads, branding, social media management, SEO, web & app development for high-growth brands."
        url="https://treva.in"
        keywords="digital marketing agency Bengaluru, digital marketing agency Bangalore, performance marketing agency India, Google Ads agency, Meta Ads agency, social media marketing Bengaluru, branding agency Bangalore, SEO agency Bengaluru, web development agency India, full service digital agency"
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#000000] grid-bg pt-24">
        <ParticleCanvas />

        {/* Teal glow blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            Where{' '}
            <span className="teal-gradient-text">Creativity</span>
            <br />
            Meets Technology.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A9AB0] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We help ambitious brands grow with strategy, design, performance marketing
            and intelligent technology all under one roof{' '}  
            <span className="font-semibold text-cyan-400">built to scale and drive measurable ROI.</span>          
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary text-sm">
              Get a Free Audit
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
            {/* ── CLIENT MARQUEE ───────────────────────────── */}
      <section className="py-8 bg-[#000000] overflow-hidden relative">
        <p className="text-center text-[#8A9AB0] text-xs font-600 uppercase tracking-widest mb-6">
          Trusted by Brands
        </p>

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 bottom-0 w-96 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 bottom-0 w-96 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...clients, ...clients].map((logo, i) => (
              <div key={i} className="flex items-center justify-center bg-white rounded-xl px-8 py-4"
                style={{ flexShrink: 0 }}>
                <img src={logo} className="h-16 w-auto object-contain" style={{ maxWidth: '160px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">What We Do</span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Services Built to <span className="teal-gradient-text">Scale</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto">
              From brand identity to intelligent automation everything your business needs to dominate online.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <Link
                  href={href}
                  className="group block bg-gradient-to-br from-[#06121a] via-[#081018] to-[#0b2a2f] border border-[rgba(41,200,213,0.12)] rounded-2xl p-7 card-glow transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-5 group-hover:bg-[rgba(41,200,213,0.15)] transition-colors">
                    <Icon size={22} className="text-[#29C8D5]" />
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2 group-hover:text-[#29C8D5] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#29C8D5] text-xs font-600 uppercase tracking-wide">
                    Learn More <ArrowUpRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY CHOOSE TREVA ─────────────────────────── */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="section-pill">Why Treva</span>
              <h2
                className="font-black text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                Not Just an Agency,<br />
                <span className="teal-gradient-text">Your Growth Partner</span>
              </h2>
              <p className="text-[#8A9AB0] text-base leading-relaxed mb-8">
                We embed into your business like an in-house team. Our blend of creative excellence
                and data-driven strategy means every campaign is built to perform, not just impress.
              </p>
              <div className="space-y-4">
                {[
                  'Full-stack in-house team no outsourcing',
                  'Real-time reporting dashboard access',
                  'Dedicated account manager for every client',
                  'AI-powered tools for faster, smarter execution',
                  'Bengaluru-local with a global mindset',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#29C8D5] mt-0.5 shrink-0" />
                    <span className="text-[#8A9AB0] text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Meet the Team
                <ArrowUpRight size={16} />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3x', label: 'Avg. ROAS Delivered', sub: 'Across performance campaigns' },
                { value: '95%', label: 'Client Retention Rate', sub: 'Because results speak for themselves' },
                { value: '48hr', label: 'Avg. Turnaround', sub: 'For creative deliverables' },
                { value: '0', label: <>Hidden <br /> Costs</>, sub: 'Transparent pricing always' },
              ].map(({ value, label, sub }, i) => (
                <FadeIn key={label} delay={i * 0.1}>
                  <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow testimonial-card relative">
                  <div
                    className="font-black text-white mb-2"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
                  >
                    {value}
                  </div>
                    <div className="text-white font-600 text-sm mb-1">{label}</div>
                    <div className="text-[#8A9AB0] text-xs">{sub}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ─────────────────────────────────── */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">How We Work</span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              The Treva <span className="teal-gradient-text">Workflow</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto">
              A proven 6-step process designed to take your brand from where it is to where it deserves to be.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="relative bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-7 card-glow group">
                  <div className="text-[4rem] font-black text-[rgba(255,255,255,0.08)] absolute top-4 right-6 leading-none select-none">
                    {step}
                  </div>
                  <div className="text-[#29C8D5] font-800 text-sm mb-3 uppercase tracking-wider">
                    Step {step}
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2 group-hover:text-[#29C8D5] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ─────────────────────────── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">Our Products</span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Built In-House, <span className="teal-gradient-text">For the Future</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto">
              Beyond services we build products that solve real problems for businesses and consumers alike.
            </p>
          </FadeIn>

          {/* Slider */}
          <ProductSlider />
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">Testimonials</span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Why Brands <span className="teal-gradient-text">Love Treva</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-lg mx-auto">
              Real brands. Real results. Real stories of growth.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ name, role, stars, text }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow relative">
                  <Quote size={28} className="text-[rgba(41,200,213,0.15)] absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-[#29C8D5] fill-[#29C8D5]" />
                    ))}
                  </div>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6 italic">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[rgba(41,200,213,0.1)] border border-[rgba(41,200,213,0.2)] flex items-center justify-center">
                      <span className="text-[#29C8D5] font-700 text-sm">{name[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-600 text-sm">{name}</div>
                      <div className="text-[#8A9AB0] text-xs">{role}</div>
                    </div>
                  </div>
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