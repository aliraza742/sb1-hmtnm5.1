import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import type { ZodiacSign } from '../types/zodiac';
import { useState } from 'react';

const zodiacSigns: Array<{ sign: ZodiacSign; description: string }> = [
  {
    sign: 'aries',
    description: 'Your natural leadership abilities shine today. Take initiative in projects close to your heart.'
  },
  {
    sign: 'taurus',
    description: 'Financial opportunities are highlighted. Trust your instincts with practical matters.'
  },
  {
    sign: 'gemini',
    description: 'Communication flows easily today. Express your ideas with confidence.'
  }
];

export function Horoscope() {
  const { theme } = useTheme();
  const [selectedSign, setSelectedSign] = useState<ZodiacSign>('aries');

  const textClasses = {
    light: 'text-gray-900',
    dark: 'text-white',
    cosmic: 'text-white'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className={`text-3xl font-bold ${textClasses[theme]} mb-8`}>Daily Horoscope</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {zodiacSigns.map(({ sign, description }) => (
            <motion.button
              key={sign}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSign(sign)}
              className={`w-full p-4 rounded-lg ${
                selectedSign === sign
                  ? theme === 'light'
                    ? 'bg-indigo-100 text-indigo-900'
                    : 'bg-indigo-900 text-white'
                  : theme === 'light'
                  ? 'bg-white/80 text-gray-900'
                  : 'bg-white/5 text-white'
              } backdrop-blur-sm transition-colors`}
            >
              <h3 className="text-lg font-semibold capitalize">{sign}</h3>
              <p className={`mt-2 text-sm ${
                theme === 'light' ? 'text-gray-600' : 'text-indigo-200'
              }`}>
                {description}
              </p>
            </motion.button>
          ))}
        </div>

        <div className={`p-6 rounded-xl ${
          theme === 'light' ? 'bg-white/80' : 'bg-white/5'
        } backdrop-blur-lg`}>
          <h2 className={`text-xl font-semibold ${textClasses[theme]} mb-4 capitalize`}>
            {selectedSign} Detailed Reading
          </h2>
          <div className="space-y-4">
            <p className={theme === 'light' ? 'text-gray-700' : 'text-indigo-200'}>
              The stars align in your favor today. Your ruling planet brings positive energy
              and opportunities for growth. Focus on personal development and relationships.
            </p>
            <div className={`p-4 rounded-lg ${
              theme === 'light' ? 'bg-purple-50' : 'bg-purple-900/30'
            }`}>
              <h3 className={`font-semibold ${textClasses[theme]} mb-2`}>Lucky Numbers</h3>
              <p className={theme === 'light' ? 'text-gray-700' : 'text-indigo-200'}>
                3, 7, 12, 16, 21, 25
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}