import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Clock, Target, Puzzle } from 'lucide-react';

const SkillsSection = () => {
  const hardSkills = [
    { name: "3D Modeling", level: 90 },
    { name: "Video Editing", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Motion Graphics", level: 75 },
    { name: "Digital Illustration", level: 85 },
    { name: "Photo Editing", level: 80 }
  ];

  const softSkills = [
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      name: "Problem Solving",
      description: "Analytical approach to design challenges with creative solutions"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      name: "Team Collaboration",
      description: "Effective communication and coordination in team environments"
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      name: "Time Management",
      description: "Efficient project handling and deadline adherence"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-indigo-600" />,
      name: "Creativity",
      description: "Innovative thinking and unique design approaches"
    },
    {
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      name: "Adaptability",
      description: "Quick learning and adaptation to new tools and trends"
    },
    {
      icon: <Puzzle className="h-6 w-6 text-indigo-600" />,
      name: "Project Management",
      description: "Organized approach to handling multiple projects"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
            My Skills
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700"
                >
                  <div className="mb-4 p-2 bg-gray-700 inline-block rounded-lg">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;