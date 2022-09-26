import React, {useState} from 'react'
import '../styles/InputCity.css';
import axios from 'axios';
import urlAPI from '../API';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


// const form = [
//     { name: ' City Name:', type: 'text', className: 'Input-NewCity flex-center' },
//     { name: ' Country Name:', type: 'text', className: 'Input-NewCity flex-center' },
//     { name: ' Photo URL:', type: 'url', className: 'Input-NewCity  flex-center' },
//     { name: ' Population Number:', type: 'number', className: 'Input-NewCity flex-center' },
//     { name: ' Foundation Date:', type: 'date', className: 'Input-NewCity flex-center' },
//     { name: ' Description:', type: 'text', className: 'Input-NewCity flex-center' },
//     { type: 'submit', className: 'button-NewCity flex-center', value: 'Send' },
// ]

// const inputs = (inputCity) =>
//     <label className='text-light col text-indent'>{inputCity.name}
//         <input type={inputCity.type} className={inputCity.className} cols={inputCity.cols} rows={inputCity.rows} value={inputCity.value}></input></label>

export default function InputNewCity({ city }) {
    const [editedCity, setEditedCity] = useState({
        city: '', 
        country: '',
        photo: '',
        population: '',
        foundation: '',
        description: ''
    })
    const navigate = useNavigate()

    const inputHandler = (e) => {
        setEditedCity ({
            ...editedCity, //los 3 puntos hace que se guarde el dato que se actualizo y no se borre (spread operator)
            [e.target.name]:e.target.value //valores del objeto ya definidos / valores nuevos 
        })
    }
    const editCity = async () => {
        //.some se encarga de que esten completos todos los campos para editar la ciudad o crear (en este caso)
        try {
            if (Object.values(editedCity).some((value) => !value)) {
                return toast.error('You need to complete all fields', {position: "bottom-right"})
            }
            const response = await axios.patch(urlAPI + `/cities/${city._id}`, editedCity)
            console.log(response);
            if (response.data.success) {
                toast.success(`City modified!`, {position: "bottom-right"})
                navigate('/cities')
            }
        } catch (error) {
            console.log(error);
        }
    }
    
console.log(editedCity);
    return (
        <>
            <label className='text-light col text-indent'>City Name:
                <input type='text' name='city' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.city}></input></label>
            <label className='text-light col text-indent'>Country Name:
                <input type='text' name='country' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.country}></input></label>
            <label className='text-light col text-indent'>Photo URL:
                <input type='url' name='photo' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.photo}></input></label>
            <label className='text-light col text-indent'>Population:
                <input type='number' name='population' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.population}></input></label>
            <label className='text-light col text-indent'>Foundation Date:
                <input type='date' name='foundation' className='Input-NewCity flex-center' onChange={inputHandler}  placeholder={city.foundation}></input></label>
            <label className='text-light col text-indent'>Description:
                <textarea type='text' name='description' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.description}></textarea></label>
                <button className= 'button-NewCity flex-center' onClick={editCity} >Send</button>
        </>
    )
}