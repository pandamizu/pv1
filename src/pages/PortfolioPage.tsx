import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Box, ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all');

  // Category options for filtering
  const categories = [
    { id: 'all', name: 'All Work', icon: <Box className="w-4 h-4" /> },
    { id: 'design', name: 'Design Works', icon: <Instagram className="w-4 h-4" /> },
    { id: 'video', name: 'Video Edits', icon: <Youtube className="w-4 h-4" /> },
    { id: '3d', name: '3D Products', icon: <Box className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 main-gradient text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Creative Portfolio</h1>
            <p className="text-xl text-white/80">
              Showcasing my journey through design, video editing, and 3D visualization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Design Works from Instagram */}
              {(activeCategory === 'all' || activeCategory === 'design') && designWorks.map((work, index) => (
                <motion.div
                  key={`design-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{work.title}</p>
                        <p className="text-white/80 text-sm mt-1">{work.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Video Edits - YouTube Shorts */}
              {(activeCategory === 'all' || activeCategory === 'video') && videoWorks.map((video, index) => (
                <motion.div
                  key={`video-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[9/16] bg-gray-900">
                    <iframe
                      src={`${video.embedUrl}?controls=0`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{video.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 text-sm mt-2 hover:underline"
                    >
                      Watch on YouTube <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* 3D Product Visualizations */}
              {(activeCategory === 'all' || activeCategory === '3d') && productWorks.map((product, index) => (
                <motion.div
                  key={`3d-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{product.title}</p>
                        <p className="text-white/80 text-sm mt-1">{product.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.tools.map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-white/20 rounded-full text-white text-xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

// Design works data from Instagram
const designWorks = [
  {
    title: "Brand Identity Design",
    description: "Modern branding concept with clean typography and bold colors",
    image: "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
  },
  {
    title: "Social Media Campaign",
    description: "Engaging content series for product launch",
    image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg"
  },
  {
    title: "Editorial Layout",
    description: "Magazine spread design with dynamic composition",
    image: "https://images.pexels.com/photos/5709662/pexels-photo-5709662.jpeg"
  },
  {
    title: "Product Photography",
    description: "Minimalist product shots with natural lighting",
    image: "https://images.pexels.com/photos/5709663/pexels-photo-5709663.jpeg"
  },
  {
    title: "Digital Illustration",
    description: "Custom artwork for marketing materials",
    image: "https://images.pexels.com/photos/5709664/pexels-photo-5709664.jpeg"
  },
  {
    title: "UI/UX Design",
    description: "Mobile app interface with intuitive navigation",
    image: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg"
  }
];

// Video works data
const videoWorks = [
  {
    title: "Product Launch Teaser",
    description: "Dynamic short-form video showcasing new product features",
    embedUrl: "https://www.youtube.com/embed/7X2TizWoY0s",
    url: "https://www.youtube.com/shorts/7X2TizWoY0s"
  },
  {
    title: "Brand Story",
    description: "Engaging narrative about brand values and mission",
    embedUrl: "https://www.youtube.com/embed/7X2TizWoY0s",
    url: "https://www.youtube.com/shorts/7X2TizWoY0s"
  },
  {
    title: "Tutorial Series",
    description: "Quick tips and tricks for creative software",
    embedUrl: "https://www.youtube.com/embed/7X2TizWoY0s",
    url: "https://www.youtube.com/shorts/7X2TizWoY0s"
  }
];

// 3D product visualization works
const productWorks = [
  {
    title: "Luxury Perfume Bottle",
    description: "Elegant glass material study with realistic lighting",
    image: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg",
    tools: ["Blender", "Cycles", "Substance"]
  },
  {
    title: "Smart Watch Concept",
    description: "Modern wearable tech visualization",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    tools: ["Blender", "Corona", "Photoshop"]
  },
  {
    title: "Eco-Friendly Packaging",
    description: "Sustainable product packaging design",
    image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg",
    tools: ["Blender", "Cycles", "Illustrator"]
  }
];

export default PortfolioPage;