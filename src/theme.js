// Theme configuration for the educational platform
export const theme = {
  // Colors
  colors: {
    // Primary colors
    primary: '#FFD700', // Gold
    primaryHover: '#FFC800',
    primaryLight: '#FFF4CC',
    
    // Background colors
    dark: {
      background: '#000000',
      surface: '#1a1a1a',
      card: '#2a2a2a',
    },
    light: {
      background: '#ffffff',
      surface: '#f8f9fa',
      card: '#ffffff',
    },
    
    // Text colors
    text: {
      dark: {
        primary: '#ffffff',
        secondary: '#cccccc',
        tertiary: '#999999',
      },
      light: {
        primary: '#000000',
        secondary: '#333333',
        tertiary: '#666666',
      },
    },
    
    // Status colors
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
    
    // Borders
    border: {
      dark: '#333333',
      light: '#e0e0e0',
      primary: '#FFD700',
    },
    
    // Shadows
    shadow: {
      primary: 'rgba(255, 215, 0, 0.3)',
      dark: 'rgba(0, 0, 0, 0.1)',
      light: 'rgba(0, 0, 0, 0.05)',
    },
  },
  
  // Typography
  typography: {
    fontFamily: {
      primary: "'Tajawal', sans-serif",
      secondary: "'Arial', sans-serif",
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // 2px
    base: '0.25rem', // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    full: '9999px',
  },
  
  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    primary: '0 0 30px rgba(255, 215, 0, 0.3)',
    primaryHover: '0 0 40px rgba(255, 215, 0, 0.5)',
  },
  
  // Transitions
  transition: {
    fast: '0.15s ease',
    base: '0.3s ease',
    slow: '0.5s ease',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-index
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

// Helper function to get theme values
export const getThemeValue = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], theme);
};

// CSS custom properties generator
export const generateCSSVariables = (isDark = true) => {
  const mode = isDark ? 'dark' : 'light';
  
  return {
    // Colors
    '--color-primary': theme.colors.primary,
    '--color-primary-hover': theme.colors.primaryHover,
    '--color-background': theme.colors[mode].background,
    '--color-surface': theme.colors[mode].surface,
    '--color-text-primary': theme.colors.text[mode].primary,
    '--color-text-secondary': theme.colors.text[mode].secondary,
    '--color-text-tertiary': theme.colors.text[mode].tertiary,
    '--color-border': theme.colors.border[mode],
    '--color-success': theme.colors.success,
    '--color-warning': theme.colors.warning,
    '--color-error': theme.colors.error,
    '--color-info': theme.colors.info,
    
    // Typography
    '--font-family-primary': theme.typography.fontFamily.primary,
    '--font-size-xs': theme.typography.fontSize.xs,
    '--font-size-sm': theme.typography.fontSize.sm,
    '--font-size-base': theme.typography.fontSize.base,
    '--font-size-lg': theme.typography.fontSize.lg,
    '--font-size-xl': theme.typography.fontSize.xl,
    '--font-size-2xl': theme.typography.fontSize['2xl'],
    '--font-size-3xl': theme.typography.fontSize['3xl'],
    '--font-weight-normal': theme.typography.fontWeight.normal,
    '--font-weight-medium': theme.typography.fontWeight.medium,
    '--font-weight-semibold': theme.typography.fontWeight.semibold,
    '--font-weight-bold': theme.typography.fontWeight.bold,
    '--line-height-normal': theme.typography.lineHeight.normal,
    
    // Spacing
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-base': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
    '--spacing-2xl': theme.spacing['2xl'],
    '--spacing-3xl': theme.spacing['3xl'],
    
    // Border radius
    '--border-radius-base': theme.borderRadius.base,
    '--border-radius-lg': theme.borderRadius.lg,
    '--border-radius-full': theme.borderRadius.full,
    
    // Shadows
    '--box-shadow-md': theme.boxShadow.md,
    '--box-shadow-primary': theme.boxShadow.primary,
    '--box-shadow-primaryHover': theme.boxShadow.primaryHover,
    
    // Transitions
    '--transition-base': theme.transition.base,
  };
};

export default theme; 