import { motion } from 'motion/react';
import { Clock, MapPin, Utensils } from 'lucide-react';

const nightStages = [
  {
    icon: Clock,
    title: 'Pregame',
    time: '9–11 PM',
    vibe: 'Chill',
    spots: ['Rooftop Bars', 'Lounges', 'Wine Bars'],
    color: '#00E0FF',
  },
  {
    icon: MapPin,
    title: 'Main Spot',
    time: '11 PM–2 AM',
    vibe: 'LIT 🔥',
    spots: ['Clubs', 'Live Music', 'Dance Floors'],
    color: '#FF2E88',
  },
  {
    icon: Utensils,
    title: 'Late Eats',
    time: '2–4 AM',
    vibe: 'Recovery',
    spots: ['Diners', 'Pizza', 'Street Food'],
    color: '#6C3BFF',
  },
];

export function PlanYourNight() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#1A1A24] to-[#0B0B0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 rounded-full text-sm text-white/70 mb-6 backdrop-blur-md">
            <span className="text-base">💎</span>
            <span>Premium Experience · Coming Soon</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Plan Your <span className="text-[#FF2E88]">Perfect</span> Night
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-8">
            From pregame to late-night eats, Pulse will help you plan your entire night —
            seamlessly, confidently, and in real time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connection */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[#00E0FF] via-[#FF2E88] to-[#6C3BFF] opacity-20" />

          <div className="grid md:grid-cols-3 gap-8">
            {nightStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="group relative bg-[#1A1A24] border border-white/10 rounded-2xl p-8 hover:bg-[#232336] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(108,59,255,0.18)] transition-all duration-300">
                  {/* Soft hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${stage.color}18, transparent 55%)`,
                      }}
                    />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="relative inline-flex items-center justify-center w-20 h-20 mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${stage.color}, transparent)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.25, 0.5, 0.25],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <div
                      className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: stage.color }}
                    >
                      <stage.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {stage.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-white/60">{stage.time}</span>
                    <span className="text-xl font-semibold"
                    style={{color: stage.color}}
                    
                    >
                      {stage.vibe === 'LIT 🔥' ? stage.vibe : `· ${stage.vibe}`}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {stage.spots.map((spot) => (
                      <div
                        key={spot}
                        className="px-3 py-2 bg-white/5 rounded-lg text-white/80 text-sm hover:bg-white/10 transition-colors"
                      >
                        {spot}
                      </div>
                    ))}
                  </div>

                

                  {/* Arrow indicator */}
                  {index < nightStages.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-white/30 text-2xl"
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6 max-w-2xl mx-auto leading-8">
            Pulse won’t just show you where to go — it will help you move through the entire night with intention.
          </p>

         
        </motion.div>
      </div>
    </section>
  );
}