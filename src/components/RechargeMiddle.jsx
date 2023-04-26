import React, { useEffect, useState } from 'react';
import { useContext, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AmountContext } from '../App';
import amazon from '../images/okinawascoters/ologo.jpg';


const Recharge = () => {

    const { recharge_value } = useParams();
    const navigate = useNavigate();
    const amountDetails = useContext(AmountContext);
    const [toasterShow, setToasterShow] = useState(false);
    const [toasterText, setToasterText] = useState('');
    const valueRef = useRef();

    const toaster = (text) => {
        setToasterText(text);
        setToasterShow(true);
        setTimeout(() => {
            setToasterShow(false);
            //navigate('/mine');
        }, 5000);
    }

    useEffect(() => {
        document.body.style.backgroundColor = "white";
    }, []);

    
    //[#2e9afe] #4daaff #298ae4 [#2e9afe]
    return (
        <div className='bg-recharge-bg relative'>
            {toasterShow ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 bg-black opacity-100 text-white px-2 py-1 rounded-md'>
                    <div>{toasterText}</div>
                </div>
            </div> : null}

            <div className="options text-center mx-3 mb-3 mt-[80px] text-white flex  bg-red-800 text-md  font-normal py-3 items-center px-2">
                {/* <svg xmlns="http://www.w3.org/2000/svg"
                        onClick={() => navigate(-1)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg> */}
                <div className='flex-grow font-semibold'>Recharge</div>
            </div>

            <div style={{boxShadow:"0 0 0 3px #e1e3e8"}} className="box bg-white text-gray-800 px-4 py-4 mx-3">

                <div className='font-[500]'>Please select payment channel</div>
                <div className="flex flex-col mt-5 px-1 gap-3">
                    <div onClick={()=>navigate(`/recharge_window/${recharge_value}`)} className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src={amazon} className="w-[50px] h-[50px] rounded-md" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Okinawascoters UPI-1 <span className='text-white font-semibold py-[2px] px-[3px] bg-red-500 rounded-md ml-1 text-[12px]'>HOT</span></div>
                                <div className='text-xs text-gray-500'>Okinawascoters UPI-1</div>
                            </div>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>

                    <hr />

                    <div onClick={()=>navigate(`/recharge_window/${recharge_value}`)} className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src={amazon} className="w-[50px] h-[50px] rounded-md" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Okinawascoters UPI-2 </div>
                                <div className='text-xs text-gray-500'>Okinawascoters UPI-2</div>
                            </div>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>

                    <hr />

                    <div onClick={()=>navigate(`/recharge_window/${recharge_value}`)} className="flex flex-row items-center gap-1 justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img src={amazon} className="w-[50px] h-[50px] rounded-md" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Okinawascoters UPI-3</div>
                                <div className='text-xs text-gray-500'>Okinawascoters UPI-3</div>
                            </div>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Recharge