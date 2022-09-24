import '../styles/Itinerary.css'
import axios from 'axios'
import urlAPI from '../API'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Activities from './Activities'
import Comments from './Comments'
import { FiHeart } from 'react-icons/fi';
import toast from 'react-hot-toast'

export default function Itinerary() {
    const [itineraries, setItineraries] = useState([])
    const [isLiked, setIsLiked] = useState("")
    const params = useParams()
    const { id } = params
    // const navigate = useNavigate();

    const getItineraries = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/itineraries/?city=${id}`)
            if (response.data.success) {
                setItineraries(response.data.response)
                
                console.log(response.data.response)
            }
            throw new Error("An error ocurred")
        } catch (error) {
            return console.log(error.message)
        }
    }
console.log(itineraries)

    const handleLike = async (type, itineraryId) => {
        let user = JSON.parse(localStorage.getItem("user"))
        if (!user) { return toast.error('You must be logged to like')}
        try {
            let data = {
                itineraryId: itineraryId,
                userId: isLiked
            }

            const response = await axios.post(`http://localhost:4000/likes/${type === "dislike" ? "dislike" : "like"}`, data)

            if (response.data.success) return getItineraries()

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getItineraries()
        let user = JSON.parse(localStorage.getItem("user"))

        if (user) {
            setIsLiked(user.id)
            console.log(user)
        }

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
                                <span className='text-bold'>{itinerary.user.name}</span>
                            </div>
                            <div className='col flex-center Itinerary-Subcontainer'>
                                <div className='Itinerary-Content'>
                                    <p><span className='text-bold'>Price: </span>${itinerary.price}</p>
                                    <p><span className='text-bold'>Duration: </span> {itinerary.duration}hs</p>
                                </div>
                                <div className='flex-center col'>
                                    <p><span className='text-bold'>Likes: </span>{itinerary.likes?.length}</p>
                                    <p>{itinerary.tags}#Tag #Tag #Tag</p>
                                </div>
                            </div>
                            {
                                itinerary.likes?.includes(isLiked) 
                                ? <FiHeart fill='red' onClick={() => {handleLike("dislike", itinerary._id)}} />
                                : <FiHeart onClick={() => {handleLike("like", itinerary._id)}} />
                            }
                        </div>
                        <Activities activities={itinerary.activities}/>
                        <Comments comments={itinerary.comments}/>
                    </>
                ))}
            </div>
        </>
    )
}