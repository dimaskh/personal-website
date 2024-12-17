import { motion, AnimatePresence } from 'framer-motion'
import {
  MenuOverlay,
  MenuLinks,
  MenuLink,
  CloseButton
} from './MobileMenu.styles'

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

const MobileMenu = ({ isOpen, onClose, currentPath }) => {
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
