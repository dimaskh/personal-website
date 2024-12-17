const customMediaQuery = (minWidth) => `@media (min-width: ${minWidth})`;

const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery('320px'),
  mobileLarge: customMediaQuery('375px'),
  tablet: customMediaQuery('768px'),
  desktop: customMediaQuery('1024px'),
  desktopLarge: customMediaQuery('1440px'),
};

// Helper function to get responsive value based on breakpoint
export const getResponsiveValue = (theme, path, breakpoint = 'desktop') => {
  const value = path.split('.').reduce((obj, key) => obj[key], theme);
  return value[breakpoint] || value;
};

// Helper function for responsive font sizes
export const responsiveFontSize = (path) => (props) => {
  const mobile = getResponsiveValue(props.theme, path, 'mobile');
  const tablet = getResponsiveValue(props.theme, path, 'tablet');
  const desktop = getResponsiveValue(props.theme, path, 'desktop');

  return `
    font-size: ${mobile};
    
    ${media.tablet} {
      font-size: ${tablet};
    }
    
    ${media.desktop} {
      font-size: ${desktop};
    }
  `;
};

// Helper function for responsive spacing
export const responsiveSpacing = (path) => (props) => {
  const mobile = props.theme.spacing[path] || path;
  const tablet = props.theme.spacing[path] || path;
  const desktop = props.theme.spacing[path] || path;

  return `
    padding: ${mobile};
    
    ${media.tablet} {
      padding: ${tablet};
    }
    
    ${media.desktop} {
      padding: ${desktop};
    }
  `;
};

// Helper function for responsive container width
export const responsiveContainer = (props) => `
  width: 100%;
  max-width: ${props.theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${props.theme.layout.containerPadding.mobile};
  
  ${media.tablet} {
    padding: ${props.theme.layout.containerPadding.tablet};
  }
  
  ${media.desktop} {
    padding: ${props.theme.layout.containerPadding.desktop};
  }
`;

export default media;
