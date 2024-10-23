import { Link, Outlet } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export function Layout() {
  const { theme } = useTheme();

  const bgClasses = {
    light: 'bg-gradient-to-br from-blue-100 via-white to-purple-100',
    dark: 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900',
    cosmic: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-black bg-[url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986")] bg-blend-soft-light bg-cover'
  };

  const textClasses = {
    light: 'text-gray-900',
    dark: 'text-white',
    cosmic: 'text-white'
  };

  return (
    <div className={`min-h-screen ${bgClasses[theme]} transition-colors duration-500`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-12">
          <div className="flex items-center gap-3">
            <Moon className={`w-8 h-8 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} />
            <Link to="/" className={`text-2xl font-bold ${textClasses[theme]}`}>
              Celestial Insights
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/horoscope" className={`${textClasses[theme]} hover:text-indigo-400 transition-colors`}>
              Horoscope
            </Link>
            <Link to="/quiz" className={`${textClasses[theme]} hover:text-indigo-400 transition-colors`}>
              Quiz
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}