import '../styles/CityDetails.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function CityDetails() {
  const [city, setCity] = useState({})

  const params = useParams()
  const {id} = params

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

  console.log(city)

  useEffect(() => {
    getCity()
  }, [])
  

  return (
    <h3>{city.city}</h3>
  )
}