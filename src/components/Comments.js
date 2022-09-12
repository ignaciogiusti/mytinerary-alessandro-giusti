import { useState } from "react"
import '../styles/Comments.css'
// import axios from "axios"


import React from 'react'

export default function Comments() {
    const [comments, setShowComments] = useState(false)
    // const params = useParams()
    // const { id } = params

    const handleComments = () => {
        setShowComments(!comments)
    }

    // const getComments = async () => {
    //     try {
    //         // const response = await axios.get(urlAPI + `/itineraries`)
    //         const response = await axios.get(`http://localhost:4000/itineraries/?comment=${id}`)
    //         .then(response => setShowComments(response.data.response))
    //         console.log(response);
    //         if (response.data.success) {
    //             return setShowComments(response.data.response)
    //         }
    //         throw new Error("An error ocurred")
    //     } catch (error) {
    //         return console.log(error.message)
    //     }
    // }

    // useEffect(() => {
    //     getComments()
    // }, [])

    return (
        <>
            {/* {comments.map((comment) => ( */}
            <div className='col'>
                <button className='Comment-Button' onClick={handleComments}>Comments</button>
                {comments && <h4 className="text-center">Ricardo fort:</h4>}
                <div className="row justify-center Comment-Gap-X Comment-Gap-Y">
                    {comments && <img className='User-Img' src="https://media.airedesantafe.com.ar/p/3c8183070fac480c1714616addb05555/adjuntos/268/imagenes/003/424/0003424036/ricardo-fort-que-murio-el-empresario-mediatico.png" alt="ricky fort" />}
                    {comments && <p>Woow incredible </p>}
                </div>
                    {comments && <div className="Comment-Divider"></div>}
                {comments && <h4 className="text-center">Moria Casan:</h4>}
                <div className="row justify-center Comment-Gap-X">
                    {comments && <img className='User-Img' src="https://m.media-amazon.com/images/M/MV5BYjM0MmQzNzItZmE3NC00YWVmLWI2ZmItMWEyNWNhYTVmNjQwXkEyXkFqcGdeQXVyNjU0ODkwMTU@._V1_.jpg" alt="moria casan" />}
                    {comments && <p>Amazing page, keep going!</p>}
                </div>
                {comments && <div className="Comment-Divider"></div>}
            </div>
            {/* ))} */}
        </>
    )
}



