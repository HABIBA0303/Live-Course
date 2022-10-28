import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../UserContext/Usecontext';


const Signup = () => {
    const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)

    const navigate = useNavigate();


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
                navigate('/')
            })
            .catch(err => {
                console.error(err)
            })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                navigate('/');
            }).catch(e => console.log(e))
    }

    return (


        <div>
            <section className="p-6 text-gray-100">
                <form onSubmit={handleSubmit}
                    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900  ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight">Register</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" name='name' className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-1 ml-1">Photo URL</label>
                        <input id="photo" type="text" placeholder="Your Photo Url" name='photoURL' className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-indigo-400 bg-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input
                            name='email'
                            id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-indigo-400 bg-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 ml-1">Password</label>
                        <input
                            name='password'
                            id="password" type="password" placeholder="Type Your Password" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-indigo-400 bg-gray-800"></input>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-indigo-700 text-white focus:ring-indigo-400 hover:ring-indigo-400 ">Register</button>
                    </div>
                    <p className='my-2'>Already have an account?<Link className='underline text-blue-300 p-1' to='/login'>Login</Link></p>
                    <hr />
                    <div className='flex justify-between  mt-2 rounded-lg'>
                        <button className='mx-2 flex  p-2  items-center gap-2 border rounded-md' onClick={handleGoogleSignIn}>
                            <span>
                                Login with Gmail
                            </span>
                            <span>
                                <FcGoogle className='text-2xl' />
                            </span>
                        </button>
                        <button className='mx-2 flex  p-2  items-center gap-2 border rounded-md' onClick={handleGithubSignIn}>
                            <span>
                                Login with Github
                            </span>
                            <span>
                                <FaGithub className='text-2xl' />
                            </span>
                        </button>

                    </div>
                </form>

            </section>
        </div>

    );
};

export default Signup;