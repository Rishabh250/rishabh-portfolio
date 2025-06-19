'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Bot, Settings } from 'lucide-react';

const Projects = () => {
  const webProjects = [
    {
      title: 'LoFi CRM',
      description:
        'Enterprise-grade CRM platform serving 5000+ users with advanced analytics, automated workflows, and real-time collaboration features. Achieved 99.99% uptime with scalable architecture.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'CircleCI', 'Redis'],
      link: 'https://lofiadmin.lorien.finance',
      category: 'Web Application',
    },
    {
      title: 'Lorien Web App',
      description:
        'AI-enhanced education loan platform with intelligent form prefilling, document verification, and automated eligibility assessment. Increased conversion rates by 35% through smart UX optimization.',
      tech: ['Next.js', 'Node.js', 'AWS', 'AI Integration'],
      link: 'https://app.lorien.finance',
      category: 'Web Application',
    },
    {
      title: 'Lorien Marketing Website',
      description:
        'High-performance marketing website with SEO optimization, A/B testing capabilities, and analytics integration. Achieved Core Web Vitals scores in the 90s and 50% faster load times.',
      tech: ['Next.js', 'Chakra UI', 'Vercel', 'Analytics'],
      link: 'https://lorien.finance',
      category: 'Marketing Website',
    },
    {
      title: 'AI-Powered Portfolio',
      description:
        'Modern, responsive portfolio with dynamic content, smooth animations, and integrated contact system. Built with performance and accessibility in mind.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      category: 'Personal Project',
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
        'AI-powered content creation tool with brand voice analysis, trending topic integration, and engagement prediction. Generated 500+ high-performing posts with 3x engagement rates.',
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Web Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Globe className="text-blue-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">
              Web Applications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white text-gray-700 px-2 py-1 rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Bot className="text-purple-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">
              AI Projects & Tools
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
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white text-gray-700 px-2 py-1 rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Settings className="text-orange-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">
              Automation & Workflows
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
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white text-gray-700 px-2 py-1 rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
