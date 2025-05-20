import React from 'react';
import './ThemeToggle.css';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button className="themeToggle" onClick={toggleTheme}>
      <span className="themeIcon">{isDarkMode ? '☀️' : '🌙'}</span>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
