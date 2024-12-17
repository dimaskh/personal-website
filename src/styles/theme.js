const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#86868b',
    accent: '#0095FF',
    background: '#000000',
    backgroundAlt: '#111111',
    backgroundAlt2: '#1A1A1A',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textTertiary: 'rgba(255, 255, 255, 0.5)',
    border: 'rgba(255, 255, 255, 0.1)',
    link: '#0095FF',
    linkHover: '#40AFFF',
    success: '#00C853',
    error: '#FF3B30',
    warning: '#FF9500',
    card: '#111111',
    overlay: 'rgba(0, 0, 0, 0.7)'
  },
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
      display: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      md: '1.125rem',   // 18px
      lg: '1.25rem',    // 20px
      xl: '1.5rem',     // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.25rem',  // 36px
      '4xl': '3rem',     // 48px
      '5xl': '3.75rem',  // 60px
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      tight: 1.1,
      base: 1.5,
      relaxed: 1.625
    }
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',   // 48px
    '4xl': '4rem',   // 64px
    '5xl': '6rem'    // 96px
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
    ultraWide: '1440px'
  },
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.45s ease'
  },
  containers: {
    default: '90rem',     // 1440px
    content: '70rem',     // 1120px
    text: '45rem'         // 720px
  },
  zIndex: {
    negative: -1,
    zero: 0,
    low: 10,
    medium: 20,
    high: 30,
    highest: 50
  }
}

export default theme
