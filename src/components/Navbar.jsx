import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './img/bs-logo1.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>home</Link></li>
        <li><Link to='programs' smooth={true} offset={-270} duration={500}>programs</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>about us</Link></li>
        <li><Link to='slider' smooth={true} offset={-210} duration={500}>gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-210} duration={500}>testimonials</Link></li>
        <li  className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar