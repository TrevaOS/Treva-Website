import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}>{children}</motion.div>
  );
}

const services = [
  'Branding', 'Media Production', 'Social Media Marketing',
  'Performance Marketing', 'Web Development', 'App Development',
  'Bespoke Technical Solution', 'Not Sure Yet',
];

const products = [
  'Treva CRM',
  'Treva OS',
  'Treva Agent',
  'Treva EAMS',
  'Make My Cake',
  'Not Sure Yet',
];

export default function Contact() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xwvrokge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setError('root', { message: "Something went wrong. Please try again or email us at info@treva.in" });
      throw new Error('Submission failed');
    }
  };

  return (
    <>
      <SEOHead
        title="Talk to Treva — Free Google Ads Audit | Performance Marketing Agency Bangalore"
        description="Get a free Google Ads audit from Treva — Bangalore's performance marketing agency. We'll identify budget waste, CPL issues, and give you an actionable roadmap. No obligation."
        url="https://www.treva.in/contact"
        keywords="free Google Ads audit Bangalore, contact performance marketing agency Bengaluru, Google Ads consultation India, book free audit Treva"
      />

      {/* Hero — fits viewport, no em-dash, no "free" push */}
      <section className="pt-28 pb-12 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41,200,213,0.06), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-pill">
            Let's Talk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mt-3 mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', letterSpacing: '-0.03em' }}
          >
            Get Your Google Ads Audit.{' '}
            <span className="teal-gradient-text">No Charge. No Obligation.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-base max-w-xl mx-auto">
            We audit your Google Ads account, identify where budget is being wasted and give you a concrete roadmap to hit your CPL or ROAS targets.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form — issue #8: form on left, info+map on right */}
      <section className="py-12 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Info — moved to right via order-last on desktop */}
            <div className="lg:col-span-2 space-y-5 lg:order-last">
              <FadeIn>
                <h2 className="font-800 text-white text-lg mb-3">What You Get in the Audit</h2>
                <div className="space-y-2 mt-3">
                  {[
                    'Complete keyword waste analysis. Where you are paying for irrelevant clicks.',
                    'Quality Score breakdown. Why your ads are not showing or cost too much.',
                    'CPL and ROAS gap analysis. Where you should be versus where you are.',
                    'Competitor intelligence. Who is bidding on your keywords and at what cost.',
                    '30-day improvement roadmap. A concrete plan not a vague proposal.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#29C8D5] mt-0.5 shrink-0 text-xs">✓</span>
                      <p className="text-[#8A9AB0] text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-[rgba(41,200,213,0.1)]">
                  <h3 className="text-white font-700 text-sm mb-2">What Happens After You Submit</h3>
                  <div className="space-y-1.5">
                    {[
                      'Step 1: We respond within 4 business hours',
                      'Step 2: 30-minute discovery call to understand your goals',
                      'Step 3: You receive your audit report within 48 hours',
                    ].map((step, i) => (
                      <p key={i} className="text-[#8A9AB0] text-xs leading-relaxed">{step}</p>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {[
                { Icon: Mail, label: 'Email', value: 'info@treva.in', href: 'mailto:info@treva.in' },
                { Icon: Phone, label: 'Phone', value: '+91 70229 22526', href: 'tel:+917022922526' },
                { Icon: MapPin, label: 'Address', value: '#93/2 2nd Floor, 8th E Cross, 14th Main, Attiguppe, Vijayanagar, Bengaluru – 560040', href: 'https://share.google/ZmtaQtW8vRZ7ihfgz' },
                { Icon: Clock, label: 'Working Hours', value: 'Mon to Fri, 9AM to 6PM IST', href: null },
              ].map(({ Icon, label, value, href }, i) => (
                <FadeIn key={label} delay={i * 0.08}>
                  <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-xl p-5 flex gap-4 items-start card-glow">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(41,200,213,0.08)] border border-[rgba(41,200,213,0.15)] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#29C8D5]" />
                    </div>
                    <div>
                      <p className="text-[#8A9AB0] text-xs mb-1">{label}</p>
                      {href && href !== '#' ? (
                        <a href={href} className="text-white text-sm font-600 hover:text-[#29C8D5] transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm font-500">{value}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* WhatsApp */}
              <FadeIn delay={0.4}>
                <a
                  href="https://wa.me/917022922526?text=Hi%20Treva%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl p-4 hover:bg-[#25D366]/15 transition-colors"
                >
                  <MessageSquare size={20} className="text-[#25D366]" />
                  <div>
                    <p className="text-white text-sm font-600">Chat on WhatsApp</p>
                    <p className="text-[#8A9AB0] text-xs">Fastest way to reach us</p>
                  </div>
                  <ArrowUpRight size={14} className="text-[#25D366] ml-auto" />
                </a>
              </FadeIn>

              {/* Maps Embed */}
              <FadeIn delay={0.5}>
                <div className="rounded-xl overflow-hidden border border-[rgba(41,200,213,0.1)] h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.183869991309!2d77.52963147409558!3d12.96008328735424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4deb4b22d3%3A0x218d32a888d66351!2sTreva%20HQ!5e0!3m2!1sen!2sin!4v1773224958940!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Treva HQ Location"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn className="lg:col-span-3" delay={0.1}>
              <div className="bg-[#080C10] border border-[rgba(41,200,213,0.12)] rounded-2xl p-8 md:p-10">
                <h2 className="font-800 text-white text-2xl mb-2">Book Your Google Ads Audit</h2>
                <p className="text-[#8A9AB0] text-sm mb-8">
                  Fill in the form and we will respond within 4 business hours.
                </p>

                {isSubmitSuccessful ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[rgba(41,200,213,0.1)] border border-[#29C8D5] flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-[#29C8D5]" />
                    </div>
                    <h3 className="text-white font-700 text-xl mb-2">Message Sent!</h3>
                    <p className="text-[#8A9AB0] text-sm">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">First Name *</label>
                        <input
                          {...register('firstName', { required: 'Required' })}
                          placeholder="Jane"
                          className={`w-full bg-[#0D1117] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none transition-colors ${errors.firstName ? 'border-red-500' : 'border-[rgba(41,200,213,0.15)] focus:border-[#29C8D5]'}`}
                        />
                        {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Last Name *</label>
                        <input
                          {...register('lastName', { required: 'Required' })}
                          placeholder="Smith"
                          className={`w-full bg-[#0D1117] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none transition-colors ${errors.lastName ? 'border-red-500' : 'border-[rgba(41,200,213,0.15)] focus:border-[#29C8D5]'}`}
                        />
                        {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Email *</label>
                        <input
                          {...register('email', { required: 'Required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })}
                          type="email"
                          placeholder="jane@company.com"
                          className={`w-full bg-[#0D1117] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-[rgba(41,200,213,0.15)] focus:border-[#29C8D5]'}`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Phone</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 70229 22526"
                          className="w-full bg-[#0D1117] border border-[rgba(41,200,213,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none focus:border-[#29C8D5] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Company Name</label>
                      <input
                        {...register('company')}
                        placeholder="Your Company"
                        className="w-full bg-[#0D1117] border border-[rgba(41,200,213,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none focus:border-[#29C8D5] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Service Interested In *</label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full bg-[#0D1117] border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors appearance-none ${errors.service ? 'border-red-500' : 'border-[rgba(41,200,213,0.15)] focus:border-[#29C8D5]'}`}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Product Interested In</label>
                        <select
                          {...register('product')}
                          className="w-full appearance-none rounded-lg border border-[rgba(41,200,213,0.15)] bg-[#0D1117] px-4 py-3 text-sm text-white transition-colors focus:border-[#29C8D5] focus:outline-none"
                        >
                          <option value="">Select a product...</option>
                          {products.map((product) => <option key={product} value={product}>{product}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Product Details Needed</label>
                        <input
                          {...register('productDetails')}
                          placeholder="Demo, pricing, free CRM access, setup help..."
                          className="w-full rounded-lg border border-[rgba(41,200,213,0.15)] bg-[#0D1117] px-4 py-3 text-sm text-white placeholder-[#4A5568] transition-colors focus:border-[#29C8D5] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#8A9AB0] text-xs font-600 mb-2 uppercase tracking-wider">Message *</label>
                      <textarea
                        {...register('message', { required: 'Please tell us about your project' })}
                        rows={4}
                        placeholder="Tell us about your project, goals, and timeline…"
                        className={`w-full bg-[#0D1117] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-[rgba(41,200,213,0.15)] focus:border-[#29C8D5]'}`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    {errors.root && (
                      <p className="text-red-400 text-xs text-center">{errors.root.message}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending…' : 'Claim My Free Audit'}
                      {!isSubmitting && <Send size={14} />}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
