import React from 'react';      
import navBg from '../assets/icons/Rectangle 1.png'
import logo from '../assets/icons/logo1 1.png'

const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url(${navBg})` }} className=' bg-cover bg-center h-[80px] md:h-[120px]'>
           <nav className='w-9/12 mx-auto gap-2 py-6 flex items-center justify-center' >
        <img className='size-10 md:size-16' src={logo} alt="logo" /> 
        <h1 className='rancho text-3xl md:text-5xl text-white'>Espresso Emporium</h1>  

           </nav>
        </div>
    );
};

export default Navbar;