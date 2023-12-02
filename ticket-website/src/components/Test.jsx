import axios from 'axios';
import React from 'react'


function Test() {

  const baseUrl = process.env.REACT_APP_BASE_URL;

  axios.get(`${baseUrl}api/Event`)
    .then(response => {
      const {data} = response.data
      console.log("Test",data)
    })



  return (
    <div>Test</div>
  )
}

export default Test