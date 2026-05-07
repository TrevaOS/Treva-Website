import { useState } from 'react';

const instagramReels = [
  { id: 'DX_K0F8hT2W', caption: 'Brand Identity Agency Work', author: '@laglazeiz' },
  { id: 'DUBI9rpCR2s', caption: 'Content Marketing Strategy', author: '@district6blr' },
  { id: 'DUA08v0iUCw', caption: 'Web Development Project', author: '@district6blr' },
  { id: 'DW5imvogRPW', caption: 'App Development Launch', author: '@laglazeiz' },
  { id: 'DWqaOiVAQHn', caption: 'Performance Marketing Results', author: '@laglazeiz' },
];

export default function ReelCarousel() {
  const [current, setCurrent] = useState(0);
  const reels = instagramReels;

  return (
    <section className="py-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="font-black text-white mb-4 text-center"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '-0.02em' }}>
          Our <span className="teal-gradient-text">Work</span>
        </h3>

        <div className="relative max-w-[320px] mx-auto">
          <div className="aspect-[9/16] bg-[#080C10] rounded-lg overflow-hidden border border-[rgba(41,200,213,0.15)]">
            <iframe
              key={current}
              src={`https://www.instagram.com/reel/${reels[current].id}/embed`}
              className="w-full h-full"
              style={{ minHeight: '480px', border: 'none' }}
              allowFullScreen
              scrolling="no"
              title={reels[current].caption}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 pointer-events-none">
              <p className="text-white text-xs font-medium">{reels[current].caption}</p>
              <p className="text-[#8A9AB0] text-xs mt-0.5">{reels[current].author}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev - 1 + reels.length) % reels.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-7 h-7 rounded-full bg-[#29C8D5] text-black flex items-center justify-center hover:bg-[#29C8D5]/90 transition-colors shadow-lg"
            aria-label="Previous reel"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev + 1) % reels.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-7 h-7 rounded-full bg-[#29C8D5] text-black flex items-center justify-center hover:bg-[#29C8D5]/90 transition-colors shadow-lg"
            aria-label="Next reel"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-3">
          {reels.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-[#29C8D5] scale-110' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label={`Show reel ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-[#8A9AB0] text-xs mt-1.5">
          {current + 1} / {reels.length}
        </p>
      </div>
    </section>
  );
}
