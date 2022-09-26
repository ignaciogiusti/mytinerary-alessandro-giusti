import '../styles/InputCity.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import urlAPI from '../API'

export default function NewCity() {
  const [newCity, setNewCity] = useState({
    city: '',
    country: '',
    photo: '',
    population: '',
    foundation: '',
    description: ''
  })
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setNewCity({
      ...newCity, //los 3 puntos hace que se guarde el dato que se actualizo y no se borre (spread operator)
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async () => {
    try {
        if (Object.values(newCity).some((value) => !value)) {
            return toast.error('You need to complete all fields', {position: "bottom-right"})
        }
        const response = await axios.post(urlAPI + `/cities/`, newCity)
        console.log(response);
        if (response.data.success) {
          toast.success(`New City created!`, {position: "bottom-right"})
            navigate('/cities')
        }
    } catch (error) {
        console.log(error);
    }
}


  return (
    <div className="Main-NewCity">
      <div className="Form-NewCity">
        <h1 className="text-light">Add a City here!</h1>
        {/* <InputCity /> */}
        <label className='text-light col text-indent'>City Name:
          <input type='text' name='city' className='Input-NewCity flex-center' onChange={inputHandler}></input></label>
        <label className='text-light col text-indent'>Country Name:
          <input type='text' name='country' className='Input-NewCity flex-center' onChange={inputHandler}></input></label>
        <label className='text-light col text-indent'>Photo URL:
          <input type='url' name='photo' className='Input-NewCity flex-center' onChange={inputHandler}></input></label>
        <label className='text-light col text-indent'>Population:
          <input type='number' name='population' className='Input-NewCity flex-center' onChange={inputHandler}></input></label>
        <label className='text-light col text-indent'>Foundation Date:
          <input type='date' name='foundation' className='Input-NewCity flex-center' onChange={inputHandler} ></input></label>
        <label className='text-light col text-indent'>Description:
          <textarea type='text' name='description' className='Input-NewCity flex-center' onChange={inputHandler}></textarea></label>
        <button className='button-NewCity flex-center' onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}
