import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tuborg_slide1 from '../images/tuborg_slide1.jpg';
import tuborg_slide2 from '../images/tuborg_slide2.jpg';
import tuborg_slide3 from '../images/tuborg_slide3.jpg';

// import slide1 from '../images/chevron/slide1.jpg';
// import slide2 from '../images/chevron/slide2.jpg';
// import slide3 from '../images/chevron/slide3.jpg';

import slide1 from '../images/okinawascoters/oslide1.jpg';


const Slider = () => {
  return (
    <div className='sm:w-3/5 lg:w-3/5 mx-auto '>
      <Carousel showThumbs={false} autoPlay showArrows={true} infiniteLoop>
        <div>
          <img src={slide1} className="h-[200px]" alt="img_3" />
        </div>
        {/* <div>
          <img src={slide2} className="h-[200px]" alt="img_2" />
        </div>

        <div>
          <img src={slide3} className="h-[200px]" alt="img_1" />
        </div> */}

      </Carousel>
    </div>
  )
}

export default Slider;
