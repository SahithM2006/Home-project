import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Leaf, Pencil } from "lucide-react";

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const images = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Architecture Showcase"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight">
              Shaping Tomorrow's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 italic">Landscapes</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 font-light tracking-wide text-gray-200">
              Innovative • Sustainable • Visionary
            </p>
            <Link 
              to="/services" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full font-medium tracking-wider uppercase text-sm"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
            <motion.div 
              className="w-full h-full bg-white absolute top-0 left-0"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                We believe architecture is a dialogue between context and imagination.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Our approach blends rigorous structural integrity with poetic spatial design. We create environments that elevate the human experience while respecting the natural ecosystem.
              </p>
              <Link to="/about" className="inline-flex items-center text-accent-light dark:text-accent-dark font-medium hover:underline underline-offset-4">
                Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden"
            >
              <img 
                src={process.env.PUBLIC_URL + "/arch_detail.png"}
                alt="Architecture detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-6 md:px-12 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Comprehensive Design Solutions</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Urban Design", desc: "Large scale masterplanning and urban regeneration that prioritizes community and flow." },
              { icon: Pencil, title: "Interior Architecture", desc: "Thoughtful interiors balancing light, material, and function for harmonious living." },
              { icon: Leaf, title: "Sustainable Design", desc: "Low-impact design integrated early, creating net-zero buildings for the future." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-accent-light dark:hover:border-accent-dark transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-light dark:group-hover:bg-accent-dark group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif mb-4">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;