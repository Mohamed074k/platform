# Theme System Documentation

This document explains how to use the centralized theme system for the educational platform.

## Overview

The theme system provides a centralized way to manage colors, typography, spacing, and other design tokens across the entire application. It uses CSS custom properties (CSS variables) for dynamic theming and provides a consistent design language.

## Files

- `src/theme.js` - Main theme configuration
- `src/context/ThemeContext.jsx` - React context for theme management
- `src/components/ThemeDemo.jsx` - Demo component showcasing theme usage

## Usage

### 1. Using CSS Custom Properties

The theme system automatically generates CSS custom properties that you can use in your CSS files:

```css
.my-component {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  padding: var(--spacing-base);
  font-family: var(--font-family-primary);
  border-radius: var(--border-radius-lg);
  transition: var(--transition-base);
}
```

### 2. Using Theme in React Components

```jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme';

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors[isDarkMode ? 'dark' : 'light'].background,
      color: theme.colors.text[isDarkMode ? 'dark' : 'light'].primary
    }}>
      <button onClick={toggleDarkMode}>
        Toggle Theme
      </button>
    </div>
  );
};
```

### 3. Accessing Theme Values

```jsx
import { theme, getThemeValue } from '../theme';

// Direct access
const primaryColor = theme.colors.primary;

// Using helper function
const fontSize = getThemeValue('typography.fontSize.lg');
```

## Available Design Tokens

### Colors

```javascript
theme.colors = {
  primary: '#FFD700',        // Gold
  primaryHover: '#FFC800',   // Darker gold
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
  text: {
    dark: { primary: '#ffffff', secondary: '#cccccc' },
    light: { primary: '#000000', secondary: '#333333' }
  },
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8'
}
```

### Typography

```javascript
theme.typography = {
  fontFamily: {
    primary: "'Tajawal', sans-serif",
    secondary: "'Arial', sans-serif"
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem' // 30px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
}
```

### Spacing

```javascript
theme.spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem'    // 64px
}
```

### Border Radius

```javascript
theme.borderRadius = {
  none: '0',
  sm: '0.125rem',  // 2px
  base: '0.25rem', // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px'
}
```

## CSS Custom Properties

The following CSS custom properties are automatically generated:

### Colors
- `--color-primary`
- `--color-primary-hover`
- `--color-background`
- `--color-surface`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-border`
- `--color-success`
- `--color-warning`
- `--color-error`
- `--color-info`

### Typography
- `--font-family-primary`
- `--font-size-xs` through `--font-size-3xl`
- `--font-weight-normal`, `--font-weight-medium`, etc.
- `--line-height-normal`

### Spacing
- `--spacing-xs` through `--spacing-3xl`

### Other
- `--border-radius-base`, `--border-radius-lg`, `--border-radius-full`
- `--box-shadow-md`, `--box-shadow-primary`
- `--transition-base`

## Best Practices

1. **Always use CSS custom properties** for styling components
2. **Use the theme object** for dynamic values in JavaScript
3. **Keep components theme-aware** by using the `useTheme` hook
4. **Test both light and dark modes** for all components
5. **Use semantic color names** rather than hardcoded values

## Adding New Design Tokens

To add new design tokens:

1. Add them to the `theme` object in `src/theme.js`
2. Include them in the `generateCSSVariables` function
3. Update this documentation
4. Test in both light and dark modes

## Example Component

See `src/components/ThemeDemo.jsx` for a complete example of how to use the theme system in a component. 