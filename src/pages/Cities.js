// import urlAPI from '../API';
import CityCard from '../components/CityCard';
import React, {useState, useEffect} from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllCitiesQuery } from '../features/citiesAPI';

// El onChange es una función de tipo "escuchador" que se va a actualizar cada vez que el input cambie

export default function Cities() {
    const [search, setSearch] = useState("")

    const {
        data: cities
    } = useGetAllCitiesQuery(search)
    
    return (
        <>
            <div className='Main-Cities'>
                <div className='Search-Cities'>
                    <input className='Input-Cities' type="text" name="" placeholder=' Search by city...' onChange={(event) => {setSearch(event.target.value)}} />
                </div>
                <div className='citiesPageContainer'>
                {cities?.response?.map((city) => (
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
