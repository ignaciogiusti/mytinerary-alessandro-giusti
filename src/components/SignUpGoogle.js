import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import SignUp from '../pages/SignUp';


export default function SignUpGoogle() {

  // let [newUser,response] = useSignUserMutation();

  const buttonDiv = useRef(null)
  console.log(buttonDiv.current);

  async function handleCredentialResponse(response){

    let userObjet = jose.decodeJwt(response.credential);
    console.log(userObjet);

    let data = {
      name: userObjet.givenName,
      photo: userObjet.picture,
      email: userObjet.email,
      password: userObjet.sub,
      role: 'User', 
      from: 'google', 
    }
    // newUser(data)
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
