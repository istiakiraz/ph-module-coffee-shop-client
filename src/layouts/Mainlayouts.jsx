import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const Mainlayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
            
        </div>
    );
};

export default Mainlayouts;