'use client'

import FeaturedCoures from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'

import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import Testmotion from '@/components/Testmotion'





const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07]'>
      <HeroSection/>
      <FeaturedCoures/>
      <WhyChooseUs/>
      <FeaturedWebinars/>
      <Testmotion/>
    
    
      <Footer/>
      
      
      
      
      
    </main>
  )
}

export default page
