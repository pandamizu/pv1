import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Instagram, Twitter, Linkedin, Github as GitHub } from 'lucide-react';

const ContactPage = () => {
  const [nameCopied, setNameCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text: string, type: 'name' | 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'name') setNameCopied(true);
    if (type === 'email') setEmailCopied(true);
    if (type === 'phone') setPhoneCopied(true);

    setTimeout(() => {
      if (type === 'name') setNameCopied(false);
      if (type === 'email') setEmailCopied(false);
      if (type === 'phone') setPhoneCopied(false);
    }, 2000);
  };

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
              Let's discuss your project and create something amazing together.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>
                <p className="text-white/70 mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Feel free to reach out with any questions or inquiries.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/60">Email</p>
                      <div className="flex items-center">
                        <p className="text-white">pandu@example.com</p>
                        <button 
                          className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors"
                          onClick={() => copyToClipboard('pandu@example.com', 'email')}
                        >
                          {emailCopied ? 
                            <Check className="h-4 w-4 text-green-400" /> : 
                            <Copy className="h-4 w-4 text-white/70" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/60">Phone</p>
                      <div className="flex items-center">
                        <p className="text-white">+1 (555) 123-4567</p>
                        <button 
                          className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors"
                          onClick={() => copyToClipboard('+1 (555) 123-4567', 'phone')}
                        >
                          {phoneCopied ? 
                            <Check className="h-4 w-4 text-green-400" /> : 
                            <Copy className="h-4 w-4 text-white/70" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-white/70 mb-4">Connect on social media</p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <GitHub className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Send Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white/70 mb-2 text-sm" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2 text-sm" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2 text-sm" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full py-3 px-6 rounded-lg bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;