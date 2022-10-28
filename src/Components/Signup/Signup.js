import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../UserContext/Usecontext';


const Signup = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext)
    console.log(createUser)
    const handleSubmit = error => {
        error.preventDefault()
        const form = error.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('registered user', user)
            })
            .catch(err => {
                console.error(err)
            })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Full Name</label>
                    <input type="name" name='name' required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Live Course<Link className='underline text-blue-300 p-1' to='/login'>Login</Link></p>
            <span className='flex justify-center text-5xl mt-2 rounded-lg'>
                <button className='mx-2 p-3' onClick={handleGoogleSignIn}><FcGoogle /></button>
                <button className='mx-2 p-3' onClick={handleGoogleSignIn}><FaGithub /></button>

            </span>
        </div>
    );
};

export default Signup;