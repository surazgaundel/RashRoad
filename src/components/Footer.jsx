import React from 'react'
import {navData,SocialLink} from '../data/Data';

export default function Footer() {
  return (
    <>
        <footer className="section footer">
      <ul className="footer-links">
      {navData.map(data=>{
          return(<li key={data.id}>
            <a  href={data.href} className="footer-link">{data.text} </a>
          </li>)
          })}
      </ul>
      <ul className="footer-icons">
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
      <p className="copyright">
        copyright &copy; Rashroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  )
}
