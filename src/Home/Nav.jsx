import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <p className="text-xl">Libro Vault</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <>
                        <NavLink to='/login' className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-md mr-2 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500">Login</NavLink>
                        <NavLink to='/register' className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500">Register</NavLink>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Nav;