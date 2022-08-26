import React from 'react'
import CityCard from '../components/CityCard'


export default function Cities() {
    return (
        <>
            <div className='Search-Cities'>
                <input type="text" name="hola" placeholder=' Search by city...' />
            </div>
            <CityCard />
        </>
    )
}
