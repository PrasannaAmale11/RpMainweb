import React from 'react'
import About_Page1 from './Components/AboutUs/About_Page1'
import About_Page2 from './Components/AboutUs/About_Page2'
// import About_Page4 from './Components/AboutUs/About_Page4'
import About_Page3 from './Components/AboutUs/About_Page3'
import About_Page5 from './Components/AboutUs/About_Page5'
import FounderSec  from './Components/AboutUs/FounderSec'
import FounderSecPage2  from './Components/AboutUs/FounderSecPage2'
import Mansvg from './Components/AboutUs/Mansvg'


function About() {
  return (
    <>
      <About_Page1 />
      <About_Page2 />
      <FounderSec/>
      <FounderSecPage2/>
      {/* <About_Page4 /> */}
      <About_Page5 />
      <About_Page3 />
      {/* <Mansvg /> */}
    </>
  )
}

export default About