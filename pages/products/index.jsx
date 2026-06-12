import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { products } from '../../data/products';

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

export default function Products() {
  return (
    <>
      <SEOHead
        title="Products Treva CRM, Nimma GBA, Treva OS, Treva Agent & Make My Cake"
        description="Explore Treva's product suite including the live Treva CRM and upcoming Nimma GBA, Treva OS, Treva Agent, Make My Cake, and Creator Hub."
        url="https://www.treva.in/products"
      />

      <section className="relative overflow-hidden bg-white pb-16 pt-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.05), transparent 70%)' }}
        />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 mt-2 font-black text-gray-900"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Products for the <span className="teal-gradient-text">Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-gray-500"
          >
            Beyond services we build products that solve real problems. Each one is shaped by the
            needs we see every day while working with ambitious brands.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {products.map(({ slug, image, name, tagline, desc, status, color, features, ctaLabel, ctaHref, external, imageClassName, detailLabel, detailHref }, i) => {
            const isLightImage = (imageClassName || '').includes('bg-white');
            return (
            <FadeIn key={slug} delay={i * 0.08}>
              <div id={slug} className="card-glow scroll-mt-28 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                {/* Mobile: image card with overlay content */}
                <div className={`relative flex min-h-[460px] flex-col overflow-hidden rounded-2xl lg:hidden ${isLightImage ? 'bg-white' : ''}`}>
                  <img
                    src={image}
                    alt={name}
                    className={`absolute inset-0 h-full w-full ${imageClassName || 'object-cover'}`}
                  />
                  {!isLightImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  )}
                  <span
                    className={`relative z-10 m-4 self-start px-3 py-1 text-xs font-700 ${
                      status === 'Now Live'
                        ? 'section-pill-live border border-[#29C8D5]/30 bg-[#29C8D5]/10 text-[#0D1117]'
                        : 'rounded-full bg-white text-black'
                    }`}
                  >
                    {status}
                  </span>

                  <div
                    className={`relative z-10 mt-auto flex flex-col p-6 text-center ${
                      isLightImage ? 'bg-white' : ''
                    }`}
                  >
                    <p className="mb-1 text-xs font-600 uppercase tracking-widest" style={{ color }}>
                      {name}
                    </p>
                    <h3 className={`mb-2 text-2xl font-black ${isLightImage ? 'text-gray-900' : 'text-white'}`}>{tagline}</h3>
                    <p className={`mb-5 text-sm leading-relaxed ${isLightImage ? 'text-gray-500' : 'text-gray-300'}`}>
                      {desc}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                      {external && detailHref ? (
                        <Link
                          href={detailHref}
                          className={`rounded-full px-6 py-3 text-sm font-700 ${
                            isLightImage ? 'border border-gray-200 text-gray-900' : 'bg-white text-black'
                          }`}
                        >
                          {detailLabel || 'Details'}
                        </Link>
                      ) : null}

                      {external ? (
                        <a
                          href={ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full px-6 py-3 text-sm font-700"
                          style={{ background: color, color: '#000' }}
                        >
                          {ctaLabel}
                        </a>
                      ) : (
                        <Link
                          href={ctaHref || `/products/${slug}`}
                          className="rounded-full px-6 py-3 text-sm font-700"
                          style={{ background: color, color: '#000' }}
                        >
                          {ctaLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop: side-by-side layout */}
                <div className="hidden gap-0 lg:grid lg:grid-cols-2">
                  <div className="relative min-h-[260px] overflow-hidden bg-gray-100 sm:min-h-[320px]">
                    <img
                      src={image}
                      alt={name}
                      className={`absolute inset-0 h-full w-full ${imageClassName || 'object-cover'}`}
                    />
                    <span
                      className={`absolute left-4 top-4 z-10 px-3 py-1 text-xs font-700 ${
                        status === 'Now Live'
                          ? 'section-pill-live border border-[#29C8D5]/30 bg-[#29C8D5]/10 text-[#0D1117]'
                          : 'rounded-full bg-white text-black'
                      }`}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="mb-2 text-xs font-600 uppercase tracking-widest" style={{ color }}>
                      {name}
                    </p>
                    <h3 className="mb-3 text-2xl font-black text-gray-900">{tagline}</h3>
                    <p className="mb-8 text-sm leading-relaxed text-gray-500">
                      {desc}
                    </p>

                    <h4 className="mb-4 text-sm font-600 uppercase tracking-wider text-gray-900">Key Features</h4>
                    <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {external && detailHref ? (
                        <Link href={detailHref} className="btn-outline">
                          {detailLabel || 'Details'}
                        </Link>
                      ) : null}

                      {external ? (
                        <a
                          href={ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-fit"
                          style={{ background: color, color: '#000' }}
                        >
                          {ctaLabel}
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <Link
                          href={ctaHref || `/products/${slug}`}
                          className="btn-primary w-fit"
                          style={{ background: color, color: '#000' }}
                        >
                          {ctaLabel}
                          <ArrowUpRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}
