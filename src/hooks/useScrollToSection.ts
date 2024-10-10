import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useScrollToSection = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 0)
      }
    }
  }, [location])

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return scrollToSection
}