import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import amaz_slide1 from '../images/amaz_slide1.jpg'
import amaz_slide2 from '../images/amaz_slide2.jpg'
import amaz_slide3 from '../images/amaz_slide3.jpg'
import asset14 from '../images/assets2/asset14.jpg';
import tuborg_logo from '../images/tuborg_logo.svg';


const Slider = () => {
  return (
    <div className='sm:w-3/5 lg:w-3/5 mx-auto '>
      <Carousel showThumbs={false} autoPlay showArrows={true} infiniteLoop>
        <div>
          <img src={tuborg_logo} className="h-[200px]" alt="img_2" />
        </div>
        <div>
          <img src={tuborg_logo} className="h-[200px]" alt="img_2" />
        </div>

        <div>
          <img src={tuborg_logo} className="h-[200px]" alt="img_1" />
        </div>

      </Carousel>
    </div>
  )
}

export default Slider;
