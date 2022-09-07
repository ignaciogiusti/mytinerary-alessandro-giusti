import React from 'react'
import '../styles/Itinerary.css'


export default function Itinerary() {
    return (
        <>
            <div className='Itinerary-Card col'>
                <div className='Itinerary-Title'>
                    <h3 className='text-center'>Itinerary Title{/* {itinerary.name} */}</h3>
                </div>
                <div className='row Itinerary-Container'>
                    <div className='col flex-center'>
                        <img className='User-Img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_hRYKjo41v4UF78t8oKXYG5k8bFJHfiWOShjqXmV2zgu3tq35qI42XKdzRFeUol9viE&usqp=CAU' />
                        <span className='text-bold'>User</span>
                    </div>
                    <div className='col flex-center Itinerary-Subcontainer'>
                        <div className='Itinerary-Content'>
                            <p><span className='text-bold'>Price: </span> $999</p>
                            <p><span className='text-bold'>Duration: </span> 5hrs</p>
                        </div>
                        <div className='flex-center col'>
                            <span className='text-bold'>Likes: </span>
                            <span className='text-bold'>Tags: </span>
                        </div>
                    </div>
                </div>
                {/* <Activities /> */}
                {/* <Comments /> */}
            </div>
        </>
    )
}