import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import useInterval from '../hooks/useInterval.js';
import '../styles/record.css';
import axios from 'axios';
import BASE_URL from '../api_url.js';


const nameMapper = {
    confirmed: 'success',
    declined: 'declined',
    pending: 'pending'
}

const Record = () => {
    const navigate = useNavigate();
    const [recharge_list, setRecharge_list] = useState([]);
    const [withdrawal_list, setWithdrawal_list] = useState([]);
    const [currentRecord, setCurrentRecord] = useState('recharges');

    const getFormat = (new_date) => {
        const dte = new Date(new_date);
        const day = dte.getDate();
        const month = dte.getMonth();
        const year = dte.getFullYear();
        const hour = dte.getHours();
        const minutes = dte.getMinutes();
        const seconds = dte.getSeconds();
        //console.log(day, month, year, hour, minutes, seconds);
        return day + "-" + month + "-" + year + " " + hour + "-" + minutes + "-" + seconds;
    }


    const getRecharges_list = async () => {

        const querySnapshot = await axios.post(`${BASE_URL}/get_user_recharges`, { user_id: localStorage.getItem('uid') })
            .then(res => res.data);
        setRecharge_list(querySnapshot);
    }

    const getWithdrawals_list = async () => {
        const querySnapshot = await axios.post(`${BASE_URL}/get_user_withdrawals`, { user_id: localStorage.getItem('uid') })
            .then(res => res.data);
        setWithdrawal_list(querySnapshot);
    }

    // This is the rate at which the polling is done to update and get the new Data
    useInterval(getRecharges_list, 5000);
    useInterval(getWithdrawals_list, 5000);


    useEffect(() => {
        const getRecharges_list = async () => {

            const querySnapshot = await axios.post(`${BASE_URL}/get_user_recharges`, { user_id: localStorage.getItem('uid') })
                .then(res => res.data);
            setRecharge_list(querySnapshot);
        }
        getRecharges_list();
        getWithdrawals_list();
    }, []);
    //[#2e9afe]
    return (
        <div className=' bg-red-800 pb-3 sm:h-[1000px] md:h-screen h-screen'>

            <div className="options text-center text-white flex gap-2 items-center p-2  bg-red-800 text-lg pt-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/mine')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className='flex-grow text-center'>Record</div>
            </div>
            {/* [#bfdbf5] */}
            <div className='flex flex-wrap items-center justify-between py-2 px-4 bg-stone-300 border-b border-white'>
                <div className="relative w-24 ">
                    <input type="date" className="bg-white border-2 border-gray-300 text-gray-900 sm:text-xs rounded-full focus:ring-red-500 focus:border-red-500 block w-full  px-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Select date" />
                </div>
                {/*[#2ea2fc] */}
                <div className='text-md text-gray-600 font-medium ml-3'>to</div>

                <div className="relative w-24 ml-3">
                    <input type="date" className="bg-white border-2 border-gray-300 text-gray-900 sm:text-xs rounded-full focus:ring-red-500 focus:border-red-500 block w-full  px-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Select date" />
                </div>
                {/* [#2e9afe] */}
                <button className='bg-red-900 shadow-lg w-20 text-center  ml-3 text-white rounded-full py-1'>Search</button>
            </div>
            {/* [#bce4ed] */}
            <div className='records w-full flex bg-sky-200 font-normal items-center'>
                <div className={`h-[40px] cursor-pointer flex items-center justify-center w-1/3 text-center ${currentRecord === 'recharges' ? 'border-b-2 border-red-800 text-red-800' : ''}`} onClick={() => setCurrentRecord('recharges')}>Recharge</div>
                <div className={`h-[40px] cursor-pointer flex items-center justify-center w-1/3 text-center ${currentRecord === 'withdrawals' ? 'border-b-2 border-red-800 text-red-800' : ''}`} onClick={() => setCurrentRecord('withdrawals')}>Withdrawls</div>
                <div className={`h-[40px] cursor-pointer flex items-center justify-center w-1/3 text-center ${currentRecord === 'all' ? 'border-b-2 border-red-800 text-red-800' : ''}`} onClick={() => setCurrentRecord('all')}>All Types</div>
            </div>

            {recharge_list === null && (<div className='flex flex-col justify-center items-center'>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="2"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
                <div className='text-lg text-gray-500'>Loading...</div>
            </div>)}

            <div className=' overflow-y-scroll h-[500px] m-5'>
                {(currentRecord === 'recharges' || currentRecord === 'all') && recharge_list && recharge_list.map((element, id) => {
                    // red-800
                    return (
                        <div key={id} className="bg-sky-200 rounded-lg shadow-md p-2 text-white mt-2 mx-2">
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-1'>

                                    <div className='text-red-700 font-[500]'>{getFormat(element.time)}</div>
                                    <div className='text-blue-800'><span className='text-red-800 font-medium'>Ref No. - </span>{element.refno}</div>
                                    <div className='text-blue-800'><span className='text-red-800 font-medium'>Recharge +</span>{new Intl.NumberFormat().format(element.recharge_value)}</div>
                                </div>
                                <div>
                                    <div className='bg-red-300 px-2 py-1 rounded-md text-sm text-white'>{nameMapper[String(element.status)]}</div>
                                </div>

                            </div>
                        </div>
                    )
                })}

                {(currentRecord === 'withdrawals' || currentRecord === 'all') && withdrawal_list && withdrawal_list.map((element, id) => {
                    return (
                        <div key={id} className="bg-sky-200 rounded-lg shadow-md p-2 text-white mt-2 mx-2">
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-red-700 font-[500]'>{getFormat(element.time)}</div>
                                    <div className='text-blue-800'><span className='text-red-800 font-medium'>Withdrawal -</span>{new Intl.NumberFormat().format(element.withdrawalAmount)}</div>
                                </div>
                                <div>
                                    <div className='bg-red-300 px-2 py-1 rounded-md text-sm text-white'>{nameMapper[String(element.status)]}</div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>




        </div>
    )
}

export default Record