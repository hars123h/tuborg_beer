import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import cpy from '../images/chevron/cpy.jpg';
import compnay_one from '../images/okinawascoters/c1.webp';
import compnay_two from '../images/okinawascoters/c2.jpg';


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
                <div className="heading font-bold mb-1">Dream 11</div>
                <hr />
                <div className="data text-sm mt-2">
                Dream11 is the world’s largest fantasy sports platform with 120 million+ users playing fantasy cricket, football, kabaddi, basketball, hockey, volleyball, handball, rugby, futsal, American football & baseball, on it. Dream11 is the flagship brand of Dream Sports, India’s leading Sports Technology company and has partnerships with several national & international sports bodies and cricketers.    
                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Fan Code</div>
                <hr />
                <div className="data text-sm mt-2">
                FanCode is India’s premier digital sports destination committed to giving all fans a highly personalised experience across sports content, commerce and statistics.
                </div>
            </div>

            <div className="hp_company mt-10">
                <img src={compnay_two} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={240} />
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Dream Game Studios</div>
                <hr />
                <div className="data text-sm mt-2">
                Dream Game Studios is the game development division of Dream Sports, building next-gen realistic AAA sports mobile games. Dream Game Studios' mission is to create deeply engaging, visually stunning, and technically outstanding sports games which go straight to the hearts of the players.
                </div>
            </div>
        </div>
    )
}

export default Company