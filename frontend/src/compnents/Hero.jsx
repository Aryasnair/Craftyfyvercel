import React from 'react';
import { assets } from '../assets/assets';
import Carousel from './Carousel'; // Import the Carousel component

const Hero = () => {
    // Array of images for the carousel
    const carouselImages = [
        assets.heroimage1,
        assets.heroimage2, // Add more images as needed
        assets.heroimage3,
    ];

    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p style={{ color: '#FF3333' }} className='font-medium text-[18px] md:text-[29px]'>"Where Every Piece Tells a Story."</p>
                    </div>
                    {/* <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1> */}
                    {/* <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div> */}
                </div>
            </div>

            {/* Hero Right Side - Carousel */}
            <div className='w-full sm:w-1/2'>
                <Carousel images={carouselImages} /> {/* Use the Carousel component */}
            </div>
        </div>
    );
};

export default Hero;