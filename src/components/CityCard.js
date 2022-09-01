import '../styles/Cities.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';


export default function Cities() {
    const [cities, setCities] = useState([])

    // const cityCard = (itemsMap) => (
    //     <div className='City-container'>
    //         <img className="City-img" src={itemsMap.photo} />
    //         <h3 className='City-text text-center'>{itemsMap.city}</h3>
    //     </div>
    // )
    useEffect(() => {
        axios.get('http://localhost:4000/cities/')
            .then(response => setCities(response.data))
    }, [])

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
                {/* <LinkRouter  to={`/city/${city._id}`} className='decoration-none'>{
                    cities.map(cityCard)
                }</LinkRouter> */}
            </div>
        </>
    )
}