import React from 'react'
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";


const data = [
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Specializing in full-stack development, utilizing technologies like HTML, CSS, JavaScript, and Laravel to create dynamic and responsive websites.",
  },
  {
    id: 3,
    image: Image3,
    title: "Video Editing",
    description:
      "Proficient in video editing, crafting engaging content with seamless transitions and effects to enhance storytelling and communication.",
  },
  {
    id: 1,
    image: Image1,
    title: "Figma to Code Conversion",
    description:
      "Skilled in translating Figma designs into clean, efficient code, ensuring accurate and pixel-perfect implementation of UI/UX designs.",
  },
];




const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className='services__img'/>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services