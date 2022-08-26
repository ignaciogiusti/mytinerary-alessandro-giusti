import React from 'react'
import '../styles/NewCity.css'


const form = [
    { name: 'City' },
    { name: 'Country' },
    { name: 'Photo URL' },
    { name: 'Population' },
    { name: 'Fundation' },
]


const inputs = (newCity) => <input type="text" className='Input-NewCity' placeholder={newCity.name}></input>


export default function InputNewCity() {
    return (
        <>
            <div className='main-NewCity'>
                {form.map(inputs)}
            </div>
        </>
    )
}
