import React from 'react'
import "./about.css";
import About2 from "../../assets/profile.png"
import Aboutbox from './Aboutbox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img className='about__img' src={About2} alt="" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">A dedicated IT professional with a strong background in full-stack development, web technologies, and database management. Graduating Cum Laude from Mindanao State University and successfully completed projects like a Cemetery Information Management System and a Gym Management System. </p>
            <a href="https://drive.google.com/uc?export=download&id=1JmPrUlFFnU7IqJo6h81QBcpn8Aep0ume" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Laravel</h3>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">WordPress</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React JS</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Aboutbox />

    </section>
  )
}

export default About