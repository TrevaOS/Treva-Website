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
        title="Treva Products | CRM, Restaurant Dashboard, Creator Hub UGC & More | Bangalore"
        description="Treva builds intelligent products: Treva CRM for sales pipelines, Restaurant Dashboard for F&B operations, and Creator Hub — India's simplest platform connecting brands to UGC creators."
        url="https://www.treva.in/products"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Treva Products',
          itemListElement: [
            { '@type': 'Product', position: 1, name: 'Treva CRM', description: 'A sales pipeline and CRM tool built for growing businesses.', brand: { '@type': 'Brand', name: 'Treva' }, url: 'https://treva.in/products' },
            { '@type': 'Product', position: 2, name: 'Restaurant Dashboard', description: 'A unified operations and marketing performance dashboard built for F&B businesses.', brand: { '@type': 'Brand', name: 'Treva' }, url: 'https://treva.in/products' },
            { '@type': 'Product', position: 3, name: 'Creator Hub', description: 'Creator Hub connects brands to UGC video creators filtered by category and budget. Available across India.', brand: { '@type': 'Brand', name: 'Treva' }, url: 'https://treva.in/products/creator-hub' },
          ],
        }}
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
            className="mb-4 mt-2 font-black text-gray-900"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Products That Give Your Business an{' '}
            <span className="teal-gradient-text">Unfair Advantage</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-gray-500 font-normal"
          >
            Our technology stack — built by marketers, for marketers.
          </motion.h2>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {products.map(({ slug, image, name, tagline, desc, status, color, features, ctaLabel, ctaHref, external, imageClassName, detailLabel, detailHref }, i) => (
            <FadeIn key={slug} delay={i * 0.08}>
              <div id={slug} className="card-glow scroll-mt-28 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                <div className="grid gap-0 lg:grid-cols-2">
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
          ))}
        </div>
      </section>

      {/* Your Products and Services — One System */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
              <h2 className="mb-4 font-black text-gray-900" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
                Your Products and Services —{' '}
                <span className="teal-gradient-text">One System</span>
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500">
                Treva CRM feeds data into your ad campaigns. Restaurant Dashboard informs your content strategy. Creator Hub delivers UGC that runs on your paid channels. Everything is connected because we built it that way.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
