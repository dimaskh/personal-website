import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuOverlay = styled(motion.div)`
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

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
`

const MenuLink = styled(Link)`
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

const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`

const MobileMenu = ({ isOpen, onClose, currentPath }) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CloseButton onClick={onClose}>×</CloseButton>
          <MenuLinks>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/cases', label: 'Cases' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }, i) => (
              <motion.div
                key={path}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <MenuLink
                  to={path}
                  className={currentPath === path ? 'active' : ''}
                  onClick={onClose}
                >
                  {label}
                </MenuLink>
              </motion.div>
            ))}
          </MenuLinks>
        </MenuOverlay>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
