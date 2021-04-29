import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { FiSun, FiMoon } from 'react-icons/fi'

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
      <NavItem path='' text='Dashboard' />
      <NavItem path='calendar' text='Calendar' />
      <NavItem path='clients' text='Clients' />

      <div className='nav-item theme-toggle' onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </div>
    </div>
  )
}

export default Nav
