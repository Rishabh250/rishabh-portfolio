'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  User,
  MessageSquare,
  FileText,
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rishu25bansal@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      value: 'rishu25bansal@gmail.com',
      link: 'mailto:rishu25bansal@gmail.com',
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: 'Phone',
      value: '+91 8923425511',
      link: 'tel:+918923425511',
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: 'Location',
      value: 'Bulandshahr, Uttar Pradesh, India – 203001',
      link: null,
    },
    {
      icon: <Linkedin className="text-blue-700" size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/rishabh-bansal-5a08b496',
      link: 'https://linkedin.com/in/rishabh-bansal-5a08b496',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to build the future together? Let&apos;s discuss how I can
            help transform your ideas into intelligent, scalable solutions that
            drive real business value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith('http') ? '_blank' : '_self'
                        }
                        rel={
                          info.link.startsWith('http')
                            ? 'noopener noreferrer'
                            : ''
                        }
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-white rounded-lg shadow-md"
            >
              <h4 className="font-semibold text-gray-800 mb-3">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    10+
                  </div>
                  <div className="text-sm text-gray-600">Apps Deployed</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Users Served</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">Hours Saved/Month</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
                >
                  <MessageSquare className="text-white" size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-600">
                  I&apos;d love to hear from you. Let&apos;s start a
                  conversation!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      <div className="flex items-center space-x-2">
                        <User size={16} className="text-blue-600" />
                        <span>Name *</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full text-black px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-blue-600" />
                        <span>Email *</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-black px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    <div className="flex items-center space-x-2">
                      <FileText size={16} className="text-blue-600" />
                      <span>Subject *</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full text-black px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="Web Development Project"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    <div className="flex items-center space-x-2">
                      <MessageSquare size={16} className="text-blue-600" />
                      <span>Message *</span>
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-black px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-vertical bg-gray-50 hover:bg-white"
                    placeholder="Hi Rishabh, I'm interested in discussing a project with you. I'd love to learn more about your AI development expertise..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </motion.div>
                </motion.button>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    I typically respond within 24 hours ⚡
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
