import React, { useRef, useEffect } from 'react'
import './Testimonials.css'
import { CgChevronRight } from "react-icons/cg";
import { CgChevronLeft } from "react-icons/cg";
import u1 from './img/uu1.jpg'
import u2 from './img/uu2.jpg'
import u3 from './img/uu3.jpg'
import u4 from './img/uu4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const slider = useRef();
  let tx = 25;

  const slideForward = () => {
    if (tx > -25) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }
  const slideBackward = () => {
    if (tx <= -25) {
      tx += 25;
    }
    else if (tx === 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;


  }

  return (
    <div className='testimonials'>
      <span className='back-btn' onClick={slideBackward}><CgChevronLeft /></span>
      <span className='next-btn' onClick={slideForward}><CgChevronRight /></span>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u1} alt="" />
                <div>
                  <h3>Sanjay Shah</h3>
                  <span>Teacher</span>
                </div>
              </div>
              <p>My experience here was amazing from the first moment
                I went into the school. Honestly, it's more than just a school.
                It is the perfect place to study, make new friends and always
                feel happy. The staff is great, there are a lot of activities
                and excursions you can do that will make your stay here just wonderful.
                Thank you for everything.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u2} alt="" />
                <div>
                  <h3>Santosh Shah</h3>
                  <span>Australian Cricket</span>
                </div>
              </div>
              <p>I would recommend this school to anyone as it is very familiar and I felt really comfortable after the first few days. The teachers and canteen team make the difference and are so encouraging! The exam preparation course is efficient and helps a lot to improve the weak parts. I learnt new things every day.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u3} alt="" />
                <div>
                  <h3>Puspalal Chaudhary</h3>
                  <span>Web Developer</span>
                </div>
              </div>
              <p>I would like to extend my sincere thanks and appreciation to all those who are working for this wonderful school. Whether teachers, administrators or other service providers, all of them have been working hard for you to provide comfort and a good atmosphere for studying. In fact I never felt alienated in this country and this school. I wish you luck and success.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u4} alt="" />
                <div>
                  <h3>Bhuwan Chaudhary</h3>
                  <span>Engineer</span>
                </div>
              </div>
              <p>There is something here that is indescribable, you will carry it with you forever.</p>
            </div>
          </li>

        </ul>
      </div>

      {/* mobile-testimonial */}
      <div className="mob-testimonial">
        {/* student-1 */}
        <div data-aos="fade-up" className="student">
          <div className="student-name">
            <img src={u1} alt="" />
            <div className="student-title">
              <h3>Sanjay Shah</h3>
              <span>Teacher</span>
              <hr />
            </div>
            <div className="student-msg">
              <p>My experience here was amazing from the first moment
                I went into the school. Honestly, it's more than just a school.
                It is the perfect place to study, make new friends and always
                feel happy. The staff is great, there are a lot of activities
                and excursions you can do that will make your stay here just wonderful.
                Thank you for everything.</p>
                <hr />
            </div>
          </div>
        </div>

        {/* student-2 */}

        <div data-aos="fade-up" className="student">
          <div className="student-name">
            <img src={u2} alt="" />
            <div className="student-title">
              <h3>Santosh Shah</h3>
              <span>Australian Cricket</span>
              <hr />
            </div>
            <div className="student-msg">
              <p>I would recommend this school to anyone as it is very familiar and 
                I felt really comfortable after the first few days. The teachers and 
                canteen team make the difference and are so encouraging! The exam preparation 
                course is efficient and helps a lot to improve the weak parts. I learnt new things every day.</p>
              <hr />
            </div>
          </div>


        </div>

        {/* student-3 */}
        <div data-aos="fade-up" className="student">
          <div className="student-name">
            <img src={u3} alt="" />
            <div className="student-title">
              <h3>Puspalal Chaudhary</h3>
              <span>Web Developer</span>
              <hr />
            </div>
            <div className="student-msg">
              <p>I would like to extend my sincere thanks and appreciation to all those 
                who are working for this wonderful school. Whether teachers, administrators 
                or other service providers, all of them have been working hard for you to provide 
                comfort and a good atmosphere for studying. In fact I never felt alienated in this 
                country and this school. I wish you luck and success.</p>
              <hr />
            </div>
          </div>

        </div>
        {/* student-4 */}
        <div data-aos="fade-up" className="student">
          <div className="student-name">
            <img src={u4} alt="" />
            <div className="student-title">
              <h3>Bhuwan Chaudhary</h3>
              <span>Engineer</span>
              <hr />
            </div>
            <div className="student-msg">
              <p>There is something here that is indescribable, you will carry it with you forever.</p>
              <hr />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Testimonials