import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import GoogleMaps from '../components/GoogleMaps';


const Details = () => {

  const { id } = useParams();

  const [event, setEvent] = useState(null);

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

  if (!event) {
    return <div>Loading...</div>;
  }

  return (<>
  <Header/>
    <div className='cardDetails'>
      <h2>Details for Activity {id}</h2>
      <div>
        <p>{event.name}</p>
      </div>
    </div>
    <GoogleMaps/>
  </>
  );
};
export default Details;