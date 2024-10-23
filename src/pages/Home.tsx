import { ZodiacWheel } from '../components/ZodiacWheel';
import { BirthdayCountdown } from '../components/BirthdayCountdown';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export function Home() {
  const [birthDate] = useState(new Date(1990, 0, 1));
  const { theme } = useTheme();

  const textClasses = {
    light: 'text-gray-900',
    dark: 'text-white',
    cosmic: 'text-white'
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-8">
        <BirthdayCountdown birthDate={birthDate} />
        <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white/80' : 'bg-white/5'} backdrop-blur-lg`}>
          <h2 className={`text-xl font-semibold ${textClasses[theme]} mb-4`}>Daily Horoscope</h2>
          <p className={theme === 'light' ? 'text-gray-700' : 'text-indigo-200'}>
            Today's celestial alignment brings unexpected opportunities. 
            Stay open to new connections and trust your intuition.
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <ZodiacWheel />
      </div>
    </div>
  );
}