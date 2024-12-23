import React from 'react';
import Nav from '../Home/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;