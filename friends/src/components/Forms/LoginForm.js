import React, { useState, useRef } from "react";
import { Form } from './Styles';
import axios from "axios";

const LoginForm = props => {

    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const { toggleLoading, history } = props;

    const initialExistingUser = {
        username: '',
        password: ''
    }

    const [ existingUser, setExistingUser] = useState(initialExistingUser);
    const { username, password } = existingUser;

    // Handler Functions
    const handleInputChange = (e) => {
        setExistingUser({
            ...existingUser,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        if(username && password) {
            e.preventDefault();
            setExistingUser(initialExistingUser);
            // toggleLoading(true); 

            axios
                .post("http://localhost:5000/api/login", {
                    username: usernameRef.current.value,
                    password: passwordRef.current.value
                })
                .then(res => { 
                    localStorage.setItem('token', res.data.payload);
                    // toggleLoading(false);
                    history.push('/');
                })
                .catch(err => { 
                    // toggleLoading(false); 
                }); 
        }
    }
    
    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Login</h1>
                <p>Keep your plants alive</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' ref={usernameRef} id="username" name='username' onChange={handleInputChange} value={username} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' ref={passwordRef} id="password" name='password' onChange={handleInputChange} value={password} placeholder='Password' required/>
            </div>

            <button type='submit' onClick={handleFormSubmit}>
                Login
            </button>
        </Form>
    )
}

export default LoginForm;