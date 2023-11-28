import React from 'react'

function GoogleMaps() {
  return (
    <div>
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200065.48497194215!2d26.914910063127323!3d38.41782866394401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1701179592428!5m2!1str!2str"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Responsive Google Map">
        </iframe>
      </div>
    </div>
  )
}

export default GoogleMaps