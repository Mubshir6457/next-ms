'use client'
import Image from 'next/image'
import FeaturedCoures from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'

import Instucter from '@/components/Instucter'
import MusicTestmotion from '@/components/Testmotion'
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
      <Instucter/>
      <Footer/>
      
      
      
      
    </main>
  )
}

export default page
