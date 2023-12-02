import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from '../Data.json';


function Card() {

  const [allActivities, setAllActivities] = useState(Data);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handleFilterClick = () => {
    const filteredActivities = allActivities.filter(activity => (
      (!selectedDate || activity.date === selectedDate) &&
      (!selectedCity || activity.city === selectedCity) &&
      (!selectedCategory || activity.category === selectedCategory)
    ));

    setFilteredActivities(filteredActivities);
  };

  // Use useEffect to trigger filtering when any of the filter criteria changes
  useEffect(() => {
    handleFilterClick();
  }, [selectedDate, selectedCity, selectedCategory]);

  const uniqueCities = [...new Set(allActivities.map(activity => activity.city))];
  const uniquecategorys = [...new Set(allActivities.map(activity => activity.category))];

  const handleClearFiltersClick = () => {
    // Reset filter options to their initial state
    setSelectedDate(null);
    setSelectedCity('');
    setSelectedCategory('');
    // Reset filtered activities to all activities
    setFilteredActivities(allActivities);
  };


  return (<>
    <div className='container'>
      
      <div className="filterBar">

        <label>Şehir:</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>Seç</option>

          {uniqueCities.map((city) => (
            <option value={city} key={city}>{city}</option>
          ))}

        </select>

        <label>Kategori:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Seç</option>
          {uniquecategorys.map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>

        <label>Tarih:</label>
        <input className="dateInput"
          type="date"
          value={selectedDate || ''}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <button className="resetButton" onClick={handleClearFiltersClick}>Filtreleri Temizle</button>

      </div>

      <div className='dataContainer'>
        {

          filteredActivities
            .map((val) => {

              return (
                <div className="data" key={val.id}>

                  <Link key={val.id} to={`/details/${val.id}`}><img src={val.image} /></Link>
                  <h5>{val.title}</h5>
                  <p>{val.category}</p>
                  <p>{val.date}</p>
                  <p>{val.city}</p>
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