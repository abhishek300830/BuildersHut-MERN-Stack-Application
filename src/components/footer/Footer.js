import React from 'react'
import { FooterDiv } from './footerStyle'
import icon from '../../images/favicon/builder-logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterDiv>
      <NavLink to="/">
        <img src={icon} alt="" />
      </NavLink>
        <h2>BUILDER's HUT</h2>
        <p>
        {/* <i className="fa-brands fa-linkedin"></i> */}
          <span>follow us on</span>
          <i className="fa-sharp fa-solid fa-envelope"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
        </p>
    </FooterDiv>
  )
}

export default Footer