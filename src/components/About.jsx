import React, { useEffect } from 'react'
import './About.css'
import about_img from './img/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className='about'>
            <div className="about-left">
                <img data-aos="fade-right" data-aos-duration="1500" src={about_img} alt="" className='about-img' />
            </div>
            <div className="about-right">
                {/* <h3 data-aos="fade-up-right">About School</h3>
                <h2 data-aos="fade-up-left">Achieving Excellence Together</h2> <hr /> */}
                <p data-aos="fade-left">It is the aim of Bright Star Boarding School to provide quality education that every student deserves.
                    We,at Bright Star Boarding School,appreciate diversity and realize that each student is different
                    and should be treated as an unique individual. Our constant endeavor is to help each student realiz his/her
                    fill potential and discover new horizons in learning.
                </p>
                <p data-aos="fade-left">
                    We believe in bringing out the best in our students so that they can rise to the top ever empowered by a belief 
                    in unlimited human potential. At Bright Star Boarding School, creativity is nurtured, with learners being treated as just 
                    learners, imbued with a passion for knowledge and discovery, and not as rote machines.
                </p>
                <p data-aos="fade-left">
                In terms of overall academic orientation, we place a pronounced emphasis on Science, Technology, English/Engineering, 
                Arts, and Mathematics (STEAM), along with other domains critical to overall academic achievement and sustained 
                academic excellence.
                </p>
            </div>
        </div>
    )
}

export default About