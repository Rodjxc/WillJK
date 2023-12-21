import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";


export const Navbar = () => {
  return (
    <div>
        <div className="container-header">
          <div className='avatar'>
          <NavLink 
          to="/home"
          >
            <img src="/images/Avatar.svg" alt="avatar" />
          </NavLink>

          </div>
         
         
      <nav>
        <div className="logo">
          <h3 className='logo-willliam'>William JK </h3>
          <h3 className='logo-japo'>彫ウィル</h3>
          <p>Oslo based tattoo artist</p>
        </div>
        <div className='links'>
        <ul>
           <li>
            <NavLink
              to="/tattoo"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tattoo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/art"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Art
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="icon">
              <a  href="https://www.instagram.com/williamjuaska.tattoo/" target="blank">
              <FontAwesomeIcon icon={faSquareInstagram} size="3x"/>
               </a>
          </div>
        
      </nav>
    </div>
    </div>
  )
}