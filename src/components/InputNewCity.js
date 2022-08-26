import React from 'react'
import '../styles/NewCity.css'


const form = [
    { name: 'City Name' },
    { name: 'Country' },
    { url: '/', name: 'Image'}
]

const inputs = (newCity) => <input type="text" className='Input-NewCity' placeholder={newCity.name}></input>


export default function InputNewCity() {
    return (
        <div className='main-NewCity'>
            <div>
                { form.map(inputs) }
            </div>
        </div>
    )
}
