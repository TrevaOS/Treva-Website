import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  AlertTriangle,
  ArrowUpRight,
  Camera,
  CheckCircle,
  ClipboardList,
  FileText,
  LocateFixed,
  MapPin,
  Route,
  ShieldCheck,
  Waves,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const green = '#22C55E';

const features = [
  { icon: ClipboardList, title: 'Select Issue Vertical', desc: 'Choose the right public issue category, from roads and drainage to sanitation, streetlights, and civic maintenance.' },
  { icon: Camera, title: 'Capture Evidence', desc: 'Attach photos directly from the complaint flow so the issue is easier for officials and field teams to verify.' },
  { icon: LocateFixed, title: 'Fetch Live Location', desc: 'Use device location to pin the complaint accurately and reduce back-and-forth while assigning the issue.' },
  { icon: FileText, title: 'Add Clear Details', desc: 'Describe the issue, impact, nearby landmarks, and urgency before raising the complaint.' },
  { icon: ShieldCheck, title: 'Structured Grievance Flow', desc: 'Designed as a modern replacement for Sahavani with a cleaner citizen-first complaint journey.' },
  { icon: AlertTriangle, title: 'Track Public Issues', desc: 'Keep every submitted civic issue organized with complaint references and status visibility.' },
];

const issueTypes = [
  { icon: Route, label: 'Road Damage', detail: 'Potholes, broken roads, unsafe stretches' },
  { icon: Waves, label: 'Drainage', detail: 'Blocked drains, overflow, waterlogging' },
  { icon: AlertTriangle, label: 'Public Safety', detail: 'Street hazards and urgent local issues' },
];

export default function NimmaGBA() {
  const { register, handleSubmit, setError, formState: { isSubmitSuccessful, errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xwvrokge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'Nimma GBA Waitlist', ...data }),
    });
    if (!res.ok) {
      setError('root', { message: 'Something went wrong. Please try again.' });
      throw new Error('Submission failed');
    }
  };

  return (
    <>
      <SEOHead
        title="Nimma GBA Karnataka Public Issue Complaint Platform"
        description="Nimma GBA is a coming-soon public grievance platform for Karnataka civic issues, replacing Sahavani with complaint categories, image capture, location fetching, and issue tracking."
        url="https://www.treva.in/products/nimma-gba"
        keywords="Nimma GBA, Karnataka public issue complaint platform, Sahavani replacement, civic complaint app, road complaint app, drainage complaint app"
      />

      <section className="relative overflow-hidden bg-[#000000] pb-20 pt-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2"
          style={{ background: `radial-gradient(ellipse, ${green}12, transparent 70%)` }}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: `${green}15`, border: `1px solid ${green}35` }}
              >
                <MapPin size={24} style={{ color: green }} />
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-700 uppercase tracking-widest text-black">
                Coming Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 font-black text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              Nimma <span style={{ background: `linear-gradient(135deg, ${green}, #29C8D5)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GBA</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="mb-3 text-xl font-500 italic text-[#8A9AB0]">
              One platform for Karnataka government civic issues.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-[#8A9AB0]">
              Nimma GBA is planned as the next-generation replacement for Sahavani, helping citizens raise road, drainage, sanitation, and other public complaints with photos, live location, and a clear issue description.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <a href="#waitlist" className="btn-primary" style={{ background: green, color: '#000' }}>
                Join the Waitlist <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border bg-[#080C10] p-6"
            style={{ borderColor: `${green}25` }}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-700 uppercase tracking-widest" style={{ color: green }}>Raise Complaint</span>
              <span className="rounded-full bg-[#0D1117] px-3 py-1 text-xs text-[#8A9AB0]">Step 3 of 4</span>
            </div>
            <div className="space-y-4">
              {issueTypes.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl bg-[#0D1117] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${green}12`, border: `1px solid ${green}25` }}>
                    <Icon size={20} style={{ color: green }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-700 text-white">{label}</div>
                    <div className="text-xs text-[#8A9AB0]">{detail}</div>
                  </div>
                  <CheckCircle size={18} style={{ color: green }} />
                </div>
              ))}
              <div className="rounded-xl bg-[#0D1117] p-4">
                <div className="mb-3 flex items-center gap-2 text-xs font-700 uppercase tracking-widest" style={{ color: green }}>
                  <Camera size={14} /> Photo, Location, Description
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-lg border border-dashed border-white/15 bg-black/40" />
                  <div className="aspect-square rounded-lg border border-dashed border-white/15 bg-black/40" />
                  <div className="flex aspect-square items-center justify-center rounded-lg border border-dashed bg-black/40 text-xs text-[#8A9AB0]" style={{ borderColor: `${green}35` }}>Add</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#080C10] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-14 text-center">
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
              Built for <span style={{ background: `linear-gradient(135deg, ${green}, #29C8D5)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Citizen Reporting</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="card-glow h-full rounded-2xl border bg-[#000000] p-7" style={{ borderColor: `${green}12` }}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${green}10`, border: `1px solid ${green}25` }}>
                    <Icon size={20} style={{ color: green }} />
                  </div>
                  <h3 className="mb-2 text-lg font-800 text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#8A9AB0]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-[#000000] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="card-glow rounded-2xl border border-[rgba(41,200,213,0.12)] bg-[#080C10] p-8 md:p-10">
              <h2 className="mb-3 text-3xl font-black text-white">Get Nimma GBA Updates</h2>
              <p className="mb-8 text-sm leading-relaxed text-[#8A9AB0]">
                Join the early interest list for launch updates, partnership discussions, and product demos.
              </p>

              {isSubmitSuccessful ? (
                <div className="rounded-xl border p-5 text-sm font-600 text-white" style={{ borderColor: `${green}35`, background: `${green}12` }}>
                  Thanks. We have received your interest in Nimma GBA.
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input {...register('name', { required: true })} placeholder="Name" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#29C8D5]" />
                    <input {...register('email', { required: true })} type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#29C8D5]" />
                  </div>
                  <input {...register('organization')} placeholder="Organization or role" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#29C8D5]" />
                  <textarea {...register('message')} rows={4} placeholder="Tell us what you want to explore" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#29C8D5]" />
                  {errors.root ? <p className="text-sm text-red-400">{errors.root.message}</p> : null}
                  <button type="submit" className="btn-primary" style={{ background: green, color: '#000' }}>
                    Submit Interest <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
