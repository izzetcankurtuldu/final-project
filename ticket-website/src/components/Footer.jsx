import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
      <h4>TICKET APP © Tüm Hakları Saklıdır.</h4>
      <ul>
        <li><h5>SSS</h5></li>
        <li><h5>Bize Ulaşın</h5></li>
        <li><h5>Gizlilik</h5></li>
        <li><h5>Yardım</h5></li>
        <li><h5>Çerezler</h5></li>
        <li><h5>Yasal Hükümler</h5></li>
        <li><h5>Kullanım Şartları</h5></li>
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