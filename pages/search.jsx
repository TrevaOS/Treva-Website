import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Search, FileText, Layers, Briefcase,
  Globe, Palette, Smartphone, Megaphone, LineChart,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { searchAll, getDefaultContent } from '../data/searchIndex';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'service', label: 'Services' },
  { id: 'product', label: 'Products' },
  { id: 'blog', label: 'Blog' },
];

const typeMeta = {
  service: { label: 'Service', icon: Briefcase, color: '#29C8D5' },
  product: { label: 'Product', icon: Layers, color: '#7C3AED' },
  blog: { label: 'Blog Post', icon: FileText, color: '#F59E0B' },
};

const serviceIcons = {
  Palette, Megaphone, Globe, Smartphone, LineChart,
};

function ResultCard({ item }) {
  const meta = typeMeta[item.type];
  const TypeIcon = meta.icon;
  const accentColor = item.color || meta.color;
  const ServiceIcon = item.type === 'service' ? serviceIcons[item.icon] : null;

  return (
    <Link
      href={item.href}
      className="card-glow flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1"
    >
      {item.type !== 'service' && item.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full ${item.imageClassName || 'object-cover'}`}
            loading="lazy"
          />
        </div>
      )}
      {item.type === 'service' && ServiceIcon && (
        <div
          className="flex aspect-[16/10] w-full items-center justify-center"
          style={{ backgroundColor: `${accentColor}12` }}
        >
          <ServiceIcon size={40} style={{ color: accentColor }} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}
          >
            <TypeIcon size={16} />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{meta.label}</span>
          {item.status && (
            <span className="ml-auto rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {item.status}
            </span>
          )}
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
        {item.label && item.type !== 'product' && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#29C8D5]">{item.label}</p>
        )}
        <p className="mb-5 text-sm leading-relaxed text-gray-500 line-clamp-3">{item.desc}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#29C8D5]">
          {item.type === 'blog' ? 'Read article' : 'Learn more'} <ArrowUpRight size={13} />
        </span>
      </div>
    </Link>
  );
}

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (typeof router.query.q === 'string') {
      setQuery(router.query.q);
    }
  }, [router.query.q]);

  const isSearching = Boolean(query.trim());
  const results = useMemo(() => (isSearching ? searchAll(query) : getDefaultContent()), [query, isSearching]);

  const totalCount = results.services.length + results.products.length + results.blogPosts.length;

  const sections = useMemo(() => {
    const all = [
      { id: 'service', title: isSearching ? 'Services' : 'Popular Services', items: results.services },
      { id: 'product', title: isSearching ? 'Products' : 'Our Products', items: results.products },
      { id: 'blog', title: isSearching ? 'From the Blog' : 'Latest from the Blog', items: results.blogPosts },
    ];
    if (activeFilter === 'all') return all.filter((section) => section.items.length > 0);
    return all.filter((section) => section.id === activeFilter && section.items.length > 0);
  }, [results, activeFilter, isSearching]);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({ pathname: '/search', query: query ? { q: query } : {} });
  };

  return (
    <>
      <SEOHead
        title="Search | Treva"
        description="Search Treva's services, products, and blog for marketing, branding, web development, and growth resources."
        url="https://www.treva.in/search"
      />

      <section className="bg-[#101418] pt-32 pb-12 text-white lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#29C8D5]">Search Treva</p>
          <h1 className="mb-6 font-black" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
            Find services, products & guides
          </h1>
          <form onSubmit={handleSubmit} className="flex w-full items-center rounded-xl bg-white p-2 shadow-2xl shadow-black/30">
            <label htmlFor="search-input" className="sr-only">Search</label>
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a service, product, or topic..."
              className="min-w-0 flex-1 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400 md:px-5 md:text-lg"
              autoFocus
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#20242a] text-white transition-colors hover:bg-[#29C8D5] md:h-14 md:w-14"
            >
              <Search size={24} />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              {isSearching
                ? totalCount > 0
                  ? <>Showing <span className="font-bold text-gray-900">{totalCount}</span> result{totalCount === 1 ? '' : 's'} for &ldquo;<span className="font-bold text-gray-900">{query}</span>&rdquo;</>
                  : <>No results for &ldquo;<span className="font-bold text-gray-900">{query}</span>&rdquo;</>
                : <>Popular services, products, and guides. Start typing above to search.</>}
            </p>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeFilter === filter.id
                      ? 'border-[#29C8D5] bg-[rgba(41,200,213,0.08)] text-[#29C8D5]'
                      : 'border-gray-200 text-gray-500 hover:border-[#29C8D5]/50 hover:text-[#29C8D5]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {isSearching && totalCount === 0 && (
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-10 text-center">
              <p className="mb-4 text-base text-gray-500">
                We couldn&apos;t find anything matching &ldquo;{query}&rdquo;. Try a different term, or explore our services.
              </p>
              <Link href="/services" className="btn-primary inline-flex">
                View All Services <ArrowUpRight size={14} />
              </Link>
            </div>
          )}

          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="mb-5 text-xl font-black text-gray-900">{section.title}</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <ResultCard key={`${item.type}-${item.id}`} item={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
