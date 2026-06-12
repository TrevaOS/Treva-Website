import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchValue.trim();
    if (!query) return;
    setSearchOpen(false);
    setSearchValue('');
    router.push({ pathname: '/search', query: { q: query } });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-gray-200 ${
          scrolled ? 'py-3 shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/treva-logo-dark.png" alt="Treva" className="h-8 w-auto object-contain lg:h-9" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-bold transition-colors duration-200 relative group ${
                  router.pathname === link.href
                    ? 'text-[#29C8D5]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#29C8D5] transition-all duration-300 ${
                    router.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    ref={searchInputRef}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    type="search"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    onBlur={() => { if (!searchValue) setSearchOpen(false); }}
                    placeholder="Search Treva..."
                    className="mr-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 outline-none focus:border-[#29C8D5]"
                  />
                )}
              </AnimatePresence>
              <button
                type={searchOpen ? 'submit' : 'button'}
                onClick={() => { if (!searchOpen) setSearchOpen(true); }}
                className="text-gray-600 p-2 rounded-lg border border-gray-200 hover:border-[#29C8D5] hover:text-[#29C8D5] transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </form>
            <Link href="/contact" className="btn-primary text-xs py-3 px-6">
              Book a Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-700 p-1.5 rounded-lg border border-gray-200 hover:border-[#29C8D5] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            <motion.form
              onSubmit={handleSearchSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-[85%] max-w-sm items-center rounded-lg border border-gray-200 px-3 py-2"
            >
              <label htmlFor="mobile-search" className="sr-only">Search Treva</label>
              <input
                id="mobile-search"
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search Treva..."
                className="min-w-0 flex-1 text-base font-medium text-gray-900 outline-none placeholder:text-gray-400"
              />
              <button type="submit" aria-label="Search" className="text-gray-600 hover:text-[#29C8D5]">
                <Search size={18} />
              </button>
            </motion.form>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-700 transition-colors ${
                    router.pathname === link.href ? 'text-[#29C8D5]' : 'text-gray-900 hover:text-[#29C8D5]'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="mt-4"
            >
              <Link href="/contact" className="btn-primary">
                Book a Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
