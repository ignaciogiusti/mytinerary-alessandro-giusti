import Itinerary from "../components/Itinerary";
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function MyTinerary() {
    const navigate = useNavigate();


    return (
        <>
        <Itinerary />
        { <button className='backbutton' onClick={() => navigate(-1)}>Back one page</button>}
        </>
    )
}
