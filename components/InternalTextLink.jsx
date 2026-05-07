import Link from 'next/link';

const defaultLinks = [
  { text: 'Treva CRM', href: '/products/treva-crm' },
  { text: 'Treva AI', href: '/products/treva-agent' },
  { text: 'Treva Agent', href: '/products/treva-agent' },
  { text: 'Treva OS', href: '/products/treva-os' },
  { text: 'Make My Cake', href: '/products/make-my-cake' },
  { text: 'Nimma GBA', href: '/products/nimma-gba' },
  { text: 'Sahavani', href: '/products/nimma-gba' },
  { text: 'Creator Hub', href: '/products#creator-hub' },
  { text: 'Branding', href: '/services#branding' },
  { text: 'Brand Identity Agency', href: '/services#branding' },
  { text: 'Branding Agency Bangalore', href: '/services#branding' },
  { text: 'Web Development Agency', href: '/services#web-development' },
  { text: 'Social Media Marketing', href: '/services#social-media-marketing' },
  { text: 'Social Media Marketing Agency', href: '/services#social-media-marketing' },
  { text: 'Content Marketing Services', href: '/services#social-media-marketing' },
  { text: 'Web Development', href: '/services#web-development' },
  { text: 'Website Development Company', href: '/services#web-development' },
  { text: 'App Development Company', href: '/services#app-development' },
  { text: 'App Development', href: '/services#app-development' },
  { text: 'Mobile App Development', href: '/services#app-development' },
  { text: 'Performance Marketing Services', href: '/services#performance-marketing' },
  { text: 'Performance Marketing', href: '/services#performance-marketing' },
  { text: 'Digital Marketing Agency', href: '/services#performance-marketing' },
  { text: 'Google Ads', href: '/services#performance-marketing' },
  { text: 'Products', href: '/products' },
  { text: 'Services', href: '/services' },
  { text: 'FAQ', href: '/faq' },
  { text: 'Contact', href: '/contact' },
  { text: 'About Treva', href: '/about' },
];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function InternalTextLink({ text, links = defaultLinks, className = 'internal-text-link' }) {
  if (!text) return null;

  const sortedLinks = [...links].sort((a, b) => b.text.length - a.text.length);
  const linkMap = new Map(sortedLinks.map((item) => [item.text.toLowerCase(), item]));
  const pattern = new RegExp(`\\b(${sortedLinks.map((item) => escapeRegex(item.text)).join('|')})\\b`, 'gi');
  const linkedTexts = new Set();
  const linkedHrefs = new Set();

  return text.split(pattern).map((part, index) => {
    const key = part.toLowerCase();
    const match = linkMap.get(key);
    if (!match || linkedTexts.has(key) || linkedHrefs.has(match.href)) return part;

    linkedTexts.add(key);
    linkedHrefs.add(match.href);

    return (
      <Link key={`${part}-${index}`} href={match.href} className={className}>
        {part}
      </Link>
    );
  });
}
