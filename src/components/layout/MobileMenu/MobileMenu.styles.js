import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.xl};
`

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
`

export const MenuLink = styled(Link)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`
