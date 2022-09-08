import React from 'react'
import '../styles/Itinerary.css'
import axios from 'axios'
import urlAPI from '../API'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Activities.css'


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
            <div className='bg-lightgrey Activities-Padding-Y'>
                <h3 className='text-center'>Activities</h3>
                <div className='Itinerary-Divider'></div>
                <div className='Activities-Flex'>
                    {activities.map((activity) => (
                        <>
                            <div className='Activities-Col'>
                                <h4 className='text-center'>{activity.name}</h4>
                                <img className='Activities-Img' src={activity.photo} />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}