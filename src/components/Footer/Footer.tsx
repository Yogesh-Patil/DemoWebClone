import React from 'react'
import './Footer.scss'

export default function Footer(){
  return (
    <footer className='site-footer'>
      <div className='container footer-inner'>
        <div>© {new Date().getFullYear()} DemoSomeClone Clone — built with ❤️</div>
        <div className='links'>
          <a href='#'>Privacy</a>
          <a href='#'>Terms</a>
        </div>
      </div>
    </footer>
  )
}
