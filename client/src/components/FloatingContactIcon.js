import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

function FloatingContactIcon() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="fixed bottom-8 left-8 z-[9999] group cursor-pointer"
      onClick={() => navigate("/contact")}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Container */}
        <div className="relative w-16 h-16 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <MessageSquare className="w-8 h-8 text-emerald-500" />
        </div>
        
        {/* Tooltip text */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Get in Touch
        </div>
      </div>
    </motion.div>
  );
}

export default FloatingContactIcon;
