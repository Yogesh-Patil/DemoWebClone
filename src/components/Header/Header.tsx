import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/images/logo.svg'

export default function Header(){
  return (
    <header className='site-header'>
      <div className='container header-inner'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/vision'>Founder's Vision</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='cta'>
          <a className='btn primary' href='#'>Start Your First Audit</a>
        </div>
      </div>
    </header>
  )
}
