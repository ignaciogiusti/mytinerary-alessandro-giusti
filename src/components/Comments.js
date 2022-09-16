import '../styles/Comments.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import urlAPI from '../API'

import React from 'react'

export default function Comments({comments}) {
   /*  const [comments, setComments] = useState([]) */
    const [showComments, setShowComments] = useState(false)
    const params = useParams()
    const { id } = params

    const handleComments = () => {
        setShowComments(!showComments)
    }

    /* const getComments = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/comments/?itinerary=${id}`)
            // const response = await axios.get(urlAPI + `/comments/?itinerary=${id}`)
                .then(response => setComments(response.data.response))
            console.log(response);
            if (response.data.success) {
                return setComments(response.data.response)
            }
            throw new Error("An error ocurred")
        } catch (error) {
            return console.log(error.message)
        }
    }

    useEffect(() => {
        getComments()
    }, []) */

    return (
        <>
            <div className='col'>
                <button className='Comment-Button' onClick={handleComments}>Comments</button>
                {comments.map((item) => (
                    <>
                        {showComments && <h4 className="text-center">{item.name}</h4> }
                        <div className="row justify-center Comment-Gap-X Comment-Gap-Y">
                            {showComments && <img className='User-Img' src={item.user.avatar} alt={item.name} /> }
                            {showComments && <p>{item.comment}</p> }
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}