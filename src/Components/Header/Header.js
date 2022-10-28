import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/Usecontext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log('context', user)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    }
    const [theme, setTheme] = useState()
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const togleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }
    return (
        <div className="navbar bg-base-100  px-10 bg-indigo-700">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Live Course</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className='btn btn-ghost normal-case text-xl'>Home</Link></li>
                    <li><Link to='theme' className='btn btn-ghost normal-case text-xl' onClick={togleTheme}>Dark-mode</Link></li>
                    {/* <li><Link to='/course' className='btn btn-ghost normal-case text-xl'>Course</Link></li> */}
                    <li><Link to='/blogs' className='btn btn-ghost normal-case text-xl'>Blogs</Link></li>
                    <li><Link to='/faq' className='btn btn-ghost normal-case text-xl'>FAQ</Link></li>
                    <li><Link to='/signup' className='btn btn-ghost normal-case text-xl'>Register</Link> </li>
                    {user?.email && <span>Welcome,{user.email}</span>}
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className='btn btn-ghost normal-case text-xl'>Sign out</button>
                            : <Link className='btn btn-ghost normal-case text-xl' to='/login'>Login</Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;