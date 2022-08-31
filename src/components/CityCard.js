import '../styles/Cities.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';


export default function Cities() {
    const [cities, setCities] = useState([])
    
    // let cities = [
    //     { photo: "/img/buenosAires.jpg", city: "Buenos Aires", country: "Argentina", population: 3081000},
    //     { photo: "/img/rome.jpg", city: "Rome", country: "Italy", population: 2.873000 },
    //     { photo: "/img/cancun.jpg", city: "Cancun", country: "Mexico", population: 888800 },
    //     { photo: "/img/capetown.jpg", city: "Cape Town", country: "South Africa", population: 4618000 },
    //     { photo: "/img/edinburgh.jpg", city: "Edinburgh", country: "Scotland", population: 527000 },
    //     { photo: "/img/helsinki.jpg", city: "Helsinki", country: "Finland", population: 631700 },
    //     { photo: "/img/madrid.jpg", city: "Madrid", country: "Spain", population: 3223000 },
    //     { photo: "/img/milan.jpg", city: "Milan", country: "Italy", population: 1352000 },
    //     { photo: "/img/paris.jpg", city: "Paris", country: "France", population: 2161000 },
    //     { photo: "/img/RioDJ.png", city: "Rio De Janeiro", country: "Brasil", population: 6748000 },
    //     { photo: "/img/Shanghai.jpg", city: "Shanghai", country: "China", population: 26320000 },
    //     { photo: "/img/Zermatt-Switzerland.jpg", city: "Zermatt", country: "Switzerland", population: 5865 },
    // ];

    const cityCard = (itemsMap) => (
        <div className='City-container'>
            <img className="City-img" src={itemsMap.photo} />
            <LinkRouter to='/citydetails' className='decoration-none'><h3 className='City-text text-center'>{itemsMap.city}</h3></LinkRouter>
        </div>
    )
        useEffect(() => {
            axios.get('http://localhost:4000/cities/') 
                .then(response => setCities(response.data))
        }, [])

    return (
        <>
            <div className='citiesPageContainer'>{
                    cities.map(cityCard)
                }</div>
        </>
    )
}
