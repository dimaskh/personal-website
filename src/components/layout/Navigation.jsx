import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  background: ${(props) =>
    props.$scrolled ? "rgba(0, 0, 0, 0.85)" : "transparent"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: ${(props) => props.theme.zIndex.high};
  transition: background-color 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: ${(props) => props.theme.containers.content};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

const pulseCore = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.9;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
`;

const pulseWave = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;

const LogoSVG = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: ${(props) => props.theme.spacing.xs};

  .core {
    animation: ${pulseCore} 2s ease-in-out infinite;
    transform-origin: center;
    fill: #ffffff;
  }

  .wave {
    animation: ${pulseWave} 2s ease-in-out infinite;
    transform-origin: center;
    fill: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    .core,
    .wave {
      animation-duration: 1s;
    }
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.display};
  font-size: ${(props) => props.theme.typography.fontSizes.xl};
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.015em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.fontSizes.base};
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
  transition: color 0.2s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }

  &.active {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: ${(props) => props.theme.zIndex.high};
  position: relative;
  width: 32px;
  height: 32px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme.colors.textPrimary};
    transition: all 0.3s ease;
    position: absolute;
    left: 4px;

    &:first-child {
      transform: ${(props) =>
        props.isOpen ? "rotate(45deg)" : "translateY(-6px)"};
      top: ${(props) => (props.isOpen ? "15px" : "auto")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? 0 : 1)};
      top: 15px;
    }

    &:last-child {
      transform: ${(props) =>
        props.isOpen ? "rotate(-45deg)" : "translateY(6px)"};
      top: ${(props) => (props.isOpen ? "15px" : "auto")};
    }
  }
`;

const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${(props) => props.theme.zIndex.medium};
  overflow-y: auto;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 24px;
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: none;
  padding: 12px;
  display: block;
  text-align: center;

  &.active {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const MobileMenuLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  width: 100%;
  padding: ${(props) => props.theme.spacing.xl};
  height: 100%;
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/cases", label: "Cases" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <LogoWrapper to="/">
          <LogoSVG viewBox="0 0 32 32">
            <circle className="wave" cx="16" cy="16" r="14" />
            <circle className="core" cx="16" cy="16" r="8" />
          </LogoSVG>
          <LogoText>Personal Website</LogoText>
        </LogoWrapper>
        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isOpen={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </NavContainer>

      {/* Mobile Menu */}
      <MobileMenuContainer
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <MobileMenuLinks
          variants={{
            open: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                closed: { opacity: 0, y: 20 },
                open: { opacity: 1, y: 0 },
              }}
            >
              <MobileNavLink
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
              </MobileNavLink>
            </motion.div>
          ))}
        </MobileMenuLinks>
      </MobileMenuContainer>
    </Nav>
  );
};

export default Navigation;
