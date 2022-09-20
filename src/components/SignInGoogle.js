import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignInGoogle() {

  const navigate = useNavigate()
  const buttonDiv = useRef(null)
  console.log(buttonDiv.current);

  async function handleCredentialResponse(response) {

    let userObject = jose.decodeJwt(response.credential);
    console.log(userObject);

    let data = {
      email: userObject.email,
      password: userObject.sub,
      from: 'google'
    }
    try {
      let response = await axios.post('http://localhost:4000/auth/signin', data)
      //console.log(response)
      localStorage.setItem('user', JSON.stringify(response.data.response.user))
      navigate("/", { replace: true }) //redirigí al index
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1058922149242-7ag7bop2o9nc94du8v3haum0f5lk1bpd.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      context: 'signin'
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "outline", size: "medium" }  // customization attributes
    );
  }, [])

  return (
    <div>
      <div ref={buttonDiv}></div>
    </div>
  )
}
