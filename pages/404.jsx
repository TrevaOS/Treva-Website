import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 – Page Not Found | Treva"
        description="The page you're looking for doesn't exist. Head back to Treva's homepage."
        url="https://www.treva.in/404"
      />
      <section className="min-h-screen bg-[#000000] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.07), transparent 70%)' }}
        />
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="font-black teal-gradient-text mb-4"
              style={{ fontSize: 'clamp(5rem, 20vw, 10rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              404
            </div>
            <h1 className="font-black text-white text-2xl md:text-3xl mb-4" style={{ letterSpacing: '-0.02em' }}>
              Page Not Found
            </h1>
            <p className="text-[#8A9AB0] text-base leading-relaxed mb-10">
              Looks like this page took a wrong turn. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                <Home size={15} />
                Back to Home
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
