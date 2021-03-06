import React, { useRef } from "react";
import { Form } from './Styles';
import axios from "axios";

const LoginForm = props => {

    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const { toggleLoading, history, toggleAuthenticated } = props;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        toggleLoading(true); 

        axios
            .post("http://localhost:5000/api/login", {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            .then(res => { 
                localStorage.setItem('token', res.data.payload);
                toggleAuthenticated(true);
                history.push('/');
            })
            .catch(err => { 
                toggleLoading(false); 
            }); 
    }
    
    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Login</h1>
                <p>Keep your plants alive</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' ref={usernameRef} id="username" name='username' placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' ref={passwordRef} id="password" name='password' placeholder='Password' required/>
            </div>

            <button type='submit' onClick={handleFormSubmit}>
                Login
            </button>
        </Form>
    )
}

export default LoginForm;