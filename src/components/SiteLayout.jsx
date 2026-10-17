import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function SiteLayout() {
  return (
    <div className="site-shell min-h-screen bg-[#fbfaf7] text-[#202b26]">
      <ScrollToTop />
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </div>
  )
}
