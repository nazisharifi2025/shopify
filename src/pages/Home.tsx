import React from 'react'
import HeroSection from '../MyComponent/HeroSection'
import HOMEDECOR from '../MyComponent/HOMEDECOR'
import Card from '../MyComponent/Card'
import Login from '../MyComponent/Login'
import Servisec from '../MyComponent/Servisec'
import ExplorOur from '../MyComponent/ExplorOur'
import Prouduct from '../MyComponent/Prouduct'
import Sleeck from '../MyComponent/sleeck'
function Home() {
  return (
    <div>
    <HeroSection/>
    <HOMEDECOR/>
    <Servisec/>
    <ExplorOur/>
    <Prouduct/>
    <Sleeck/>
    <Card/>
    <Login/>
    </div>
  )
}

export default Home