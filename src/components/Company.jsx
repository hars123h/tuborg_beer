import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';

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
                <img src={tuborg_company} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={240}/>
            </div>

            <div className=" cpy_info sm:w-4/5 lg:w-3/4 mx-auto mt-5">

                {/*  [#2e9afe]*/}
                <div className='shadow-lg text-center bg-white h-10 flex justify-center items-center text-lg font-bold rounded-lg shadow-red-300 text-red-800 '>Company Profile</div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white font-bold mt-4">
                <div className="heading font-bold mb-1">Tuborg</div>
                <hr />
                <div className="data text-sm mt-2">
                    The name Tuborg comes from Thuesborg ("Thue's castle"), a Copenhagen inn from the 1690s situated in the area of the brewery. This evolved and was adopted into local placenames, such as Lille Tuborg and Store Tuborg.[2] Tuborgvej in Copenhagen is named after the site of the original Tuborg brewery.                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our History</div>
                <hr />
                <div className="data text-sm mt-2">
                    Philip Heyman (5 November 1837 – 15 December 1893) was a Danish-Jewish industrialist who co-founded in 1873 the Tuborg Brewery, together with C. F. Tietgen, Gustav Brock [da] and Rudolph Puggaard. After Heyman's death, the Tuborg Brewery merged with "De Forenede Bryggerier" in 1894,[citation needed] which through this way entered into a profit-sharing agreement with Carlsberg in 1903.[citation needed] In the company, after the founder's death, the CEO was his Jewish son-in-law, Benny Dessau, and was then run by his widow and also his son Aage Philip Heyman.                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Production Facilities</div>
                <hr />
                <div className="data text-sm mt-2">
                    The Pilsner Grøn Tuborg is one of Denmark's most popular beers, and the international version of the beer also does well in around 70 countries, especially Turkey, Sweden and Germany and a total growth of 17% in 2006. April 2007, Tuborg was launched on the competitive British market. Tuborg is the largest licensed beer brand in Russia.

                    In Denmark, Tuborg is brewed by Carlsberg Denmark, and is available in approximately 10 types, while abroad it is mostly only covered by Gold Tuborg and Green Tuborg.                </div>
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