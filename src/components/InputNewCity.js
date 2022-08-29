import React from 'react'
import '../styles/NewCity.css';

const form = [
    { name: ' City', type: 'text', className: 'Input-NewCity' },
    { name: ' Country', type: 'text', className: 'Input-NewCity' },
    { name: ' Population', type: 'number', className: 'Input-NewCity' },
    { name: ' Photo URL', type: 'url', className: 'Input-NewCity' },
    { name: 'Send', type: 'submit', className: 'button-NewCity', value: 'Send' },
]

const inputs = (newCity) => <input type={newCity.type} className={newCity.className} placeholder={newCity.name} value={newCity.value}></input>

export default function InputNewCity() {
    return (
        <>
            {form.map(inputs)}
        </>
    )
}