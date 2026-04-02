import { motion } from 'motion/react';
// import { Apple, Smartphone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#1a0d2e] to-[#0B0B0F]" />
      
      {/* Animated pulse circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6C3BFF] rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2E88] rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6C3BFF] via-[#FF2E88] to-[#00E0FF] bg-clip-text text-transparent">
              Own The Night With Pulse
            </span>
          </h2>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Join the first wave discovering where the city comes alive at night.
          </p>

          <div className="flex flex-col items-center gap-5">

            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdphH7x-I1_-2FhWs2z3nSjKWCeKDD04aKE4AFqm7dtazGyKA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block rounded-xl p-[2px] overflow-hidden"
                >

                <span className="absolute inset-0 rounded-xl bg-[#6C3BFF] opacity-40 blur-xl animate-pulse" />

              
        
                {/* actual button */}
                <span className="relative z-10 inline-flex items-center justify-center rounded-xl bg-[#6C3BFF] px-8 py-4 text-white font-medium hover:bg-[#7D52FF] transition-all duration-200">
                    Join the Waitlist
                </span>
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C3BFF]/20 border border-[#6C3BFF]/40 rounded-full">
              <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Launching Summer 2026</span>
            </div>

          </div>

          {/* Platform badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
              {/* <Apple className="w-5 h-5 text-white" /> */}
              <div className="text-white/80">Available on iOS</div>
            </div>
            {/* <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
              <Smartphone className="w-5 h-5 text-white" />
              <span className="text-white/80">Android</span>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
