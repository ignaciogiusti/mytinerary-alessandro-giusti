import React from 'react'
import '../styles/Itinerary.css'
import axios from 'axios'
import urlAPI from '../API'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Itinerary() {
    const [activities, setActivities] = useState([])
    const params = useParams()
    const { id } = params
    const navigate = useNavigate();

    const getActivities = async () => {
        try {
            // const response = await axios.get(urlAPI + `/activities`)
            const response = await axios.get("http://localhost:4000/activities")
            console.log(response);
            if (response.data.success) {
                return setActivities(response.data.response)
            }
            throw new Error("An error ocurred")
        } catch (error) {
            return console.log(error.message)
        }
    }

    console.log(activities)

    useEffect(() => {
        getActivities()
    }, [])

    return (
        <>
            <div className='col'>
                {activities.map((activity) => (
                    <>
                        <div className=''>
                            <h3 className='text-center'>Itinerary Title {activity.name}</h3>
                        </div>
                        <div className=''>
                            <div className=''>
                                <img className='User-Img' src={activity.photo}/>
                                <span className='text-bold'>User</span>
                            </div>
                            <div className=''>
                                <div className=''>
                                    <p><span className='text-bold'>Itinerary: </span>{activity.Itinerary}</p>
                                </div>
                            </div>
                        </div>
                        {/* <Comments /> */}
                    </>
                ))}
            </div>
        </>
    )
}