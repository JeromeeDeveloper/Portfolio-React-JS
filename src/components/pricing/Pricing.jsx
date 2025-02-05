import React from 'react';
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

const Pricing = () => {
  return (
    <section className="pricing container section" id='pricing'>
      <h2 className="section__title">Pricing Plans</h2>

      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className='pricing__img'/>
          <h3 className="pricing__plan">Basic Plan</h3>
          <p className="pricing__title">Ideal for individuals or small projects, offering essential features.</p>
          <p className="pricing__support">Email support</p>
          <h3 className="price">
            <em>₱</em> 29 <span> Month</span>
          </h3>
          <a href="#" className="btn">Get Started</a>
        </div>

        <div className="pricing__item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className='pricing__img'/>
          <h3 className="pricing__plan">Standard Plan</h3>
          <p className="pricing__title">fect for growing businesses with additional features and support.</p>
          <p className="pricing__support">Priority support</p>
          <h3 className="price">
            <em>₱</em> 49 <span> Month</span>
          </h3>
          <a href="#" className="btn">Get Started</a>
        </div>

        <div className="pricing__item">
          <img src={Image3} alt="" className='pricing__img'/>
          <h3 className="pricing__plan">Premium Plan</h3>
          <p className="pricing__title">Comprehensive package with all features and dedicated support.</p>
          <p className="pricing__support">24/7 support</p>
          <h3 className="price">
            <em>₱</em> 99 <span> Month</span>
          </h3>
          <a href="#" className="btn">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
