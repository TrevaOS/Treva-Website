import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
        a: 'Most clients see improved CPL and ROAS within the first 4–6 weeks as the campaign optimises. Full campaign maturity typically reaches 90 days as smart bidding algorithms accumulate sufficient conversion data.',
      },
      {
        q: 'What is a good ROAS for Google Ads in India?',
        a: 'ROAS benchmarks vary by industry. eCommerce typically targets 3x–5x ROAS. Lead generation campaigns are better measured by CPL. SaaS brands focus on CAC-to-LTV ratio. Treva sets targets based on your specific business economics not industry averages.',
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
        a: 'Yes Treva is based in Vijayanagar, Bengaluru. Our office address is #93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar, Bengaluru – 560040. We serve clients across India and internationally.',
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
];

export default function FAQPage() {
  const allFAQs = faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  );

  return (
    <>
      <SEOHead
        title="FAQ Performance Marketing, Google Ads & Treva | Frequently Asked Questions"
        description="Answers to the most common questions about Google Ads, performance marketing, ROAS, CPL, and working with Treva Bangalore's performance marketing agency."
        url="https://www.treva.in/faq"
        keywords="performance marketing FAQ, Google Ads FAQ India, ROAS Google Ads, CPL Google Ads, Treva FAQ, performance marketing agency questions"
        faqSchema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allFAQs,
        }}
      />

      <section className="relative overflow-hidden bg-[#000000] pb-16 pt-32">
        <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08), transparent 70%)' }} />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-pill">FAQ</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 mb-6 font-black text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Frequently Asked Questions About{' '}
            <span className="teal-gradient-text">Performance Marketing and Google Ads</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-[#8A9AB0]">
            Everything you need to know about Google Ads, ROAS, CPL, and working with Treva Bangalore's performance marketing agency.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#000000] py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          {faqGroups.map((group, groupIndex) => (
            <FadeIn key={group.title} delay={groupIndex * 0.08}>
              <div>
                <h2 className="mb-6 text-3xl font-black text-white">{group.title}</h2>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.q} className="rounded-2xl border border-[rgba(41,200,213,0.12)] bg-[#080C10] p-6">
                      <h3 className="mb-2 text-lg font-700 text-white">{item.q}</h3>
                      <p className="text-sm leading-relaxed text-[#8A9AB0]">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-[#080C10] py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-black text-white text-3xl mb-4">
              Still Have Questions?{' '}
              <span className="teal-gradient-text">Let's Talk.</span>
            </h2>
            <p className="text-[#8A9AB0] mb-8">
              Book a free 30-minute Google Ads audit call. We will review your account and answer every question you have no obligation.
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
