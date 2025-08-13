'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Code, Mail, MapPin, Rocket } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const highlights = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: 'Full Stack Development',
      description:
        '2+ years building scalable web and mobile applications with React.js, Node.js, Next.js, and modern development practices',
    },
    {
      icon: <Brain className="text-green-400" size={32} />,
      title: 'AI & Automation',
      description:
        'Expert in LangChain, OpenAI APIs for lead qualification automation, boosting MQLs by 30% and reducing sales cycles by 15%',
    },
    {
      icon: <Rocket className="text-purple-400" size={32} />,
      title: 'Cloud & DevOps',
      description:
        'AWS infrastructure management with CircleCI deployment pipelines, cutting release times by 50% and improving system efficiency',
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
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
            Full Stack Developer with over 2 years of hands-on experience
            architecting scalable, secure web and mobile applications
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
              I&apos;m a passionate Full Stack Developer with over 2 years of
              hands-on experience architecting scalable, secure web and mobile
              applications. Highly skilled in deploying robust solutions using
              React, Node.js, AWS, and AI frameworks. I specialize in enhancing
              operational efficiency, driving workflow automation, ensuring
              regulatory compliance, and delivering measurable business value
              through clean code and rapid iteration.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;ve collaborated with cross-functional teams to build CRM
              platforms that automate sales operations and internal workflows,
              resulting in significant time savings and streamlined business
              processes. I specialize in designing authentication systems and
              scalable task processing solutions using Redis and BullMQ.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My technical expertise spans database optimization through
              materialized views and strategic indexing, AI integration using
              LangChain and OpenAI APIs for intelligent automation, and DevOps
              practices including CI/CD pipeline development. I&apos;m
              proficient in cloud infrastructure management with AWS services
              like EC2, RDS, and S3 for scalable and optimized solutions.
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
      </motion.div>
    </section>
  );
};

export default About;
