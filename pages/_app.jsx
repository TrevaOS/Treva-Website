import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
<<<<<<< HEAD
import CRMNotification from '../components/CRMNotification';
=======
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
import { AnimatePresence, motion } from 'framer-motion';
import Script from 'next/script';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16476740279"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16476740279');
        `}
      </Script>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
<<<<<<< HEAD
      <CRMNotification />
=======
>>>>>>> e5d6efa8be56e2787d96a4069704fd7bcf5632b6
      <Footer />
    </>
  );
}
