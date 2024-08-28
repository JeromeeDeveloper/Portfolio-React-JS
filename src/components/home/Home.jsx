import React from 'react'
import "./home.css";
import Me from "../../assets/profile.png"
import Headersocials from './Headersocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className='home container' id='home'>
    <div className="intro">
      <img src={Me} alt="" className='home__img' />
      <h1 className="home__name">Jerome Porcado</h1>
      <span className="home__education">I'm a Web Developer</span>

      <Headersocials/>

      <a href="#contact" className="btn">Hire Me</a>

      <Scrolldown />
    </div>

    <Shapes />
   </section>
  )
}

export default Home