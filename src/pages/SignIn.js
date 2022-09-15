import React from 'react'
import SignInGoogle from '../components/SignInGoogle'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignInUp.css';

export default function SignIn() {
    const [data, setLoggedUser] = useState({
        email: '',
        password: '',
        from:'form',
    })
    const navigate = useNavigate()
    const inputHandler = (e) => {
        setLoggedUser({
            ...data, //los 3 puntos hace que se guarde el dato que se actualizo y no se borre (spread operator)
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async () => {
        try {
            if (Object.values(data).some((value) => !value)) {
                return alert('you must complete all the fields')
            }
            const response = await axios.post(`http://localhost:4000/auth/signin/`, data)
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.data.response.user))
            navigate("/", { replace: true }) //redirigí al index
            if (response.data.success) {
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='Main-SignUp'>
                <div className="Form-SignUp">
                    <label className='text-light col text-indent'>Email:
                        <input type='text' name='email' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
                    <label className='text-light col text-indent'>Password:
                        <input type='text' name='password' className='Input-SignUp flex-center' onChange={inputHandler}></input></label>
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