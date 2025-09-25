import React from 'react'
import HeroSection from '../MyComponent/HeroSection'
import HOMEDECOR from '../MyComponent/HOMEDECOR'
import Card from '../MyComponent/Card'
import Login from '../MyComponent/Login'
function Home() {
  return (
    <div>
    <HeroSection/>
    <HOMEDECOR/>
    <Card/>
    <Login/>
    </div>
  )
}

export default Home