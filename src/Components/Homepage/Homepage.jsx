import React, {useEffect} from 'react'
import './Homepage.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbApps} from 'react-icons/tb'
import {BsListTask} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Homepage = () => {

  // React hook to create scroll fade animation
  useEffect(()=>{
    Aos.init({duration:2000})
  })

  return (
    <div>
      <section className='home'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Search Your Holiday
            </h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search Your Destination</label>
              <div className="input flex">
                <input type="text" placeholder='Enter Name Here...' />
                <GrLocation className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Search Your Date</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Maximum Price: </label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>

            <div className="searchOptions flex">
              <HiFilter className="icon"/>
              <span>MORE FILTERS</span>
            </div>
          </div>

          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
            <div className="leftIcons">
              <BsListTask className="icon"/>
              <TbApps className="icon"/>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Homepage