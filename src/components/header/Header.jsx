import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h3 className='logo'>Logooo</h3>
        <ul className='navbar'>
          <li className='links'>Home</li>
          <li className='links'>Contact</li>
          <li className='links'>About Us</li>
          <NavLink to={'/login'} className='links'>
            Login
          </NavLink>
        </ul>
      </div>
    </header>
  )
}

export default Header
