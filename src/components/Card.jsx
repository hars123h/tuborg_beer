import wind_turbines from '../images/wind-turbines.svg';
import wind from '../images/wind.jpg';
import React from 'react';


//[#0096D5] [#00bcd4]


const Card = ({product_type, product_image, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle, handleClick}) => {
  
 
  return (
    <div className='mx-2 shadow-2xl  bg-[#fafff9]  shadow-gray-800 border border-gray-100'  onClick={()=>handleClick(product_type ,plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
        {/* <div className="title text-[#464945] font-bold text-lg">{plan_name}</div>         */}
        <div className="info text-xs flex flex-col items-center">
            <img src={product_image} alt="comp_img" className='shadow-xl h-44 w-full mb-1' />
            <div className="title text-red-800 w-full px-1 ml-1  font-bold text-lg">{plan_name}</div>
            {product_type==='long' && (<div className="text-xs font-black px-1 ml-1 w-full  text-orange-500 ">Daily Income, Daily Withdrawals</div>)}
            {/* {product_type==='short' && (<div className="text-xs p-1 w-full  text-red-500 font-extrabold">Daily Income, Daily Withdrawals</div>)} */}
            <div className='text-md w-full grid grid-cols-2 p-3 gap-2'>
              <div className="basic_info text-bold flex justify-start gap-1">
                <div className=''>Project Amount: </div>
                <div className=' font-bold'>&#8377;{new Intl.NumberFormat().format(plan_amount)}</div>
              </div>
              <div className="basic_info  text-bold  flex justify-start gap-1">
                <div className=''>Daily Earnings: </div>
                <div className=' font-bold'>&#8377;{new Intl.NumberFormat().format(plan_daily_earning)}</div>
              </div>
              <div className="basic_info  text-bold  flex justify-start gap-1">
                <div className=''>Project Cycle:</div> 
                <div className=' font-bold'>{plan_cycle} days</div>
              </div>
              <div className="basic_info  text-bold  flex justify-start gap-1">
                <div className=''>Total Earning: </div>
                <div className=' font-bold'>&#8377;{new Intl.NumberFormat().format(plan_cycle*plan_daily_earning)}</div>
              </div>
            </div>

            {/* {(plan_name==='Walton Plan 6' || plan_name==='Walton Plan 7' || plan_name==='Walton Plan 8' )?<div className="cursor-pointer btn text-white text-center p-2 mt-1 text-lg rounded-md  w-4/5 mx-auto bg-red-400"
            >Click to buy</div>: */}

            
        </div>
        {/* <div className="cursor-pointer btn text-white font-extrabold text-center  py-1  px-2 mt-1 text-md rounded-full shadow-md  w-4/5 mx-auto bg-cyan-400"
            onClick={()=>handleClick(product_type ,plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
            Invest
        </div> */}
    </div>
  )
}

export default Card