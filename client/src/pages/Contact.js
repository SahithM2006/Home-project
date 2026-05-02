import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-accent-light dark:text-accent-dark mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Let's Discuss Your Next Project.</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            Whether you have a specific project in mind or just want to explore possibilities, we are here to listen and collaborate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800">
                    <MapPin size={18} className="text-accent-light dark:text-accent-dark" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider mb-1">Studio</h4>
                    <p className="text-gray-600 dark:text-gray-400">123 Architecture Blvd, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800">
                    <Phone size={18} className="text-accent-light dark:text-accent-dark" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800">
                    <Mail size={18} className="text-accent-light dark:text-accent-dark" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">hello@triaxis.studio</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map(social => (
                  <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-surface-light dark:bg-surface-dark p-8 md:p-12 border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-6 rounded-md text-center"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-serif mb-2">Message Sent!</h4>
                <p className="text-sm opacity-80">Thank you for reaching out. We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-none px-4 py-3 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-none px-4 py-3 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-none px-4 py-3 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-none px-4 py-3 focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Message <Send size={16} className="ml-2" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;