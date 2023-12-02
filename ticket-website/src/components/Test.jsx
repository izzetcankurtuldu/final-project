import React from 'react'
import eventApi from '../api/modules/event.api';
import { useEffect } from 'react';


function Test() {

  const get = async () =>{
    eventApi.getEvents()
      .then(response => {
        console.log(response);
      })
  }
  
  useEffect(() => {
    get()
  }, [])

  return (
    <div>Test</div>
  )
}

export default Test