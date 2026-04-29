import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight, Target, BarChart3, Globe,
  Smartphone, Megaphone, Video, Palette, Users,
  Star, Quote, CheckCircle, ArrowRight, TrendingUp, Zap
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { products as productCatalog } from '../data/products';

const clients = [
  '/logos/1.svg', '/logos/2.svg', '/logos/3.svg', '/logos/4.svg',
  '/logos/5.svg', '/logos/6.svg', '/logos/7.svg', '/logos/8.svg',
  '/logos/9.svg', '/logos/10.svg', '/logos/11.svg', '/logos/12.svg',
  '/logos/13.svg', '/logos/14.svg', '/logos/15.svg', '/logos/16.svg',
  '/logos/1.svg', '/logos/2.svg', '/logos/3.svg', '/logos/4.svg',
  '/logos/5.svg', '/logos/6.svg', '/logos/7.svg', '/logos/8.svg',
  '/logos/9.svg', '/logos/10.svg', '/logos/11.svg', '/logos/12.svg',
  '/logos/13.svg', '/logos/14.svg', '/logos/15.svg', '/logos/16.svg',
];

const services = [
  { icon: Target, title: 'Google Search Ads', desc: 'Capture high-intent buyers at the exact moment they search. We engineer keyword strategies, ad structures, and bidding systems that slash CPL while scaling volume.', href: '/services#performance' },
  { icon: BarChart3, title: 'Performance Max', desc: "Google's most powerful campaign type, managed with precision. Full asset optimisation, audience signal design, and ROAS governance.", href: '/services#performance' },
  { icon: TrendingUp, title: 'Google Shopping Ads', desc: 'Feed-optimised Shopping campaigns that drive high purchase-intent traffic with efficient ROAS for eCommerce brands.', href: '/services#performance' },
  { icon: Zap, title: 'Display & Remarketing', desc: 'Re-engage prospects who did not convert. Segmented remarketing funnels that bring back lost revenue at low CPC.', href: '/services#performance' },
  { icon: Video, title: 'YouTube Ads', desc: 'Performance-driven video campaigns tracked to actual conversions — not just views. Mid-funnel intent at scale.', href: '/services#performance' },
  { icon: Globe, title: 'Landing Page & CRO', desc: 'A great ad wasted on a weak landing page is money burned. We audit and optimise your post-click experience.', href: '/services#performance' },
];

const stats = [
  { value: '₹15 Cr+', label: 'Google Ad Budget Managed', sub: 'Across all active clients' },
  { value: '3.8x', label: 'Average ROAS Delivered', sub: 'Across all active campaigns' },
  { value: '42%', label: 'Average CPL Reduction', sub: 'After Treva account takeover' },
  { value: '200+', label: 'Campaigns Launched', sub: 'Google Ads campaigns optimised' },
];

const workflowSteps = [
  { step: '01', title: 'Free Google Ads Audit', desc: 'We tear apart your existing account — keyword waste, Quality Score gaps, bidding inefficiencies, and missed opportunities. You get a full report, free.' },
  { step: '02', title: 'Strategy Architecture', desc: 'We build a campaign architecture designed around your specific CPL or ROAS target. No templates. No copy-paste from previous clients.' },
  { step: '03', title: 'Precision Campaign Launch', desc: 'Ad copy written, landing pages audited, conversion tracking verified, bid strategies set. We do not launch until every layer is right.' },
  { step: '04', title: 'Optimise & Scale', desc: 'Weekly bid adjustments, monthly creative refreshes, quarterly strategy reviews. You get a live dashboard — not a once-a-month PDF.' },
];

const testimonials = [
  {
    name: 'Ankesh', role: 'McKinsey', stars: 5,
    text: 'Treva helped us create a powerful brand that resonates with our target audience. We could not be happier with the results. The team is sharp, responsive, and actually understands our business — not just our ad account.',
  },
  {
    name: 'Akhil Sikri', role: 'Co-founder, Zolostays', stars: 5,
    text: "I've been consistently impressed by this agency's commitment to excellence. They've shouldered a multitude of responsibilities and have proven to be an unwavering support system. Their expertise and relentless drive to achieve targets are truly commendable.",
  },
  {
    name: 'Ashok Reddy', role: 'CEO, BETSOL', stars: 5,
    text: "The agency's unwavering commitment to enhancing the customer experience and taking complete ownership of tasks is not only impressive but also incredibly inspiring.",
  },
];

const homepageFAQ = [
  {
    q: 'How much Google Ads budget do you manage at Treva?',
    a: 'Treva has managed over ₹15 Crore in Google Ads spend across industries including SaaS, eCommerce, real estate, education, and healthcare in Bengaluru and across India.',
  },
  {
    q: 'What is performance marketing?',
    a: 'Performance marketing is a form of digital advertising where every rupee spent is tied to a measurable outcome — a click, a lead, a sale, or a customer. Unlike brand advertising, performance marketing campaigns are optimised in real-time based on data.',
  },
  {
    q: 'How long does it take to see results from Google Ads?',
    a: 'Most clients see improved CPL and ROAS within the first 4–6 weeks as the campaign optimises. Full performance typically stabilises within 90 days.',
  },
  {
    q: 'Why is my Google Ads cost per lead so high?',
    a: 'High CPL is usually caused by keyword sprawl (too many irrelevant keywords), poor Quality Scores, broad match without negative keyword controls, or a weak landing page. Treva audits all four in our free account review.',
  },
  {
    q: 'Do you work with small businesses or only enterprises?',
    a: 'We work with growth-stage startups spending ₹50K/month and enterprise brands investing ₹50 Lakh+/month. Our strategy scales to your budget.',
  },
  {
    q: 'Are you based in Bangalore?',
    a: 'Yes — Treva is based in Vijayanagar, Bengaluru. We serve clients across India and internationally.',
  },
  {
    q: 'What is the difference between performance marketing and digital marketing?',
    a: 'Digital marketing is a broad term covering all online marketing activities. Performance marketing is a specific subset where spend is directly tied to measurable results — leads, sales, and ROAS — not just reach or impressions.',
  },
  {
    q: 'Do you manage Google Ads accounts outside of Bangalore?',
    a: 'Yes. While we are headquartered in Bengaluru, we manage Google Ads campaigns for clients across India — Mumbai, Delhi, Hyderabad, Chennai, and Pan-India brands.',
  },
];

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

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,200,213,${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    const handleResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function ProductSlider() {
  const [active, setActive] = useState(0);
  const items = [
    {
      name: 'Treva CRM', image: '/images/crm.png', tag: 'Now Live',
      quote: 'Your sales pipeline, follow-ups, and client history in one live workspace',
      desc: 'Treva CRM is free right now and built for teams that want faster closures, cleaner handoffs, and a better way to manage every lead from first touch to renewal.',
      impacts: ['Lead Capture', 'Pipeline Tracking', 'Workflow Automation', 'Activity Logs'],
      href: '/products/treva-crm', color: '#29C8D5', ctaLabel: 'View Details', external: false,
      imageClassName: 'object-contain p-8 sm:p-10 bg-white',
    },
    {
      name: 'Treva Agent', image: '/images/2.svg', tag: 'Coming Soon',
      quote: 'Your 24/7 autonomous marketing agent that never sleeps',
      desc: 'An autonomous AI agent that qualifies leads, monitors campaigns, and books meetings — 24/7 without human intervention.',
      impacts: ['Lead Qualification', 'Auto Ad Optimization', 'Meeting Booking', 'Email Sequences'],
      href: '/products/treva-agent', color: '#7C3AED', ctaLabel: 'Learn More & Join Waitlist',
    },
    {
      name: 'Make My Cake', image: '/images/3.svg', tag: 'Coming Soon',
      quote: 'Connecting cake lovers with artisan bakers near them',
      desc: 'A two-sided marketplace connecting cake lovers with local artisan bakers. Smart discovery, seamless ordering, real-time tracking.',
      impacts: ['Baker Discovery', 'Custom Cake Orders', 'Real-time Tracking', 'Baker Dashboard'],
      href: '/products/make-my-cake', color: '#F59E0B', ctaLabel: 'Learn More & Join Waitlist',
    },
    {
      name: 'Treva EAMS', image: '/images/4.svg', tag: 'Coming Soon',
      quote: 'Enterprise analytics and asset management in one suite',
      desc: 'A powerful enterprise-grade analytics and asset management platform with unified reporting across all marketing channels.',
      impacts: ['Unified Analytics', 'Asset Management', 'Predictive Models', 'Multi-brand Support'],
      href: '/products/treva-eams', color: '#10B981', ctaLabel: 'Learn More & Join Waitlist',
    },
  ];
  const current = items[active];
  return (
    <div>
      <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden bg-[#0D1117]" style={{ minHeight: '280px' }}>
            <span className="absolute top-4 left-4 z-10 text-xs font-700 px-3 py-1 rounded-full bg-white text-black">{current.tag}</span>
            <img src={current.image} alt={current.name} className={`absolute inset-0 h-full w-full ${current.imageClassName || 'object-cover'}`} />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: current.color }}>{current.name}</p>
            <h3 className="font-black text-white text-xl md:text-2xl mb-4 leading-tight">"{current.quote}"</h3>
            <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6">{current.desc}</p>
            {current.external ? (
              <a href={current.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit" style={{ background: current.color, color: '#000' }}>
                {current.ctaLabel}<ArrowUpRight size={14} />
              </a>
            ) : (
              <Link href={current.href} className="btn-primary w-fit" style={{ background: current.color, color: '#000' }}>
                {current.ctaLabel}<ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <button onClick={() => setActive((prev) => (prev - 1 + items.length) % items.length)} className="text-[#8A9AB0] hover:text-white transition-colors text-sm flex items-center gap-2">← PREV</button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="w-2 h-2 rounded-full transition-all" style={{ background: i === active ? current.color : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
        <button onClick={() => setActive((prev) => (prev + 1) % items.length)} className="text-[#8A9AB0] hover:text-white transition-colors text-sm flex items-center gap-2">NEXT →</button>
      </div>
    </div>
  );
}

export default function Home() {
  const crmProduct = productCatalog.find((product) => product.slug === 'treva-crm');

  return (
    <>
      <SEOHead
        title="Performance Marketing Agency in Bangalore | ₹15 Cr+ Google Ads Managed | Treva"
        description="Treva is Bangalore's performance marketing agency with ₹15 Cr+ in Google Ads managed. We drive measurable ROI through Search, Shopping, and Performance Max campaigns. Get a free audit."
        url="https://www.treva.in"
        keywords="performance marketing agency Bangalore, Google Ads agency Bengaluru, PPC agency Bangalore, Google Ads management India, Google Ads expert Bangalore, digital marketing agency Bengaluru, performance marketing company Vijayanagar Bangalore"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: homepageFAQ.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }}
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#000000] grid-bg pt-24">
        <ParticleCanvas />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {crmProduct && (
            <div className="mb-8 flex justify-center">
              <Link href={crmProduct.detailHref || '/products/treva-crm'}
                className="inline-flex items-center gap-3 rounded-full border border-[#29C8D5]/20 bg-[#081018] px-4 py-2 text-sm text-white transition-colors hover:border-[#29C8D5]/40">
                <span className="inline-flex items-center gap-2 text-[#7FE7FF]">
                  <span className="h-2 w-2 rounded-full bg-[#29C8D5]" />
                  Treva CRM is live and free
                </span>
                <span className="text-[#8A9AB0]">See Treva CRM details</span>
              </Link>
            </div>
          )}

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5.4vw, 4.4rem)', letterSpacing: '-0.03em' }}
          >
            Bengaluru's Performance Marketing Agency —
            <br />
            <span className="teal-gradient-text">₹15 Crore+ in Google Ads Managed.</span>
          </motion.h1>

          {/* H2 sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A9AB0] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Stop guessing. Start measuring. We build Google Ads campaigns engineered around your Cost Per Lead, ROAS, and revenue goals — not vanity metrics.
          </motion.h2>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link href="/contact" className="btn-primary text-sm">
              Get Your Free Google Ads Audit
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline text-sm">
              View Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16 text-sm text-[#8A9AB0]"
          >
            <span><strong className="text-white">₹15 Cr+</strong> Google Ads Managed</span>
            <span className="hidden sm:inline text-[#29C8D530]">|</span>
            <span><strong className="text-white">3.8x</strong> Avg. ROAS Delivered</span>
            <span className="hidden sm:inline text-[#29C8D530]">|</span>
            <span><strong className="text-white">42%</strong> Avg. CPL Reduction</span>
            <span className="hidden sm:inline text-[#29C8D530]">|</span>
            <span><strong className="text-white">200+</strong> Campaigns Launched</span>
            <span className="hidden sm:inline text-[#29C8D530]">|</span>
            <span>Trusted by <strong className="text-white">McKinsey to D2C Startups</strong></span>
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT MARQUEE ───────────────────────────── */}
      <section className="py-8 bg-[#000000] overflow-hidden relative">
        <p className="text-center text-[#8A9AB0] text-xs font-600 uppercase tracking-widest mb-6">
          Trusted by Brands Across India
        </p>
        <div className="absolute left-0 top-0 bottom-0 w-96 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-96 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...clients, ...clients].map((logo, i) => (
              <div key={i} className="marquee-logo-card flex items-center justify-center rounded-xl px-6 py-4 sm:px-8" style={{ flexShrink: 0 }}>
                <img src={logo} alt="Treva client brand logo" className="h-16 w-auto object-contain" style={{ maxWidth: '160px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / AGITATION ──────────────────────── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="section-pill">Sound Familiar?</span>
            <h2 className="font-black text-white mt-4 mb-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Is Your Google Ads Spend <span className="teal-gradient-text">Actually Working?</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { quote: '"We\'re spending ₹5 Lakh/month on Google Ads but have no idea if it\'s working."' },
              { quote: '"Our last agency sent reports, not results."' },
              { quote: '"Our CPL is through the roof and our team can\'t figure out why."' },
            ].map(({ quote }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 text-left card-glow">
                  <p className="text-[#8A9AB0] text-sm leading-relaxed italic">{quote}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[#8A9AB0] text-base mt-8 max-w-2xl mx-auto leading-relaxed">
              These are not budget problems. They are strategy problems. And they are exactly why Treva exists.{' '}
              <Link href="/contact" className="text-[#29C8D5] hover:underline font-600">Get a free audit →</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">What We Do</span>
            <h2 className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Google Ads & Performance Marketing Services{' '}
              <span className="teal-gradient-text">That Drive Real Revenue</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto">
              We specialise in Google Ads performance — and we do it with obsessive depth. Every service is built around your CPL and ROAS targets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <Link href={href}
                  className="group block bg-gradient-to-br from-[#06121a] via-[#081018] to-[#0b2a2f] border border-[rgba(41,200,213,0.12)] rounded-2xl p-7 card-glow transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-5 group-hover:bg-[rgba(41,200,213,0.15)] transition-colors">
                    <Icon size={22} className="text-[#29C8D5]" />
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2 group-hover:text-[#29C8D5] transition-colors">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#29C8D5] text-xs font-600 uppercase tracking-wide">
                    Learn More <ArrowUpRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS / PROOF ────────────────────────────── */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">The Numbers</span>
            <h2 className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              The Numbers Behind <span className="teal-gradient-text">Treva's Performance</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-lg mx-auto">We do not make promises. We show proof.</p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, sub }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow text-center">
                  <div className="font-black text-[#29C8D5] mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>{value}</div>
                  <div className="text-white font-600 text-sm mb-1">{label}</div>
                  <div className="text-[#8A9AB0] text-xs">{sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE TREVA ─────────────────────────── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="section-pill">Why Treva</span>
              <h2 className="font-black text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Why Bengaluru's Fastest-Growing Brands{' '}
                <span className="teal-gradient-text">Choose Treva Over Larger Agencies</span>
              </h2>
              <p className="text-[#8A9AB0] text-base leading-relaxed mb-8">
                We are not a 500-person agency. We are a focused team of Google Ads specialists based in Vijayanagar, Bengaluru, who believe that depth beats breadth — every time.
              </p>
              <div className="space-y-4">
                {[
                  'You speak directly to the strategist running your account — not an account manager',
                  'Real-time reporting dashboard access — not a once-a-month PDF',
                  '₹15 Crore+ in Google Ads budget managed across SaaS, eCommerce, real estate & more',
                  'We set your CPL and ROAS targets before spending a single rupee',
                  'Bengaluru-based team — faster decisions, local market expertise',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#29C8D5] mt-0.5 shrink-0" />
                    <span className="text-[#8A9AB0] text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Meet the Team <ArrowUpRight size={16} />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '₹15 Cr+', label: 'Ad Spend Managed', sub: 'Across all clients' },
                { value: '3.8x', label: 'Avg. ROAS', sub: 'Across active campaigns' },
                { value: '42%', label: 'CPL Reduction', sub: 'Post account takeover' },
                { value: '48 hrs', label: 'Audit Turnaround', sub: 'Full campaign report' },
              ].map(({ value, label, sub }, i) => (
                <FadeIn key={label} delay={i * 0.1}>
                  <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow relative flex h-full min-h-[200px] flex-col justify-between">
                    <div className="font-black text-white mb-2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>{value}</div>
                    <div>
                      <div className="text-white font-600 text-sm mb-1">{label}</div>
                      <div className="text-[#8A9AB0] text-xs">{sub}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────── */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">How We Work</span>
            <h2 className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              How We Turn Google Ad Spend Into{' '}
              <span className="teal-gradient-text">Measurable Business Growth</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto">
              A proven 4-step process from free audit to scaled revenue.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {workflowSteps.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="relative bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-7 card-glow group h-full flex flex-col">
                  <div className="text-[4rem] font-black text-[rgba(255,255,255,0.06)] absolute top-4 right-6 leading-none select-none">{step}</div>
                  <div className="text-[#29C8D5] font-800 text-sm mb-3 uppercase tracking-wider">Step {step}</div>
                  <h3 className="font-700 text-white text-lg mb-2 group-hover:text-[#29C8D5] transition-colors">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed flex-grow">{desc}</p>
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
            <h2 className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Built In-House, <span className="teal-gradient-text">For the Future</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-xl mx-auto">
              Beyond services — we build products that solve real problems for businesses and consumers alike.
            </p>
          </FadeIn>
          <ProductSlider />
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="section-pill">Testimonials</span>
            <h2 className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Results Our Clients <span className="teal-gradient-text">Actually Talk About</span>
            </h2>
            <p className="text-[#8A9AB0] text-lg max-w-lg mx-auto">
              Results-driven agencies do not need to boast. Their clients do it for them.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {testimonials.map(({ name, role, stars, text }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 card-glow relative h-full flex flex-col">
                  <Quote size={28} className="text-[rgba(41,200,213,0.15)] absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-[#29C8D5] fill-[#29C8D5]" />
                    ))}
                  </div>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6 italic flex-grow">"{text}"</p>
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

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">FAQ</span>
            <h2 className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions About{' '}
              <span className="teal-gradient-text">Performance Marketing & Google Ads</span>
            </h2>
            <p className="text-[#8A9AB0] max-w-xl mx-auto">
              Everything you need to know before you pick up the phone.{' '}
              <Link href="/faq" className="text-[#29C8D5] hover:underline">See all FAQs →</Link>
            </p>
          </FadeIn>

          <div className="space-y-4">
            {homepageFAQ.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow">
                  <h3 className="font-700 text-white mb-2 text-base">{q}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
              style={{ background: 'radial-gradient(ellipse at bottom left, rgba(41,200,213,0.3) 0%, rgba(41,200,213,0.05) 40%, #0D1117 70%)' }}>
              <h2 className="font-black text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Get Your Free Google Ads Audit —{' '}
                <span className="teal-gradient-text">Worth ₹15,000. Zero Cost to You.</span>
              </h2>
              <p className="text-[#8A9AB0] text-lg mb-8 max-w-lg mx-auto">
                We will audit your Google Ads account, identify where budget is being wasted, and give you a concrete roadmap to hit your CPL or ROAS targets. No obligation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Claim My Free Audit <ArrowUpRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
