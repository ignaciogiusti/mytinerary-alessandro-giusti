import React, {useState} from 'react'
import '../styles/InputCity.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
            [e.target.name]:e.target.value
        })
    }
    const editCity = async () => {
        try {
            if (Object.values(editedCity).some((value) => !value)) {
                return alert('you must complete all the fields')  
            }
            const response = await axios.patch(`http://localhost:4000/cities/${city._id}`, editedCity)
            console.log(response);
            if (response.data.success) {
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
            <label className='text-light col text-indent'>Population Name:
                <input type='number' name='population' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.population}></input></label>
            <label className='text-light col text-indent'>Foundation Date:
                <input type='date' name='foundation' className='Input-NewCity flex-center' onChange={inputHandler}  placeholder={city.foundation}></input></label>
            <label className='text-light col text-indent'>Description:
                <textarea type='text' name='description' className='Input-NewCity flex-center' onChange={inputHandler} placeholder={city.description}></textarea></label>
                <button className= 'button-NewCity flex-center' onClick={editCity} >Send</button>
        </>
    )
}