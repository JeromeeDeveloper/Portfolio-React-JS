import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';  
import './sidebar.css';
import Logo from '../../assets/logo.png';


const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="icon-wrench"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#pricing" className="nav__link">
                  <i className="icon-credit-card"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#testimonial" className="nav__link">
                  <i className="icon-people"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <i className="icon-rocket"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-phone"></i>
                </a>
              </li>
              <li className="nav__item">
                <Link to="/login" className="nav__link">  {/* Use Link for routing */}
                  <i className="icon-login"></i>  {/* Changed icon to distinguish it */}
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            &copy; 2023 - 2024.
          </span>
        </div>
      </aside>

      <div 
  className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} 
  onClick={() => showMenu(!toggle)}
>
  <i className="icon-menu"></i>
</div>

    </>
  );
};

export default Sidebar;
