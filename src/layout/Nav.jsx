import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { FiSun, FiMoon, FiUser } from 'react-icons/fi'

import '../style/nav.scss'

const NavItem = ({ path, text }) => (
  <NavLink to={path} style={{ textDecoration: 'none' }} activeClassName='nav-item-active' exact>
    <div className='nav-item'>{text}</div>
  </NavLink>
)

const Nav = () => {
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

      <NavItem path='' text='Dashboard' />
      <NavItem path='calendar' text='Calendar' />
      <NavItem path='clients' text='Clients' />

      <div className='nav-item-right nav-divider' />

      <div className='nav-item nav-icon' onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </div>

      <div className='nav-item nav-icon'>
        <FiUser />
      </div>
    </div>
  )
}

export default Nav
