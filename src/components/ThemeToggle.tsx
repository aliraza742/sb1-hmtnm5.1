import { Moon, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', icon: Sun, color: 'text-yellow-400' },
    { id: 'dark', icon: Moon, color: 'text-indigo-400' },
    { id: 'cosmic', icon: Sparkles, color: 'text-purple-400' }
  ] as const;

  const currentIndex = themes.findIndex(t => t.id === theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full hover:bg-white/10 transition-colors"
      onClick={() => setTheme(nextTheme.id as any)}
    >
      {themes.map(({ id, icon: Icon, color }) => (
        theme === id && <Icon key={id} className={`w-6 h-6 ${color}`} />
      ))}
    </motion.button>
  );
}