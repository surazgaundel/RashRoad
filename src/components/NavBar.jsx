import React from 'react'
import logo from '../images/logo.svg';
import {navData,SocialLink} from '../data/Data';

export default function NavBar() {
  return (
    <>
       <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {navData.map(data=>{
          return(<li key={data.id}>
            <a  href={data.href} className="nav-link">{data.text} </a>
          </li>)
          })}
          </ul>
        <ul className="nav-icons">
        {SocialLink.map(data=>{
          return(
          <li key={data.id}>
            <a href={data.href} target="_blank" className="footer-icon" rel="noreferrer"
              ><i className={data.icon}></i
            ></a>
          </li>
          )
        })}
        </ul>
      </div>
    </nav>
    </>
  )
}
