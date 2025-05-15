import React from 'react';
import bannerImg from '../assets/3.png'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className=' bg-cover bg-center h-[600px] md:h-[700px]'>
            <header className='md:w-6/12 w-9/12 md:py-60 py-36  space-y-4 ml-auto flex flex-col  items-left   '>
                <h1 className='text-white rancho text-4xl md:text-6xl '>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-white md:w-[724px] font-thin'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link> <button className='btn rancho md:text-2xl font-thin text-[#242222] rounded-none bg-[#E3B577] border-none'>
                    Learn More
                </button>
                </Link>
            </header>
        </div>
    );
};

export default Hero;