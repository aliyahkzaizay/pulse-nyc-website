import { motion } from 'motion/react';
import { Flame, Headphones, Users } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Live Crowd Tracking',
    description:
      'Pulse starts with live updates and trend-based estimates to help users see which bars and clubs are filling up as the night unfolds.',
    gradient: 'from-[#FF2E88] to-[#6C3BFF]',
    glow: 'hover:shadow-[0_0_0_1px_rgba(255,46,136,0.5),0_0_30px_rgba(255,46,136,0.18)]',
  },
  {
    icon: Headphones,
    title: 'Pulse Score',
    description:
      'A simple score helps rank spots by energy, so users can quickly compare where the night is actually happening.',
    gradient: 'from-[#6C3BFF] to-[#00E0FF]',
    glow: 'hover:shadow-[0_0_0_1px_rgba(108,59,255,0.5),0_0_30px_rgba(108,59,255,0.18)]',
  },
  {
    icon: Users,
    title: 'Community-Powered Growth',
    description:
      'As Pulse grows, user check-ins and shared updates will help make nightlife tracking more accurate and more dynamic over time.',
    gradient: 'from-[#00E0FF] to-[#FF2E88]',
    glow: 'hover:shadow-[0_0_0_1px_rgba(0,224,255,0.5),0_0_30px_rgba(0,224,255,0.18)]',
  },
];

export function ValueProps() {
  return (
    <section id="features" className="relative py-32 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top two-column intro */}
        <div className="grid gap-10 md:grid-cols-2 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              How <span className="text-[#6C3BFF]">Pulse</span> Works
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-white/65 leading-8 max-w-2xl">
              Pulse combines live updates, nightlife trends, and on-the-ground inputs
              to show where the energy is building.
            </p>
            <p className="text-lg md:text-xl text-white/45 leading-8 mt-4 max-w-2xl">
              As the night changes, so does the map — and as Pulse grows, community
              updates will make it even smarter.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className={`group relative rounded-2xl border border-white/10 bg-[#1A1A24] p-8 transition-all duration-300 hover:bg-[#232336] ${feature.glow}`}
            >
              {/* soft gradient wash */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10`}
                />
              </div>

              <div className="relative z-10">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-lg leading-8 text-white/60">
                  {feature.description}
                </p>
              </div>

              {/* pulse dot */}
              <motion.div
                className={`absolute top-6 right-6 h-3 w-3 rounded-full bg-gradient-to-br ${feature.gradient}`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}