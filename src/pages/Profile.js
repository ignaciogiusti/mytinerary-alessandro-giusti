import '../styles/Profile.css';
import React from 'react';
import axios from "axios";
import urlAPI from '../API';
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'

export default function Profile({ user }) {
    const userName = JSON.parse(localStorage.getItem('user'))?.name
    const userPhoto = JSON.parse(localStorage.getItem('user'))?.photo

    const [editUser, setEditUser] = useState({
        name: '',
        lastName: '',
        photo: '',
        country: ''
    })
    let localStorageUser = JSON.parse(localStorage.getItem("user"))
    const inputHandler = (e) => {
        setEditUser({
            ...editUser, //los 3 puntos hace que se guarde el dato que se actualizo y no se borre (spread operator)
            [e.target.name]: e.target.value
        })
    }
    const userEditSubmit = async () => {
        try {
            if (Object.values(editUser).some((value) => !value)) {
                return toast.error('You need to complete a field', { position: "bottom-right" })
            }
            const response = await axios.patch(urlAPI + `/auth/profile/${localStorageUser.id}`, editUser)
            console.log(response);
            if (response.data.success) {
                toast.success(`Your information was modified!`, { position: "bottom-right" })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='Main-BG'>
                <div className='col flex-center Profile-H'>
                    <h2 className='text-center text-light'>{userName}'s <span className='Title-Tinerary'>Profile</span></h2>
                    <img className='Profile-Img' src={userPhoto} />
                </div>
                <div className='Profile-Form'>
                    <label className='text-light col text-indent'>First Name:
                        <input type='text' name='name' className='Input-NewCity flex-center' onChange={inputHandler} ></input></label>
                    <label className='text-light col text-indent'>Last Name:
                        <input type='text' name='lastName' className='Input-NewCity flex-center' onChange={inputHandler} ></input></label>
                    <label className='text-light col text-indent'>Photo URL:
                        <input type='text' name='photo' className='Input-NewCity flex-center' onChange={inputHandler} ></input></label>
                    <label className='text-light col text-indent'>Country:
                        <input type='text' name='country' className='Input-NewCity flex-center' onChange={inputHandler} ></input></label>
                    <button className='button-NewCity flex-center' onClick={userEditSubmit} >Send</button>
                </div>
            </div>
        </>
    )
}
