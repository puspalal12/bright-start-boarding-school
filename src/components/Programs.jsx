import React, { useEffect } from 'react'
import './Progrms.css'
import program1 from './img/1.jpg'
import program2 from './img/2.jpg'
import program3 from './img/3.jpg'
import { FaPenSquare } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Programs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='programs'>
            <div data-aos="fade-right" className='program'>
                <img src={program1} alt="" />
                <div className="caption">
                    <span className='icon'><FaPenSquare /></span>
                    <p>Pre-School</p>
                </div>
            </div>
            <div data-aos="fade-down"  className='program'>
                <img src={program2} alt="" />
                <div className="caption">
                    <span className='icon'><FaBookOpenReader /></span>
                    <p>Primary School</p>
                </div>
            </div>
            <div data-aos="fade-left" className='program'>
                <img src={program3} alt="" />
                <div className="caption">
                    <span className='icon'><IoSchoolSharp /></span>
                    <p>Secondary School</p>
                </div>
            </div>
        </div>
    )
}

export default Programs