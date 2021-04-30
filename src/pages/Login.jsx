import { useContext } from 'react'
import { GlobalContext } from '../layout/context'

import { Redirect } from 'react-router-dom'

export default () => {
  const { user, setUser } = useContext(GlobalContext)

  if (user) return <Redirect to='/' />
  return <h1 onClick={() => setUser(true)}>Login</h1>
}
