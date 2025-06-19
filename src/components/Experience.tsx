'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'LORIEN BUSINESS MANAGEMENT PRIVATE LIMITED',
      position: 'Software Engineer',
      location: 'New Delhi',
      duration: 'May 2023 - Current',
      achievements: [
        'Architected and deployed 3 production-grade CRMs serving 5000+ users with 99.99% uptime using Next.js, Node.js, PostgreSQL, and AWS',
        'Implemented AI-powered automation workflows reducing manual processing time by 60% and saving over 150 hours monthly',
        'Built enterprise-grade CI/CD pipelines with CircleCI and AWS, reducing deployment time by 45% and eliminating production bugs',
        'Led integration of LangChain and OpenAI APIs for intelligent document processing, improving data extraction accuracy by 85%',
        'Optimized database queries and implemented caching strategies, improving application performance by 40%',
      ],
      color: 'blue',
    },
    {
      company: 'Kylo Apps',
      position: 'Flutter Intern',
      location: 'New Delhi',
      duration: 'Feb 2022 - May 2022',
      achievements: [
        'Developed cross-platform mobile applications using Flutter and Dart, contributing to 3 production releases',
        'Collaborated with senior developers on UI/UX implementation, improving app performance by 20%',
        'Participated in code reviews and agile development processes, gaining experience in mobile app lifecycle management',
        'Built responsive mobile interfaces and integrated REST APIs for seamless data synchronization',
      ],
      color: 'green',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 hidden md:block"></div>
              )}

              {/* Timeline dot */}
              <div
                className={`absolute left-4 top-8 w-4 h-4 ${exp.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} rounded-full border-4 border-white shadow-lg hidden md:block`}
              ></div>

              <div className="bg-white rounded-xl shadow-lg p-8 md:ml-16 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Building size={18} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
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
                      <p className="text-gray-700 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
