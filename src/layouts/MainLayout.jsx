import React from 'react';
import Nav from '../Home/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Libro Vault | Home</title>
            </Helmet>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;