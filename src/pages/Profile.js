import React from 'react'
import '../styles/Profile.css'

export default function Profile() {
    const userName = JSON.parse(localStorage.getItem('user'))?.name
    const userPhoto = JSON.parse(localStorage.getItem('user'))?.photo

    return (
        <>
            <div className='Main-BG'>
                <div className='col flex-center Profile-H'>
                    <h2 className='text-center text-light'>{userName}'s <span className='Title-Tinerary'>Profile</span></h2>
                    <img className='Profile-Img' src={userPhoto} />
                </div>
                <form className='Profile-Form'>
                    <label className='text-light col text-indent'>First Name:
                        <input type='text' name='name' className='Input-NewCity flex-center' /* onChange={inputHandler} */ ></input></label>
                    <label className='text-light col text-indent'>Last Name:
                        <input type='text' name='name' className='Input-NewCity flex-center' /* onChange={inputHandler} */ ></input></label>
                    <label className='text-light col text-indent'>Photo URL:
                        <input type='text' name='name' className='Input-NewCity flex-center' /* onChange={inputHandler} */ ></input></label>
                    <label className='text-light col text-indent'>Country:
                        <input type='text' name='name' className='Input-NewCity flex-center' /* onChange={inputHandler} */ ></input></label>
                    <button className='button-NewCity flex-center' /* onClick={editCity} */ >Send</button>
                </form>
            </div>
        </>
    )
}
