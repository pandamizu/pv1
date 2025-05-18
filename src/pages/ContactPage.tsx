import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter, Youtube, Link as LinkIcon, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-[40vh] flex items-center main-gradient">
        <div className="section-container text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Let's connect and create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-container py-20 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glassmorphism rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Let's Connect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a 
                    href="mailto:pandutirta25@gmail.com"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/70">pandutirta25@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/6287737783462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <p className="text-white/70">+62 877-3778-3462</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">Social Media</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a 
                    href="https://www.instagram.com/pandapediahome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Instagram</span>
                  </a>

                  <a 
                    href="https://x.com/mizuevren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Twitter</span>
                  </a>

                  <a 
                    href="https://www.youtube.com/@MizuEvren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Youtube className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">YouTube</span>
                  </a>

                  <a 
                    href="https://linktr.ee/pandapedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <LinkIcon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Linktree</span>
                  </a>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-white/70">
                  I'm always interested in hearing about new projects and opportunities.
                  Feel free to reach out through any of these channels!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;