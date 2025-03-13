import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink 
                to='/' 
                className="nav-link px-3 py-2 rounded-md text-white hover:bg-[#008dff] hover:text-white transition duration-300 ease-in-out"
            >Home</NavLink></li>
            {user && user?.email ? (
                <>
                    <li><NavLink 
                        to='/all-books' 
                        className="nav-link px-3 py-2 rounded-md text-white hover:bg-[#008dff] hover:text-white transition duration-300 ease-in-out"
                    >All Books</NavLink></li>
                    <li><NavLink 
                        to='/add-books' 
                        className="nav-link px-3 py-2 rounded-md text-white hover:bg-[#008dff] hover:text-white transition duration-300 ease-in-out"
                    >Add Books</NavLink></li>
                    <li><NavLink 
                        to='/borrowed-books' 
                        className="nav-link px-3 py-2 rounded-md text-white hover:bg-[#008dff] hover:text-white transition duration-300 ease-in-out"
                    >Borrowed Books</NavLink></li>
                </>
            ) : null}
        </>
    );

    return (
        <div className="sticky top-0 z-50 shadow-md">
            <div 
                className="navbar" 
                style={{ backgroundColor: '#4338ca' }} // 60% dominant color
            >
                <div className="max-w-screen-2xl mx-auto w-full px-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#58fbda" // 10% accent
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow"
                                style={{ backgroundColor: '#008dff' }} // 30% secondary color
                            >
                                {links}
                            </ul>
                        </div>
                        <a 
                            className="btn btn-ghost text-xl text-white hover:bg-[#008dff] hover:text-white"
                        >
                            Libro Vault
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        {user && user?.email ? (
                            <>
                                <div className="relative group">
                                    <img
                                        className="w-10 rounded-full border-2 border-[#00c9f5]" // 10% accent
                                        src={user?.photoURL}
                                        alt="User Avatar"
                                    />
                                    <p 
                                        className="absolute -bottom-12 text-center text-white bg-[#008dff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 px-2 py-1 rounded" // 30% secondary
                                    >
                                        {user.displayName}
                                    </p>
                                </div>
                                <button
                                    onClick={logOut}
                                    className="bg-[#008dff] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-[#00c9f5]" // 30% to 10% hover
                                >
                                    Log-Out
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink 
                                    to='/login' 
                                    className="bg-[#008dff] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-[#00c9f5]" // 30% to 10% hover
                                >Login</NavLink>
                                <NavLink 
                                    to='/register' 
                                    className="bg-[#008dff] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-[#00c9f5]" // 30% to 10% hover
                                >Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;