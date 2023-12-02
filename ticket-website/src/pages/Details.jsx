import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import GoogleMaps from '../components/GoogleMaps';
import eventApi from '../api/modules/event.api';


const Details = () => {

  const { id } = useParams();

  const [event, setEvent] = useState();
  const [response, setResponse] = useState();

  const getEventDetail = async (id) =>{
    await eventApi.getEventById(id)
      .then(({response}) => {
        setEvent(response.data)
        setResponse(response)
      })
  }

  useEffect(() => {
    getEventDetail(id)
  }, [id])
  

  return (
    response ? 
    (<>
      <Header/>
      <div className='cardDetails'>
        <h2>Details for Activity {id}</h2>
        <div>
          <p>{event.name}</p>
        </div>
      </div>
      <GoogleMaps iframeData={event?.venue.googleMapsSrc}/>
    </>
    ) :
    (<div>Loading...</div>)
  
)}
export default Details;