import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Check user preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    setIsAnimating(true);
    
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
    
    // Reset animation state
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative group
        p-3 rounded-2xl 
        bg-gradient-to-br from-slate-800/50 via-slate-700/50 to-slate-800/50
        hover:from-slate-700/60 hover:via-slate-600/60 hover:to-slate-700/60
        border border-white/10 hover:border-white/20
        backdrop-blur-sm
        text-gray-300 hover:text-white
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        transition-all duration-300 ease-out
        hover:scale-110 hover:-translate-y-0.5
        active:scale-95
        ${isAnimating ? 'animate-pulse' : ''}
      `}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      
      {/* Icon container with premium animations */}
      <div className="relative z-10 w-5 h-5 flex items-center justify-center">
        {darkMode ? (
          // Sun icon with enhanced styling
          <svg
            className={`
              w-5 h-5 
              transform transition-all duration-500 ease-out
              ${isAnimating ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}
              drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]
            `}
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Enhanced sun with gradient */}
            <defs>
              <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            <circle 
              cx="12" 
              cy="12" 
              r="4" 
              fill="url(#sunGradient)" 
              stroke="none"
              className="animate-pulse"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              fill="none"
              stroke="url(#sunGradient)"
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              className="animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </svg>
        ) : (
          // Moon icon with enhanced styling
          <svg
            className={`
              w-5 h-5 
              transform transition-all duration-500 ease-out
              ${isAnimating ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
              drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]
            `}
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Enhanced moon with gradient */}
            <defs>
              <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              fill="url(#moonGradient)"
              stroke="url(#moonGradient)"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
            {/* Stars around moon */}
            <circle cx="15" cy="6" r="0.5" fill="currentColor" className="animate-twinkle" />
            <circle cx="18" cy="9" r="0.3" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '0.5s' }} />
            <circle cx="19" cy="13" r="0.4" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '1s' }} />
          </svg>
        )}
      </div>
      
      {/* Premium ripple effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-100 bg-white/10 transition-opacity duration-150" />
      
      {/* Theme indicator dots */}
      <div className="absolute -bottom-1 -right-1 flex space-x-0.5">
        <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${darkMode ? 'bg-purple-400' : 'bg-yellow-400'}`} />
        <div className={`w-1 h-1 rounded-full transition-colors duration-300 delay-75 ${darkMode ? 'bg-blue-400' : 'bg-orange-400'}`} />
      </div>
      
      {/* Tooltip on hover */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm">
        Switch to {darkMode ? 'light' : 'dark'} mode
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
      </div>
    </button>
  );
};

export default ThemeToggle;