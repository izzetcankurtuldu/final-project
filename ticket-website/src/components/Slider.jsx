
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"

function Slider({ slides }) {
  return (<>
    <Carousel className='carousel'>
      {slides.map((slide) => (
        <Carousel.Item className='carouselItem' key={slide.image}>
          <img src={slide.image} alt='First Slide' />
          <Carousel.Caption>
            <h3 style={{color:'green'}}>{slide.title}</h3>
            <p style={{color:'green'}}>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </>
  );
}

export default Slider
