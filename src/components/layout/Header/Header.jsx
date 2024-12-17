import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md} 0;
  transition: background-color 0.3s ease;
  backdrop-filter: blur(10px);
  background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent'};
`;

const HeaderContainer = styled.div`
  max-width: ${props => props.theme.containers.content};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.xl};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: #FFFFFF;
  text-decoration: none;
  letter-spacing: -0.02em;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: ${props => props.theme.typography.fontSizes.base};
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  transition: color 0.2s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FFFFFF;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #FFFFFF;
    
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: #FFFFFF;
    
    &:after {
      width: 100%;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(latest => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <HeaderContainer>
        <Logo to="/">AS</Logo>
        <Nav>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/work" className={location.pathname === "/work" ? "active" : ""}>
            Work
          </NavLink>
          <NavLink to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </NavLink>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
