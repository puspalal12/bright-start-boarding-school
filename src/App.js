import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='our program' title='what we offer' /> <hr/>
        <Programs />
        <Title subtitle='about school' title='acheiving excellence together' /> <hr/>
        <About />
        <Title subtitle='Gallery' title='School Photos' /> <hr />
        <Gallery />
        <Title subtitle='Testimonials' title='what student says' /> <hr />
        <Testimonials />
        <Title subtitle='contact us' title='get in touch' /> <hr />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App