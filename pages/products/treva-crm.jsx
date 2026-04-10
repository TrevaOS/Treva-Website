import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion, AnimatePresence,
  useInView, useScroll, useTransform,
} from 'framer-motion';
import {
  ArrowUpRight, BarChart3, Bell, Building2, Check, CheckCircle2,
  ChevronRight, CreditCard, FileSpreadsheet, Gauge, ShieldCheck,
  Sparkles, Users, Workflow, Zap, Target, Globe, TrendingUp,
  Mail, Phone, Calendar, Star, Database, Lock, RefreshCw,
  MessageSquare,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

/* ── tiny helpers ──────────────────────────────────────────────── */

function FadeIn({ children, className = '', delay = 0, y = 20 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#29C8D5]/30 bg-[#f0fafb] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#0b8a96]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#29C8D5]" />
      {children}
    </span>
  );
}

/* ── Scroll-lock word-by-word headline ─────────────────────────── */
/*
   The outer section is tall (600vh) so the page content scrolls through it.
   Inside, a sticky container holds the headline pinned in place.
   Each word animates in as you scroll through the section's height.
*/
function ScrollHeadline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const words = [
    'Every', 'deal.', 'Every', 'contact.',
    'Every', 'invoice.', 'Every', 'follow‑up.',
    'One', 'connected', 'revenue', 'workspace.',
  ];

  const accentIdx = new Set([1, 3, 5, 7, 11]);

  return (
    <section ref={ref} style={{ height: '500vh' }} className="relative bg-white">
      <div className="sticky top-0 z-10 flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20">
        <FadeIn className="mb-8"><SectionLabel>The Platform</SectionLabel></FadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[clamp(2rem,4.5vw,4rem)] font-black leading-tight tracking-tight">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = Math.min((i + 1.2) / words.length, 1);
              const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
              const color = accentIdx.has(i)
                ? useTransform(scrollYProgress, [start, end], ['#c5eef2', '#29C8D5'])
                : useTransform(scrollYProgress, [start, end], ['#d1d5db', '#111827']);
              return (
                <motion.span
                  key={i}
                  style={{ opacity, color }}
                  className="mr-[0.18em] inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
          <motion.p
            style={{ opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]) }}
            className="mx-auto mt-6 max-w-md text-base text-gray-500"
          >
            From first contact to collected invoice Treva CRM keeps your whole team moving.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ── Feature tab panel ──────────────────────────────────────────── */
function FeatureTabs({ items }) {
  const [active, setActive] = useState(0);
  const cur = items[active];
  const Icon = cur.icon;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-2 text-center"><SectionLabel>Platform tour</SectionLabel></FadeIn>
        <FadeIn delay={0.05} className="mb-10 text-center">
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tight text-gray-900">
            Six modules, one workspace.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500">
            Click any module to see how it looks and what it does.
          </p>
        </FadeIn>

        {/* Tab strip */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {items.map((item, i) => {
            const TabIcon = item.icon;
            return (
              <button
                key={item.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  active === i
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <TabIcon size={13} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 lg:grid-cols-[360px_1fr]"
          >
            {/* Info card */}
            <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#0b8a96]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{cur.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{cur.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cur.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {cur.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={13} className="mt-0.5 shrink-0 text-[#29C8D5]" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshot card */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a80]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#8bd3a6]" />
                <span className="ml-2 text-[11px] font-medium text-gray-400">Treva CRM / {cur.path}</span>
                <span className="ml-auto flex items-center gap-1 rounded-full border border-[#29C8D5]/25 bg-white px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29C8D5]" />
                  <span className="text-[10px] font-semibold text-[#0b8a96]">Live</span>
                </span>
              </div>
              <div className="relative bg-gray-50 p-3">
                <img
                  src={cur.image}
                  alt={cur.title}
                  className="w-full rounded-xl border border-gray-100 shadow-sm"
                />
                {cur.overlay && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`absolute z-10 ${cur.overlayPos}`}
                  >
                    {cur.overlay}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Main page ──────────────────────────────────────────────────── */
export default function TrevaCRM() {

  const featureItems = useMemo(() => [
    {
      title: 'Dashboard', icon: Gauge, path: 'dashboard',
      body: 'Command center for your revenue. See pipeline value, win rates, and deal velocity live.',
      tags: ['KPIs', 'Win Rate', 'Pipeline', 'Forecasting'],
      bullets: ['Live deal stage breakdown', 'Revenue pacing vs targets', 'Team activity feed'],
      image: '/images/dash.png',
      overlayPos: 'right-4 top-4',
      overlay: (
        <div className="rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">Live snapshot</div>
          <div className="grid grid-cols-2 gap-2">
            {[['Won', 'Rs 8.4L'], ['Open', '47 deals'], ['Win rate', '62%'], ['Avg deal', 'Rs 42K']].map(([l, v]) => (
              <div key={l} className="rounded-lg bg-gray-50 px-2.5 py-1.5">
                <div className="text-[9px] font-semibold text-gray-400">{l}</div>
                <div className="text-xs font-bold text-gray-900">{v}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Contacts', icon: Users, path: 'contacts',
      body: 'Full-profile contact intelligence with lifecycle status, activity history, and company context.',
      tags: ['360° Profile', 'Lifecycle', 'Activity', 'Tags'],
      bullets: ['Unified contact timeline', 'Auto-linked company records', 'Custom fields'],
      image: '/images/contacts.png',
      overlayPos: 'left-4 bottom-4',
      overlay: (
        <div className="rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef9fa] text-xs font-bold text-[#0b8a96]">SJ</div>
            <div>
              <div className="text-xs font-bold text-gray-900">Sarah Johnson</div>
              <div className="text-[10px] text-gray-500">Head of IT · GreenLeaf Inc.</div>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {['Qualified', 'Demo Booked'].map((t) => (
              <span key={t} className="rounded-full bg-[#f0fafb] px-2 py-0.5 text-[9px] font-bold text-[#0b8a96]">{t}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Accounts', icon: Building2, path: 'accounts',
      body: 'Link companies to deals and contacts. Understand org structure and decision-maker relationships.',
      tags: ['Org Context', 'Decision Makers', 'Deal Links'],
      bullets: ['Parent-child hierarchy', 'Deal and contact rollups', 'Account health scoring'],
      image: '/images/accounts.png',
      overlayPos: null, overlay: null,
    },
    {
      title: 'Deals', icon: TrendingUp, path: 'deals',
      body: 'Visual pipeline with drag-and-drop stages, close date tracking, and revenue rollups.',
      tags: ['Kanban', 'Stage Tracking', 'Close Dates'],
      bullets: ['Visual stage management', 'Deal value & probability', 'Win/loss analysis'],
      image: '/images/deals.png',
      overlayPos: 'left-4 top-4',
      overlay: (
        <div className="rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="mb-1.5 flex items-center justify-between gap-4">
            <div className="text-xs font-bold text-gray-900">Invoice health</div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600">78% collected</span>
          </div>
          <div className="space-y-1 text-xs">
            {[['Paid', 'Rs 4.8L'], ['Pending', 'Rs 1.3L'], ['Overdue', 'Rs 42K']].map(([l, v]) => (
              <div key={l} className="flex justify-between text-gray-500"><span>{l}</span><span className="font-bold text-gray-900">{v}</span></div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Onboarding', icon: FileSpreadsheet, path: 'onboarding',
      body: 'Signup to active workspace in minutes. Google sign-in, org setup, CSV import no friction.',
      tags: ['Google Sign-In', 'CSV Import', 'Team Invite'],
      bullets: ['Guided setup wizard', 'Bulk contact import', 'Role assignment'],
      image: '/images/import.png',
      overlayPos: 'right-4 bottom-4',
      overlay: (
        <div className="rounded-xl border border-gray-100 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">Setup steps</div>
          {['Create account', 'Configure org', 'Import contacts', 'Go live'].map((s, i) => (
            <div key={s} className="flex items-center gap-2 py-0.5 text-xs text-gray-600">
              <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${i < 3 ? 'bg-[#29C8D5] text-white' : 'bg-gray-100 text-gray-400'}`}>{i + 1}</span>
              {s}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Automation', icon: Workflow, path: 'workflows',
      body: 'Triggers, sequences, and reminders. Let the CRM handle repetitive outreach automatically.',
      tags: ['Triggers', 'Sequences', 'Reminders'],
      bullets: ['Visual workflow builder', 'Email sequence automation', 'Stage-based triggers'],
      image: '/images/dash.png',
      overlayPos: null, overlay: null,
    },
  ], []);

  const capabilities = [
    { icon: Users, title: 'Contact intelligence', body: 'Rich profiles with lifecycle tracking, notes, tags, and full activity timeline.' },
    { icon: BarChart3, title: 'Pipeline visibility', body: 'Kanban board with stage-level value rollups and win/loss reporting.' },
    { icon: Workflow, title: 'Workflow automation', body: 'Trigger-based follow-ups, sequences, and reminders built in.' },
    { icon: CreditCard, title: 'Billing & invoicing', body: 'Generate invoices from won deals and track collections without leaving the CRM.' },
    { icon: Building2, title: 'Account management', body: 'Company-level views with linked contacts, deals, and relationship health.' },
    { icon: ShieldCheck, title: 'Admin & security', body: 'Role-based access, audit controls, and team structure management.' },
    { icon: Database, title: 'Data import/export', body: 'Bulk CSV import with field mapping. Export any view in one click.' },
    { icon: RefreshCw, title: 'Real-time sync', body: 'All changes propagate instantly so your whole team works from the same data.' },
    { icon: Lock, title: 'Privacy controls', body: 'GDPR-aligned data handling and configurable retention policies built in.' },
  ];

  const journey = [
    { n: '01', title: 'Capture leads', body: 'Inquiries, imports, and form fills land in a unified workspace with auto-enrichment.', icon: Target, color: '#29C8D5' },
    { n: '02', title: 'Qualify & enrich', body: 'Score contacts, attach company context, log calls and notes always know who to prioritize.', icon: Users, color: '#6366f1' },
    { n: '03', title: 'Move the deal', body: 'Kanban pipeline, expected close dates, deal values. Your whole funnel in one view.', icon: TrendingUp, color: '#f59e0b' },
    { n: '04', title: 'Automate follow-up', body: 'Set triggers and sequences so no deal goes cold while your team is focused elsewhere.', icon: Zap, color: '#10b981' },
    { n: '05', title: 'Invoice & collect', body: 'Generate invoices from won deals and close the revenue loop all inside Treva.', icon: CreditCard, color: '#f43f5e' },
  ];

  const quotes = [
    { text: 'Treva CRM replaced three separate tools. We moved from spreadsheets to a real pipeline in under a day.', author: 'Priya M.', role: 'Sales Lead, TechVenture', av: 'PM' },
    { text: 'Having billing and CRM in the same system is the feature we didn\'t know we needed. Invoice collection improved fast.', author: 'Rahul K.', role: 'Founder, GreenLeaf Inc.', av: 'RK' },
    { text: 'Finally a CRM that feels modern. Clean UI, everything where you expect it, and it actually works.', author: 'Sneha T.', role: 'Ops Manager, Finova', av: 'ST' },
  ];

  const integrations = [
    { name: 'Google Workspace', icon: Globe },
    { name: 'Slack', icon: MessageSquare },
    { name: 'WhatsApp', icon: Phone },
    { name: 'Gmail', icon: Mail },
    { name: 'Calendar', icon: Calendar },
    { name: 'Zapier', icon: Zap },
  ];

  return (
    <>
      <SEOHead
        title="Treva CRM The Complete Revenue Workspace"
        description="Treva CRM unifies deals, contacts, billing, support, and automation free . Built for modern sales and ops teams."
        url="https://www.treva.in/products/treva-crm"
        keywords="Treva CRM, free CRM, CRM software India, sales CRM, pipeline dashboard"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Treva CRM',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Treva CRM is a free revenue workspace for leads, deals, billing, support, and automation.',
          url: 'https://www.treva.in/products/treva-crm',
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-white px-6 pt-28 pb-20">
        {/* subtle teal blob */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[56rem] rounded-full bg-[radial-gradient(ellipse,rgba(41,200,213,0.07)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-5xl">
          {/* eyebrow */}
          <FadeIn className="mb-5 flex justify-center">
            <SectionLabel>Treva CRM</SectionLabel>
          </FadeIn>

          {/* headline */}
          <FadeIn delay={0.05} className="text-center">
            <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-gray-900">
              The revenue workspace<br />
              your team will{' '}
              <span className="bg-gradient-to-r from-[#0b8a96] to-[#29C8D5] bg-clip-text text-transparent">
                actually use.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-5 text-center">
            <p className="mx-auto max-w-lg text-base text-gray-500 leading-relaxed">
              Deals, contacts, billing, support, and automation all connected. No tab-switching, no lost context, no missed follow-ups. Completely free.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.14} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Get started it's free
              <ArrowUpRight size={15} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              Book a walkthrough
              <ChevronRight size={15} />
            </Link>
          </FadeIn>

          {/* proof pills */}
          <FadeIn delay={0.18} className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {['6+ modules', 'Free forever', '2-min setup', 'No credit card'].map((p) => (
              <span key={p} className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs text-gray-500">{p}</span>
            ))}
          </FadeIn>

          {/* hero screenshot capped height so it stays inside the section */}
          <FadeIn delay={0.2} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
              {/* browser bar */}
              <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a80]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#8bd3a6]" />
                <div className="ml-3 rounded-full border border-gray-200 bg-white px-3 py-0.5 text-[11px] text-gray-400">
                  Treva CRM / dashboard
                </div>
                <div className="ml-auto flex items-center gap-1 rounded-full border border-[#29C8D5]/25 bg-white px-2.5 py-1">
                  <Bell size={11} className="text-[#0b8a96]" />
                  <span className="text-[10px] font-semibold text-[#0b8a96]">Live product</span>
                </div>
              </div>
              {/* screenshot max-h keeps it from overflowing */}
              <div className="relative overflow-hidden bg-white p-3" style={{ maxHeight: '420px' }}>
                <img
                  src="/images/dash.png"
                  alt="Treva CRM Dashboard"
                  className="w-full rounded-xl border border-gray-100"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                {/* floating KPI */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute left-6 top-6 z-10 rounded-xl border border-gray-100 bg-white p-3 shadow-lg"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Pipeline this month</div>
                  <div className="mt-1 text-lg font-black text-gray-900">Rs 12.8L</div>
                  <div className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <TrendingUp size={10} />
                    +18% vs last month
                  </div>
                </motion.div>
                {/* floating deal */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute bottom-6 right-6 z-10 rounded-xl bg-gray-900 p-3 shadow-lg"
                >
                  <div className="text-[10px] font-bold text-[#7fe7ff]">Today</div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-white">
                    <CheckCircle2 size={12} className="text-[#29C8D5]" />
                    3 deals moved to won
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              ['100%', 'Free forever'],
              ['6+', 'Core modules'],
              ['2 min', 'Average setup'],
              ['99.9%', 'Uptime'],
            ].map(([val, label]) => (
              <FadeIn key={label} className="text-center">
                <div className="text-5xl font-black tracking-tight text-gray-900">{val}</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS STRIP ────────────────────────────────────── */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            Connects with tools your team already uses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {integrations.map((it, i) => {
              const It = it.icon;
              return (
                <FadeIn key={it.name} delay={i * 0.04}>
                  <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
                    <It size={13} className="text-gray-400" />
                    {it.name}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCROLL HEADLINE ───────────────────────────────────────── */}
      <ScrollHeadline />

      {/* ── FEATURE TABS ──────────────────────────────────────────── */}
      <FeatureTabs items={featureItems} />

      {/* ── JOURNEY TIMELINE ──────────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-2 text-center"><SectionLabel>Customer journey</SectionLabel></FadeIn>
          <FadeIn delay={0.05} className="mb-12 text-center">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tight text-gray-900">
              From first touch to final payment.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
              The full revenue cycle inside one connected product.
            </p>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-100" />
            <div className="space-y-4">
              {journey.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <FadeIn key={step.n} delay={i * 0.07}>
                    <div className="flex gap-5">
                      <div
                        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white shadow-sm"
                        style={{ boxShadow: `0 2px 12px ${step.color}30` }}
                      >
                        <StepIcon size={16} style={{ color: step.color }} />
                      </div>
                      <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 hover:bg-white hover:shadow-sm transition-all">
                        <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">{step.n}</div>
                        <div className="text-sm font-bold text-gray-900">{step.title}</div>
                        <div className="mt-1 text-xs leading-relaxed text-gray-500">{step.body}</div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ─────────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-2"><SectionLabel>Everything included</SectionLabel></FadeIn>
          <FadeIn delay={0.05} className="mb-10">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tight text-gray-900">
              Built deep, not wide.
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500 leading-relaxed">
              Every feature serves a real workflow. No bloat just the tools modern revenue teams actually need.
            </p>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((card, i) => {
              const CardIcon = card.icon;
              return (
                <FadeIn key={card.title} delay={i * 0.04}>
                  <div className="flex h-full gap-4 rounded-xl border border-gray-100 bg-white p-5 hover:border-gray-200 hover:shadow-sm transition-all">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-[#0b8a96]">
                      <CardIcon size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{card.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-gray-500">{card.body}</div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS TRIPTYCH ──────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-2 text-center"><SectionLabel>See it in action</SectionLabel></FadeIn>
          <FadeIn delay={0.05} className="mb-10 text-center">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tight text-gray-900">
              Real screens. Real workflows.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
              Not a mockup this is the actual Treva CRM product, live right now.
            </p>
          </FadeIn>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { label: 'Contacts view', image: '/images/contacts.png', desc: 'Full profiles with lifecycle status and company context' },
              { label: 'Dashboard', image: '/images/dash.png', desc: 'Live KPI command center for your revenue team' },
              { label: 'Deals board', image: '/images/deals.png', desc: 'Kanban pipeline with stage value rollups' },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.07}>
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff8a80]" />
                    <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
                    <span className="h-2 w-2 rounded-full bg-[#8bd3a6]" />
                    <span className="ml-2 text-[11px] font-medium text-gray-400">{item.label}</span>
                  </div>
                  <div className="bg-gray-50 p-2.5">
                    <img src={item.image} alt={item.label} className="w-full rounded-lg border border-gray-100" />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-2 text-center"><SectionLabel>What teams say</SectionLabel></FadeIn>
          <FadeIn delay={0.05} className="mb-10 text-center">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tight text-gray-900">Built for real teams.</h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {quotes.map((q, i) => (
              <FadeIn key={q.author} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex gap-0.5">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} fill="#f59e0b" className="text-amber-400" />)}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">"{q.text}"</p>
                  <div className="mt-5 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef9fa] text-[11px] font-bold text-[#0b8a96]">{q.av}</div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">{q.author}</div>
                      <div className="text-[11px] text-gray-400">{q.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE PLAN CTA ─────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn className="mb-2 text-center"><SectionLabel>Pricing</SectionLabel></FadeIn>
          <FadeIn delay={0.05} className="mb-10 text-center">
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tight text-gray-900">
              100% free. No catches.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
              Treva CRM is completely free to use all modules, unlimited contacts, full features. No credit card, no trial period.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="text-3xl font-black text-gray-900">Free <span className="text-base font-semibold text-gray-400"></span></div>
                  <p className="mt-2 text-sm text-gray-500">Everything included. For every team, at every stage.</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {[
                      'Unlimited contacts', 'Deals & pipeline',
                      'Invoicing & billing', 'Workflow automation',
                      'Team collaboration', 'Account management',
                      'Data import/export', 'Email & chat support',
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={13} className="shrink-0 text-[#29C8D5]" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3 md:items-end">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    Get started free
                    <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300"
                  >
                    Talk to us
                    <ChevronRight size={14} />
                  </Link>
                  <p className="text-[11px] text-gray-400">No credit card needed</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                <Sparkles size={11} />
                Free 
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight text-white">
              Your whole revenue team,<br />
              <span className="bg-gradient-to-r from-[#29C8D5] to-[#7fe7ff] bg-clip-text text-transparent">
                in one workspace.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              Start today no setup fees, no seat limits, no credit card. Just invite your team and go.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#29C8D5] px-7 py-3 text-sm font-semibold text-gray-900 transition hover:bg-[#55dbe6]"
              >
                Start for free
                <ArrowUpRight size={15} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                Book a walkthrough
                <ChevronRight size={15} />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {['Dashboards', 'Contacts', 'Deals', 'Billing', 'Automation', 'Support'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">{item}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
