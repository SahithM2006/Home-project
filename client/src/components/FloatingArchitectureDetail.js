import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FloatingArchitectureDetail() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed bottom-8 right-8 z-[9999] group cursor-pointer"
      onClick={() => navigate("/architecture-detail")}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-light to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Container */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-2xl">
          <img 
            src={process.env.PUBLIC_URL + "/arch_detail.png"}
            alt="Architecture detail" 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Tooltip text */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Architecture Detail
        </div>
      </div>
    </motion.div>
  );
}

export default FloatingArchitectureDetail;
