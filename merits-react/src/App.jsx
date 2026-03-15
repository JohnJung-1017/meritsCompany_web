import { useEffect, useRef, useState } from 'react'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import FeaturesPage from './components/pages/FeaturesPage'
import GalleryPage from './components/pages/GalleryPage'
import HomePage from './components/pages/HomePage'
import ResourcesPage from './components/pages/ResourcesPage'
import TechnologyPage from './components/pages/TechnologyPage'
import './App.css'

function App() {
  const containerRef = useRef(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [targetSection, setTargetSection] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHomeHeroActive, setIsHomeHeroActive] = useState(false)

  useEffect(() => {
    let attempts = 0

    const renderIcons = () => {
      if (window.lucide?.createIcons) {
        window.lucide.createIcons()
        return
      }

      if (attempts < 20) {
        attempts += 1
        setTimeout(renderIcons, 100)
      }
    }

    renderIcons()
  }, [])

  useEffect(() => {
    setIsHomeHeroActive(currentPage === 'home')
  }, [currentPage])

  useEffect(() => {
    const root = containerRef.current
    if (!root) {
      return
    }

    const pages = root.querySelectorAll('.page-section')
    pages.forEach((page) => {
      page.classList.add('hidden')
      page.classList.remove('fade-in')
    })

    const selectedPage = root.querySelector(`#page-${currentPage}`)
    if (selectedPage) {
      selectedPage.classList.remove('hidden')
      void selectedPage.offsetWidth
      selectedPage.classList.add('fade-in')
    }

    const mobileMenu = root.querySelector('#mobile-menu')
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden', !mobileMenuOpen)
    }

    if (targetSection) {
      const target = root.querySelector(`#${targetSection}`)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    } else {
      window.scrollTo(0, 0)
    }

    if (window.lucide?.createIcons) {
      window.lucide.createIcons()
    }
  }, [currentPage, targetSection, mobileMenuOpen])

  const handleInteraction = (event) => {
    const actionElement = event.target.closest('[data-nav-page], [data-toggle-mobile], a[href="#"]')
    if (!actionElement) {
      return
    }

    if (actionElement.matches('a[href="#"]')) {
      event.preventDefault()
    }

    if (actionElement.dataset.toggleMobile === 'true') {
      event.preventDefault()
      setMobileMenuOpen((prev) => !prev)
      return
    }

    if (actionElement.dataset.navPage) {
      event.preventDefault()
      setCurrentPage(actionElement.dataset.navPage)
      setTargetSection(actionElement.dataset.navSection || null)
      if (actionElement.dataset.closeMobile === 'true') {
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <div ref={containerRef} onClick={handleInteraction} className="flex min-h-screen flex-col">
      <NavBar isTransparent={currentPage === 'home' && isHomeHeroActive} />
      <main className="flex-grow pt-20">
        <HomePage onHeroVisibilityChange={setIsHomeHeroActive} />
        <AboutPage />
        <FeaturesPage />
        <TechnologyPage />
        <ResourcesPage />
        <GalleryPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
