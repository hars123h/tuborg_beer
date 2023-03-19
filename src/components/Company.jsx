import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import cpy from '../images/chevron/cpy.jpg';

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
                <img src={cpy} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={240} />
            </div>

            <div className=" cpy_info sm:w-4/5 lg:w-3/4 mx-auto mt-5">

                {/*  [#2e9afe]*/}
                <div className='shadow-lg text-center bg-white h-10 flex justify-center items-center text-lg font-bold rounded-lg shadow-red-300 text-red-800 '>Company Profile</div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white font-bold mt-4">
                <div className="heading font-bold mb-1">Chevron Oil</div>
                <hr />
                <div className="data text-sm mt-2">
                    Our company has a long, robust history that began when a group of explorers and merchants established the Pacific Coast Oil Co. on September 10, 1879.

                    Since then, our company’s name has changed more than once, but we’ve always retained our founders’ spirit, grit, innovation and perseverance.                   </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our History</div>
                <hr />
                <div className="data text-sm mt-2">
                    between Ventura and San Francisco.

                    a new force enters the region
                    In 1878, Standard Oil Co. opened a three-person, second-story office in San Francisco. Despite its modest trappings, Standard possessed marketing acumen, outstanding products, an aggressive advertising philosophy and financial backing from its New York parent.

                    By 1885, it consolidated its Western interests under its subsidiary, the Standard Oil Co. (Iowa), which controlled distribution stations throughout the West Coast.

                    Lacking Standard Iowa’s marketing savvy and financial clout, PCO in 1900 agreed to be acquired by Standard Oil Co. (New Jersey), while retaining the name of Pacific Coast Oil Co.                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Production Facilities</div>
                <hr />
                <div className="data text-sm mt-2">
                    the first gusher
                    Until now, Standard had left the hunt for oil to others. In 1909, the company decided to gamble on its ability to find its own oil. After several initial failures, the drilling team had its first success on January 22, 1910, when a gusher flowed in at 1,500 barrels a day at the Midway-Sunset Field in Kern County, California.

                    going it alone
                    The company’s expertise in searching for oil became increasingly important as a May 1911 Supreme Court decision separated Standard Oil Co. (California) from its parent company, Standard Oil Co. (New Jersey).

                    Before the end of 1911, Standard Oil Co. (California) added to its refining capacity with the completion of the El Segundo Refinery in Southern California; formed the California Natural Gas Co. to expand its search for natural gas in the San Joaquin Valley and beyond; and constructed a second pipeline linking Richmond and the Kern River Field.     </div>
            </div>

            {/* <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Awards</div>
                <hr />
                <div className="data text-sm mt-2">Walton is the No. 1 Manufacturer and Exporter of Refrigerator, Air Conditioner, LED TV, Mobile Phone, Walton has achieved many international & national awards and recognitions like some recent prestigious and best business awards are: The Golden Globe Tiger Award 2015 in the category of Excellence & Leadership Brand, DHL-Daily Star Bangladesh 15th Business Award 2014 for Best Enterprise in Bangladesh, Asia Best Employer Brand Awards in 2015, Six times 1st Prize for Highest VAT Payer at DITF-2015, 2014, 2013, 2012, 2011 & 2010 respectively, Second Prize for Premier Pavilion Category at DITF-2015, Best Refrigerator Brand Award-2014, Best Television Brand Award-2014, Best Local Brand Award-2014, 1st Prize for Premier Pavilion Category at DITF-2014, The Global Brand excellence Award in 2014 for brand excellence in consumer electronics, 1st Prize for Premier Pavilion Category at DITF-2013, Best Sponsor Award-2012, Creative Media Ltd. BABISAS Award-2012, Best Brand (Refrigerator) Award-2011, 2nd Prize for Premier Pavilion Category at DITF-2011, 2nd Prize for Premier Pavilion Category at DITF-2010, 1st Prize for Premier Pavilion Category at DITF-2009, 1st Prize for Premier Pavilion Category at CITF-2005.
                </div>
            </div> */}

            {/* <div className="part  sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Vision</div>
                <hr />
                <div className="data text-sm mt-2">Along the way, Walton has earned domestic and global recognition for its experience and proven track record in a variety of electronics fields. Walton is the pioneer of developing state of the art designs and modern technology having leading market share specializing in Multi-Stored Refrigerators, Freezers, Air Conditioners, LED/ LCD televisions, Motorcycles, Smart Phones and Home Appliances.Walton is working on carrying the flag of red and green into the global market presence from the present 40 countries to more than 200 countries to dominate Go Global and the top five Electronics Brand of the Globe within 2030.</div>
                <br />
                <br />
            </div> */}

        </div>
    )
}

export default Company