import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lumina Residences",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    desc: "A modern concrete and glass home blending seamlessly into the hillside.",
  },
  {
    id: 2,
    title: "Apex Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    desc: "Sustainable high-rise office building with vertical gardens.",
  },
  {
    id: 3,
    title: "Zenith Pavilion",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    desc: "A floating pavilion designed for community gatherings and arts.",
  },
  {
    id: 4,
    title: "Oakwood Interior",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
    desc: "Minimalist interior focusing on natural oak textures and ambient light.",
  },
  {
    id: 5,
    title: "Crestview Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    desc: "Luxury coastal villa with panoramic ocean views and passive cooling.",
  },
  {
    id: 6,
    title: "The Helix",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    desc: "Innovative spiral structured corporate headquarters.",
  }
];

const categories = ["All", "Residential", "Commercial", "Interior", "Cultural"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Selected Works</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our portfolio of projects that redefine spaces, blending functionality with breathtaking aesthetics.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                  filter === cat 
                    ? "bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark" 
                    : "bg-surface-light text-gray-600 dark:bg-surface-dark dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative cursor-pointer overflow-hidden aspect-[4/5] bg-surface-light dark:bg-surface-dark"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/80 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-serif text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm font-medium">
                      View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="w-full max-w-6xl flex flex-col md:flex-row bg-surface-light dark:bg-surface-dark overflow-hidden max-h-[90vh]"
              >
                <div className="md:w-2/3 h-64 md:h-auto relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent-light dark:text-accent-dark mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">{selectedProject.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {selectedProject.desc}
                  </p>
                  
                  <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8 mt-auto">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Client</span>
                      <span className="font-medium text-sm">Confidential</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Year</span>
                      <span className="font-medium text-sm">2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Role</span>
                      <span className="font-medium text-sm">Lead Architect</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}

export default Gallery;