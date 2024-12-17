import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Cases from './pages/Cases'
import Contact from './pages/Contact'
import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
