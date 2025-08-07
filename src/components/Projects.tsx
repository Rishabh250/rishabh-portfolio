'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, ExternalLink, Globe, Settings } from 'lucide-react';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const backendProjects = [
    {
      title: 'LoFi CRM – CRM Platform for Internal Sales Automation',
      description:
        'Engineered an enterprise CRM platform with modular microservices design and fault-tolerant architecture, eliminating customer data loss and enabling seamless scalability. Implemented end-to-end security infrastructure with TLS/SSL encryption and role-based access controls, achieving full compliance with industry security standards.',
      tech: [
        'Node.js',
        'Next.js',
        'Material UI',
        'AWS',
        'CircleCI',
        'PostgreSQL',
        'Redis',
      ],
      link: 'https://lofiadmin.lorien.finance',
      category: 'Enterprise CRM',
    },
    {
      title: 'Lorien Web App – Education Loan Portal',
      description:
        'Constructed a highly available loan portal with end-to-end TLS/SSL encryption, ensuring secure data transmission and client privacy. Developed RESTful APIs with robust error handling and PostgreSQL/MongoDB integration, enabling seamless traffic surge management and maintaining system stability under high load.',
      tech: ['Node.js', 'Next.js', 'AWS', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      link: 'https://app.lorien.finance',
      category: 'Financial Portal',
    },
    {
      title: 'Lorien Website',
      description:
        'Built a high-performance, responsive website with 99.9% uptime and mobile-optimized design for seamless user experience across all devices. Enhanced frontend performance reducing page load times by 50% and increasing user engagement by 40% through efficient code splitting and caching strategies.',
      tech: [
        'Next.js',
        'Chakra UI',
        'Vercel',
        'Performance Optimization',
        'SEO',
      ],
      link: 'https://lorien.finance',
      category: 'Marketing Website',
    },
  ];

  const aiProjects = [
    {
      title: 'Enterprise Knowledge Hub',
      description:
        'Production-ready RAG system processing 10,000+ documents with 95% accuracy. Features intelligent chunking, semantic search, and multi-modal support for enterprise knowledge management.',
      tech: [
        'LangChain',
        'OpenAI',
        'Streamlit',
        'Chroma',
        'FAISS',
        'PostgreSQL',
      ],
      category: 'AI Tool',
    },
    {
      title: 'LinkedIn Post Generator',
      description:
        'AI-powered content creation tool with brand voice analysis, trending topic integration, and engagement prediction. Generated  high-performing posts with 3x engagement rates.',
      tech: ['LangChain', 'OpenAI', 'Node.js', 'Streamlit', 'Analytics'],
      category: 'AI Tool',
    },
  ];

  const automationProjects = [
    {
      title: 'AI Image Generator Workflow',
      description:
        'Built a sophisticated multi-agent AI system with Style, Character, and Final Prompt agents. Integrates image generation with Telegram notifications and Google Sheets logging for seamless content creation pipeline.',
      tech: [
        'Multi-Agent System',
        'AI Image Generation',
        'Telegram API',
        'Google Sheets',
        'Workflow Automation',
      ],
      category: 'AI Automation',
    },
    {
      title: 'AI Email Analyzer & Processor',
      description:
        'Developed an intelligent email processing system with AI-powered spam detection, content analysis using Gemini model, and automated summary generation with multi-platform notifications.',
      tech: [
        'Gemini AI',
        'Email Processing',
        'Spam Detection',
        'Natural Language Processing',
        'Automated Workflows',
      ],
      category: 'AI Automation',
    },
    {
      title: 'ClickUp Task Automation Workflow',
      description:
        'Designed and implemented a comprehensive task management automation system with advanced workflow orchestration, reducing manual work by 60% and improving team productivity.',
      tech: [
        'ClickUp API',
        'Webhook Integration',
        'Process Automation',
        'Workflow Design',
      ],
      category: 'Process Automation',
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: yBackground, rotateX }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-40 left-32 w-96 h-96 bg-gradient-conic from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-72 h-72 bg-gradient-conic from-green-500 via-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        style={{ scale }}
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Backend Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Globe className="text-blue-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Backend Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI & Backend Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Bot className="text-purple-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              AI & Backend Tools
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps & Automation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Settings className="text-orange-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              DevOps & Automation
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
