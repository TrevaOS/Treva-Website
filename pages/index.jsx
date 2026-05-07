import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ProductSlider from '../components/InstagramReel';

const clients = [
  '/logos/1.svg', '/logos/2.svg', '/logos/3.svg', '/logos/4.svg',
  '/logos/5.svg', '/logos/6.svg', '/logos/7.svg', '/logos/8.svg',
  '/logos/9.svg', '/logos/10.svg', '/logos/11.svg', '/logos/12.svg',
  '/logos/13.svg', '/logos/14.svg', '/logos/15.svg', '/logos/16.svg',
  '/logos/17.png', '/logos/18.png',
  '/logos/1.svg', '/logos/2.svg', '/logos/3.svg', '/logos/4.svg',
  '/logos/5.svg', '/logos/6.svg', '/logos/7.svg', '/logos/8.svg',
  '/logos/9.svg', '/logos/10.svg', '/logos/11.svg', '/logos/12.svg',
  '/logos/13.svg', '/logos/14.svg', '/logos/15.svg', '/logos/16.svg',
  '/logos/17.png', '/logos/18.png',
];

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}>{children}</motion.div>
  );
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Treva - Intelligent Products & Strategic Services"
        description="Treva combines intelligent product platforms with expert strategic services. Treva CRM, creator platforms, and growth solutions for modern brands."
        url="https://www.treva.in"
        keywords="Treva, CRM platform, creator hub, performance marketing, branding, web development"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [],
        }}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(41,200,213,0.08)_0%,_transparent_60%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <h1 className="font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', letterSpacing: '-0.03em' }}>
              Build Better.<br />
              <span className="teal-gradient-text">Grow Faster.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[#8A9AB0] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Intelligent products and strategic services designed for modern brands that scale.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Start Your Free Audit
              </Link>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <h2 className="font-black text-white mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
                From Bengaluru, Building a Tech Ecosystem
              </h2>
              <p className="text-[#8A9AB0] text-sm leading-relaxed mb-7 text-justify">
                We decided to build something different. A full-stack product and service company operating more like a growth technology partner than a traditional agency. Where you speak directly to the experts building and marketing your solutions. Since then we have managed over ₹15 Crore in digital growth budget, served brands ranging from McKinsey-grade enterprises to bootstrapped D2C founders, and built scalable products like Treva CRM and Make My Cake alongside our service offerings. We are based in Vijayanagar, Bengaluru. We are not a 500-person agency. We are a focused team of product builders and growth specialists who believe depth and ownership beats breadth every time.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Meet the Team <ArrowUpRight size={14} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.12)] rounded-2xl p-6 card-glow">
                  <div className="font-black text-[#29C8D5] text-3xl mb-2" style={{ letterSpacing: '-0.02em' }}>5+</div>
                  <div className="text-[#8A9AB0] text-sm">Intelligent Products</div>
                </div>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.12)] rounded-2xl p-6 card-glow">
                  <div className="font-black text-[#29C8D5] text-3xl mb-2" style={{ letterSpacing: '-0.02em' }}>5</div>
                  <div className="text-[#8A9AB0] text-sm">Core Services</div>
                </div>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.12)] rounded-2xl p-6 card-glow">
                  <div className="font-black text-[#29C8D5] text-3xl mb-2" style={{ letterSpacing: '-0.02em' }}>₹15Cr+</div>
                  <div className="text-[#8A9AB0] text-sm">Ad Spend Managed</div>
                </div>
                <div className="bg-[#000000] border border-[rgba(41,200,213,0.12)] rounded-2xl p-6 card-glow">
                  <div className="font-black text-[#29C8D5] text-3xl mb-2" style={{ letterSpacing: '-0.02em' }}>200+</div>
                  <div className="text-[#8A9AB0] text-sm">Campaigns Launched</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE SLIDER */}
      <section className="py-20 bg-[#000000] border-y border-[rgba(41,200,213,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-black text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>
              Product Showcase
            </h2>
            <p className="text-[#8A9AB0] text-base max-w-lg mx-auto">
              Our intelligent product ecosystem — built for scale.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Product info */}
            <FadeIn className="lg:sticky lg:top-32 lg:self-start">
              <div id="product-display">
                <span className="text-[#29C8D5] text-xs font-700 uppercase tracking-widest mb-3 block">
                  Live Product
                </span>
                <h3 className="font-black text-white text-3xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Treva CRM
                </h3>
                <p className="text-[#8A9AB0] text-lg leading-relaxed mb-6">
                  Your sales pipeline, follow-ups and client history in one live workspace. Free to start, built for teams that want faster closures, cleaner handoffs and a better way to manage every lead from first touch to renewal.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[rgba(41,200,213,0.12)] text-[#29C8D5] font-600">Lead Management</span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[rgba(41,200,213,0.12)] text-[#29C8D5] font-600">Sales Pipeline</span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[rgba(41,200,213,0.12)] text-[#29C8D5] font-600">Automation</span>
                </div>
                <div className="flex gap-3">
                  <Link href="/products/treva-crm" className="btn-primary text-sm py-3 px-6">
                    Access Now
                  </Link>
                </div>
              </div>

              {/* Product selector dots */}
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-[rgba(41,200,213,0.1)]">
                <span className="text-[#8A9AB0] text-sm mr-3">Products:</span>
                <button onClick={() => updateProduct(0)} className="w-3 h-3 rounded-full bg-[#29C8D5] transition-all" title="Treva CRM"></button>
                <button onClick={() => updateProduct(1)} className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[#29C8D5] transition-all" title="Treva OS"></button>
                <button onClick={() => updateProduct(2)} className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[#29C8D5] transition-all" title="Make My Cake"></button>
                <button onClick={() => updateProduct(3)} className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[#29C8D5] transition-all" title="Treva AI"></button>
                <button onClick={() => updateProduct(4)} className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[#29C8D5] transition-all" title="Creator Hub"></button>
              </div>
            </FadeIn>

            {/* Right side - Product image */}
            <FadeIn className="relative">
              <div className="bg-[#0D1117] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 min-h-[480px] flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="aspect-video relative rounded-xl overflow-hidden bg-[#000000]">
                    <img 
                      id="product-image" 
                      src="/images/crm.png" 
                      alt="Treva CRM" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <p className="text-[#8A9AB0] text-sm text-center mt-4" id="product-desc">
                    Free to start — built for teams that want faster closures
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10 hidden lg:flex">
                <button onClick={() => navigateProduct(-1)} className="w-10 h-10 rounded-full bg-[#080C10] border border-[rgba(41,200,213,0.2)] text-[#29C8D5] flex items-center justify-center hover:bg-[rgba(41,200,213,0.1)] transition-colors" aria-label="Previous product">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button onClick={() => navigateProduct(1)} className="w-10 h-10 rounded-full bg-[#080C10] border border-[rgba(41,200,213,0.2)] text-[#29C8D5] flex items-center justify-center hover:bg-[rgba(41,200,213,0.1)] transition-colors" aria-label="Next product">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-[rgba(41,200,213,0.2)] rounded-3xl p-12" style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.06), transparent 70%), #080C10' }}>
              <h2 className="font-black text-white text-3xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                Ready to Build Your Ecosystem?<br />
                <span className="teal-gradient-text">Let's Talk</span>
              </h2>
              <p className="text-[#8A9AB0] text-base mb-8 max-w-lg mx-auto">
                Get your free consultation and see how our product + service ecosystem can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Your Free Audit <ArrowUpRight size={16} />
                </Link>
                <Link href="/products" className="btn-outline">
                  View All Products <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// Product data
const products = [
  {
    id: 'crm',
    name: 'Treva CRM',
    status: 'Live Product',
    desc: 'Free to start — built for teams that want faster closures',
    image: '/images/crm.png',
    color: '#29C8D5',
  },
  {
    id: 'os',
    name: 'Treva OS',
    status: 'Coming Soon',
    desc: 'Your brand operating system — all-in-one business platform',
    image: '/images/os-product.png',
    color: '#29C8D5',
  },
  {
    id: 'cake',
    name: 'Make My Cake',
    status: 'Coming Soon',
    desc: 'Artisan cakes delivered — connecting bakers with cake lovers',
    image: '/images/cake-product.png',
    color: '#F59E0B',
  },
  {
    id: 'ai',
    name: 'Treva AI',
    status: 'Coming Soon',
    desc: '24/7 autonomous marketing agent — never sleeps, always optimizes',
    image: '/images/ai-product.png',
    color: '#7C3AED',
  },
  {
    id: 'creator',
    name: 'Creator Hub',
    status: 'Coming Soon',
    desc: 'The influencer platform — scale content, monetize influence',
    image: '/images/creator-hub.png',
    color: '#EC4899',
  },
];

let currentProductIndex = 0;

function updateProduct(index) {
  const product = products[index];
  currentProductIndex = index;
  
  // Update display
  const display = document.getElementById('product-display');
  const img = document.getElementById('product-image');
  const desc = document.getElementById('product-desc');
  const dots = document.querySelectorAll('.w-3');
  
  if (display && img && desc) {
    // Update display
    const statusEl = display.querySelector('span');
    const nameEl = display.querySelector('h3');
    const descEl = display.querySelector('p');
    
    if (statusEl) statusEl.textContent = product.status;
    if (statusEl) statusEl.className = `text-xs font-700 uppercase tracking-widest mb-3 block ${product.status === 'Live Product' ? 'text-[#29C8D5]' : 'text-[#F59E0B]'}`;
    if (nameEl) nameEl.textContent = product.name;
    if (descEl) descEl.textContent = product.desc;
    
    // Update image
    img.src = product.image;
    img.alt = product.name;
    
    // Update description
    desc.textContent = product.desc;
  }
  
  // Update dots
  dots.forEach((dot, i) => {
    dot.className = i === index ? 'w-3 h-3 rounded-full bg-[#29C8D5] transition-all' : 'w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[#29C8D5] transition-all';
  });
}

function navigateProduct(direction) {
  const newIndex = (currentProductIndex + direction + products.length) % products.length;
  updateProduct(newIndex);
}
