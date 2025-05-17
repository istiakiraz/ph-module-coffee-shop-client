import React from 'react';
import { BsCupHot } from 'react-icons/bs';
import { Link } from 'react-router';
import SingleCard from './SingleCard';

const CoffeeCard = ({coffeeData}) => {


    return (
        <div>
            <div className='text-center flex my-16 flex-col space-y-3 items-center'>
                <h4>--- Sip & Savor ---</h4>
                <h2 className='text-5xl mb-4 rancho' style={{
                textShadow:
                  "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15",
              }}>Our Popular Products</h2>
                <Link to='/add-coffee' ><button className='btn rancho border-2 border-[#331a15] text-white font-thin text-xl bg-[#E3B577] hover:bg-white hover:text-[#331a15] flex gap-2' style={{
                textShadow:
                  "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331a15, 0 0 13px #331a15",
              }}>Add Coffee <div className=' text-[#331a15]'><BsCupHot /> </div></button></Link>
            </div>

            <div>
                <div className='grid grid-cols-1 mb-8 md:grid-cols-2 w-7/12 mx-auto gap-5'>
                    {
                        coffeeData.map(coffee=> <SingleCard key={coffee._id} coffee={coffee} ></SingleCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default CoffeeCard;