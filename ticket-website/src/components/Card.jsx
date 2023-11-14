import React, { useState } from "react";
import Data from '../Data.json';
import Slider from '../components/Slider'
import slides from '../Data.json';
import FilterBar from '../components/FilterBar'

function Card() {

  const [searchTerm, setSearchTerm] = useState("");

  return (<>

    <div className='container'>
      <h1 style={{color:'green', marginBottom:20}}>TICKET APP</h1>
      <div className='inputContainer'>
        <input className='search' type="text" placeholder="Enter an Activity Name..."
          onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>

      <Slider slides={slides}/>
      <FilterBar/>

      <div className='dataContainer'>
        {

          Data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            }).map((val) => {

              return (
                <div className="data" key={val.id}>

                  <a href="/details"><img src={val.image}/></a>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>

                </div>
              )
            })

        }
      </div>
    </div>
  </>
  );
}

export default Card