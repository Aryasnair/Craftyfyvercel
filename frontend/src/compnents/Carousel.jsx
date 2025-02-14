import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import the fade effect CSS

const Carousel = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000 }}
            effect="fade" // Add fade effect
            speed={1000} // Transition speed in milliseconds
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        className='w-full h-full object-cover'
                        src={image}
                        alt={`Carousel Image ${index + 1}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;