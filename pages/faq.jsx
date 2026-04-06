import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SEOHead from '../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const faqGroups = [
  {
    title: 'Digital Marketing',
    items: [
      {
        q: 'What digital marketing services does Treva provide?',
        a: 'Treva provides branding, performance marketing, social media marketing, media production, web development, app development, and custom technical solutions for growing brands.',
      },
      {
        q: 'Do I need SEO or performance marketing first?',
        a: 'If you need immediate lead flow, performance marketing is usually faster. If you want compounding long-term visibility, SEO is essential. Most growing brands benefit from a mix of both.',
      },
      {
        q: 'How do I know which marketing channel is right for my business?',
        a: 'The right channel depends on your business model, sales cycle, average order value, and audience behavior. Treva usually recommends channels based on where your customers already spend time and where conversion can be tracked clearly.',
      },
      {
        q: 'Can Treva handle both strategy and execution?',
        a: 'Yes. Treva works across strategy, creative production, campaign setup, optimization, reporting, and website or product support.',
      },
    ],
  },
  {
    title: 'CRM',
    items: [
      {
        q: 'What is Treva CRM?',
        a: 'Treva CRM is Treva’s live CRM platform for lead management, pipeline tracking, follow-ups, activity logs, and workflow organization.',
      },
      {
        q: 'Is Treva CRM live now?',
        a: 'Yes. Treva CRM is live and accessible right now.',
      },
      {
        q: 'Is Treva CRM free now?',
        a: 'Yes. Treva CRM is currently free to access.',
      },
      {
        q: 'Who should use Treva CRM?',
        a: 'Treva CRM is useful for businesses that want a cleaner system for sales follow-ups, lead tracking, deal visibility, and customer workflow management.',
      },
      {
        q: 'How can I get Treva CRM access?',
        a: 'You can access the live CRM through crm.treva.in or visit the Treva CRM details page first and then click Get Access.',
      },
    ],
  },
  {
    title: 'Working With Treva',
    items: [
      {
        q: 'Can I book a call with Treva?',
        a: 'Yes. You can use the Contact page to book a call, request services, or ask for product details and demos.',
      },
      {
        q: 'Does Treva work only with Bengaluru businesses?',
        a: 'No. Treva is based in Bengaluru, but we work with businesses across India and beyond.',
      },
      {
        q: 'Can I ask for product details through the contact form?',
        a: 'Yes. The contact form includes product-related fields so you can request details for Treva CRM and other products.',
      },
    ],
  },
];

export default function FAQPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <SEOHead
        title="FAQ Digital Marketing, SEO, CRM & Treva"
        description="Find answers about digital marketing, SEO, performance marketing, Treva CRM, and how Treva helps brands grow."
        url="https://www.treva.in/faq"
        keywords="digital marketing FAQ, SEO FAQ, CRM FAQ, Treva CRM FAQ, performance marketing questions, Bengaluru digital marketing agency FAQ"
        schema={schema}
      />

      <section className="relative overflow-hidden bg-[#000000] pb-16 pt-32">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[380px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.08), transparent 70%)' }}
        />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-pill">
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 mb-6 font-black text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Answers for <span className="teal-gradient-text">Growth-Focused Brands</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl text-[#8A9AB0]"
          >
            Common questions about digital marketing, SEO, performance campaigns, Treva CRM, and how we work.
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
                    <div
                      key={item.q}
                      className="rounded-2xl border border-[rgba(41,200,213,0.12)] bg-[#080C10] p-6"
                    >
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
    </>
  );
}
