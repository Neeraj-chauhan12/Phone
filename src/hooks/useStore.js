import { useContext } from 'react'
import { StoreContext } from '../context/store'

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used inside a StoreProvider')
  }
  return context
}
