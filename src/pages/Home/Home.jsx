import React from 'react'
import FeaturedOn from '../../components/FeaturedOn/FeaturedOn'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Contact from '../Contact/Contact'

const Home = () => {
  document.title = 'Wildlife Grapher - Home'
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedOn />
      <Contact />
    </div>
  )
}

export default Home