import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eventApi from "../api/modules/event.api";

function Card() {

  const [allActivities, setAllActivities] = useState();
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  useEffect(() => {
    const get = async () =>{
      await eventApi.getEvents()
        .then(({response}) => {
          if(response.success)
          {
            setAllActivities(response.data)
            setFilteredActivities(response.data)
            
            console.log(response.data);
          }
        })
    }
    get()
  }, [])
  

  const handleFilterClick = () => {
    const filteredActivities = allActivities?.filter(activity => (
      (!selectedDate || activity.startDate > selectedDate > activity.endDate) &&
      (!selectedCity || activity.venue.province === selectedCity) &&
      (!selectedCategory || activity.category.categoryName === selectedCategory)
    ));

    setFilteredActivities(filteredActivities);
  };

  // Use useEffect to trigger filtering when any of the filter criteria changes
  useEffect(() => {
    handleFilterClick();
  }, [selectedDate, selectedCity, selectedCategory]);

  const uniqueCities = [...new Set(allActivities?.map(activity => activity.venue.province))];
  const uniqueCategories = [...new Set(allActivities?.map(activity => activity.category.categoryName))];

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

          {uniqueCities?.map((city, key) => (
            <option value={city} key={key}>{city}</option>
          ))}

        </select>

        <label>Kategori:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Seç</option>
          {uniqueCategories?.map((category, key) => (
            <option value={category} key={key}>{category}</option>
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
          filteredActivities?.map((val, key) => {
            return (
              <div className="data" key={key}>
                <Link to={`/details/${val.id}`}><img src={val.images[key]?.imageUrl} alt="resim.jpg" /></Link>
                <h5>{val.name}</h5>
                <p>{val.category?.categoryName}</p>
                <p>{val.startDate}</p>
                <p>{val.venue?.province}</p>
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