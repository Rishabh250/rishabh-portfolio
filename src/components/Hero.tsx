'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    { number: '10+', label: 'Production Apps', icon: '🚀', color: 'blue' },
    { number: '45%', label: 'Efficiency Boost', icon: '⚡', color: 'green' },
    { number: '150+', label: 'Hours Saved/Month', icon: '⏰', color: 'purple' },
    { number: '99.99%', label: 'Uptime', icon: '🎯', color: 'orange' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                        linear-gradient(135deg, 
                          rgba(59, 130, 246, 0.1) 0%, 
                          rgba(139, 92, 246, 0.1) 50%, 
                          rgba(236, 72, 153, 0.1) 100%)`,
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '20px 20px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156,146,172,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ y: y1 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Glassmorphism Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
          className="inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl border border-white/20 dark:border-gray-700/20 mb-8"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            className="text-2xl"
          >
            👋
          </motion.span>
          <span className="text-gray-800 dark:text-gray-200 font-semibold">
            Hey there! I&apos;m
          </span>
        </motion.div>

        {/* Name with Enhanced Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.3))',
            }}
          >
            Rishabh Bansal
          </motion.span>
        </motion.h1>

        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <motion.p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-bold mb-4">
            <motion.span
              animate={{
                color: ['#1f2937', '#3b82f6', '#8b5cf6', '#1f2937'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="dark:text-gray-100"
            >
              AI Full Stack Developer
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Transforming ideas into intelligent solutions with cutting-edge{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-blue-600 dark:text-blue-400 font-bold cursor-default"
            >
              AI/ML
            </motion.span>
            ,{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-green-600 dark:text-green-400 font-bold cursor-default"
            >
              Full Stack Development
            </motion.span>
            ,{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-purple-600 dark:text-purple-400 font-bold cursor-default"
            >
              Cloud Architecture
            </motion.span>
            {' & '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-orange-600 dark:text-orange-400 font-bold cursor-default"
            >
              DevOps
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Glassmorphism Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.15,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/50 dark:border-gray-700/50 cursor-default group overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  background: [
                    `linear-gradient(45deg, ${
                      achievement.color === 'blue'
                        ? 'rgba(59, 130, 246, 0.1)'
                        : achievement.color === 'green'
                          ? 'rgba(34, 197, 94, 0.1)'
                          : achievement.color === 'purple'
                            ? 'rgba(147, 51, 234, 0.1)'
                            : 'rgba(249, 115, 22, 0.1)'
                    } 0%, transparent 100%)`,
                    `linear-gradient(45deg, transparent 0%, ${
                      achievement.color === 'blue'
                        ? 'rgba(59, 130, 246, 0.2)'
                        : achievement.color === 'green'
                          ? 'rgba(34, 197, 94, 0.2)'
                          : achievement.color === 'purple'
                            ? 'rgba(147, 51, 234, 0.2)'
                            : 'rgba(249, 115, 22, 0.2)'
                    } 100%)`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute inset-0"
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className={`text-3xl font-bold mb-2 ${
                    achievement.color === 'blue'
                      ? 'text-blue-600 dark:text-blue-400'
                      : achievement.color === 'green'
                        ? 'text-green-600 dark:text-green-400'
                        : achievement.color === 'purple'
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-orange-600 dark:text-orange-400'
                  }`}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  {achievement.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px -12px rgba(59, 130, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:rishu25bansal@gmail.com"
            className="group relative flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold shadow-2xl overflow-hidden"
          >
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                  'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 100%)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0"
            />
            <Mail size={20} />
            <span>Let&apos;s Work Together</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              →
            </motion.div>
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/rishabh-bansal-5a08b496"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-10 py-5 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </motion.a>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center space-y-3"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-gray-500 dark:text-gray-400 font-medium"
          >
            Scroll to explore my work
          </motion.span>
          <motion.div
            animate={{
              y: [0, 12, 0],
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 30px rgba(147, 51, 234, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.3)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 cursor-pointer"
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <ChevronDown
              size={24}
              className="text-gray-600 dark:text-gray-400"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
