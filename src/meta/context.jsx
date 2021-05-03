import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

const { Provider } = GlobalContext

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(true)
  }, [])

  return <Provider value={{ user, setUser }}>{children}</Provider>
}
