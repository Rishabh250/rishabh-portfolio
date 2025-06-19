'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Cog, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "TypeScript", "Go Lang"],
      color: "blue"
    },
    {
      icon: <Code className="text-green-600" size={32} />,
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Flutter", "Material UI", "Chakra UI", "HTML5", "CSS3"],
      color: "green"
    },
    {
      icon: <Database className="text-purple-600" size={32} />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "Microservices Architecture"],
      color: "purple"
    },
    {
      icon: <Database className="text-orange-600" size={32} />,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Vector Databases (Chroma, FAISS)"],
      color: "orange"
    },
    {
      icon: <Cloud className="text-indigo-600" size={32} />,
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, RDS, S3, Lambda)", "Docker", "CircleCI", "Vercel", "CI/CD Pipelines"],
      color: "indigo"
    },
    {
      icon: <Brain className="text-pink-600" size={32} />,
      title: "AI & Machine Learning",
      skills: ["LangChain", "OpenAI API", "Gemini API", "Prompt Engineering", "RAG Systems"],
      color: "pink"
    },
    {
      icon: <Cog className="text-yellow-600" size={32} />,
      title: "Automation Tools",
      skills: ["n8n", "Workflow Automation", "Process Optimization"],
      color: "yellow"
    },
    {
      icon: <Wrench className="text-gray-600" size={32} />,
      title: "Development Tools",
      skills: ["Git", "GitHub", "Agile Methodologies", "Code Review"],
      color: "gray"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies, cloud platforms, and cutting-edge AI tools
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
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-gray-800 ml-3">
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
                    gray: 'bg-gray-50 text-gray-700'
                  };

                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`inline-block ${colorClasses[category.color as keyof typeof colorClasses]} px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* MCA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Master&apos;s Degree
                  </div>
                  <span className="text-gray-500 text-sm">Jun 2021 - Jun 2023</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Master of Computer Application (MCA)
                </h4>
                <p className="text-gray-600 mb-3">Sharda University &ndash; Greater Noida</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">CGPA:</span>
                  <span className="text-lg font-bold text-blue-600">7.9</span>
                </div>
              </motion.div>

              {/* BCA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Bachelor&apos;s Degree
                  </div>
                  <span className="text-gray-500 text-sm">Jun 2018 - Jun 2021</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Bachelor of Computer Application (BCA)
                </h4>
                <p className="text-gray-600 mb-3">Sharda University &ndash; Greater Noida</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">CGPA:</span>
                  <span className="text-lg font-bold text-green-600">7.3</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;