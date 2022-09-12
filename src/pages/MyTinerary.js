import Itinerary from "../components/Itinerary";
import { useNavigate } from 'react-router-dom'
import '../styles/MyTinerary.css'
import React from 'react'

export default function MyTinerary() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="Main-MyTinerary">
                <div className="flex-center col MyTinerary-Gap ">
                    <Itinerary />
                    {<button className='backbutton flex-center' onClick={() => navigate(-1)}>Back</button>}
                </div>
            </div>
        </>
    )
}
