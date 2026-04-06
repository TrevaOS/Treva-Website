import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Database, Users, BarChart3, Workflow, ArrowUpRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    icon: Users,
    title: 'Lead Management',
    desc: 'Capture, track, and nurture leads across your entire sales funnel with complete visibility.',
  },
  {
    icon: Workflow,
    title: 'Sales Pipeline',
    desc: 'Visualize deals, move prospects across stages, and close faster with structured workflows.',
  },
  {
    icon: Database,
    title: 'Customer Data Hub',
    desc: 'Centralized records for conversations, tasks, notes, and lifecycle history.',
  },
  {
    icon: Workflow,
    title: 'Automation Engine',
    desc: 'Automate reminders, follow-ups, and repeatable workflows so your team moves faster.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    desc: 'Track pipeline performance, team output, and conversion signals in real time.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Keep sales, operations, and leadership aligned with shared visibility across every account.',
  },
];

export default function TrevaCRM() {
  const blue = '#29C8D5';

  return (
    <>
      <SEOHead
        title="Treva CRM Free CRM Software for Sales & Workflow Teams"
        description="Treva CRM is live and free right now. Capture leads, automate follow-ups, manage pipelines, and run customer workflows in one platform."
        url="https://www.treva.in/products/treva-crm"
        keywords="free CRM India, CRM software Bengaluru, customer relationship management software, sales pipeline software, workflow automation CRM, Treva CRM"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Treva CRM',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
          description: 'Treva CRM is a live CRM and workflow platform for leads, pipelines, follow-ups, and customer operations.',
          url: 'https://www.treva.in/products/treva-crm',
        }}
      />

      <section className="relative overflow-hidden bg-black pb-20 pt-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.12) 0%, transparent 68%)' }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-pill section-pill-live border border-[#29C8D5]/30 bg-[#29C8D5]/10 text-[#7FE7FF]">
                Now Live
              </span>
            </div>

            <h1 className="mb-4 text-5xl font-black text-white">
              Treva <span className="text-[#29C8D5]">CRM</span>
            </h1>

            <p className="mb-4 text-xl italic text-gray-400">
              Close faster. Follow up smarter. Stay on top of every deal for free right now.
            </p>

            <p className="mb-8 max-w-lg text-gray-400">
              Treva CRM is free right now and gives your team one clean workspace for leads,
              pipelines, customer notes, reminders, and workflow automation, so nothing slips through the cracks.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://crm.treva.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: blue }}
              >
                Get Access <ArrowUpRight size={16} />
              </a>

              <Link href="/contact" className="btn-outline">
                Book Demo
              </Link>
            </div>
          </div>

          <div className="card-glow rounded-2xl border border-[#29C8D5]/20 bg-[#0D1117] p-6">
            <p className="mb-4 text-sm text-[#29C8D5]">Live Dashboard</p>

            <div className="space-y-3">
              {[
                { name: 'Fresh Leads', value: '128' },
                { name: 'Deals Closed', value: '42' },
                { name: 'Follow-ups Due', value: '17' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between rounded-lg bg-black p-3">
                  <span className="text-gray-400">{item.name}</span>
                  <span className="font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080C10] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-14 text-center">
            <h2 className="text-4xl font-black text-white">Powerful CRM Features</h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="rounded-xl border border-[#29C8D5]/10 bg-black p-6">
                  <Icon className="mb-4 text-[#29C8D5]" />
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-3xl text-white">Ready to Put Your Pipeline on Rails?</h2>
          <p className="mx-auto mb-8 max-w-lg text-[#8A9AB0]">
            Start using Treva CRM right away, or book a product walkthrough with the Treva team.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://crm.treva.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: blue }}
            >
              Get Access
              <ArrowUpRight size={16} />
            </a>
            <Link href="/contact" className="btn-outline">
              Book Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
