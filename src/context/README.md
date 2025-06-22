# Theme Context System

This theme context provides a comprehensive theming solution for the React application with dark/light mode toggle, responsive design, and mobile menu functionality.

## Features

- 🌙 **Dark/Light Mode Toggle** - Smooth transitions between themes
- 📱 **Responsive Design** - Automatically detects mobile devices
- 🍔 **Mobile Menu Toggle** - Hamburger menu for mobile navigation
- 🎨 **Baby Blue & Gold Color Scheme** - Beautiful gradient combinations
- 💾 **Persistent Storage** - Theme preference saved to localStorage
- ♿ **Accessibility** - Proper ARIA labels and keyboard navigation
- 🎭 **CSS Custom Properties** - Dynamic theming with CSS variables

## Color Palette

### Baby Blue Colors
- Primary: `#0ea5e9` (Light mode) / `#38bdf8` (Dark mode)
- Shades: 50-900 with various intensities

### Gold Colors
- Secondary: `#f59e0b` (Light mode) / `#fbbf24` (Dark mode)
- Shades: 50-900 with various intensities

## Usage

### 1. Wrap your app with ThemeProvider

```jsx
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### 2. Use the theme in components

```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { 
    isDarkMode, 
    isMenuOpen, 
    isMobile, 
    theme, 
    toggleDarkMode, 
    toggleMenu, 
    closeMenu 
  } = useTheme();

  return (
    <div className={`my-component ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        Toggle Theme
      </button>
    </div>
  );
};
```

### 3. Use the ThemeToggle component

```jsx
import ThemeToggle from './components/ThemeToggle';

const Navbar = () => {
  return (
    <nav>
      <ThemeToggle />
    </nav>
  );
};
```

### 4. Use the MenuToggle component

```jsx
import MenuToggle from './components/MenuToggle';

const Navbar = () => {
  return (
    <nav>
      <MenuToggle />
    </nav>
  );
};
```

## Available Theme Values

### Context Properties

| Property | Type | Description |
|----------|------|-------------|
| `isDarkMode` | boolean | Current theme mode |
| `isMenuOpen` | boolean | Mobile menu state |
| `isMobile` | boolean | Mobile device detection |
| `theme` | object | Complete theme object |
| `toggleDarkMode` | function | Toggle theme function |
| `toggleMenu` | function | Toggle mobile menu |
| `closeMenu` | function | Close mobile menu |

### CSS Custom Properties

The theme automatically sets these CSS custom properties:

#### Colors
```css
--color-background
--color-surface
--color-primary
--color-secondary
--color-text-primary
--color-text-secondary
--color-border
--color-shadow
```

#### Spacing
```css
--spacing-xs
--spacing-sm
--spacing-base
--spacing-lg
--spacing-xl
--spacing-2xl
--spacing-3xl
```

#### Border Radius
```css
--border-radius-sm
--border-radius-base
--border-radius-lg
--border-radius-xl
--border-radius-2xl
--border-radius-full
```

#### Shadows
```css
--box-shadow-sm
--box-shadow-base
--box-shadow-md
--box-shadow-lg
--box-shadow-xl
```

#### Transitions
```css
--transition-fast
--transition-base
--transition-slow
```

#### Typography
```css
--font-family-primary
--font-size-xs
--font-size-sm
--font-size-base
--font-size-lg
--font-size-xl
--font-size-2xl
--font-size-3xl
```

## Styling Components

### Using CSS Classes

```css
.my-component {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  transition: var(--transition-base);
}

.my-component.dark {
  /* Dark mode specific styles */
}

.my-component.light {
  /* Light mode specific styles */
}
```

### Using Inline Styles

```jsx
const MyComponent = () => {
  const { getCurrentColors } = useTheme();
  const colors = getCurrentColors();

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      padding: 'var(--spacing-lg)'
    }}>
      Content
    </div>
  );
};
```

## Responsive Design

The theme automatically handles responsive design:

- **Desktop (≥768px)**: Full navigation with theme toggle behind logo
- **Mobile (<768px)**: Hamburger menu with theme toggle in header
- **Auto-close**: Mobile menu closes when screen size increases

## Accessibility Features

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- High contrast color combinations
- Semantic HTML structure

## Browser Support

- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- Mobile-first responsive design

## Performance

- Efficient re-renders with React Context
- CSS custom properties for smooth transitions
- Minimal JavaScript overhead
- Optimized for mobile devices

## Customization

You can customize the theme by modifying the `theme` object in `ThemeContext.jsx`:

```jsx
const theme = {
  colors: {
    // Add your custom colors
    custom: {
      accent: '#ff6b6b',
      success: '#51cf66',
      warning: '#ffd43b',
      error: '#ff6b6b'
    }
  },
  // Add custom spacing, shadows, etc.
};
```

## Troubleshooting

### Theme not updating
- Ensure component is wrapped in `ThemeProvider`
- Check if `useTheme` hook is imported correctly
- Verify CSS custom properties are being applied

### Mobile menu not working
- Check if `isMobile` state is correct
- Ensure `MenuToggle` component is rendered
- Verify event listeners are properly set up

### Colors not changing
- Check if CSS custom properties are defined
- Verify theme object structure
- Ensure CSS classes are applied correctly 