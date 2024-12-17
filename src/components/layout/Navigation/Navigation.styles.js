import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  z-index: ${props => props.theme.zIndex.high};
`

export const NavContainer = styled.div`
  max-width: ${props => props.theme.containers.content};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.lg};
`

export const Logo = styled(Link)`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.xl};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: -0.015em;
`

export const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSizes.base};
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }

  &.active {
    color: ${props => props.theme.colors.textPrimary};
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  font-size: ${props => props.theme.typography.fontSizes.xl};
  color: ${props => props.theme.colors.textPrimary};
  z-index: ${props => props.theme.zIndex.high};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`

export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing['5xl']} ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  z-index: ${props => props.theme.zIndex.medium};
`
