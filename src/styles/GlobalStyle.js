import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: ${props => props.theme.colors.background};
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily.base};
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.background};
    line-height: ${props => props.theme.typography.lineHeights.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.fontFamily.display};
    font-weight: ${props => props.theme.typography.fontWeights.semibold};
    line-height: ${props => props.theme.typography.lineHeights.tight};
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};

    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${props => props.theme.borderRadius.md};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    
    &:focus {
      outline: none;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.textTertiary};
    border-radius: ${props => props.theme.borderRadius.full};
    
    &:hover {
      background: ${props => props.theme.colors.textSecondary};
    }
  }

  /* Selection */
  ::selection {
    background-color: ${props => props.theme.colors.accent}40;
    color: ${props => props.theme.colors.accent};
  }

  /* Dark mode images */
  img {
    opacity: 0.8;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }

  /* Smooth transitions */
  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`

export default GlobalStyle
