import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenuContainer
} from './Navigation.styles'

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">ARTSVIT</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/cases" className={location.pathname === "/cases" ? "active" : ""}>
            Cases
          </NavLink>
          <NavLink to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "×" : "☰"}
        </MobileMenuButton>
      </NavContainer>

      {/* Mobile Menu */}
      <MobileMenuContainer
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About
        </NavLink>
        <NavLink to="/cases" className={location.pathname === "/cases" ? "active" : ""}>
          Cases
        </NavLink>
        <NavLink to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </NavLink>
      </MobileMenuContainer>
    </Nav>
  )
}

export default Navigation
