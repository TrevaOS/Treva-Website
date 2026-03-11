import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Branding', href: '/services#branding' },
    { label: 'Media Production', href: '/services#media' },
    { label: 'Social Media', href: '/services#social' },
    { label: 'Performance Marketing', href: '/services#performance' },
    { label: 'Web Development', href: '/services#web' },
    { label: 'App Development', href: '/services#app' },
  ],
  Pages: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Products: [
    { label: 'Treva OS', href: '/products/treva-os' },
    { label: 'Treva Agent', href: '/products/treva-agent' },
    { label: 'Make My Cake', href: '/products/make-my-cake' },
    { label: 'Treva EAMS', href: '/products/treva-eams' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080C10] border-t border-[rgba(41,200,213,0.08)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <img src="/treva-logo.png" alt="Treva" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-[#8A9AB0] text-sm leading-relaxed mb-6 max-w-xs">
              Where creativity meets technology. We help brands grow with strategy, design, and intelligent solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@treva.in"
                className="flex items-center gap-2 text-sm text-[#8A9AB0] hover:text-[#29C8D5] transition-colors"
              >
                <Mail size={14} className="text-[#29C8D5]" />
                info@treva.in
              </a>
              <a
                href="tel:+917022922526"
                className="flex items-center gap-2 text-sm text-[#8A9AB0] hover:text-[#29C8D5] transition-colors"
              >
                <Phone size={14} className="text-[#29C8D5]" />
                +91 70229 22526
              </a>
              <div className="flex items-start gap-2 text-sm text-[#8A9AB0]">
                <MapPin size={14} className="text-[#29C8D5] mt-0.5 shrink-0" />
                4, 2nd Floor, Tarang Complex, Attiguppe, Chandra Layout Main Rd, Vijayanagar, Bengaluru, Karnataka 560040
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-700 text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#8A9AB0] text-sm hover:text-[#29C8D5] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(41,200,213,0.06)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8A9AB0] text-sm">
            © {new Date().getFullYear()} Treva. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: 'https://www.instagram.com/treva.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/company/trevain/posts/?feedView=all', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[rgba(41,200,213,0.15)] flex items-center justify-center text-[#8A9AB0] hover:text-[#29C8D5] hover:border-[#29C8D5] transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
