import React from 'react'
import '../styles/InputCity.css';

const form = [
    { name: ' City Name:', type: 'text', className: 'Input-NewCity flex-center' },
    { name: ' Country Name:', type: 'text', className: 'Input-NewCity flex-center' },
    { name: ' Photo URL:', type: 'url', className: 'Input-NewCity  flex-center' },
    { name: ' Population Number:', type: 'number', className: 'Input-NewCity flex-center' },
    { name: ' Foundation Date:', type: 'date', className: 'Input-NewCity flex-center' },
    { name: ' Description:', type: 'text', className: 'Input-NewCity flex-center' },
    { type: 'submit', className: 'button-NewCity flex-center', value: 'Send' },
]

const inputs = (inputCity) =>
    <label className='text-light col text-indent'>{inputCity.name}
    <input type={inputCity.type} className={inputCity.className} cols={inputCity.cols} rows={inputCity.rows} value={inputCity.value}></input></label>

export default function InputNewCity() {
    return (
        <>
            {form.map(inputs)}
        </>
    )
}