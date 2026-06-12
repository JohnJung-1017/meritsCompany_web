import { useEffect, useRef, useState } from 'react'
import { createIcons, icons } from 'lucide'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import { CO01AA01M } from './components/pages/co01/CO01AA01M'
import { CT01AA01M } from './components/pages/ct01/CT01AA01M'
import { WB01AA01M } from './components/pages/wb01/WB01AA01M'
import { GA01AA01M } from './components/pages/ga01/GA01AA01M'
import { MP01AA01M } from './components/pages/mp01/MP01AA01M'
import { RS01AA01M } from './components/pages/rs01/RS01AA01M'
import { TE01AA01M } from './components/pages/te01/TE01AA01M'
import './App.css'

function App() {
  const containerRef = useRef(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [targetSection, setTargetSection] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHomeHeroActive, setIsHomeHeroActive] = useState(false)

  useEffect(() => {
    createIcons({ icons })
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

    createIcons({ icons })
  }, [currentPage, targetSection])

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
      <NavBar isTransparent={currentPage === 'home' && isHomeHeroActive} mobileMenuOpen={mobileMenuOpen} />
      <main className="flex-grow pt-20">
        <MP01AA01M onHeroVisibilityChange={setIsHomeHeroActive} />
        <CO01AA01M />
        <WB01AA01M />
        <TE01AA01M />
        <RS01AA01M />
        <GA01AA01M />
        <CT01AA01M />
      </main>
      <Footer />
    </div>
  )
}

export default App
