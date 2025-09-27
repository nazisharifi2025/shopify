import React from 'react'
import HeroSection from '../MyComponent/HeroSection'
import HOMEDECOR from '../MyComponent/HOMEDECOR'
import Card from '../MyComponent/Card'
import Login from '../MyComponent/Login'
import Servisec from '../MyComponent/Servisec'
import ExplorOur from '../MyComponent/ExplorOur'
import Prouduct from '../MyComponent/Prouduct'
import Roomsection from '../MyComponent/Roomsection'
import AboutPart from '../MyComponent/Aboutpart'
import Blogpart from '../MyComponent/Blogpart'
import Footer from '../MyComponent/Footer'
function Home() {
  return (
    <div>
    <HeroSection/>
    <HOMEDECOR/>
    <Servisec/>
    <ExplorOur/>
    <Prouduct/>
    <Roomsection/>
    <AboutPart/>
    <Blogpart/>
    <Card/>
    <Login/>
    <Footer/>
    </div>
  )
}

export default Home