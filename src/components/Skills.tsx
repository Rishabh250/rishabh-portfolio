'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Cloud, Code, Cog, Database, Wrench } from 'lucide-react';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const ySkills = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yEducation = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3],
  );

  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: 'Languages/Frameworks',
      skills: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Express.js',
        'React.js',
        'Next.js',
      ],
      color: 'blue',
    },
    {
      icon: <Database className="text-orange-600" size={32} />,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Optimization'],
      color: 'orange',
    },
    {
      icon: <Cloud className="text-indigo-600" size={32} />,
      title: 'DevOps/Cloud',
      skills: [
        'AWS (EC2, RDS, S3)',
        'Docker',
        'CircleCI',
        'Vercel',
        'CI/CD Pipelines',
      ],
      color: 'indigo',
    },
    {
      icon: <Brain className="text-pink-600" size={32} />,
      title: 'AI & Automation',
      skills: [
        'LangChain',
        'OpenAI API',
        'Gemini API',
        'n8n',
        'Workflow Automation',
      ],
      color: 'pink',
    },
    {
      icon: <Cog className="text-yellow-600" size={32} />,
      title: 'Tools',
      skills: ['Git', 'JIRA', 'ClickUp', 'Material UI', 'Chakra UI'],
      color: 'yellow',
    },
    {
      icon: <Wrench className="text-purple-600" size={32} />,
      title: 'Specializations',
      skills: [
        'Microservices Architecture',
        'REST APIs',
        'BullMQ',
        'TLS/SSL Security',
        'Performance Optimization',
      ],
      color: 'purple',
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: ySkills, rotate }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Specialized in backend development, cloud infrastructure, and
            database optimization for scalable applications
          </p>
          
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => {
                  const colorClasses = {
                    blue: 'bg-blue-50 text-blue-700',
                    green: 'bg-green-50 text-green-700',
                    purple: 'bg-purple-50 text-purple-700',
                    orange: 'bg-orange-50 text-orange-700',
                    indigo: 'bg-indigo-50 text-indigo-700',
                    pink: 'bg-pink-50 text-pink-700',
                    yellow: 'bg-yellow-50 text-yellow-700',
                    gray: 'bg-gray-50 text-gray-700',
                  };

                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`inline-block ${colorClasses[category.color as keyof typeof colorClasses]} dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                    >
                      {skill}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          style={{ y: yEducation }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* MCA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Master&apos;s Degree
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Jun 2023
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Master of Computer Application (MCA)
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Sharda University &ndash; Greater Noida
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    CGPA:
                  </span>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    7.9
                  </span>
                </div>
              </motion.div>

              {/* BCA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Bachelor&apos;s Degree
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Jun 2021
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Bachelor of Computer Application (BCA)
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Sharda University &ndash; Greater Noida
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    CGPA:
                  </span>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    7.3
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
