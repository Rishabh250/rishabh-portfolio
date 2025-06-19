'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const Logo = ({ size = 'md', className = '', showText = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-3 ${className}`}
    >
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]}`}>
        <motion.svg
          viewBox="0 0 40 40"
          className="w-full h-full"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background Circle */}
          <motion.circle
            cx="20"
            cy="20"
            r="19"
            fill="url(#gradient)"
            stroke="url(#borderGradient)"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* R Letter */}
          <motion.path
            d="M11 14h6c2 0 3 1 3 3s-1 3-3 3h-3l4 6h-2l-4-6h-1v6h-2V14z M13 16v4h4c1 0 2-0.5 2-2s-1-2-2-2h-4z"
            fill="white"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* B Letter */}
          <motion.path
            d="M22 14h5c2 0 3 1 3 2.5c0 0.8-0.5 1.5-1.2 1.8c0.8 0.3 1.2 1 1.2 1.7c0 1.5-1 3-3 3h-5V14z M24 16v2h3c0.5 0 1-0.5 1-1s-0.5-1-1-1h-3z M24 20v3h3c0.5 0 1-0.5 1-1.5s-0.5-1.5-1-1.5h-3z"
            fill="white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient
              id="borderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-md -z-10"
        />
      </div>

      {/* Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${textSizeClasses[size]}`}
        >
          Rishabh Bansal
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
