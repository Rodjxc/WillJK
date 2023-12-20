import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <header className="header">
      <nav>
        <div className="logo">
          <h3>William JK</h3>
          <h3>彫ウィル</h3>
        </div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          {/*<li>
             <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
            </li>*/}
          <li>
            <NavLink
              to="/cv"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CV
            </NavLink>
          </li>
        
        </ul>
      </nav>
    </header>
    </div>
  )
}
