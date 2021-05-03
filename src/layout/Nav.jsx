import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../meta/context'

import { NavLink } from 'react-router-dom'
import { FiSun, FiMoon, FiUserMinus } from 'react-icons/fi'

import routes from '../meta/routes'

import '../style/nav.scss'

const NavItem = ({ path, label }) => (
  <NavLink to={path} style={{ textDecoration: 'none' }} activeClassName='nav-item-active' exact>
    <div className='nav-item'>{label}</div>
  </NavLink>
)

const Nav = () => {
  const { setUser } = useContext(GlobalContext)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    let saved = document.documentElement.className.replace('theme-', '')
    saved && setTheme(saved)
  }, [])

  const changeTheme = (e) => {
    setTheme(e)
    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${e}`)
  }

  return (
    <div id='nav' className='gradient-bg'>
      <h3 id='nav-logo'>LOGO</h3>

      <div className='nav-divider' />

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
