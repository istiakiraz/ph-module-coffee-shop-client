import React from 'react';
import footerBg from '../assets/icons/Rectangle 18.png'
import logo from '../assets/icons/logo1 1.png'

const FooterSection = () => {
    return (
        <div style={{ backgroundImage: `url(${footerBg})` }} className=' bg-cover bg-center  h-[500px]'>

            <div>
                <div>
                    <img src={logo}alt="logo" />
                    <h2 className='text-3xl rancho text-[#331A15]' style={{
        textShadow: '0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15',
      }} >Espresso Emporium</h2>
      <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                </div>
            </div>
            
        </div>
    );
};

export default FooterSection;