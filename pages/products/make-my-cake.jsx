import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cake, MapPin, ShoppingCart, Star, Truck, ChefHat, ArrowUpRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { useForm } from 'react-hook-form';

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

const features = [
  { icon: MapPin, title: 'Discover Nearby Bakers', desc: 'Find artisan bakers in your neighborhood filtered by occasion, flavor, and dietary requirements.' },
  { icon: ShoppingCart, title: 'Custom Cake Orders', desc: 'Place fully custom orders with design references, flavor choices, and special messages. Bakers confirm and communicate in-app.' },
  { icon: Truck, title: 'Real-time Delivery Tracking', desc: 'Track your cake order from kitchen to doorstep with live updates and delivery notifications.' },
  { icon: Star, title: 'Verified Reviews', desc: 'Every review is from a verified customer. Find bakers with a consistent 4.8+ rating in your area.' },
  { icon: ChefHat, title: 'Baker Dashboard', desc: 'A dedicated app for bakers to manage orders, update availability, set pricing, and grow their client base.' },
  { icon: Cake, title: 'Occasion Engine', desc: 'Enter your occasion, date, and guest count  the engine suggests the perfect bakers and cake styles for your event.' },
];

export default function MakeMyCake() {
  const { register, handleSubmit, setError, formState: { isSubmitSuccessful, errors } } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xwvrokge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'Make My Cake Waitlist', ...data }),
    });
    if (!res.ok) {
      setError('root', { message: 'Something went wrong. Please try again.' });
      throw new Error('Submission failed');
    }
  };
  const amber = '#F59E0B';

  return (
    <>
      <SEOHead
        title="Make My Cake  Artisan Cakes Delivered Near You"
        description="Make My Cake is a coming-soon marketplace connecting cake lovers with artisan bakers. Smart discovery, custom orders, and real-time delivery tracking."
        url="https://treva.in/products/make-my-cake"
      />

      <section className="pt-32 pb-20 bg-[#000000] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${amber}0D, transparent 70%)` }} />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${amber}15`, border: `1px solid ${amber}30` }}>
                <Cake size={24} style={{ color: amber }} />
              </div>
              <span className="section-pill">Coming Soon</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              Make My <span style={{ background: `linear-gradient(135deg, ${amber}, #FBBF24)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cake</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-[#8A9AB0] text-xl mb-3 font-500 italic">
              Artisan Cakes, Delivered to Your Door
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-[#8A9AB0] text-base leading-relaxed mb-8 max-w-lg">
              We believe every occasion deserves a cake made with passion. Make My Cake connects
              you with talented local bakers who craft custom creations  just for you.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-4 flex-wrap">
              <a href="#waitlist" className="btn-primary" style={{ background: amber, color: '#000' }}>
                Join as Customer <ArrowUpRight size={16} />
              </a>
              <a href="#waitlist" className="btn-outline">
                Join as Baker <ChefHat size={16} />
              </a>
            </motion.div>
          </div>

          {/* App preview mock */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#080C10] rounded-2xl p-6 border"
            style={{ borderColor: `${amber}20` }}>
            <div className="text-center mb-4">
              <span className="text-xs font-600 uppercase tracking-widest" style={{ color: amber }}>
                Nearby Bakers
              </span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Sugar Bloom Studio', rating: '4.9', orders: '234 orders', specialty: 'Wedding & Tier Cakes', price: 'From ₹800' },
                { name: 'The Cake Lab', rating: '4.8', orders: '189 orders', specialty: 'Custom Character Cakes', price: 'From ₹650' },
                { name: 'Melt & Mix', rating: '4.7', orders: '156 orders', specialty: 'Eggless & Vegan', price: 'From ₹550' },
              ].map(({ name, rating, orders, specialty, price }) => (
                <div key={name} className="bg-[#0D1117] rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${amber}10`, border: `1px solid ${amber}20` }}>
                    <Cake size={20} style={{ color: amber }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-600 text-sm truncate">{name}</div>
                    <div className="text-[#8A9AB0] text-xs">{specialty}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Star size={10} style={{ color: amber, fill: amber }} />
                      <span className="text-white text-xs font-600">{rating}</span>
                    </div>
                    <div className="text-[#8A9AB0] text-xs">{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="section-pill">Features</span>
            <h2 className="font-black text-white mt-2 text-3xl md:text-4xl">
              How <span style={{ background: `linear-gradient(135deg, ${amber}, #FBBF24)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>It Works</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-[#000000] rounded-2xl p-7 card-glow border" style={{ borderColor: `${amber}10` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${amber}10`, border: `1px solid ${amber}20` }}>
                    <Icon size={20} style={{ color: amber }} />
                  </div>
                  <h3 className="font-700 text-white text-lg mb-2">{title}</h3>
                  <p className="text-[#8A9AB0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 bg-[#000000]">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <div className="bg-[#080C10] rounded-2xl p-10 text-center border" style={{ borderColor: `${amber}20` }}>
              <h2 className="font-black text-white text-3xl mb-3">
                Be First on <span style={{ background: `linear-gradient(135deg, ${amber}, #FBBF24)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Make My Cake</span>
              </h2>
              <p className="text-[#8A9AB0] mb-8">Join as a customer or baker  early members get exclusive launch perks.</p>
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle size={40} style={{ color: amber }} />
                  <p className="text-white font-600">Sweet! You're on the list. 🎂</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input {...register('email', { required: true })} type="email" placeholder="Enter your email"
                      className="flex-1 bg-[#0D1117] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4A5568] focus:outline-none transition-colors border"
                      style={{ borderColor: `${amber}20` }} />
                    <button type="submit" className="btn-primary whitespace-nowrap" style={{ background: amber, color: '#000' }}>
                      Join Waitlist <ArrowUpRight size={14} />
                    </button>
                  </div>
                  {errors.root && <p className="text-red-400 text-xs text-center">{errors.root.message}</p>}
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
