import { useState, useContext } from 'react'
import { GlobalContext } from './context'

import { NavLink } from 'react-router-dom'

import { FiSun, FiMoon, FiUserMinus } from 'react-icons/fi'

import routes from './routes'

import '../style/nav.scss'

const NavItem = ({ path, label }) => (
  <NavLink to={path} style={{ textDecoration: 'none' }} activeClassName='nav-item-active' exact>
    <div className='nav-item'>{label}</div>
  </NavLink>
)

const Nav = () => {
  const { user, setUser } = useContext(GlobalContext)
  const [theme, setTheme] = useState('light')

  const changeTheme = (e) => {
    setTheme(e)
    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${e}`)
  }

  return (
    <div id='nav'>
      <h3 id='nav-logo'>Logo</h3>

      <div className=' nav-divider' />

      {routes.map(({ nav, ...props }, i) => nav && <NavItem key={i} {...props} />)}

      <div className='nav-item-right nav-divider' />

      <div className='nav-item nav-icon' onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </div>

      <div className='nav-item nav-icon' onClick={() => setUser(false)}>
        <FiUserMinus />
      </div>
    </div>
  )
}

export default Nav
