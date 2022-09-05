import '../styles/Cities.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFromServer } from '../features/citiesSlice';

export default function Cities() {
    // const [cities, setCities] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:4000/cities/')
    //         .then(response => setCities(response.data))
    // }, [])

    let cities = useSelector ( state => state.cities.cities ) //state, reducer y valor dentro del state
    let dispatch = useDispatch ()

    useEffect(() => {
        dispatch(fetchFromServer())
    },[])

    return (
        <>
            <div className='citiesPageContainer'>
                {cities.map((city) => (
                    <LinkRouter key={city._id} to={`/citydetails/${city._id}`}>
                        <div className='City-container'>
                            <img className="City-img" src={city.photo} />
                            <h3 className='City-text text-center'>{city.city}</h3>
                        </div>
                    </LinkRouter>
                ))}
            </div>
        </>
    )
}