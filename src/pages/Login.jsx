import { useContext } from 'react'
import { GlobalContext } from '../meta/context'

import { Redirect } from 'react-router-dom'

import '../style/login.scss'

export default () => {
  const { user, setUser } = useContext(GlobalContext)

  if (user) return <Redirect to='/' />
  return (
    <div id='login-page' className='flex-center gradient-bg'>
      <h1 onClick={() => setUser(true)}>Login</h1>
    </div>
  )
}
