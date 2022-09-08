import React from 'react'
import '../styles/Itinerary.css'
import axios from 'axios'
import urlAPI from '../API'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Activities from './Activities'


export default function Itinerary() {
    const [itineraries, setItineraries] = useState([])
    const params = useParams()
    const { id } = params
    const navigate = useNavigate();

    const getItineraries = async () => {
        try {
            // const response = await axios.get(urlAPI + `/itineraries`)
            const response = await axios.get("http://localhost:4000/itineraries")
            console.log(response);
            if (response.data.success) {
                return setItineraries(response.data.response)
            }
            throw new Error("An error ocurred")
        } catch (error) {
            return console.log(error.message)
        }
    }

    console.log(itineraries)

    useEffect(() => {
        getItineraries()
    }, [])

    return (
        <>
            <div className='Itinerary-Card col'>
                <h3 className='text-center'>Itineraries</h3>
                {itineraries.map((itinerary) => (
                    <>
                        <div className='Itinerary-Divider'></div>
                        <h3 className='text-center'>{itinerary.name}</h3>
                        <div className='row Itinerary-Container'>
                            <div className='col flex-center'>
                                <img className='User-Img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_hRYKjo41v4UF78t8oKXYG5k8bFJHfiWOShjqXmV2zgu3tq35qI42XKdzRFeUol9viE&usqp=CAU' />
                                <span className='text-bold'>User</span>
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
                            {/* <Comments /> */}
                        </div>
                        <Activities />
                    </>
                ))}
            </div>
        </>
    )
}