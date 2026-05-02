import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Image, Info, Mail, Moon, Sun, Triangle } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-serif font-bold tracking-widest text-primary-light dark:text-primary-dark uppercase"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="text-accent-light dark:text-accent-dark"
            >
              <Triangle size={24} fill="currentColor" strokeWidth={1.5} />
            </motion.div>
            <span>TRIAXIS<span className="text-accent-light dark:text-accent-dark">.</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-accent-light dark:hover:text-accent-dark relative group ${
                      location.pathname === link.path
                        ? "text-accent-light dark:text-accent-dark"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[2px] w-full bg-accent-light dark:bg-accent-dark"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-light dark:text-primary-dark p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background-light dark:bg-background-dark pt-24 px-6 md:hidden flex flex-col"
          >
            <ul className="flex flex-col space-y-6 mt-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-4 text-2xl font-serif tracking-wider ${
                      location.pathname === link.path
                        ? "text-accent-light dark:text-accent-dark"
                        : "text-primary-light dark:text-primary-dark"
                    }`}
                  >
                    <link.icon size={24} />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;