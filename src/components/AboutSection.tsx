import { motion } from 'framer-motion';
import { Layers, Video, Layout, PenTool } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      name: "3D Modeling",
      icon: <Layers className="h-6 w-6 text-indigo-600" />,
      description: "Creating detailed 3D product models with realistic materials and lighting."
    },
    {
      name: "Video Editing",
      icon: <Video className="h-6 w-6 text-indigo-600" />,
      description: "Crafting engaging video content with smooth transitions and effects."
    },
    {
      name: "UI/UX Design",
      icon: <Layout className="h-6 w-6 text-indigo-600" />,
      description: "Designing intuitive interfaces that enhance user experience."
    },
    {
      name: "Digital Illustration",
      icon: <PenTool className="h-6 w-6 text-indigo-600" />,
      description: "Creating unique digital artwork and illustrations for various projects."
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-indigo-600 tracking-wider uppercase">
              About Me
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold mb-6">
              Creating digital experiences that stand out
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              I'm a multidisciplinary designer with expertise in 3D product design, video editing, and UI/UX design. 
              My approach combines technical precision with creative vision to deliver compelling visual stories and 
              experiences that resonate with audiences.
            </p>
            <p className="text-gray-600 mb-6">
              I work with industry-standard tools including Blender for 3D modeling and animation, Adobe Premiere Pro 
              for video editing, Adobe Illustrator for vector graphics, and Adobe Photoshop for image editing and compositing.
            </p>
            <p className="text-gray-600">
              My design philosophy centers on creating meaningful connections between brands and their audiences through 
              thoughtful, visually striking, and purposeful design.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 p-2 bg-indigo-50 inline-block rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-16 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-center mb-8">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png" 
                alt="Blender" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">Blender</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png" 
                alt="Adobe Premiere Pro" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">Premiere Pro</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png" 
                alt="Adobe Illustrator" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">Illustrator</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png" 
                alt="Adobe Photoshop" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">Photoshop</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/512px-Canva_icon_2021.svg.png" 
                alt="Canva" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">Canva</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png" 
                alt="Microsoft Office" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">MS Office</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/CapCut_logo.svg/512px-CapCut_logo.svg.png" 
                alt="CapCut" 
                className="h-12 w-12 mb-2 object-contain"
              />
              <span className="text-gray-700">CapCut</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;