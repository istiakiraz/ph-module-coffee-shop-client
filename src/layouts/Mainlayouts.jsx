import React from 'react';
import { Outlet } from 'react-router';

const Mainlayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayouts;