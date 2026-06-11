import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { clients } from '../../data/clients';

function ImageWithFallback({ src, alt, className, style }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div
        className={className}
        style={{ ...style, background: 'linear-gradient(135deg, #1a1a2e, #16213e)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>{alt}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} style={style} onError={() => setError(true)} />;
}

export default function ClientWork({ client }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const showcaseRef = useRef(null);

  const moveSlide = (dir) => {
    setSlideIndex((i) => (i + dir + client.showcaseItems.length) % client.showcaseItems.length);
  };

  useEffect(() => {
    if (!showcaseRef.current) return;
    const card = showcaseRef.current.children[slideIndex];
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [slideIndex]);

  const allMarqueeImages = [...client.marqueeImages, ...client.marqueeImages];

  return (
    <>
      <SEOHead
        title={`${client.name} – Our Work | Treva Digital Marketing Agency Bangalore`}
        description={`See how Treva helped ${client.name} grow through digital marketing, branding, and social media campaigns in Bangalore.`}
        url={`https://www.treva.in/work/${client.slug}`}
      />

      <div className="min-h-screen bg-[#0a0a0a]" style={{ paddingTop: '72px' }}>
        {/* Back nav */}
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={15} />
            Back to Our Work
          </Link>
        </div>

        {/* Main layout: left vertical marquee + right info */}
        <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 min-h-[70vh]">

          {/* LEFT — auto-scrolling vertical image marquee */}
          <div className="relative overflow-hidden rounded-2xl" style={{ maxHeight: '80vh' }}>
            <div className="work-marquee-vertical">
              {allMarqueeImages.map((src, i) => (
                <div key={i} className="work-marquee-image-wrap">
                  <ImageWithFallback
                    src={src}
                    alt={`${client.name} work ${i + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — description */}
          <div className="flex flex-col justify-center px-0 lg:px-12 py-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: client.accentColor || '#29C8D5' }}
            >
              {client.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-black text-white mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              {client.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px' }}
            >
              {client.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              <Link
                href="/contact"
                className="btn-primary text-sm"
                style={{ background: client.accentColor || '#29C8D5' }}
              >
                Work With Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom showcase slider */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-between mb-6">
            <p className="text-white font-semibold text-lg">Campaign Highlights</p>
            <div className="flex gap-2">
              <button
                onClick={() => moveSlide(-1)}
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => moveSlide(1)}
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div ref={showcaseRef} className="work-showcase-scroll">
            {client.showcaseItems.map((item, i) => (
              <div
                key={i}
                className="work-showcase-card"
                style={{
                  transform: i === slideIndex ? 'scale(1.05)' : 'scale(0.92)',
                  opacity: i === slideIndex ? 1 : 0.55,
                  transition: 'transform 0.4s ease, opacity 0.4s ease',
                  zIndex: i === slideIndex ? 2 : 1,
                }}
                onClick={() => setSlideIndex(i)}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%', borderRadius: '12px' }}
                />
                <div className="work-showcase-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: clients.map((c) => ({ params: { slug: c.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = clients.find((c) => c.slug === params.slug);
  return { props: { client } };
}
