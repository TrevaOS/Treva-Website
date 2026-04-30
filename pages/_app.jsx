import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CRMNotification from '../components/CRMNotification';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const GA_ID = 'G-1Y78DKELJP';

export default function App({ Component, pageProps, router }) {
  const nextRouter = useRouter();
  const [analyticsReady, setAnalyticsReady] = useState(false);

  useEffect(() => {
    if (analyticsReady || typeof window === 'undefined') return undefined;

    const startAnalytics = () => {
      setAnalyticsReady(true);
    };

    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(startAnalytics, { timeout: 5000 })
      : window.setTimeout(startAnalytics, 5000);

    const opts = { once: true, passive: true };
    window.addEventListener('pointerdown', startAnalytics, opts);
    window.addEventListener('keydown', startAnalytics, { once: true });
    window.addEventListener('scroll', startAnalytics, opts);

    return () => {
      if (window.cancelIdleCallback && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
      window.removeEventListener('pointerdown', startAnalytics);
      window.removeEventListener('keydown', startAnalytics);
      window.removeEventListener('scroll', startAnalytics);
    };
  }, [analyticsReady]);

  useEffect(() => {
    if (!analyticsReady || typeof window === 'undefined') return undefined;

    if (!document.querySelector(`script[data-treva-ga="${GA_ID}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.dataset.trevaGa = GA_ID;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    return undefined;
  }, [analyticsReady]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (analyticsReady && typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, { page_path: url });
      }
    };

    nextRouter.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [analyticsReady, nextRouter.events]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={router.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <CRMNotification />
      <Footer />
    </>
  );
}
