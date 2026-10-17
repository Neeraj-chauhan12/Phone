import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import { StoreProvider } from './context/StoreProvider'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ShopPage from './pages/ShopPage'

export default function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </StoreProvider>
  )
}
