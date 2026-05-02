import Link from 'next/link';
import {
  ShieldCheck, Database, Link2, Lock, SlidersHorizontal,
  Clock, RefreshCw, Mail, Zap, Building2,
} from 'lucide-react';

const MODULES = [
  { name: 'CRM',          cls: 'text-blue-700 bg-blue-50 border-blue-200' },
  { name: 'Restaurant',   cls: 'text-orange-700 bg-orange-50 border-orange-200' },
  { name: 'Ads Platform', cls: 'text-violet-700 bg-violet-50 border-violet-200' },
  { name: 'Creator Hub',  cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { name: '+ more soon',  cls: 'text-slate-500 bg-slate-50 border-slate-200' },
];

const FACTS = [
  { Icon: ShieldCheck, label: 'No Data Selling',  desc: 'Never sold, rented, or traded to any third party' },
  { Icon: Building2,   label: 'Tenant Isolation',  desc: 'Strict logical isolation between every organization' },
  { Icon: Lock,        label: 'Encrypted Storage', desc: 'All data at rest and in transit, always' },
];

const SECTIONS = [
  {
    id: 'collect', title: 'What We Collect', Icon: Database,
    items: [
      { heading: 'Account & Organization', body: 'Business name, contact email, phone, business type, GSTIN, city, and address provided during registration. Team member names, roles, and invitation details added by org admins.' },
      { heading: 'Operational Data', body: 'CRM: contacts, accounts, deals, notes, call logs, pipeline records. Restaurant: reservations, table orders, menu configurations, POS logs. Ads: campaign metadata, linked ad account IDs, performance metrics. Creator Hub: creator profiles, content records, audience engagement signals.' },
      { heading: 'Authentication', body: 'Email address for OTP-based sign-in. When signing in with Google, we receive your account email and profile name strictly as authorized by your Google account settings.' },
      { heading: 'Technical Telemetry', body: 'Browser type, device, session timestamps, IP address, and application error signals used for security, reliability monitoring, and abuse prevention.' },
    ],
  },
  {
    id: 'use', title: 'How We Use Data', Icon: Zap,
    items: [
      { heading: 'Service Delivery', body: 'To operate and improve all Treva modules — serving dashboards, executing queries, processing business records, and routing data to connected integrations on your behalf.' },
      { heading: 'Authentication & Security', body: 'To verify identity, manage sessions, prevent unauthorized access, and detect abuse. OTPs expire within 10 minutes of issuance.' },
      { heading: 'Support & Communication', body: 'To respond to support requests, deliver critical service alerts, and communicate significant policy or product changes. Treva does not send unsolicited marketing.' },
    ],
  },
  {
    id: 'integrations', title: 'Third-Party Integrations', Icon: Link2,
    items: [
      { heading: 'Google API Services', body: "Treva connects to Gmail (email delivery and CRM sync), Google Drive (file storage), Google Contacts (import), Google Calendar (event scheduling), and Google Ads (campaign management). Treva's use of Google user data strictly follows the Google API Services User Data Policy, including the Limited Use requirements. Google user data is never used for advertising targeting or shared with third parties for unrelated purposes." },
      { heading: 'Meta Ads', body: 'Only tokens and campaign metrics you explicitly authorize are stored, used solely to power your Treva Ads analytics dashboard. No Meta user data is stored beyond what you authorize.' },
      { heading: 'Exotel Telephony', body: "Click-to-call in CRM shares only the destination phone number and your assigned agent number with Exotel. Call logs are stored within your organization's account and are not accessible to other tenants." },
      { heading: 'Payments (Razorpay)', body: 'Treva never stores payment card data. All payment processing is handled by the respective processor under their own PCI-DSS compliance programs.' },
    ],
  },
  {
    id: 'sharing', title: 'Data Sharing', Icon: ShieldCheck,
    items: [
      { heading: 'No Selling', body: 'Treva does not sell, rent, or trade personal data to any third party, under any circumstance.' },
      { heading: 'Infrastructure Partners', body: 'Data is hosted and processed by trusted cloud infrastructure providers for database hosting, API serving, and file storage. Each provider operates under strict data processing agreements with Treva.' },
      { heading: 'Legal Disclosure', body: 'We may disclose data when required by law, court order, or governmental authority. We will notify you to the extent permitted by applicable law before complying with such requests.' },
      { heading: 'Business Transfers', body: 'In the event of a merger or acquisition, affected users will be notified via email and in-app notice at least 14 days before any data transfer.' },
    ],
  },
  {
    id: 'security', title: 'Data Security', Icon: Lock,
    items: [
      { heading: 'Tenant Isolation', body: 'Strict logical data isolation is enforced at the database level, ensuring no data access can cross organizational boundaries under any circumstances.' },
      { heading: 'Encryption', body: 'All data in transit is protected by TLS 1.2+. Data at rest is encrypted using industry-standard encryption at the infrastructure level.' },
      { heading: 'Sessions & Secrets', body: 'Session tokens are short-lived and scoped to your authenticated session. Integration credentials (OAuth tokens, API keys) are stored encrypted and never exposed in full to client applications — only redacted representations appear in the UI.' },
    ],
  },
  {
    id: 'rights', title: 'Your Rights & Controls', Icon: SlidersHorizontal,
    items: [
      { heading: 'Access & Portability', body: "Request a full export of your organization's data anytime by contacting info@treva.in with your organization name and email for identity verification." },
      { heading: 'Correction & Deletion', body: 'Update account and contact data directly in Treva settings. Deletion requests are processed within 30 days, subject to legal retention obligations.' },
      { heading: 'Revoke Integration Access', body: 'Disconnect any third-party integration anytime from Settings → Integrations. Revocation immediately terminates our access to that connected service.' },
    ],
  },
  {
    id: 'retention', title: 'Data Retention', Icon: Clock,
    items: [
      { heading: 'Active Subscriptions', body: 'All operational data is retained for the duration of your active Treva subscription.' },
      { heading: 'After Account Closure', body: 'Operational data is retained for 90 days after closure for recovery, then permanently deleted unless legal obligations require longer retention.' },
      { heading: 'Audit Logs & Tokens', body: 'Audit logs are retained for a minimum of 2 years for compliance and dispute resolution. Integration tokens are deleted immediately upon disconnection.' },
    ],
  },
  {
    id: 'changes', title: 'Policy Changes', Icon: RefreshCw,
    items: [
      { heading: 'Advance Notice', body: 'Material changes will be communicated via in-app notification and email at least 14 days before taking effect.' },
      { heading: 'Continued Use', body: 'Continued use of Treva after a policy update constitutes acceptance of the revised terms. The latest version is always available at treva.in/privacy-policy.' },
    ],
  },
  {
    id: 'contact', title: 'Contact', Icon: Mail,
    items: [
      { heading: 'Privacy Desk', body: 'info@treva.in — for data access, correction, deletion, or any privacy-related questions.' },
      { heading: 'Registered Address', body: 'Treva Technologies Pvt. Ltd., Bengaluru, Karnataka, India.' },
      { heading: 'Canonical URL', body: 'https://treva.in/privacy-policy' },
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <div id="top" className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-600">
            Legal · Privacy
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            How Treva collects, uses, and protects data across all platform modules.
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
            {FACTS.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <Icon className="h-4 w-4 text-teal-700" />
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
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400 group-hover:bg-teal-100 group-hover:text-teal-700">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                      <SectionIcon className="h-5 w-5 text-teal-700" />
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
                href="/terms-of-service"
                className="font-semibold text-slate-900 underline-offset-4 hover:underline"
              >
                Terms of Service
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

export default PrivacyPolicy;
