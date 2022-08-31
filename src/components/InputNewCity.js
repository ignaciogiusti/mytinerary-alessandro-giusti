import React from 'react'
import '../styles/NewCity.css';

const form = [
    { name: ' City:', type: 'text', className: 'Input-NewCity' },
    { name: ' Country:', type: 'text', className: 'Input-NewCity' },
    { name: ' Population:', type: 'number', className: 'Input-NewCity' },
    { name: ' Photo URL:', type: 'url', className: 'Input-NewCity' },
    { type: 'submit', className: 'button-NewCity', value: 'Send' },
]

const inputs = (inputCity) => 
    <label className='text-light col'>{inputCity.name}
    <input type={inputCity.type} className={inputCity.className} placeholder={inputCity.name} value={inputCity.value}></input></label>

export default function InputNewCity() {
    return (
        <>
            {form.map(inputs)}
        </>
    )
}