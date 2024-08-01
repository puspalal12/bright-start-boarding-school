import React, { useEffect } from 'react'
import './Hero.css'
import { VscArrowRight } from "react-icons/vsc";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='hero container'>
            <div data-aos="fade-up" className="hero-text">
                <h1>Make better future for your lovely kids</h1>
                <p>We just don't give our students only lecture but real life experiment,workshops,expert mentor,weekly examinations and others.</p>
                <button className='btn'>Explore more <VscArrowRight />
 </button>
            </div>
        </div>
    )
}

export default Hero