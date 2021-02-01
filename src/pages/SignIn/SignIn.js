import React, { useState } from "react";
import firebase, { signInWithGoogle } from '../../firebase/firebase.utils';


const SignIn = () => {

  const [signInDetails, setSignInDetails] = useState({
    email: '',
    password: ''
  })

  const {email, password} = signInDetails
  console.log(firebase.auth())
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <input
          name='email'
          type='email'
          value={email}

          label='email'
          required />
        <input
          name='password'
          type='password'
          value={password}

          label='password'
          required />
        <div className='buttons'>
          <button type='submit'> SIGN IN </button>
          <button onClick={signInWithGoogle}> SIGN IN WITH GOOGLE</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;
