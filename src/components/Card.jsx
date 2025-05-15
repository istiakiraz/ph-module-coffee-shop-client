import React from 'react';
import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'

const Card = () => {
    return (
        <div className='bg-[#ECEAE3] h-[300px]'>
            <div className='md:w-9/12 w-11/12 grid gap-2 grid-cols-2 md:grid-cols-4 items-center justify-center mx-auto py-8 md:py-16'>
                <div className='space-y-2  '>
                    <img className='size-10 md:size-16' src={icon1} alt="Awesome Aroma" />
                    <h2 className='text-[#331A15] md:text-3xl text-xl rancho'>Awesome Aroma</h2>
                    <p className='text-[11px] md:text-[16px]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-2 '>
                    <img className='size-10 md:size-16' src={icon2} alt="Awesome Aroma" />
                    <h2 className='text-[#331A15] md:text-3xl text-xl rancho'>High Quality</h2>
                    <p className='text-[11px] md:text-[16px]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-2 '>
                    <img className='size-10 md:size-16' src={icon3} alt="Awesome Aroma" />
                    <h2 className='text-[#331A15] md:text-3xl text-xl rancho'>Pure Grades</h2>
                    <p className='text-[11px] md:text-[16px]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-2 '>
                    <img className='size-10 md:size-16' src={icon4} alt="Awesome Aroma" />
                    <h2 className='text-[#331A15] md:text-3xl text-xl rancho'>Proper Roasting</h2>
                    <p className='text-[11px] md:text-[16px]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Card;