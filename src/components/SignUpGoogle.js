import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import axios from 'axios'

export default function SignUpGoogle() {

  // let [newUser,response] = useSignUserMutation();

  const buttonDiv = useRef(null)
  console.log(buttonDiv.current);

  async function handleCredentialResponse(response) {

    let userObject = jose.decodeJwt(response.credential);
    console.log(userObject);

    let data = {
      name: userObject.given_name,
      lastName: userObject.family_name,
      photo: userObject.picture,
      country: 'null',
      email: userObject.email,
      password: userObject.sub,
      role: 'user',
      from: 'google',
    }
    // newUser(data)
    try {
      await axios.post('http://localhost:4000/auth/signup', data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1058922149242-7ag7bop2o9nc94du8v3haum0f5lk1bpd.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      context: 'signup'
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
