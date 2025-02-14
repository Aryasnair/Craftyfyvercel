import React from 'react'
import Title from '../compnents/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../compnents/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.aboutus} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Craftyfy, we believe that every handmade creation tells a story. Our passion for craftsmanship drives us to bring you unique, beautifully designed, and meticulously handcrafted pieces made with love and creativity. From home décor and jewelry to personalized gifts and accessories, each item is a testament to the artistry and dedication of skilled artisans.</p>
              <p>We celebrate the beauty of imperfections that make handmade crafts truly special. Whether you’re looking for something unique for yourself or a thoughtful gift for a loved one, our collection is designed to inspire and delight.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to promote the art of handcrafted goods while empowering artisans and craft enthusiasts worldwide. ..</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
