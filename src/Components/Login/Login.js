import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UseContext/Usecontext';

const Login = () => {
    const { singIn } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => {
                console.error(err)
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
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
            <p>Live Course <Link className='underline text-blue-300 p-' to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;