import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Color scheme - Baby Blue and Gold
  const theme = {
    colors: {
      // Baby Blue palette
      babyBlue: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      // Gold palette
      gold: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      // Dark mode colors
      dark: {
        background: '#0f172a',
        surface: '#1e293b',
        primary: '#38bdf8', // baby blue
        secondary: '#fbbf24', // gold
        textPrimary: '#f8fafc',
        textSecondary: '#cbd5e1',
        border: '#334155',
        shadow: 'rgba(0, 0, 0, 0.3)',
      },
      // Light mode colors
      light: {
        background: '#ffffff',
        surface: '#f8fafc',
        primary: '#0ea5e9', // baby blue
        secondary: '#f59e0b', // gold
        textPrimary: '#0f172a',
        textSecondary: '#475569',
        border: '#e2e8f0',
        shadow: 'rgba(0, 0, 0, 0.1)',
      }
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    borderRadius: {
      sm: '0.25rem',
      base: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    transitions: {
      fast: '0.15s ease-in-out',
      base: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  };

  // Get current theme colors
  const getCurrentColors = () => {
    return isDarkMode ? theme.colors.dark : theme.colors.light;
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Set initial mobile state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const colors = getCurrentColors();
    const root = document.documentElement;

    // Set CSS custom properties
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-text-primary', colors.textPrimary);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-shadow', colors.shadow);

    // Set spacing variables
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Set border radius variables
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    // Set shadow variables
    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--box-shadow-${key}`, value);
    });

    // Set transition variables
    Object.entries(theme.transitions).forEach(([key, value]) => {
      root.style.setProperty(`--transition-${key}`, value);
    });

    // Set font variables
    root.style.setProperty('--font-family-primary', "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    root.style.setProperty('--font-size-xs', '0.75rem');
    root.style.setProperty('--font-size-sm', '0.875rem');
    root.style.setProperty('--font-size-base', '1rem');
    root.style.setProperty('--font-size-lg', '1.125rem');
    root.style.setProperty('--font-size-xl', '1.25rem');
    root.style.setProperty('--font-size-2xl', '1.5rem');
    root.style.setProperty('--font-size-3xl', '1.875rem');

    // Add/remove dark class to body
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const contextValue = {
    isDarkMode,
    isMenuOpen,
    isMobile,
    theme,
    getCurrentColors,
    toggleDarkMode,
    toggleMenu,
    closeMenu,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Export the context for direct use if needed
export default ThemeContext; 