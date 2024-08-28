import React from 'react'
import "./blog.css";
import Image1 from "../../assets/laravel1.jpg";
import Image2 from "../../assets/portfolioreact.png";
import Image3 from "../../assets/CIMS.png";

const Blog = () => {
  return (
   <section className="blog container section" id="blog">
    <h2 className="section__title">Latest Posts</h2>

    <div className="blog__container grid">
      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">Recent</span></a>
          <a href="#"><img src={Image1} alt="" className='blog__img'/></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">GMS Development</h3>
          <div className="blog__meta">
            <span>May 2, 2024</span>
            <span className="blog__dot">.</span>
            <span>Jerome</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">Recent</span></a>
          <a href="#"><img src={Image2} alt="" className='blog__img'/></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Portfolio</h3>
          <div className="blog__meta">
            <span>August 28, 2024</span>
            <span className="blog__dot">.</span>
            <span>Jerome</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">Recent</span></a>
          <a href="#"><img src={Image3} alt="" className='blog__img'/></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">CIMS</h3>
          <div className="blog__meta">
            <span>December 16, 2023</span>
            <span className="blog__dot">.</span>
            <span>Jerome</span>
          </div>
        </div>
      </div>

    </div>
   </section>
  )
}

export default Blog