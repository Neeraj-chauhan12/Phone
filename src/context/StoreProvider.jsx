import { useCallback, useMemo, useState } from 'react'
import { StoreContext } from './store'

export function StoreProvider({ children }) {
  const [cart, setCart] = useState({})
  const [favorites, setFavorites] = useState([])
  const [notice, setNotice] = useState('')

  const addToCart = useCallback((product) => {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + 1 }))
    setNotice(`${product.name} added to your bag`)
    window.setTimeout(() => setNotice(''), 2400)
  }, [])

  const changeQuantity = useCallback((productId, amount) => {
    setCart((current) => {
      const quantity = (current[productId] || 0) + amount
      if (quantity <= 0) {
        const next = { ...current }
        delete next[productId]
        return next
      }
      return { ...current, [productId]: quantity }
    })
  }, [])

  const toggleFavorite = useCallback((productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }, [])

  const value = useMemo(
    () => ({ cart, favorites, notice, addToCart, changeQuantity, toggleFavorite, setNotice }),
    [cart, favorites, notice, addToCart, changeQuantity, toggleFavorite],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
