import wind_turbines from '../images/wind-turbines.svg';
import wind from '../images/wind.jpg';
import React from 'react';


//[#0096D5] [#00bcd4]


const Card = ({pre_sale, long_plan_state, product_type, product_image, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle, handleClick}) => {
  
 
  return (
    <div className='mx-[2px] shadow-2xl  bg-[#fafff9]  shadow-gray-800 border border-gray-100'>
        {/* <div className="title text-[#464945] font-bold text-lg">{plan_name}</div>         */}
        <div className="info text-xs flex flex-col items-center">
            <img src={product_image} alt="comp_img" className='shadow-xl h-40 w-full mb-1' />
            <div className="title text-blue-600 text-center w-full px-1 ml-1  font-bold text-[16px] mt-3 mb-2">{plan_name}</div>
            {/* {product_type==='long' && (<div className="text-xs font-black px-1 ml-1 w-full  text-orange-500 ">Daily Income, Daily Withdrawals</div>)} */}
            {/* {product_type==='short' && (<div className="text-xs p-1 w-full  text-red-500 font-extrabold">Daily Income, Daily Withdrawals</div>)} */}
            <div className='text-md w-full grid grid-cols-1 p-3 gap-2 text-[#2a0118]'>
              <div className="basic_info text-bold flex justify-start gap-1 bg-red-700 rounded-lg h-[40px] items-center pl-1">
                <div className='font-bold text-white'>Project Amount: </div>
                <div className='text-white font-bold'>&#8377;{new Intl.NumberFormat().format(plan_amount)}</div>
              </div>
              <div className="basic_info  text-bold  flex justify-start gap-1 bg-red-700 rounded-lg h-[40px] items-center pl-1">
                <div className='font-bold text-white'>Daily Earnings: </div>
                <div className='text-white font-bold'>&#8377;{new Intl.NumberFormat().format(plan_daily_earning)}</div>
              </div>
              <div className="basic_info  text-bold  flex justify-start gap-1 bg-red-700 rounded-lg h-[40px] items-center pl-1">
                <div className='font-bold text-white'>Project Cycle:</div> 
                <div className='text-white font-bold'>{plan_cycle} days</div>
              </div>
              <div className="basic_info  text-bold  flex justify-start gap-1 bg-red-700 rounded-lg h-[40px] items-center pl-1">
                <div className='font-bold text-white'>Total Earning: </div>
                <div className='text-white font-bold'>&#8377;{new Intl.NumberFormat().format(plan_cycle*plan_daily_earning)}</div>
              </div>
            </div>

            {/* {(plan_name==='Walton Plan 6' || plan_name==='Walton Plan 7' || plan_name==='Walton Plan 8' )?<div className="cursor-pointer btn text-white text-center p-2 mt-1 text-lg rounded-md  w-4/5 mx-auto bg-red-400"
            >Click to buy</div>: */}

            
        </div>

        {pre_sale === true ? (
        <div className="cursor-pointer btn text-black font-semibold text-center  py-2  px-2 mt-5 text-md mb-2 shadow-md  w-[55%] mx-auto bg-pre_sale">
          Pre-Sale
        </div>
      ) : null}

      {/* {console.log(pre_sale, product_type, long_plan_state)} */}

      {
        pre_sale === false ? (
          product_type === 'long' ? (
            <div className="cursor-pointer btn text-blue-600 font-semibold text-center  py-2  px-2 mt-1 text-md rounded-lg mb-2 shadow-md  w-4/5 mx-auto bg-[#2a0118]"
              onClick={() => handleClick(product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
              Buy Now
            </div>
          ) : (long_plan_state === true) && false ? (
            <div className="cursor-pointer btn text-blue-600 font-semibold text-center  py-2  px-2 mt-1 text-md rounded-lg mb-2 shadow-md  w-4/5 mx-auto bg-[#2a0118]">
              Buy Now
            </div>
          ) : (
            <div className="cursor-pointer btn text-blue-600 font-semibold text-center  py-2  px-2 mt-1 text-md rounded-lg mb-2 shadow-md  w-4/5 mx-auto bg-[#2a0118]"
              onClick={() => handleClick(product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
              Buy Now
            </div>
          )
        ) : null
      }

        {/* <div className="cursor-pointer btn text-white font-semibold text-center  py-2  px-2 mt-1 text-md rounded-lg mb-2 shadow-md  w-4/5 mx-auto bg-[#2a0118]"
            onClick={()=>handleClick(product_type ,plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
            Buy Now
        </div> */}
    </div>
  )
}

export default Card