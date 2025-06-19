'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Mail, Linkedin, Code, Sparkles, Rocket } from 'lucide-react';

const Hero = () => {
  const achievements = [
    { number: "10+", label: "Production Apps", icon: "🚀" },
    { number: "45%", label: "Efficiency Boost", icon: "⚡" },
    { number: "150+", label: "Hours Saved/Month", icon: "⏰" },
    { number: "99.99%", label: "Uptime", icon: "🎯" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156,146,172,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-blue-400 opacity-60"
        >
          <Code size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-16 text-purple-400 opacity-60"
        >
          <Sparkles size={28} />
        </motion.div>

        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-20 text-indigo-400 opacity-60"
        >
          <Rocket size={30} />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
          >
            <span className="text-2xl">👋</span>
            <span className="text-gray-700 font-medium">Hey there! I'm</span>
          </motion.div>

          {/* Name with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rishabh Bansal
            </span>
          </h1>

          {/* Enhanced title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
              AI Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Crafting Intelligent Solutions with{' '}
              <span className="text-blue-600 font-semibold">AI/ML</span>,{' '}
              <span className="text-green-600 font-semibold">Full Stack Development</span>,{' '}
              <span className="text-purple-600 font-semibold">Cloud Architecture</span> &{' '}
              <span className="text-orange-600 font-semibold">DevOps</span>
            </p>
            <p className="text-gray-500 mt-3 flex items-center justify-center space-x-4">
              <span className="inline-flex items-center space-x-1">
                <Sparkles size={16} className="text-yellow-500" />
                <span>2+ Years Experience</span>
              </span>
            </p>
          </motion.div>

          {/* Achievement stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/50"
              >
                <div className="text-2xl font-bold text-blue-600">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <a
              href="mailto:rishu25bansal@gmail.com"
              className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              <span className="font-medium">Let's Work Together</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                →
              </motion.div>
            </a>

            <a
              href="https://linkedin.com/in/rishabh-bansal-5a08b496"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-lg"
            >
              <ChevronDown size={24} className="text-gray-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;