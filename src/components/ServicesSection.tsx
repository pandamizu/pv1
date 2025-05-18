import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, VideoIcon, Instagram } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "3D Product Design",
      icon: <Box className="h-8 w-8 text-indigo-600" />,
      description: "High-quality 3D visualizations for products, packaging, and promotional materials with realistic materials and lighting.",
      items: ["Product Visualization", "Packaging Design", "Concept Rendering", "3D Animation"]
    },
    {
      title: "YouTube Shorts Video Editing",
      icon: <VideoIcon className="h-8 w-8 text-indigo-600" />,
      description: "Engaging, fast-paced video content optimized for YouTube Shorts that captures attention and drives engagement.",
      items: ["Vertical Video Editing", "Motion Graphics", "Sound Design", "Thumbnail Creation"]
    },
    {
      title: "Instagram Content Design",
      icon: <Instagram className="h-8 w-8 text-indigo-600" />,
      description: "Visually cohesive Instagram content that enhances brand identity and increases social media engagement.",
      items: ["Post Design", "Story Templates", "Carousel Creation", "Profile Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
            My Offerings
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-indigo-500/10 inline-block rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-6">Ready to start your project?</h3>
          <Link to="/contact" className="btn-primary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;