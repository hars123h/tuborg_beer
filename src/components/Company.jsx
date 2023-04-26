import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import cpy from '../images/chevron/cpy.jpg';
import compnay_one from '../images/okinawascoters/company_one.png';
import compnay_two from '../images/okinawascoters/company_two.png';


const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-red-800 h-full p-2'>
            {/* [#2e9afe] */}
            <div className="options text-center text-white  items-center text-lg flex font-medium ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>

            <div className="hp_company mt-10">
                <img src={compnay_one} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={240} />
            </div>

            <div className=" cpy_info sm:w-4/5 lg:w-3/4 mx-auto mt-5">

                {/*  [#2e9afe]*/}
                <div className='shadow-lg text-center bg-white h-10 flex justify-center items-center text-lg font-bold rounded-lg shadow-red-300 text-red-800 '>Company Profile</div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white font-bold mt-4">
                <div className="heading font-bold mb-1">Okinawascoters</div>
                <hr />
                <div className="data text-sm mt-2">
                    Crafting of New Technology Begins Here – Okinawa IPR
                    Our engineers work in a world-class factory where international quality and safety standards are followed to manufacture best quality eco-friendly vehicles. From the beginning to the final finishing, every product goes through more stringent durability and reliability tests than it facts in reality. As a result, the customer gets a complete package which includes technology, quality, comfort, style, affordability and eco-friendliness.    </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">ENGINEERING THE FUTURE</div>
                <hr />
                <div className="data text-sm mt-2">
                    When world-class engineers meet world-class manufacturing technologies, you can be sure that you get nothing less than world-class quality and safety with each electric scooter that rolls out. From beginning to end, no compromises are made when it comes to ensuring quality and environmental safety. Stringent durability and reliability tests, at far more extreme conditions than real-life situations are carried out. Because when you ride an Okinawa scooter, you should settle for nothing less than the best in comfort, style, affordability, and eco-friendliness.
                </div>
            </div>

            <div className="hp_company mt-10">
                <img src={compnay_two} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={240} />
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Technology By Okinawa</div>
                <hr />
                <div className="data text-sm mt-2">
                    Creating Innovation in the field of EV Technology
                    IPR (Intellectual Property Rights)

                    Micro processor controller for electric two wheeler
                    Permanent magnet BLDC motor for electric two wheeler
                    NMC Lithium Ion Battery with battery management system
                    India is on the fast track of growth. And the modern Indian needs a machine that can match the pace and make every ride comfortable and enjoyable while enabling him to do his bit for the environment. So, each day at Okinawa is spent innovating ways to build machines that leave a mark. Because a quality innovation is one that increases the joy, decreases the effort, and minimizes the emission.
                </div>
            </div>


            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Tacita</div>
                <hr />
                <div className="data text-sm mt-2">
                    Okinawa has entered into a joint venture with TACITA, an Italian manufacturer of electric and performance motorcycles. The new company, born from the joint venture, will be based in India and will begin production from 2023. The goal for both companies is to offer extremely reliable, pleasant and usable products for maximum customer satisfaction.
                    Tacita® is an Italian company founded in 2009, to design and manufacture high-performance electric motorcycles that are innovative and unique in its characteristics. Motorcycles that respect the environment and the people around them. With its  goal  to build the perfect electric motorcycle, which  gives tough competition to the  traditional motorcycles, by providing  sensations of pure riding, with the advantage of being driven by a completely “zero emission” electric motor.  Tacita’s® commitment is focused on research, engineering and design, to create Italian bikes with  unique temperament.
                    We being the market leader in the Electric – 2 – Wheeler segment ,will provide the local development of the future product & the production in our second state- of -the art manufacturing facility in Rajasthan ,owing to our years of experience in manufacturing & selling of electric- 2 -wheelers in India . Tacita will provide the powertrain – controller, motor, battery packs and BMS . This JV will introduce two product lines : scooters and motorcycles – for domestic and international markets .
                </div>
            </div>


        </div>
    )
}

export default Company