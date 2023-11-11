import React, { useState } from "react";
import Data from '../Data.json';

function HomePage() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='container'>
      <h1>Activities</h1>
      <div className='inputContainer'>
        <input className='search' type="text" placeholder="Enter an Activity Name..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

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

                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>

                </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default HomePage;