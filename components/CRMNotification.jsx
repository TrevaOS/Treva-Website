import { useEffect, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function CRMNotification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const revealBanner = () => {
      setVisible(true);
      window.removeEventListener('scroll', revealBanner);
      window.removeEventListener('pointerdown', revealBanner);
    };

    const timerId = window.setTimeout(revealBanner, 8000);
    window.addEventListener('scroll', revealBanner, { once: true, passive: true });
    window.addEventListener('pointerdown', revealBanner, { once: true, passive: true });

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener('scroll', revealBanner);
      window.removeEventListener('pointerdown', revealBanner);
    };
  }, []);

  const closeBanner = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] sm:left-auto sm:max-w-md">
      <div className="crm-live-banner rounded-2xl border p-4 shadow-2xl">
        <button
          type="button"
          onClick={closeBanner}
          aria-label="Dismiss Treva CRM live notification"
          className="absolute right-3 top-3 rounded-full border border-white/10 p-1 text-[#8A9AB0] transition-colors hover:text-white"
        >
          <X size={14} />
        </button>
        <div className="pr-8">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#29C8D5]/20 bg-[#29C8D5]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7FE7FF]">
            <span className="h-2 w-2 rounded-full bg-[#29C8D5]" />
            Treva CRM Is Free Now
          </p>
          <h3 className="text-lg font-black text-white">Treva CRM is live and free to access right now.</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#9FB2C8]">
            Start with pipeline tracking, follow-ups, and team workflows in one place. No waitlist.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/products/treva-crm"
              className="btn-outline"
            >
              View Details
            </a>
            <a
              href="/contact"
              className="btn-primary"
            >
              Get Access
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
