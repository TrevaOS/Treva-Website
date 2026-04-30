import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Target, BarChart3, Globe,
  Video, Star, Quote, CheckCircle, TrendingUp, Zap
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const clients = [
  { src: '/logos/12.svg', width: 140, height: 56 },
  { src: '/logos/15.svg', width: 140, height: 56 },
  { src: '/logos/10.svg', width: 140, height: 56 },
  { src: '/logos/2.svg', width: 140, height: 56 },
  { src: '/logos/13.svg', width: 140, height: 56 },
  { src: '/logos/1.svg', width: 140, height: 56 },
  { src: '/logos/11.svg', width: 140, height: 56 },
  { src: '/logos/9.svg', width: 140, height: 56 },
];

// Issue #1: No em-dashes. Issue #3: No arrow icons on service cards.
// Issue #6: Equal-height cards via uniform desc length.
const services = [
  { icon: Target,     title: 'Google Search Ads',    desc: 'Capture high-intent buyers at the exact moment they search. We engineer keyword strategies, ad structures and bidding systems that slash CPL while scaling volume.' },
  { icon: BarChart3,  title: 'Performance Max',       desc: "Google's most powerful campaign type managed with precision. Full asset optimisation, audience signal design and ROAS governance across every channel." },
  { icon: TrendingUp, title: 'Google Shopping Ads',   desc: 'Feed-optimised Shopping campaigns that drive high purchase-intent traffic with efficient ROAS for eCommerce and D2C brands across India.' },
  { icon: Zap,        title: 'Display and Remarketing', desc: 'Re-engage prospects who did not convert. Segmented remarketing funnels that bring back lost revenue at a low cost per click.' },
  { icon: Video,      title: 'YouTube Ads',           desc: 'Performance-driven video campaigns tracked to actual conversions not just views. Mid-funnel intent built at scale across Google Video Network.' },
  { icon: Globe,      title: 'Landing Page and CRO',  desc: 'A great ad wasted on a weak landing page is money lost. We audit and optimise your post-click experience to turn more clicks into customers.' },
];

const stats = [
  { value: '₹15 Cr+', label: 'Google Ads Managed',   sub: 'Across all active clients' },
  { value: '3.8x',    label: 'Average ROAS Delivered', sub: 'Across all active campaigns' },
  { value: '42%',     label: 'Average CPL Reduction',  sub: 'After Treva account takeover' },
  { value: '200+',    label: 'Campaigns Launched',     sub: 'Google Ads campaigns optimised' },
];

const workflowSteps = [
  { step: '01', title: 'Google Ads Audit',      desc: 'We review your existing account keyword waste, Quality Score gaps, bidding inefficiencies and missed opportunities. You get a full report at no charge.' },
  { step: '02', title: 'Strategy Architecture', desc: 'We build a campaign architecture designed around your specific CPL or ROAS target. No templates and no copy-paste from previous clients.' },
  { step: '03', title: 'Campaign Launch',        desc: 'Ad copy written, landing pages audited, conversion tracking verified and bid strategies set. We do not go live until every layer is right.' },
  { step: '04', title: 'Optimise and Scale',     desc: 'Weekly bid adjustments, monthly creative refreshes and quarterly strategy reviews. You get a live dashboard not a once-a-month report.' },
];

const testimonials = [
  {
    name: 'Ankesh', role: 'McKinsey', stars: 5,
    text: 'Treva helped us create a powerful brand that resonates with our target audience. The team is sharp, responsive and actually understands our business not just our ad account.',
  },
  {
    name: 'Akhil Sikri', role: 'Co-founder, Zolostays', stars: 5,
    text: "I have been consistently impressed by this agency's commitment to excellence. They have shouldered a multitude of responsibilities and proven to be an unwavering support system.",
  },
  {
    name: 'Ashok Reddy', role: 'CEO, BETSOL', stars: 5,
    text: "The agency's unwavering commitment to enhancing the customer experience and taking complete ownership of tasks is not only impressive but also incredibly inspiring.",
  },
];

const homepageFAQ = [
  {
    q: 'How much Google Ads budget do you manage at Treva?',
    a: 'Treva has managed over ₹15 Crore in Google Ads spend across industries including SaaS, eCommerce, real estate, education and healthcare in Bengaluru and across India.',
  },
  {
    q: 'What is performance marketing?',
    a: 'Performance marketing is a form of digital advertising where every rupee spent is tied to a measurable outcome such as a click, a lead, a sale or a customer. Unlike brand advertising, performance marketing campaigns are optimised in real-time based on data.',
  },
  {
    q: 'How long does it take to see results from Google Ads?',
    a: 'Most clients see improved CPL and ROAS within the first 4 to 6 weeks as the campaign optimises. Full performance typically stabilises within 90 days.',
  },
  {
    q: 'Why is my Google Ads cost per lead so high?',
    a: 'High CPL is usually caused by keyword sprawl, poor Quality Scores, broad match without negative keyword controls or a weak landing page. Treva audits all four in the account review.',
  },
  {
    q: 'Do you work with small businesses or only enterprises?',
    a: 'We work with growth-stage startups spending ₹50,000 per month and enterprise brands investing ₹50 Lakh or more per month. Our strategy scales to your budget.',
  },
  {
    q: 'Are you based in Bangalore?',
    a: 'Yes. Treva is based in Vijayanagar, Bengaluru. We serve clients across India and internationally.',
  },
];

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const media = window.matchMedia('(min-width: 768px)');
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', updateEnabled);
      return () => media.removeEventListener('change', updateEnabled);
    }

    media.addListener(updateEnabled);
    return () => media.removeListener(updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
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
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function ProductSlider() {
  const [active, setActive] = useState(0);
  const items = [
    {
      name: 'Treva CRM', image: '/images/crm.png', tag: 'Now Live',
      quote: 'Your sales pipeline, follow-ups and client history in one live workspace',
      desc: 'Treva CRM is built for teams that want faster closures, cleaner handoffs and a better way to manage every lead from first touch to renewal.',
      href: '/products/treva-crm', color: '#29C8D5', ctaLabel: 'View Details', external: false,
      imageClassName: 'object-contain p-8 sm:p-10 bg-white',
    },
    {
      name: 'Treva Agent', image: '/images/2.svg', tag: 'Coming Soon',
      quote: 'Your 24/7 autonomous marketing agent that never sleeps',
      desc: 'An autonomous AI agent that qualifies leads, monitors campaigns and books meetings without human intervention around the clock.',
      href: '/products/treva-agent', color: '#7C3AED', ctaLabel: 'Join Waitlist',
    },
    {
      name: 'Make My Cake', image: '/images/3.svg', tag: 'Coming Soon',
      quote: 'Connecting cake lovers with artisan bakers near them',
      desc: 'A two-sided marketplace connecting cake lovers with local artisan bakers. Smart discovery, seamless ordering and real-time tracking.',
      href: '/products/make-my-cake', color: '#F59E0B', ctaLabel: 'Join Waitlist',
    },
    {
      name: 'Treva EAMS', image: '/images/4.svg', tag: 'Coming Soon',
      quote: 'Enterprise analytics and asset management in one suite',
      desc: 'A powerful enterprise-grade analytics and asset management platform with unified reporting across all marketing channels.',
      href: '/products/treva-eams', color: '#10B981', ctaLabel: 'Join Waitlist',
    },
  ];
  const current = items[active];
  return (
    <div>
      <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden bg-[#0D1117]" style={{ minHeight: '280px' }}>
            <span className="absolute top-4 left-4 z-10 text-xs font-700 px-3 py-1 rounded-full bg-white text-black">{current.tag}</span>
            <img
              src={current.image}
              alt={current.name}
              width="298"
              height="168"
              fetchPriority="high"
              decoding="async"
              className={`absolute inset-0 h-full w-full ${current.imageClassName || 'object-cover'}`}
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p className="text-xs font-600 uppercase tracking-widest mb-3" style={{ color: current.color }}>{current.name}</p>
            <h3 className="font-black text-white text-xl md:text-2xl mb-4 leading-tight">"{current.quote}"</h3>
            <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6">{current.desc}</p>
            {current.external ? (
              <a href={current.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit" style={{ background: current.color, color: '#000' }}>
                {current.ctaLabel}
              </a>
            ) : (
              <Link href={current.href} className="btn-primary w-fit" style={{ background: current.color, color: '#000' }}>
                {current.ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          onClick={() => setActive((prev) => (prev - 1 + items.length) % items.length)}
          className="min-h-11 px-3 text-[#8A9AB0] hover:text-white transition-colors text-sm"
          aria-label="Show previous product"
        >
          PREV
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-all"
              aria-label={`Show product ${i + 1}`}
              aria-pressed={i === active}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full transition-all"
                style={{ background: i === active ? current.color : 'rgba(255,255,255,0.2)' }}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActive((prev) => (prev + 1) % items.length)}
          className="min-h-11 px-3 text-[#8A9AB0] hover:text-white transition-colors text-sm"
          aria-label="Show next product"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Performance Marketing Agency in Bangalore | ₹15 Cr+ Google Ads Managed | Treva"
        description="Treva is Bangalore's performance marketing agency with ₹15 Cr+ in Google Ads managed. We drive measurable ROI through Search, Shopping and Performance Max campaigns. Get a free audit."
        url="https://www.treva.in"
        keywords="performance marketing agency Bangalore, Google Ads agency Bengaluru, PPC agency Bangalore, Google Ads management India, Google Ads expert Bangalore, digital marketing agency Bengaluru"
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

      {/* ── HERO fits 1920x1080 viewport, no pill, no em-dash ── */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#000000] grid-bg">
        <ParticleCanvas />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black leading-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.8vw, 4rem)', letterSpacing: '-0.03em' }}
          >
            We Build Growth Through Performance Marketing
            <br />
            <span
              className="teal-gradient-text inline-block"
              style={{ fontSize: 'clamp(1.35rem, 2.8vw, 2.3rem)', letterSpacing: '-0.02em' }}
            >
              Experts in Google Ads & Revenue Growth
            </span>
          </motion.h1>

          {/* H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A9AB0] text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Stop guessing. Start measuring. We build Google Ads campaigns engineered around your Cost Per Lead, ROAS and revenue goals.
          </motion.h2>

          {/* CTAs no arrow icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link href="/contact" className="btn-primary text-sm">
              Get Your Free Google Ads Audit
            </Link>
            <Link href="/services" className="btn-outline text-sm">
              View Services
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[#8A9AB0]"
          >
            <span><strong className="text-white">₹15 Cr+</strong> Google Ads Managed</span>
            <span className="hidden sm:inline text-[#29C8D540]">|</span>
            <span><strong className="text-white">3.8x</strong> Avg. ROAS</span>
            <span className="hidden sm:inline text-[#29C8D540]">|</span>
            <span><strong className="text-white">42%</strong> Avg. CPL Reduction</span>
            <span className="hidden sm:inline text-[#29C8D540]">|</span>
            <span><strong className="text-white">200+</strong> Campaigns Launched</span>
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT MARQUEE ── */}
      <section className="py-8 bg-[#000000] overflow-hidden relative">
        <p className="text-center text-[#8A9AB0] text-xs font-600 uppercase tracking-widest mb-6">
          Trusted by Brands Across India
        </p>
        <div className="absolute left-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...clients, ...clients].map((logo, i) => (
              <div key={i} className="marquee-logo-card flex items-center justify-center rounded-xl px-6 py-4 sm:px-8" style={{ flexShrink: 0 }}>
                <img
                  src={logo.src}
                  alt="Treva client brand logo"
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-auto object-contain"
                  style={{ maxWidth: '140px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / AGITATION equal height cards ── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="section-pill">Sound Familiar</span>
            <h2 className="font-black text-white mt-4 mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Is Your Google Ads Spend <span className="teal-gradient-text">Actually Working?</span>
            </h2>
          </FadeIn>
          {/* Issue #2 and #6: all 3 cards same fixed height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'We are spending ₹5 Lakh per month on Google Ads but have no idea if it is working.',
              'Our last agency sent reports, not results.',
              'Our CPL is through the roof and our team cannot figure out why.',
            ].map((quote, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 text-left card-glow h-28 flex items-center">
                  <p className="text-[#8A9AB0] text-sm leading-relaxed italic">"{quote}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[#8A9AB0] text-base mt-8 max-w-xl mx-auto leading-relaxed">
              These are not budget problems. They are strategy problems. That is exactly why Treva exists.{' '}
              <Link href="/contact" className="text-[#29C8D5] hover:underline font-600">Book an audit</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES no arrow icons, equal height cards ── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="section-pill">What We Do</span>
            <h2 className="font-black text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Google Ads Services <span className="teal-gradient-text">That Drive Real Revenue</span>
            </h2>
            <p className="text-[#8A9AB0] text-base max-w-lg mx-auto">
              We specialise in Google Ads performance and do it with obsessive depth. Every service is built around your CPL and ROAS targets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                {/* Issue #2 and #6: fixed min-height so all cards are the same size */}
                <Link href="/services"
                  className="group block bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl p-6 card-glow transition-all duration-300 flex flex-col" style={{ minHeight: '200px' }}>
                  <div className="w-11 h-11 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center mb-4 group-hover:bg-[rgba(41,200,213,0.15)] transition-colors shrink-0">
                    <Icon size={20} className="text-[#29C8D5]" />
                  </div>
                  <h3 className="font-700 text-white text-base mb-2 group-hover:text-[#29C8D5] transition-colors">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed flex-grow">{desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-8">
            <Link href="/services" className="btn-outline text-sm">
              View All Services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS equal sized cards ── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="section-pill">The Numbers</span>
            <h2 className="font-black text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              The Numbers Behind <span className="teal-gradient-text">Treva's Performance</span>
            </h2>
            <p className="text-[#8A9AB0] text-base max-w-lg mx-auto">We do not make promises. We show proof.</p>
          </FadeIn>

          {/* Issue #4: stat cards same size, font capped so last card is not bigger */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map(({ value, label, sub }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow text-center flex flex-col justify-between" style={{ minHeight: '140px' }}>
                  <div className="font-black text-[#29C8D5] mb-1" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>{value}</div>
                  <div>
                    <div className="text-white font-600 text-sm mb-1">{label}</div>
                    <div className="text-[#8A9AB0] text-xs">{sub}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TREVA stat cards equal height, no em-dash ── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <span className="section-pill">Why Treva</span>
              <h2 className="font-black text-white mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
                Why Bengaluru's Fastest-Growing Brands{' '}
                <span className="teal-gradient-text">Choose Treva Over Larger Agencies</span>
              </h2>
              <p className="text-[#8A9AB0] text-sm leading-relaxed mb-7">
                We are a focused team of Google Ads specialists based in Vijayanagar, Bengaluru. Depth beats breadth every time.
              </p>
              <div className="space-y-3">
                {[
                  'You speak directly to the strategist running your account',
                  'Live reporting dashboard access not a monthly report',
                  'Experts in Google Ads & Revenue Growth across SaaS, eCommerce, real estate and more',
                  'CPL and ROAS targets set before a single rupee is spent',
                  'Bengaluru-based team with local market expertise',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#29C8D5] mt-0.5 shrink-0" />
                    <span className="text-[#8A9AB0] text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary mt-7 inline-flex text-sm">
                Meet the Team
              </Link>
            </FadeIn>

            {/* Issue #4 and #6: all 4 stat cards same fixed height */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '₹15 Cr+', label: 'Ad Spend Managed',  sub: 'Across all clients' },
                { value: '3.8x',    label: 'Avg. ROAS',          sub: 'Across active campaigns' },
                { value: '42%',     label: 'CPL Reduction',       sub: 'Post account takeover' },
                { value: '48 hrs',  label: 'Audit Turnaround',   sub: 'Full campaign report' },
              ].map(({ value, label, sub }, i) => (
                <FadeIn key={label} delay={i * 0.1}>
                  <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow flex flex-col justify-between" style={{ height: '160px' }}>
                    <div className="font-black text-white" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em' }}>{value}</div>
                    <div>
                      <div className="text-white font-600 text-sm mb-0.5">{label}</div>
                      <div className="text-[#8A9AB0] text-xs">{sub}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK equal height step cards ── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="section-pill">How We Work</span>
            <h2 className="font-black text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              How We Turn Google Ads Spend Into{' '}
              <span className="teal-gradient-text">Measurable Business Growth</span>
            </h2>
            <p className="text-[#8A9AB0] text-base max-w-lg mx-auto">
              A proven 4-step process from audit to scaled revenue.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="relative bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-6 card-glow flex flex-col" style={{ minHeight: '200px' }}>
                  <div className="text-[3.5rem] font-black text-[rgba(255,255,255,0.05)] absolute top-3 right-5 leading-none select-none">{step}</div>
                  <div className="text-[#29C8D5] font-700 text-xs mb-2 uppercase tracking-wider">Step {step}</div>
                  <h3 className="font-700 text-white text-base mb-2">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed flex-grow">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="section-pill">Our Products</span>
            <h2 className="font-black text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Built In-House <span className="teal-gradient-text">For the Future</span>
            </h2>
            <p className="text-[#8A9AB0] text-base max-w-lg mx-auto">
              Beyond services we build products that solve real problems for businesses and consumers alike.
            </p>
          </FadeIn>
          <ProductSlider />
        </div>
      </section>

      {/* ── TESTIMONIALS equal height cards ── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="section-pill">Testimonials</span>
            <h2 className="font-black text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Results Our Clients <span className="teal-gradient-text">Actually Talk About</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ name, role, stars, text }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.1)] rounded-2xl p-7 card-glow relative flex flex-col" style={{ minHeight: '220px' }}>
                  <Quote size={24} className="text-[rgba(41,200,213,0.15)] absolute top-5 right-5" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: stars }).map((_, j) => (
                      <Star key={j} size={13} className="text-[#29C8D5] fill-[#29C8D5]" />
                    ))}
                  </div>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed mb-5 italic flex-grow">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(41,200,213,0.1)] border border-[rgba(41,200,213,0.2)] flex items-center justify-center shrink-0">
                      <span className="text-[#29C8D5] font-700 text-xs">{name[0]}</span>
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

      {/* ── FAQ proper heading size, no arrow icons ── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <span className="section-pill">FAQ</span>
            {/* Issue #7: heading size kept proportional, not massive */}
            <h2 className="font-black text-white mb-3 mt-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions About{' '}
              <span className="teal-gradient-text">Performance Marketing and Google Ads</span>
            </h2>
            <p className="text-[#8A9AB0] text-sm max-w-xl mx-auto">
              Everything you need to know before you pick up the phone.{' '}
              <Link href="/faq" className="text-[#29C8D5] hover:underline">See all FAQs</Link>
            </p>
          </FadeIn>

          <div className="space-y-3">
            {homepageFAQ.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-xl p-5 card-glow">
                  <h3 className="font-700 text-white mb-1.5 text-sm">{q}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER no em-dash, no arrow ── */}
      <section className="py-20 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
              style={{ background: 'radial-gradient(ellipse at bottom left, rgba(41,200,213,0.25) 0%, rgba(41,200,213,0.04) 50%, #0D1117 70%)' }}>
              <h2 className="font-black text-white mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
                Get Your Free Google Ads Audit.{' '}
                <span className="teal-gradient-text">No Cost. No Obligation.</span>
              </h2>
              <p className="text-[#8A9AB0] text-base mb-8 max-w-lg mx-auto">
                We audit your Google Ads account, identify where budget is being wasted and give you a concrete roadmap to hit your CPL or ROAS targets.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-sm">
                  Claim My Free Audit
                </Link>
                <Link href="/services" className="btn-outline text-sm">
                  View Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
