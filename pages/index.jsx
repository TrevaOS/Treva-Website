import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Palette, Megaphone, Globe, Smartphone, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

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

export default function Home() {
  return (
    <>
      <SEOHead
        title="Treva | Product + Service Ecosystem for Modern Brands"
        description="Treva: A complete ecosystem of intelligent products and strategic services. From CRM and analytics platforms to branding, web development, and performance marketing."
        url="https://www.treva.in/"
        keywords="Treva, product ecosystem, CRM platform, analytics platform, branding agency, web development, performance marketing, Treva CRM, Treva OS, Treva Agent"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#29C8D5]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn delay={0.1}>
                <span className="inline-block px-4 py-2 rounded-full border border-[rgba(41,200,213,0.2)] bg-[rgba(41,200,213,0.05)] text-[#29C8D5] text-sm font-600 tracking-wider mb-6">
                  Product + Service Ecosystem
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-black text-white mt-2 mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
                  Build Better.<br />
                  <span className="teal-gradient-text">Grow Faster.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                 <p className="text-[#8A9AB0] text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
                   A unified ecosystem of intelligent products and strategic services. From CRM and analytics platforms to 
                   <Link href="#branding" className="text-[#29C8D5] font-700 underline hover:no-underline">
                     branding
                   </Link>, 
                   <Link href="#web-development" className="text-[#29C8D5] font-700 underline hover:no-underline">
                     development
                   </Link>, and 
                   <Link href="#performance-marketing" className="text-[#29C8D5] font-700 underline hover:no-underline">
                     growth marketing
                   </Link> — everything you need to scale.
                 </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products" className="btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2">
                    Explore Products <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" />
                  </Link>
                  <Link href="/services" className="btn-outline text-lg py-4 px-8">
                    View Services <ArrowUpRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="relative">
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  {[  
                    { name: 'Treva CRM', color: '#29C8D5', status: 'Live', features: ['Lead Mgmt', 'Pipeline', 'Automation'] },
                    { name: 'Treva OS', color: '#29C8D5', status: 'Soon', features: ['Analytics', 'Scheduler', 'CRM'] },
                    { name: 'Treva Agent', color: '#7C3AED', status: 'Soon', features: ['AI Lead', 'Auto Ads', '24/7'] },
                    { name: 'EAMS', color: '#10B981', status: 'Soon', features: ['Reporting', 'Assets', 'Collab'] },
                  ].map((product, i) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="bg-[#080C10] border border-[rgba(41,200,213,0.15)] rounded-2xl p-5 hover:border-[rgba(41,200,213,0.3)] transition-all group cursor-pointer"
                      style={{ minHeight: '160px' }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.color}20`, border: `1px solid ${product.color}40` }}>
                          <span className="font-black text-sm" style={{ color: product.color }}>{product.name.split(' ')[1]}</span>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(41,200,213,0.1)] text-[#29C8D5]" style={{ border: `1px solid ${product.color}30` }}>
                          {product.status}
                        </span>
                      </div>
                      <h3 className="font-700 text-white text-sm mb-2">{product.name}</h3>
                      <div className="space-y-1.5">
                        {product.features.map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${product.color}40` }}></span>
                            <span className="text-[#8A9AB0] text-xs">{f}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} className="text-[#8A9AB0]" />
          </motion.div>
        </div>
      </section>

      {/* Premium Dark Image Section - Full width with overlay */}
      <section className="relative w-full overflow-hidden">
        {/* Full-width background image */}
        <div 
          className="w-full min-h-[600px] relative flex items-center justify-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Black overlay for depth */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            <FadeIn delay={0.1}>
              <span className="inline-block px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] text-white/90 text-sm font-600 tracking-widest uppercase mb-6">
                Built for Modern Growth
              </span>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="font-black text-white mt-2 mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                Smart Products. Strategic Services.<br />
                <span className="teal-gradient-text">One Unified Ecosystem.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-[#C4C4C4] text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                From intelligent platforms that automate your operations to expert services that accelerate your growth — Treva provides the complete infrastructure modern brands need to thrive in a digital-first world.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/products" className="btn-primary text-lg py-4 px-8 bg-[#29C8D5] hover:bg-[#25b4c9] border-[#29C8D5] text-black font-700">
                  View All Products <ArrowUpRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline text-lg py-4 px-8 border-white/30 text-white hover:bg-white/5">
                  Explore Services <ArrowUpRight size={16} />
                </Link>
              </div>
            </FadeIn>
            
            {/* Stats bar */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
                <div className="text-center">
                  <div className="font-black text-3xl lg:text-4xl text-white" style={{ letterSpacing: '-0.02em' }}>5+</div>
                  <div className="text-[#C4C4C4] text-sm mt-1">Intelligent Products</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-3xl lg:text-4xl text-[#29C8D5]" style={{ letterSpacing: '-0.02em' }}>5</div>
                  <div className="text-[#C4C4C4] text-sm mt-1">Core Services</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-3xl lg:text-4xl text-white" style={{ letterSpacing: '-0.02em' }}>₹15Cr+</div>
                  <div className="text-[#C4C4C4] text-sm mt-1">Ad Spend Managed</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-3xl lg:text-4xl text-[#C4C4C4]" style={{ letterSpacing: '-0.02em' }}>200+</div>
                  <div className="text-[#C4C4C4] text-sm mt-1">Campaigns Launched</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-black text-white mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Strategic Services{' '}
              <span className="teal-gradient-text">That Scale With You</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {/* Branding */}
            <FadeIn delay={0.05}>
              <div id="branding" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Brand Identity</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <Palette size={22} className="text-[#29C8D5]" />
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Branding</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Distinct identity that resonates.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      Build a brand that stands apart. Our identity design, visual systems, and brand strategy create cohesive experiences across every touchpoint — from logo to digital presence.
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Logo & brand mark system', 'Color palette & typography', 'Brand voice & messaging', 'Visual identity guidelines', 'Social media kit', 'Business collateral'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Social Media Marketing */}
            <FadeIn delay={0.05}>
              <div id="social-media-marketing" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Content & Social</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="shrink-0"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Social Media</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Content that engages and converts.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      Strategic content that builds community and drives measurable engagement. From visual storytelling to performance-focused campaigns, we create social presence that supports business outcomes.
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Content calendar & strategy', 'Carousel & reel production', 'Copywriting & hashtags', 'Community management', 'Trend analysis', 'Performance reporting'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Web Development */}
            <FadeIn delay={0.05}>
              <div id="web-development" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Web Development</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="shrink-0"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><path d="M12 4v16"></path></svg>
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Web Development</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Fast, secure, conversion-focused.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      Modern, performant websites built to convert. SEO-optimized, mobile-first experiences that load instantly and drive measurable results for your business.
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Next.js / React development', 'SEO architecture & metadata', 'Mobile-first responsive design', 'Core Web Vitals optimization', 'CMS integration', 'Launch & maintenance'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* App Development */}
            <FadeIn delay={0.05}>
              <div id="app-development" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">App Development</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="shrink-0"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="3"></rect><rect x="14" y="7" width="3" height="3"></rect><rect x="7" y="14" width="3" height="3"></rect><rect x="14" y="14" width="3" height="3"></rect></svg>
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">App Development</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Native experiences users love.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      iOS and Android apps that deliver seamless user experiences. From MVP to full-scale mobile platforms with backend infrastructure and ongoing optimization.
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['iOS & Android native', 'React Native / Flutter', 'UI/UX design system', 'Backend API development', 'Testing & QA', 'App Store deployment'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Performance Marketing */}
            <FadeIn delay={0.05}>
              <div id="performance-marketing" className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl p-8 md:p-10 card-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-[#29C8D5] text-xs font-600 uppercase tracking-widest mb-3 block">Growth Marketing</span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="shrink-0"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                      </div>
                      <div>
                        <h2 className="font-800 text-white text-2xl">Growth Marketing</h2>
                        <p className="text-[#8A9AB0] text-sm italic mt-1">Data-driven customer acquisition.</p>
                      </div>
                    </div>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-4">
                      Full-funnel growth strategies combining paid acquisition, conversion optimization, and analytics. Every campaign built around measurable outcomes and continuous improvement.
                    </p>
                    <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
                      Get Started <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Paid media strategy', 'Campaign setup & optimization', 'Conversion tracking', 'Landing page testing', 'Audience segmentation', 'Performance reporting'].map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#29C8D5" strokeWidth="2" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="border border-[rgba(41,200,213,0.2)] rounded-3xl p-12" style={{ background: 'radial-gradient(ellipse at center, rgba(41,200,213,0.06), transparent 70%), #080C10' }}>
              <h2 className="font-black text-white text-3xl mb-4">
                Build Your Ecosystem. <span className="teal-gradient-text">Scale With Purpose.</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8 max-w-lg mx-auto">
                From product strategy to execution, we help modern brands build the infrastructure they need to grow. Let's discuss your roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start the Conversation <ArrowUpRight size={16} />
                </Link>
                <Link href="/products" className="btn-outline">
                  Browse Products <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
