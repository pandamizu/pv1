import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'product', name: 'Product Visualization' },
    { id: 'social', name: 'Social Media Content' },
    { id: 'video', name: 'Video Editing' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-20 main-gradient text-white">
        <div className="section-container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-white/80">
              A showcase of my work across 3D product design, social media content, and video editing.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
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
              {portfolioItems
                .filter(
                  (item) => activeCategory === 'all' || item.category === activeCategory
                )
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <p className="text-white font-medium">
                            {getCategoryName(item.category)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
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

// Helper function to get the display name for categories
const getCategoryName = (categoryId: string) => {
  const mapping: Record<string, string> = {
    'product': 'Product Visualization',
    'social': 'Social Media Content',
    'video': 'Video Editing'
  };
  return mapping[categoryId] || categoryId;
};

// Portfolio items data
const portfolioItems = [
  // Product Visualization
  {
    title: "Luxury Perfume Bottle",
    description: "3D visualization of an elegant perfume bottle with realistic glass material and lighting.",
    category: "product",
    tools: ["Blender", "Cycles Render", "Substance Painter"],
    image: "https://images.pexels.com/photos/6044974/pexels-photo-6044974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Eco-Friendly Packaging",
    description: "Sustainable packaging design for a cosmetic brand with natural textures and colors.",
    category: "product",
    tools: ["Blender", "Photoshop", "Substance Designer"],
    image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Smart Watch Concept",
    description: "Futuristic smart watch design with detailed interface visualization.",
    category: "product",
    tools: ["Blender", "Figma", "After Effects"],
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Audio Headphones",
    description: "Realistic 3D visualization of premium audio headphones with detailed material exploration.",
    category: "product",
    tools: ["Blender", "Cycles Render", "Photoshop"],
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Minimalist Furniture",
    description: "Clean, modern furniture design visualization for an interior design catalog.",
    category: "product",
    tools: ["Blender", "Cycles Render", "Substance Painter"],
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Beverage Can Design",
    description: "Custom beverage can design and packaging visualization for a craft beer company.",
    category: "product",
    tools: ["Blender", "Illustrator", "Photoshop"],
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  
  // Social Media Content
  {
    title: "Fashion Brand Campaign",
    description: "Series of visually cohesive social media posts for a summer fashion collection.",
    category: "social",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    image: "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Product Launch Kit",
    description: "Comprehensive social media kit for a product launch with posts, stories, and reels templates.",
    category: "social",
    tools: ["Photoshop", "Premiere Pro", "After Effects"],
    image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Fitness Challenge Series",
    description: "30-day fitness challenge content designed for Instagram with daily posts and story templates.",
    category: "social",
    tools: ["Photoshop", "Illustrator", "Premiere Pro"],
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Food Blog Content",
    description: "Instagram content strategy and design for a food blog with recipe cards and highlights.",
    category: "social",
    tools: ["Photoshop", "Illustrator", "Lightroom"],
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Travel Guide Carousel",
    description: "Multi-slide Instagram carousel design for a travel destination guide.",
    category: "social",
    tools: ["Photoshop", "Illustrator", "Lightroom"],
    image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Quote Templates",
    description: "Collection of customizable quote templates for a motivational Instagram account.",
    category: "social",
    tools: ["Photoshop", "Illustrator"],
    image: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  
  // Video Editing
  {
    title: "Brand Documentary",
    description: "Short documentary film showcasing a sustainable fashion brand's production process.",
    category: "video",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Product Tutorial",
    description: "Step-by-step video tutorial for a tech product with motion graphics and text overlays.",
    category: "video",
    tools: ["Premiere Pro", "After Effects", "Illustrator"],
    image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Event Highlight Reel",
    description: "Dynamic highlight video of a corporate event with interviews and key moments.",
    category: "video",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "App Promo Video",
    description: "Promotional video for a mobile application showcasing features and benefits.",
    category: "video",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "YouTube Channel Intro",
    description: "Eye-catching intro animation for a YouTube channel with sound design.",
    category: "video",
    tools: ["After Effects", "Premiere Pro", "Audition"],
    image: "https://images.pexels.com/photos/3761376/pexels-photo-3761376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Travel Vlog Edit",
    description: "Cinematic travel vlog edit with color grading and music synchronization.",
    category: "video",
    tools: ["Premiere Pro", "DaVinci Resolve", "Audition"],
    image: "https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default PortfolioPage;