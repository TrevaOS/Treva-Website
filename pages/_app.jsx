import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CRMNotification from '../components/CRMNotification';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const GA_ID = 'G-1Y78DKELJP';

export default function App({ Component, pageProps, router }) {
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, { page_path: url });
      }
    };

    nextRouter.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [nextRouter.events]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      <Navbar />
      <main id="main-content">
        <Component {...pageProps} />
      </main>
      <CRMNotification />
      <Footer />
    </>
  );
}
