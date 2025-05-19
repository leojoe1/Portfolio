import { useEffect, useState } from 'react'

function ScrollIndicator() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setWidth((scrolled / docHeight) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-200" style={{ width: `${width}%` }} />
  )
}

export default ScrollIndicator
