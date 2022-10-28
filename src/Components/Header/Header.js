import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/Usecontext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
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
        // <div className="navbar   px-10 bg-indigo-700">
        //     <div className="flex-1">
        //         <Link to='/'
        //             className="text-white uppercase text-xl">Live Course</Link>
        //     </div>
        //     <div className="flex-none">
        //         <ul className=" flex gap-4 menu-horizontal p-0 items-center ">
        //             <li><Link to='/' className=' text-white normal-case '>Home</Link></li>
        //             <li><Link to='/courses' className=' text-white normal-case '>Courses</Link></li>
        //             <li><Link to='/blogs' className=' text-white normal-case '>Blogs</Link></li>
        //             <li><Link to='/faq' className=' text-white normal-case '>FAQ</Link></li>
        //             <li >
        //                 <label className="label cursor-pointer">
        //                     <span className="label-text text-white mr-2">Change Theme</span>
        //                     <input type="checkbox" className="toggle toggle-primary" />
        //                 </label>

        //             </li>
        //             <li>
        //                 {
        //                     user?.email ?
        //                         <button onClick={handleSignOut} className=' text-white border px-2 py-2 hover:bg-indigo-800 rounded-md uppercase  '>Sign out</button>
        //                         :
        //                         <>
        //                             <Link className=' text-white  border px-2 py-2 rounded-md
        //                             hover:bg-indigo-800 uppercase ' to='/login'>
        //                                 Login
        //                             </Link>
        //                         </>
        //                 }
        //             </li>
        //             <li>
        //                 {
        //                     user &&

        //                     <div className="tooltip
        //                     tooltip-bottom"
        //                         data-tip={user?.displayName ? user.displayName : 'No name found'}>
        //                         <img className='w-[40px] rounded-full cursor-pointer'
        //                             src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/Lr03pVT/profile-user-round-black-icon-symbol-hd-png-11639594326nxsyvfnkg9.png'} alt="" />
        //                     </div>
        //                 }
        //             </li>
        //         </ul>
        //     </div>
        // </div >
        <div className="navbar bg-indigo-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">

                        <li><Link to='/' className=' text-white normal-case '>Home</Link></li>
                        <li><Link to='/courses' className=' text-white normal-case '>Courses</Link></li>
                        <li><Link to='/blogs' className=' text-white normal-case '>Blogs</Link></li>
                        <li><Link to='/faq' className=' text-white normal-case '>FAQ</Link></li>
                        <li >
                            <label className="label cursor-pointer">
                                <span className="label-text text-white mr-2">Theme</span>
                                <input type="checkbox" className="toggle toggle-primary" />
                            </label>
                        </li>
                        <li>
                            {
                                user?.email ?
                                    <button onClick={handleSignOut} className=' text-white border md:block hidden px-2 py-2 hover:bg-indigo-800 rounded-md uppercase  '>Sign out</button>
                                    :
                                    <>
                                        <Link className=' text-white  border px-2 py-2 rounded-md 
                                     hover:bg-indigo-800 uppercase ' to='/login'>
                                            Login
                                        </Link>
                                    </>
                            }
                            <div>
                                <button onClick={handleSignOut} className=' text-white border md:block hidden px-2 py-2 hover:bg-indigo-800 rounded-md uppercase  '>Sign out</button>
                            </div>
                            <button onClick={handleSignOut} className=' text-white border md:block hidden px-2 py-2 hover:bg-indigo-800 rounded-md uppercase  '>Sign out</button>
                            {/* {
                                user &&

                                <div className="tooltip             tooltip-bottom"
                                    data-tip={user?.displayName ? user.displayName : 'No name found'}>
                                    <img className='w-[40px] rounded-full cursor-pointer'
                                        src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/Lr03pVT/profile-user-round-black-icon-symbol-hd-png-11639594326nxsyvfnkg9.png'} alt="" />
                                </div>
                            } */}


                        </li>

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-white normal-case text-xl">Live Course</Link>
            </div>
            {/* for large */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">


                    <li><Link to='/' className=' text-white normal-case '>Home</Link></li>

                    <li><Link to='/courses' className=' text-white normal-case '>Courses</Link></li>

                    <li><Link to='/blogs' className=' text-white normal-case '>Blogs</Link></li>
                    <li><Link to='/faq' className=' text-white normal-case '>FAQ</Link></li>
                    <li >
                        <label className="label cursor-pointer">
                            <span className="label-text text-white mr-2">Theme</span>
                            <input type="checkbox" className="toggle toggle-primary" />
                        </label>
                    </li>


                </ul>
            </div>
            <div className="navbar-end flex gap-3 mr-5 md:mr-10">
                {
                    user?.email ?
                        <button onClick={handleSignOut} className=' text-white border block  px-2 py-2 hover:bg-indigo-800 rounded-md uppercase  '>Sign out</button>
                        :
                        <>
                            <Link className=' text-white  border px-2 py-2 rounded-md 
                                     hover:bg-indigo-800 uppercase ' to='/login'>
                                Login
                            </Link>
                        </>
                }
                <>
                    {
                        user &&

                        <div className="tooltip
             tooltip-bottom"
                            data-tip={user?.displayName ? user.displayName : 'No name found'}>
                            <img className='w-[40px] rounded-full cursor-pointer'
                                src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/Lr03pVT/profile-user-round-black-icon-symbol-hd-png-11639594326nxsyvfnkg9.png'} alt="" />
                        </div>
                    }

                </>


            </div>
        </div >




    );
};

export default Header;