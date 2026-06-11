import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { clients } from '../../data/clients';

export default function OurWork() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + clients.length) % clients.length);
  const next = () => setActive((i) => (i + 1) % clients.length);

  const client = clients[active];

  return (
    <>
      <SEOHead
        title="Our Work – Client Projects | Treva Digital Marketing Agency Bangalore"
        description="See the brands Treva has helped grow through digital marketing, branding, social media, and performance campaigns in Bangalore."
        url="https://www.treva.in/work"
      />

      <div className="min-h-screen" style={{ background: '#0a0a0a', paddingTop: '72px' }}>
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#29C8D5] mb-3"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-black text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.03em' }}
          >
            Clients We&apos;ve Grown With
          </motion.h1>
        </div>

        {/* Two-column layout */}
        <div
          className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
          style={{ minHeight: 'calc(100vh - 220px)' }}
        >
          {/* LEFT — sticky image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div
              className="relative overflow-hidden rounded-2xl w-full"
              style={{ aspectRatio: '3/4', background: '#111', maxHeight: '75vh' }}
            >
              {clients.map((c, i) => (
                <div
                  key={c.slug}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
                >
                  <img
                    src={c.marqueeImages[0]}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {/* gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
                  />
                  {/* bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: c.accentColor || '#29C8D5' }}
                    >
                      {c.category}
                    </p>
                    <p className="text-white font-black text-2xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                      {c.name}
                    </p>
                    <Link
                      href={`/work/${c.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-full transition-all"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      View Project <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-6 right-6 flex gap-1.5">
                {clients.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: i === active ? '22px' : '6px',
                      height: '6px',
                      background: i === active ? (client.accentColor || '#29C8D5') : 'rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — scrollable client list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="our-work-client-list flex flex-col gap-4 overflow-y-auto"
            style={{ maxHeight: '75vh' }}
          >
            {clients.map((c, i) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex items-center gap-5 rounded-2xl p-5 transition-all"
                style={{
                  background: i === active ? 'rgba(41,200,213,0.07)' : 'rgba(255,255,255,0.03)',
                  border: i === active
                    ? `1px solid ${c.accentColor || 'rgba(41,200,213,0.35)'}`
                    : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Logo box */}
                <div
                  className="shrink-0 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: i === active ? 'rgba(255,255,255,0.06)' : '#141414',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    style={{
                      maxWidth: '56px',
                      maxHeight: '44px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.88,
                    }}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: c.accentColor || '#29C8D5' }}
                  >
                    {c.category}
                  </p>
                  <p className="text-white font-bold text-lg mb-1" style={{ letterSpacing: '-0.01em' }}>
                    {c.name}
                  </p>
                  <p
                    className="text-sm leading-snug line-clamp-2"
                    style={{ color: 'rgba(255,255,255,0.42)' }}
                  >
                    {c.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="shrink-0 transition-colors"
                  style={{ color: i === active ? (c.accentColor || '#29C8D5') : 'rgba(255,255,255,0.2)' }}
                >
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
