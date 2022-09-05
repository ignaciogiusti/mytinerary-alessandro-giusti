import CityCard from '../components/CityCard';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link as LinkRouter } from 'react-router-dom';

// El onChange es una función de tipo "escuchador" que se va a actualizar cada vez que el input cambie

export default function Cities() {
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getAllCities()
    }, [search])

    const getAllCities = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/cities/?search=${search}`)
            setCities(response.data.response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className='Main-Cities'>
                <div className='Search-Cities'>
                    <input className='Input-Cities' type="text" name="" placeholder=' Search by city...' onChange={(event) => {setSearch(event.target.value)}} />
                </div>
                <div className='citiesPageContainer'>
                {cities?.map((city) => (
                    <LinkRouter className='decoration-none flex-center' key={city._id} to={`/citydetails/${city._id}`}>
                        <div className='City-container'>
                            <img className="City-img" src={city.photo} />
                            <h3 className='City-text text-center'>{city.city}</h3>
                        </div>
                    </LinkRouter>
                ))}
            </div>
            </div>
        </>
    )
}
