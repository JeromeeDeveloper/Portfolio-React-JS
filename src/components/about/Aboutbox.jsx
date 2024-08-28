import React from 'react'

const Aboutbox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">

            <i className="about__icon icon-check">

            </i>
<div>
            <h3 className="about__title">2</h3>
            <span className="about__subtitle">Project Completed</span>
            </div>
        </div>

        <div className="about__box">

            <i className="about__icon icon-wrench">

            </i>
<div>
            <h3 className="about__title">2</h3>
            <span className="about__subtitle">Ongoing Project</span>
            </div>
        </div>

        <div className="about__box">

            <i className="about__icon icon-fire icon-note">

            </i>
    <div>
            <h3 className="about__title">1</h3>
            <span className="about__subtitle">Planned Project</span>
            </div>
        </div>

        <div className="about__box">

            <i className="about__icon icon-fire icon-link">

            </i>

            <div>

            <h3 className="about__title">5</h3>
            <span className="about__subtitle">Stored Repositories</span>
            </div>
           
        </div>

    </div>
  )
}

export default Aboutbox