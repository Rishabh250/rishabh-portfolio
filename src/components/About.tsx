'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Full Stack Development",
      description: "2+ years building scalable web applications with Node.js, Next.js, and modern technologies"
    },
    {
      icon: <Brain className="text-green-600" size={32} />,
      title: "AI & Machine Learning",
      description: "Specialized in LangChain, OpenAI API, and building intelligent RAG systems"
    },
    {
      icon: <Rocket className="text-purple-600" size={32} />,
      title: "Performance Optimization",
      description: "Proven track record of reducing deployment time by 30% and increasing efficiency by 40%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a passionate AI-focused Full Stack Developer with 2+ years of experience building 
              intelligent, scalable applications. My expertise spans from traditional web development 
              to cutting-edge AI integration, creating solutions that transform how businesses operate.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Currently at Lorien Business Management, I've engineered production-grade systems serving 
              thousands of users with 99.99% uptime. My work has directly contributed to 45% efficiency 
              improvements and automated processes that save over 150 hours monthly across teams.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I specialize in bridging the gap between complex AI technologies and practical business 
              solutions, turning ambitious ideas into robust, maintainable applications that deliver 
              real value.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">📍 Bulandshahr, UP, India</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-700 font-medium">📧 Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;