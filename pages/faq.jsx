import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  );
}

const faqGroups = [
  {
    title: 'Performance Marketing & Google Ads',
    items: [
      {
        q: 'What is performance marketing?',
        a: 'Performance marketing is a form of digital advertising where every rupee spent is tied to a measurable outcome a click, a lead, a sale, or a customer. Unlike brand advertising, performance marketing campaigns are optimised in real-time based on data. Google Ads is the primary performance marketing channel for most Indian businesses.',
      },
      {
        q: 'How much Google Ads budget do you manage at Treva?',
        a: 'Treva has managed over ₹15 Crore in Google Ads spend across industries including SaaS, eCommerce, real estate, education, and healthcare in Bengaluru and across India.',
      },
      {
        q: 'How long does it take to see results from Google Ads?',
        a: 'Most clients see improved CPL and ROAS within the first 4-6 weeks as the campaign optimises. Full campaign maturity typically reaches 90 days as smart bidding algorithms accumulate sufficient conversion data.',
      },
      {
        q: 'What is a good ROAS for Google Ads in India?',
        a: 'ROAS benchmarks vary by industry. eCommerce typically targets 3x-5x ROAS. Lead generation campaigns are better measured by CPL. SaaS brands focus on CAC-to-LTV ratio. Treva sets targets based on your specific business economics not industry averages.',
      },
      {
        q: 'Why is my Google Ads cost per lead so high?',
        a: 'High CPL is usually caused by: keyword sprawl (too many irrelevant keywords), poor Quality Scores (ad copy not matching landing page intent), broad match without negative keyword controls, or smart bidding without sufficient conversion data. Treva audits all four in the free account review.',
      },
      {
        q: 'What is the difference between Google Search Ads and Performance Max?',
        a: 'Google Search Ads show only on Google Search results for specific keywords. Performance Max runs across all Google channels Search, Display, YouTube, Gmail, and Discover using automation and asset groups. Search gives more control; Performance Max gives more reach. Most accounts benefit from running both in coordination.',
      },
    ],
  },
  {
    title: 'Working With Treva',
    items: [
      {
        q: 'What is your minimum Google Ads budget to work with Treva?',
        a: 'We work with clients starting from ₹50,000/month in ad spend up to ₹50 Lakh+ per month. Our management fees scale with spend.',
      },
      {
        q: 'Are you based in Bangalore?',
        a: 'Yes Treva is based in Vijayanagar, Bengaluru. Our office address is #93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar, Bengaluru 560040. We serve clients across India and internationally.',
      },
      {
        q: 'Do you work with businesses outside of Bangalore?',
        a: 'Yes. While we are headquartered in Bengaluru, we manage Google Ads campaigns for clients across India Mumbai, Delhi, Hyderabad, Chennai, and Pan-India brands.',
      },
      {
        q: 'How do you report on campaign performance?',
        a: 'You get access to a live performance dashboard not a once-a-month PDF. We also provide weekly bid adjustment updates, monthly creative reviews, and quarterly strategy calls.',
      },
      {
        q: 'Can I book a call with Treva?',
        a: 'Yes. Use the Contact page to book a free Google Ads audit call. We will respond within 4 business hours.',
      },
      {
        q: 'Do you offer a free Google Ads audit?',
        a: 'Yes. Treva offers a free Google Ads account audit that includes: keyword waste analysis, Quality Score breakdown, CPL & ROAS gap analysis, competitor intelligence, and a 30-day improvement roadmap. No obligation.',
      },
    ],
  },
  {
    title: 'Digital Marketing Services',
    items: [
      {
        q: 'What digital marketing services does Treva provide?',
        a: 'Treva specialises in Google Ads and performance marketing as our core offering. We also provide branding, social media marketing, media production, web development, and app development for brands that need a full-service partner.',
      },
      {
        q: 'Do I need SEO or performance marketing first?',
        a: 'If you need immediate lead flow, performance marketing (Google Ads) is faster. If you want compounding long-term visibility at lower cost, SEO is essential. Most growing brands benefit from Google Ads for immediate ROI while building SEO authority in parallel.',
      },
      {
        q: 'Can Treva handle both strategy and execution?',
        a: 'Yes. Treva works across strategy, campaign setup, optimisation, creative production, reporting, and landing page improvement end-to-end Google Ads management.',
      },
    ],
  },
  {
    title: 'Treva CRM',
    items: [
      {
        q: 'What is Treva CRM?',
        a: 'Treva CRM is a live CRM platform for lead management, sales pipeline tracking, follow-ups, activity logs, and workflow automation.',
      },
      {
        q: 'Is Treva CRM free?',
        a: 'Yes. Treva CRM is currently free to access.',
      },
      {
        q: 'Who should use Treva CRM?',
        a: 'Treva CRM is useful for businesses that want a cleaner system for sales follow-ups, lead tracking, deal visibility, and customer workflow management.',
      },
    ],
  },
  {
    title: 'Growth, UGC & Creator Commerce',
    items: [
      {
        q: 'What is a growth partner vs a marketing agency?',
        a: 'At Treva, we define a growth partner as a team that connects your marketing, technology, and data into one compounding system — not just a vendor that runs campaigns and sends monthly reports. Agencies execute. Growth partners build systems that get smarter over time.',
      },
      {
        q: 'What is Creator Hub and how does UGC marketing work?',
        a: 'Creator Hub is Treva\'s platform that connects brands to UGC video creators filtered by category and budget. UGC (User Generated Content) is authentic video made by real people — not polished brand ads. It builds trust faster, performs better as paid content, and costs less than traditional production. Creator Hub removes the middleman.',
      },
      {
        q: 'Does Treva offer a restaurant-specific marketing package?',
        a: 'Yes. Treva works with restaurants, bars, and breweries across Bangalore offering social media management, Google Ads, UGC creator content through Creator Hub, and our Restaurant Dashboard — a unified view of operations and marketing performance. Book a free strategy call to discuss your F&B brand.',
      },
      {
        q: 'What is Treva CRM and who is it for?',
        a: 'Treva CRM is a sales pipeline and customer management tool built for growing businesses that want their marketing data and sales data to talk to each other. It is designed for businesses that run Treva\'s marketing services and want one dashboard for leads, pipeline, and campaign performance.',
      },
      {
        q: 'Can Treva manage both organic social media and Google Ads?',
        a: 'Yes. Treva manages both organic social media — content creation, scheduling, community management — and paid performance marketing including Google Ads and Meta Ads. When organic and paid work from the same strategy, results compound. That is how we build it.',
      },
      {
        q: 'How does Treva measure ROAS for performance campaigns?',
        a: 'At Treva, we measure ROAS (Return on Ad Spend) by tracking conversions at the campaign, ad set, and keyword level — not just impressions or clicks. We connect ad platform data to actual revenue events and report in weekly dashboards. Every rupee is accounted for.',
      },
      {
        q: 'Does Treva work with brands outside Bangalore?',
        a: 'Yes. Treva is headquartered in Bangalore but works with brands across India. Creator Hub, our UGC creator platform, operates nationally. Performance marketing and social media services are location-agnostic. Contact us to discuss your brand\'s location.',
      },
    ],
  },
];

export default function FAQPage() {
  const [query, setQuery] = useState('');
  const allFAQs = faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  );
  const filteredGroups = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return faqGroups;

    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.q.toLowerCase().includes(search) ||
          item.a.toLowerCase().includes(search) ||
          group.title.toLowerCase().includes(search)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <>
      <SEOHead
        title="FAQ | Digital Marketing Agency, Google Ads & Branding Services | Treva Bangalore"
        description="Common questions about Treva's digital marketing services: Google Ads management, social media marketing, branding, web development, performance marketing, and pricing. Get clear answers."
        url="https://www.treva.in/faq"
        keywords="digital marketing agency FAQ, Google Ads FAQ India, performance marketing questions, social media marketing FAQ, branding agency FAQ, PPC agency questions, digital marketing services pricing, marketing company FAQ Bangalore"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allFAQs,
        }}
      />

      <section className="relative overflow-hidden bg-white pb-16 pt-32">
        <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.06), transparent 70%)' }} />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 mb-6 font-black text-gray-900"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Frequently Asked Questions About{' '}
            <span className="teal-gradient-text">Performance Marketing and Google Ads</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-gray-500">
            Everything you need to know about Google Ads, ROAS, CPL, and working with Treva Bangalore's performance marketing agency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-9 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search all FAQ questions..."
                className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#29C8D5] focus:ring-1 focus:ring-[#29C8D5]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          {filteredGroups.length === 0 ? (
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center text-gray-400 shadow-sm">
              No questions match your search.
            </div>
          ) : filteredGroups.map((group, groupIndex) => (
            <FadeIn key={group.title} delay={groupIndex * 0.08}>
              <div>
                <h2 className="mb-6 text-3xl font-black text-gray-900">{group.title}</h2>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.q} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.q}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-black text-gray-900 text-3xl mb-4">
              Still Have Questions?{' '}
              <span className="teal-gradient-text">Let&apos;s Talk.</span>
            </h2>
            <p className="text-gray-500 mb-8">
              Book a free 30-minute Google Ads audit call. We will review your account and answer every question you have. No obligation.
            </p>
            <Link href="/contact" className="btn-primary">
              Claim My Free Audit <ArrowUpRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
