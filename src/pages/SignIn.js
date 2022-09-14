import React from 'react'
import SignInGoogle from '../components/SignInGoogle'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignInUp.css';

export default function SignIn() {
    const [newUser, setnewUser] = useState({
        name: '',
        lastName: '',
        photo: '',
        email: '',
        country: '',
        password: ''
    })
    const navigate = useNavigate()
    const inputHandler = (e) => {
        setnewUser({
            ...newUser, //los 3 puntos hace que se guarde el dato que se actualizo y no se borre (spread operator)
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async () => {
        try {
            if (Object.values(newUser).some((value) => !value)) {
                return alert('you must complete all the fields')
            }
            const response = await axios.post(`http://localhost:4000/auth/signin/`, newUser)
            console.log(response);
            if (response.data.success) {
                navigate('/auth/signin')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='Main-SignUp'>
                <div className="Form-SignUp">
                    <label className='text-light col text-indent'>First Name:
                        <input type='text' name='name' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
                    <label className='text-light col text-indent'>Last Name:
                        <input type='text' name='lastName' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
                    <label className='text-light col text-indent'>Photo URL:
                        <input type='url' name='photo' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
                    <label className='text-light col text-indent'>Country:
                        <input type='text' name='country' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
                    <label className='text-light col text-indent'>Email:
                        <input type='text' name='email' className='Input-SignUp flex-center'  onChange={inputHandler}></input></label>
                    <label className='text-light col text-indent'>Password:
                        <input type='text' name='name' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
                    <button className='button-SignUp flex-center' onClick={handleSubmit}>Send</button>
                    <SignInGoogle />
                    {/* <div className='row row-menu'>
                        {register.map(navLinks)}
                    </div> */}
                </div>
            </div>
        </>
    )
}