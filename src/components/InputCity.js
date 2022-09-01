import React from 'react'
import '../styles/InputCity.css';

const form = [
    { name: ' City Name:', type: 'text', className: 'Input-NewCity' },
    { name: ' Country Name:', type: 'text', className: 'Input-NewCity' },
    { name: ' Photo URL:', type: 'url', className: 'Input-NewCity' },
    { name: ' Population Number:', type: 'number', className: 'Input-NewCity' },
    { name: ' Foundation Date:', type: 'date', className: 'Input-NewCity' },
    { name: ' Description:', type: 'text', className: 'Input-NewCity' },
    { type: 'submit', className: 'button-NewCity', value: 'Send' },
]

const inputs = (inputCity) =>
    <label className='text-light col'>{inputCity.name}
    <input type={inputCity.type} className={inputCity.className} cols={inputCity.cols} rows={inputCity.rows} value={inputCity.value}></input></label>

export default function InputNewCity() {
    return (
        <>
            {form.map(inputs)}
        </>
    )
}