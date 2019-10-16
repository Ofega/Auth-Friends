import React, { useRef } from "react";
import { Form } from './Styles';
import uuid from 'uuid'


const AddPlantsForm = props => {
    const { showModal, toggleLoading, addFriend } = props;

    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        toggleLoading(true);
        addFriend({
            id: uuid(),
            name: nameRef.current.value,
            age: Number(ageRef.current.value),
            email: emailRef.current.value
        });
        showModal(e);
    }


    return (
        <Form autoComplete="off">
            <button onClick={showModal} className="close-btn">x</button>

            <div className="form-header">
                <h1>Add New Friend</h1>
            </div>

            <div className="form-inputs">
                <label htmlFor="name">Name</label>
                <input type='text' ref={nameRef} id="name" name='plantname' placeholder='Name' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="age">Age</label>
                <input type='text' ref={ageRef} id="age" name='age' placeholder='Age' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="email">Email</label>
                <input type='email' ref={emailRef} id="email" name='email' placeholder='Email' required/>
            </div>

            <button type='submit' onClick={handleFormSubmit}>
                Add Friend
            </button>
        </Form>
    )
}

export default AddPlantsForm;