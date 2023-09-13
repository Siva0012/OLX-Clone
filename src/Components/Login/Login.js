import React from 'react';
import { useState , useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Context';
// import firebase from 'firebase';

import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {

  const [ email , setEmail ] = useState('')
  const [ password , setPassword ] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()


  let handleLogin = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email , password)
    .then(() =>{
      history.push('/')
    })
    .catch((err) =>{
      alert(err.message)
    })

  }



  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            placeholder="John"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            placeholder="Doe"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
