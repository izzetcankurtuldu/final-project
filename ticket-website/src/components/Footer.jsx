import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
      <h4>TICKET APP © All Rights Reserved</h4>
      <ul>
        <li><h5>FAQ</h5></li>
        <li><h5>Contact Us</h5></li>
        <li><h5>Privacy</h5></li>
        <li><h5>Help</h5></li>
        <li><h5>Cookies</h5></li>
        <li><h5>Legal</h5></li>
        <li><h5>Terms & Conditions</h5></li>
      </ul>
      <div className='socialMediaIcons'>
        <a target='_blank' href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
        <a target='_blank' href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a target='_blank' href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
        <a target='_blank' href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>

    </div>
  )
}

export default Footer