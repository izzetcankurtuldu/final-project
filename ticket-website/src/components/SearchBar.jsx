import React, { useState } from "react";
import Data from '../Data.json';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");

  return (<>

      <div>
        <input className='searchInput' type="text" placeholder="Search an Activity..."
          onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      
      {/* 
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
    */}
  </>
  );
}

export default SearchBar