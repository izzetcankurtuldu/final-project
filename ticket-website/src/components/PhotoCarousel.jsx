import React from 'react'
import Data from '../Data.json';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const imageWrapperStyle = {
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '0 auto', 
  width: 'auto'
};

const imageStyle = {
  width: '1000px',
  height: '500px',
  objectFit: 'fill',
  borderRadius: '10px',
  margin: 'auto',

};

function PhotoCarousel() {

  const [event, setEvent] = useState(Data);

  const { id } = useParams();

/*
 useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`https://northwind.vercel.app/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setEvent(data);
        } else {
          throw new Error('Error fetching event');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [id]);
*/

  if (!event) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots-class',
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 3000, // Otomatik oynatma hızı (ms cinsinden)
  };

  return (
    <div className='carousel'>
    <Slider {...settings}>
      {event.map((item) => (
        <div key={item.image} style={imageWrapperStyle}>
          
          <Link key={item.id} to={`/details/${item.id}`}>
            <img
              style={imageStyle}
              src={item.image}
              alt=""
            />
          </Link>

        </div>
      ))}
    </Slider>
  </div>
  )
}

export default PhotoCarousel