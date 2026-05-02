import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background-light dark:bg-background-dark overflow-hidden"
    >
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-accent-light dark:text-accent-dark mb-4 block">About Us</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Driven by Purpose & Precision.</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                TRIAXIS is an award-winning architectural firm founded on the belief that the built environment should elevate the human spirit while respecting the natural world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop" 
                alt="Studio interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-light dark:bg-accent-dark hidden md:flex items-center justify-center text-center p-6 text-white">
                <div>
                  <div className="text-4xl font-serif font-bold mb-1">15+</div>
                  <div className="text-xs uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline/Story */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-4">Our Evolution</h2>
            <p className="text-gray-600 dark:text-gray-400">A journey of continuous learning and bold design.</p>
          </motion.div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
            {[
              { year: "2010", title: "The Beginning", desc: "Founded in a small studio with a vision to redefine urban living spaces." },
              { year: "2015", title: "First Major Award", desc: "Recognized nationally for sustainable practices in the Apex Tower project." },
              { year: "2020", title: "Global Expansion", desc: "Opened our second office in Europe, expanding our portfolio to cultural and civic buildings." },
              { year: "2024", title: "Looking Forward", desc: "Pioneering AI-assisted parametric design to optimize environmental performance." }
            ].map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-light dark:border-surface-dark bg-accent-light dark:bg-accent-dark text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 shadow-sm ml-auto md:ml-0 md:group-odd:ml-auto">
                  <div className="text-accent-light dark:text-accent-dark font-bold tracking-wider mb-2">{item.year}</div>
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-4">Leadership</h2>
            <p className="text-gray-600 dark:text-gray-400">The visionary minds behind TRIAXIS.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elena Rostova", role: "Principal Architect", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
              { name: "Marcus Chen", role: "Design Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
              { name: "Sarah Jenkins", role: "Head of Sustainability", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={person.img} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-1">{person.name}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;