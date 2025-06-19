'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Mail, MapPin, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: 'Full Stack Development',
      description:
        '2+ years building scalable web applications with Node.js, Next.js, and modern technologies',
    },
    {
      icon: <Brain className="text-green-400" size={32} />,
      title: 'AI & Machine Learning',
      description:
        'Specialized in LangChain, OpenAI API, and building intelligent RAG systems',
    },
    {
      icon: <Rocket className="text-purple-400" size={32} />,
      title: 'Performance Optimization',
      description:
        'Proven track record of reducing deployment time by 30% and increasing efficiency by 40%',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-lg border border-blue-500/30 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium text-sm">
              Get to know me
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting intelligent solutions for
            tomorrow&apos;s challenges
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate AI-focused Full Stack Developer with 2+
              years of experience building intelligent, scalable applications.
              My expertise spans from traditional web development to
              cutting-edge AI integration, creating solutions that transform how
              businesses operate.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently at Lorien Business Management, I&apos;ve engineered
              production-grade systems serving thousands of users with 99.99%
              uptime. My work has directly contributed to 45% efficiency
              improvements and automated processes that save over 150 hours
              monthly across teams.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I specialize in bridging the gap between complex AI technologies
              and practical business solutions, turning ambitious ideas into
              robust, maintainable applications that deliver real value.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                }}
                className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg px-4 py-3 rounded-full border border-blue-500/30"
              >
                <MapPin size={16} className="text-blue-400" />
                <span className="text-blue-300 font-medium">
                  Bulandshahr, UP, India
                </span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                }}
                className="flex items-center gap-2 bg-green-500/20 backdrop-blur-lg px-4 py-3 rounded-full border border-green-500/30"
              >
                <Mail size={16} className="text-green-400" />
                <span className="text-green-300 font-medium">
                  Available for opportunities
                </span>
              </motion.div>
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
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)',
                }}
                className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1 p-2 bg-white/10 rounded-lg">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400">{highlight.description}</p>
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
