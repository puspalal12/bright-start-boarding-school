import React, { useEffect } from 'react'
import './Title.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Title = ({subtitle,title}) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="zoom-in" className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title