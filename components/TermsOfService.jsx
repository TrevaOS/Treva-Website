import Link from 'next/link';
import {
  FileText, Users, ShieldAlert, LayoutGrid, Database,
  CreditCard, BookOpen, Activity, Scale, XCircle, Landmark, Mail,
} from 'lucide-react';

const MODULES = [
  { name: 'CRM',          cls: 'text-blue-700 bg-blue-50 border-blue-200' },
  { name: 'Restaurant',   cls: 'text-orange-700 bg-orange-50 border-orange-200' },
  { name: 'Ads Platform', cls: 'text-violet-700 bg-violet-50 border-violet-200' },
  { name: 'Creator Hub',  cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { name: '+ more soon',  cls: 'text-slate-500 bg-slate-50 border-slate-200' },
];

const PILLARS = [
  { Icon: Users,    label: 'Role-Based Access',     desc: 'Org admins control all team permissions' },
  { Icon: Database, label: 'Your Data Stays Yours', desc: 'Limited license, never an ownership transfer' },
  { Icon: Scale,    label: 'Indian Jurisdiction',   desc: 'Governed by the laws of India' },
];

const SECTIONS = [
  {
    id: 'scope', title: 'Scope & Acceptance', Icon: FileText,
    items: [
      { heading: 'Who These Terms Apply To', body: 'These Terms govern your access to and use of all Treva platform modules — CRM, Restaurant, Ads, Creator Hub, and any modules added in the future. By creating an account or accessing the platform, you agree to be bound by these Terms.' },
      { heading: 'Organization Agreement', body: 'If you access Treva on behalf of an organization, you represent that you have authority to bind that organization to these Terms. "You" includes both the individual user and the organization they represent.' },
      { heading: 'Minimum Age', body: 'You must be at least 18 years of age with legal capacity to enter contracts under applicable law to use Treva.' },
    ],
  },
  {
    id: 'account', title: 'Account & Organization', Icon: Users,
    items: [
      { heading: 'Multi-Tenant Model', body: "Treva is a multi-tenant platform. Each organization is provisioned a logically isolated account, enforced at the data layer. Your organization's data is never accessible to other tenants." },
      { heading: 'Admin Responsibilities', body: 'Organization administrators are responsible for: managing user roles and access, ensuring team members comply with these Terms, maintaining credential security, and promptly revoking access for departed or unauthorized users.' },
      { heading: 'Account Accuracy', body: 'You agree to provide accurate, current, and complete information during registration and to keep your account information updated. False or misleading information may result in immediate suspension.' },
      { heading: 'Credential Security', body: 'You are responsible for all activity under your account. Treva uses OTP-based authentication and optional Google sign-in to minimize risks, but you must still safeguard your email account and any connected credentials.' },
    ],
  },
  {
    id: 'use', title: 'Acceptable Use', Icon: ShieldAlert,
    items: [
      { heading: 'Prohibited Conduct', body: "You agree not to: (a) reverse-engineer or circumvent Treva's security controls; (b) use the platform for illegal activities, fraud, or harassment; (c) upload malware, spam, or abusive content; (d) attempt to access another tenant's data; (e) resell or sublicense Treva access without written authorization; (f) generate content that violates third-party rights." },
      { heading: 'Fair Use', body: 'You agree not to place disproportionate load on the platform through bulk automation, excessive API calls, or data scraping beyond your normal business workflows.' },
      { heading: 'Third-Party Compliance', body: 'When using integrations (Google, Meta, Exotel, Razorpay), you remain responsible for complying with their respective terms and applicable advertising, data protection, and telecommunications laws.' },
    ],
  },
  {
    id: 'modules', title: 'Platform Modules', Icon: LayoutGrid,
    items: [
      { heading: 'CRM Module', body: 'Provides contact, account, deal, and pipeline management with calling, email, and integration support. Organizations are responsible for ensuring their use of contact and communication records complies with applicable data protection and consent laws.' },
      { heading: 'Restaurant Module', body: 'Provides reservation management, POS, table and order tracking, and menu configuration. Organizations must ensure pricing, taxes, and operations comply with food safety and POS regulations in their jurisdiction.' },
      { heading: 'Ads Module', body: 'Provides campaign analytics and management for Google Ads and Meta Ads via API. Organizations remain solely responsible for their advertising content, targeting choices, budget spend, and compliance with Google and Meta advertising policies.' },
      { heading: 'Creator Hub', body: 'Provides creator profile management, content publishing, and audience engagement tools. Organizations and creators are responsible for ensuring content complies with applicable laws, platform policies, and intellectual property rights.' },
      { heading: 'Future Modules', body: 'Treva is a growing marketplace platform. Additional modules will be governed by these Terms plus any module-specific supplemental terms published at the time of their release.' },
    ],
  },
  {
    id: 'data', title: 'Data Ownership', Icon: Database,
    items: [
      { heading: 'Your Data', body: "You retain full ownership of all business data you upload, create, or manage within Treva. Treva receives only a limited, non-exclusive license to host, process, transmit, and display your data strictly as necessary to provide the services you have subscribed to." },
      { heading: "Treva's Data Rights", body: 'Treva may use anonymized, aggregated, non-identifiable usage patterns to improve platform reliability and features. This data cannot be used to identify individual organizations or users.' },
      { heading: 'Data on Termination', body: 'Upon account termination, you may request a full export of your data within 30 days. After 90 days, data will be permanently deleted per our Privacy Policy.' },
    ],
  },
  {
    id: 'billing', title: 'Subscriptions & Billing', Icon: CreditCard,
    items: [
      { heading: 'Subscription Plans', body: 'Treva is offered on a subscription basis. Pricing, plan features, and billing cycles are published on the Treva website and may vary by module or bundle.' },
      { heading: 'Payment Processing', body: 'Payments are processed via Razorpay or other authorized processors. Treva does not store payment card data. All prices are in Indian Rupees (INR), inclusive of applicable GST unless otherwise stated.' },
      { heading: 'Trial Periods', body: 'New organizations are enrolled in a trial period with full access to subscribed modules but may have usage limits. Treva may modify trial terms at any time with notice.' },
      { heading: 'Refunds', body: 'Refund requests are reviewed case-by-case. Contact info@treva.in within 7 days of the charge date with your billing details to initiate a review.' },
    ],
  },
  {
    id: 'ip', title: 'Intellectual Property', Icon: BookOpen,
    items: [
      { heading: "Treva's IP", body: "All Treva platform software, interfaces, designs, trademarks, logos, and documentation are the exclusive intellectual property of Treva Technologies Pvt. Ltd. Nothing in these Terms grants you rights to Treva's IP beyond what's necessary to use the services." },
      { heading: 'Your IP', body: 'You retain all intellectual property rights in your business data and uploaded content. You grant Treva a limited license solely to operate the service on your behalf.' },
      { heading: 'Feedback', body: 'If you submit feedback, bug reports, or feature suggestions, you grant Treva a perpetual, royalty-free license to use and incorporate that feedback without restriction or compensation.' },
    ],
  },
  {
    id: 'availability', title: 'Service Availability', Icon: Activity,
    items: [
      { heading: 'Uptime Target', body: 'Treva targets high availability but does not guarantee specific SLAs. Planned maintenance windows will be communicated in advance where possible.' },
      { heading: 'Service Changes', body: 'Treva may add, modify, suspend, or discontinue features at any time. For material changes, we will provide at least 14 days advance notice via in-app notification or email.' },
      { heading: 'Force Majeure', body: 'Treva is not liable for interruptions caused by natural disasters, infrastructure failures, government actions, or third-party service outages beyond our reasonable control.' },
    ],
  },
  {
    id: 'liability', title: 'Limitation of Liability', Icon: Scale,
    items: [
      { heading: 'As-Is Basis', body: 'Treva services are provided on an "as-is" and "as-available" basis without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.' },
      { heading: 'Liability Cap', body: "To the maximum extent permitted by applicable Indian law, Treva's total liability for any claim is limited to the total amount paid by you to Treva in the three (3) months immediately preceding the claim." },
      { heading: 'No Consequential Damages', body: 'Treva is not liable for indirect, incidental, special, punitive, or consequential damages including loss of profits, data, goodwill, or business interruption, even if advised of the possibility.' },
    ],
  },
  {
    id: 'termination', title: 'Termination', Icon: XCircle,
    items: [
      { heading: 'By Treva', body: 'Treva may suspend or terminate your account immediately for: material violation of these Terms, fraudulent activity, non-payment of fees, or conduct that endangers the security or integrity of the platform or other users.' },
      { heading: 'By You', body: 'You may stop using Treva at any time. To formally close your account and initiate data deletion, contact info@treva.in. Outstanding subscription obligations remain due at termination.' },
      { heading: 'Effect of Termination', body: 'Upon termination, platform access is revoked. Data export requests must be made within 30 days. Sections on intellectual property, liability, governing law, and data survive termination indefinitely.' },
    ],
  },
  {
    id: 'law', title: 'Governing Law', Icon: Landmark,
    items: [
      { heading: 'Jurisdiction', body: 'These Terms are governed by the laws of India. Disputes arising from these Terms or the use of Treva services shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.' },
      { heading: 'Dispute Resolution', body: 'Before initiating legal proceedings, both parties agree to attempt good-faith resolution through direct communication. Email info@treva.in with subject "Legal Dispute" to begin this process.' },
      { heading: 'Applicable Laws', body: 'These Terms are subject to the Information Technology Act 2000 (India), applicable data protection regulations, and the Indian Contract Act 1872, as amended.' },
    ],
  },
  {
    id: 'contact', title: 'Contact', Icon: Mail,
    items: [
      { heading: 'Legal & Compliance', body: 'info@treva.in (subject: Legal Notice) — for disputes, formal notices, or compliance questions.' },
      { heading: 'Billing Queries', body: 'info@treva.in (subject: Billing) — for subscription and payment questions.' },
      { heading: 'Registered Address', body: 'Treva Technologies Pvt. Ltd., Bengaluru, Karnataka, India.' },
      { heading: 'Canonical URL', body: 'https://treva.in/terms-of-service' },
    ],
  },
];

export function TermsOfService() {
  return (
    <div id="top" className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
            Legal · Terms
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            The operating agreement for using Treva across all platform modules.
          </p>
          <p className="mt-2 text-xs font-medium text-slate-400">
            Last updated: April 29, 2026
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {MODULES.map((m) => (
              <span
                key={m.name}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${m.cls}`}
              >
                {m.name}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {PILLARS.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                  <Icon className="h-4 w-4 text-violet-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex gap-10 lg:gap-12">

          {/* Sticky sidebar TOC — desktop only */}
          <aside className="hidden w-52 shrink-0 lg:block">
            <div className="sticky top-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Contents
              </p>
              <nav className="space-y-0.5">
                {SECTIONS.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-white hover:text-slate-900 hover:shadow-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-700">
                      {i + 1}
                    </span>
                    <span className="truncate">{s.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="min-w-0 flex-1 space-y-5">
            {SECTIONS.map((sec, idx) => {
              const SectionIcon = sec.Icon;
              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                      <SectionIcon className="h-5 w-5 text-violet-700" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <h2 className="text-[17px] font-semibold leading-tight text-slate-900">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {sec.items.map((item) => (
                      <div key={item.heading} className="rounded-xl bg-slate-50 px-4 py-3.5">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                          {item.heading}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Footer nav */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-500">
              <span>Read our</span>
              <Link
                href="/privacy-policy"
                className="font-semibold text-slate-900 underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="hidden text-slate-300 sm:inline">·</span>
              <Link
                href="/"
                className="font-semibold text-slate-900 underline-offset-4 hover:underline"
              >
                Back to Treva
              </Link>
              <a
                href="#top"
                className="ml-auto text-xs font-medium text-slate-400 hover:text-slate-700"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
