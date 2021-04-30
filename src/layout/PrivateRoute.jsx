import { useContext } from 'react'
import { GlobalContext } from './context'

import { Route, Redirect } from 'react-router-dom'

import Nav from './Nav'

export default ({ nav, ...props }) => {
  const { user } = useContext(GlobalContext)

  const Page = () => (
    <>
      {nav && <Nav />}
      <Route {...props} />
    </>
  )

  if (user === null) return <h1>Loading</h1>
  if (user) return <Page />
  else if (user === false) return <Redirect to='/login' />
}
