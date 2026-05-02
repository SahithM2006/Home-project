import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, PenTool, Layout, Droplets, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Masterplanning",
    desc: "Comprehensive urban design and masterplanning that shapes communities and enhances civic life.",
    features: ["Site Analysis", "Zoning & Feasibility", "Community Integration"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: PenTool,
    title: "Architectural Design",
    desc: "From conceptual sketches to detailed construction documentation, we deliver excellence at every phase.",
    features: ["Concept Design", "3D Visualization", "Construction Docs"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Layout,
    title: "Interior Architecture",
    desc: "Crafting interior spaces that balance aesthetics, comfort, and functional requirements.",
    features: ["Space Planning", "Material Selection", "Custom Millwork"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Droplets,
    title: "Sustainable Design",
    desc: "Integrating environmental considerations from day one to create low-impact, high-performance buildings.",
    features: ["LEED Certification", "Energy Modeling", "Passive Design"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop"
  }
];

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background-light dark:bg-background-dark"
    >
      {/* Header */}
      <section className="px-6 md:px-12 mb-24">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent-light dark:text-accent-dark mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Design that Delivers.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              We offer a comprehensive suite of architectural services, guiding your project from the initial spark of an idea to the final walk-through.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface-light dark:bg-surface-dark p-8 md:p-12 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-8 md:gap-16 items-center hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50 transition-shadow duration-500 group overflow-hidden"
              >
                <div className="w-16 h-16 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary-light dark:text-primary-dark">
                  <service.icon size={32} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl font-serif mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={16} className="text-accent-light dark:text-accent-dark shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-64 lg:w-80 shrink-0 aspect-video md:aspect-square rounded-xl overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-xl pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="mt-32 py-24 bg-surface-light dark:bg-surface-dark text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to start your project?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Our team is ready to listen, design, and deliver.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default Services;