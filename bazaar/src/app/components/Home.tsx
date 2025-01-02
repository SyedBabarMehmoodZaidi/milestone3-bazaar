import React from 'react'
import Slider from './Slider'
import Category from './Category'
import Featured from './Featured'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Slider />
      <Featured />
      <Category />
      <Testimonials />
    </div>
  )
}

export default Home
