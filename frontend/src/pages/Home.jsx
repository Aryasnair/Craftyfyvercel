import React from 'react'
import Hero from '../compnents/Hero'
import LatestCollection from '../compnents/LatestCollection'
import BestSeller from '../compnents/BestSeller'
import OurPolicy from '../compnents/OurPolicy'
import NewsletterBox from '../compnents/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
