'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Building, Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5],
  );

  const experiences = [
    {
      company: 'Lorien Business Management Pvt Ltd',
      position: 'Software Engineer',
      location: 'New Delhi',
      duration: 'May 2023 - Present',
      achievements: [
        'Collaborated with cross-functional teams to build a CRM platform automating sales operations and internal workflows, saving 400+ hours monthly and streamlining business processes',
        'Designed authentication and lead assignment services using Redis and BullMQ for scalable task processing, ensuring reliable distributed job handling and optimal system performance',
        'Improved database performance by creating materialized views and strategic indexes, significantly improving complex query response times and overall system efficiency',
        'Integrated LangChain and OpenAI APIs to automate lead qualification processes, boosting Marketing Qualified Leads (MQLs) by 30% and reducing sales cycles by 15%',
        'Built CircleCI deployment pipelines for AWS EC2 infrastructure, cutting release times by 50% while managing RDS and S3 storage for optimized data handling and backend efficiency',
      ],
      color: 'blue',
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/50 rounded-full shadow-sm"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
              Professional Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming challenges into opportunities through innovative
            solutions and continuous learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Enhanced Timeline */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
              )}

              {/* Enhanced Timeline dot */}
              <div className="absolute left-6 top-12 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-xl hidden lg:block">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-8 lg:ml-20 hover:shadow-3xl transition-all duration-500 group">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <motion.h3
                      className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.position}
                    </motion.h3>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-3">
                      <Building
                        size={20}
                        className="text-blue-600 dark:text-blue-400"
                      />
                      <span className="font-semibold text-lg">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end space-y-3 mt-4 lg:mt-0">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Calendar
                        size={18}
                        className="text-purple-600 dark:text-purple-400"
                      />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <MapPin
                        size={18}
                        className="text-green-600 dark:text-green-400"
                      />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
                {/* Achievements Section */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                    <Award
                      size={20}
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    />
                    Key Achievements
                  </h4>
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: achIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div
                        className={`w-2 h-2 ${exp.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
