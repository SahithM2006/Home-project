import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ArchitectureDetail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background-light dark:bg-background-dark pt-32 px-6 md:px-12 flex flex-col items-center justify-center relative"
    >
      <Link 
        to="/" 
        className="absolute top-32 left-6 md:left-12 flex items-center text-gray-500 hover:text-black dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
      
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center mt-12 mb-16">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl mb-12"
        >
          <img 
            src={process.env.PUBLIC_URL + "/arch_detail.png"} 
            alt="Architecture detail close-up" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          The Beauty in Details
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
        >
          True architectural brilliance is found not only in grand silhouettes, but in the meticulous 
          attention to structural junctions, material interplay, and spatial intersections. 
          Every detail tells a story of purpose and craftsmanship.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ArchitectureDetail;
