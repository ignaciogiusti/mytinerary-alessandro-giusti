import urlAPI from '../API';
import '../styles/CityDetails.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Itinerary from '../components/Itinerary';
import Activities from '../components/Activities'


export default function CityDetails() {
  const [city, setCity] = useState({})
  const params = useParams()
  const { id } = params
  const navigate = useNavigate();

  const getCity = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/cities/${id}`)

      if (response.data.success) {
        return setCity(response.data.response)
      }
      throw new Error("An error ocurred")
    } catch (error) {
      return console.log(error.message)
    }
  }

  // console.log(city)

  useEffect(() => {
    getCity()
  }, [])

  return (
    <>
      <div className='Main-Details col justify-center space-evenly'>
        <div className='Details-Container col'>  
        <img className="City-img" src={city.photo} />
          <h3 className='text-center Details-text'>{city.city} - {city.country}</h3>
          <p>{city.description}</p>
          <p><span className='text-bold'>Founded:</span> {city.foundation}</p>
          <p><span className='text-bold'>Population:</span> {city.population}</p>
        </div>
        <Itinerary />
        {/* //la funcion flecha es ejecutar al ser click */}
        { <button className='backbutton' onClick={() => navigate(-1)}>Back to Cities</button>}
      </div>
    </>
  )
}