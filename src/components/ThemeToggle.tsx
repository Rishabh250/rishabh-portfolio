'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-6 h-6"
      >
        <motion.div
          animate={{
            scale: theme === 'dark' ? 0 : 1,
            opacity: theme === 'dark' ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={20} className="text-yellow-500" />
        </motion.div>

        <motion.div
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon size={20} className="text-blue-400" />
        </motion.div>
      </motion.div>

      {/* Animated background */}
      <motion.div
        animate={{
          background:
            theme === 'dark'
              ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
              : 'linear-gradient(45deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full"
      />
    </motion.button>
  );
}
