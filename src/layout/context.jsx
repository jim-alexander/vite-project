import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

const { Provider } = GlobalContext

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null) //default = null

  useEffect(() => {
    setUser(true)
  }, [])

  return <Provider value={{ user, setUser }}>{children}</Provider>
}
