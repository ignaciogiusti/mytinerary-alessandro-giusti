import React from 'react'
import '../styles/Itinerary.css'
import axios from 'axios'
import urlAPI from '../API'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Activities from './Activities'
import Comments from './Comments'


export default function Itinerary() {
    const [itineraries, setItineraries] = useState([])
    const params = useParams()
    const { id } = params
    // const navigate = useNavigate();

    const getItineraries = async () => {
        try {
            // const response = await axios.get(urlAPI + `/itineraries`)
            const response = await axios.get(`http://localhost:4000/itineraries/?city=${id}`)
                .then(response => setItineraries(response.data.response))
            console.log(response);
            if (response.data.success) {
                return setItineraries(response.data.response)
            }
            throw new Error("An error ocurred")
        } catch (error) {
            return console.log(error.message)
        }
    }

    // console.log(itineraries)

    useEffect(() => {
        getItineraries()
    }, [])

    return (
        <>
            <div className='Itinerary-Card col'>
                <h2 className='text-center'>Itineraries</h2>
                {itineraries.map((itinerary) => (
                    <>
                        <div className='Itinerary-Divider'></div>
                        <h3 className='text-center'>{itinerary.name}</h3>
                        <div className='row Itinerary-Container'>
                            <div className='col flex-center'>
                                <img className='User-Img' src={itinerary.user.photo} />
                                <span className='text-bold'>{itinerary.user.name} {itinerary.user.lastName}</span>
                            </div>
                            <div className='col flex-center Itinerary-Subcontainer'>
                                <div className='Itinerary-Content'>
                                    <p><span className='text-bold'>Price: </span>${itinerary.price}</p>
                                    <p><span className='text-bold'>Duration: </span> {itinerary.duration}hs</p>
                                </div>
                                <div className='flex-center col'>
                                    <p><span className='text-bold'>Likes: </span>{itinerary.likes}</p>
                                    <p>{itinerary.tags}#Tag #Tag #Tag</p>
                                </div>
                            </div>
                        </div>
                        <Activities />
                        <Comments />
                    </>
                ))}
            </div>
        </>
    )
}