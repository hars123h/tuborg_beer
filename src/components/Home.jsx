import React, { useEffect, useLayoutEffect, useState } from 'react';
import Slider from './Slider';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';
import headset1 from '../images/headset1.png';
import ubon_home from '../images/ubon_home.png';
import ubon_user from '../images/ubon_user.png';
import ubon_group from '../images/ubon_group.png';
import book_image from '../images/book_image.png';
import recharge_image from '../images/recharge_image.png';
import invite_image from '../images/invite_image.png';
import { useContext } from 'react';
import { AmountContext } from '../App.js';
import money_bag from '../images/money_bag.png';
import axios from 'axios';
import BASE_URL from '../api_url';
import amaz_logi from '../images/amaz_logi.png';

import amaz_big1 from '../images/amaz_big1.jpg';
import amaz_big2 from '../images/amaz_big2.png';
import amaz_big3 from '../images/amaz_big3.jpg';
import amaz_big4 from '../images/amaz_big4.jpg';
import amaz_big5 from '../images/amaz_big5.jpg';

import amaz_short1 from '../images/amaz_short1.jpg';
import amaz_short2 from '../images/amaz_short2.jpg';
import amaz_short3 from '../images/amaz_short3.jpg';
import amaz_short4 from '../images/amaz_short4.jpg';
import { VolumeUpOutlined } from '@material-ui/icons';
import new_invite_image from '../images/new_invite_image.png';
import invite_bg from '../images/invite_bg.png';
import windharvester_logo from '../images/windharvester_logo.png';
import rent from '../images/rent.png';
import financial from '../images/financial.png';
import make_money from '../images/make_money.png';
import dividend from '../images/dividend.png';
import wind1 from '../images/wind1.jpg';
import wind2 from '../images/wind2.jpg';
import wind3 from '../images/wind3.jpg';
import wind4 from '../images/wind4.jpg';
import asset0 from '../images/assets2/asset 0.png';
import asset1 from '../images/assets2/asset 1.png';
import asset2 from '../images/assets2/asset 2.png';
import asset3 from '../images/assets2/asset 3.png';
import asset4 from '../images/assets2/asset 4.png';
import asset5 from '../images/assets2/asset 5.png';
import asset6 from '../images/assets2/asset 6.png';
import asset7 from '../images/assets2/asset 7.png';

import tuborg1 from '../images/tuborg1.jpg';
import tuborg2 from '../images/tuborg2.jpg';
import tuborg3 from '../images/tuborg3.jpg';
import tuborg4 from '../images/tuborg4.jpg';
import tuborg5 from '../images/tuborg5.jpg';
import tuborg6 from '../images/tuborg6.jpg';

import item1 from '../images/chevron/item1.jpg';
import item2 from '../images/chevron/item2.jpg';
import item3 from '../images/chevron/item3.jpg';
import item4 from '../images/chevron/item4.jpg';
import item5 from '../images/chevron/item5.jpg';
import item6 from '../images/chevron/item6.jpg';
import item7 from '../images/chevron/item7.jpg';

import p1 from '../images/okinawascoters/p1.png';
import p2 from '../images/okinawascoters/p2.png';
import p3 from '../images/okinawascoters/p3.png';
import p4 from '../images/okinawascoters/p4.png';
import p5 from '../images/okinawascoters/p5.png';
import p6 from '../images/okinawascoters/p6.png';
import p7 from '../images/okinawascoters/p7.png';
import p8 from '../images/okinawascoters/p8.png';

import w1 from '../images/okinawascoters/w1.png';
import i1 from '../images/okinawascoters/i1.png';
import w2 from '../images/okinawascoters/w2.png';
import h1 from '../images/okinawascoters/h1.png';
import home from '../images/okinawascoters/home.png';
import download from '../images/okinawascoters/download.png';
import user from '../images/okinawascoters/user.png';
import mine from '../images/okinawascoters/mine.png';
import pro from '../images/okinawascoters/pro.jpg';
import m1 from '../images/okinawascoters/m1.png';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        overflow: 'hidden',
        position: 'relative',
        width: '95%',
        border: 'none',
        backgroundColor: 'transparent'

    },
};

const customStyles2 = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
        border: 'none',
        padding: 0,
        width: '98%',
        borderRadius: "15px"
    },
};


const Home = () => {

    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);
    const [currPlan, setCurrPlan] = React.useState(null);
    const [currentVisible, setCurrentVisible] = React.useState('big');
    const [userDetails, setUserDetails] = React.useState({
        balance: 0, recharge_amount: 0, earning: 0
    });
    const amountDetails = useContext(AmountContext);
    const [toasterShow, setToasterShow] = useState(false);
    const [welcomeShow, setWelcomeShow] = useState(false);
    const [toasterText, setToasterText] = useState('');
    const [originalwpwd, setOriginalwpwd] = useState(null);
    const [originalpwd, setOriginalpwd] = useState(null);
    const [planPurchaseShow, setPlanPurchaseShow] = useState(false);
    const [balanceIndicator, setBalanceIndicator] = useState(false);

    const toaster = (text, arg = '') => {
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        if (text === 'Plan purchased!') {
            setTimeout(() => {
                navigate('/project');
            }, 2000);
        } else {
            setToasterText(text);
            setToasterShow(true);
            setTimeout(() => {
                setToasterShow(false);
                //navigate('/mine');
                if (arg !== '') {
                    navigate('/project');
                }
            }, 2000);
        }
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const getUserDetails = async () => {
        await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            if (data) {
                setUserDetails(data);
                setOriginalwpwd(data.wpwd);
                setOriginalpwd(data.pwd);
                localStorage.setItem('user_invite', data.user_invite);
            } else {
                //console.log('Data not found');
            }
        }).catch(error => console.log('Some error occured', error));
    }

    useEffect(() => {
        if (localStorage.getItem('pop_up_closed') === null) {
            setWelcomeShow(true);
        }
    }, []);

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#7c925e";
        getUserDetails();
    }, []);

    const closeModal = async (action) => {
        if (action === 'cancel') {
            setIsOpen(false);
        } else if (quantity <= 0) {
            toaster('Please a positive value!');
        } else {
            if ((Number(quantity) * Number(currPlan.plan_amount)) > Number(userDetails.balance)) {
                //toaster("The available balance is insufficient, please recharge");
                setBalanceIndicator(true);
                setTimeout(() => {
                    setBalanceIndicator(false);
                }, 3000);
            } else {
                await axios.post(`${BASE_URL}/purchase`, {
                    balance: Number(userDetails.balance) - Number(Number(quantity) * Number(currPlan.plan_amount)),
                    boughtLong: (currPlan.product_type === 'long' ? 1 : 0),
                    boughtShort: (currPlan.product_type === 'short' ? 1 : 0),
                    user_id: localStorage.getItem('uid'),
                    plans_purchased: {
                        ...currPlan,
                        quantity: quantity,
                        date_purchased: new Date().toDateString(),
                        date_till_rewarded: new Date().toDateString(),
                        time: new Date().toDateString(),
                        ddmmyy: new Date().getMilliseconds()
                    }
                }).then(() => {
                    console.log('Product successfully purchased');
                    toaster('Plan purchased!', '/project');
                    setPlanPurchaseShow(true);
                }).catch((error) => {
                    console.log('Some error occured', error);
                    toaster('Some error occured, try again after some time');
                })
            }
            setIsOpen(false);
        }
    }

    const isBetween = () => {
        var startTime = '9:00:00';
        var endTime = '22:00:00';

        var currentDate = new Date()

        var startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        var endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);


        var valid = startDate < currentDate && endDate > currentDate;
        //console.log(valid);
        return valid;
    }

    const handleClick = (product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle) => {
        setCurrPlan({ product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle });
        openModal();
    }

    return (
        <div className='relative bg-red-800 px-1'>
            {toasterShow ? <div className='w-[90%] absolute z-50 top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 text-center bg-black opacity-80 text-white px-4 py-1 rounded-md'>
                    <div>{toasterText}</div>
                </div>
            </div> : null}

            {planPurchaseShow ? <div className='absolute w-[65%]  top-[450px] rounded-lg shadow-xl  z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col justify-center gap-3 h-[180px] shadow-2xl border border-gray-300 items-center bg-white w-full text-red-800 rounded-xl'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='text-2xl font-extrabold'>Successful Purchase</div>
                </div>
            </div> : null}

            <div >
                <ReactModal
                    isOpen={balanceIndicator}
                    style={customStyles2}
                    contentLabel="Not enough balance"
                    ariaHideApp={false}
                >
                    <div className='relative bg-black text-center text-white opacity-80 p-2 w-full rounded-md '>
                        The available balance is insufficient, please recharge
                    </div>
                </ReactModal>
            </div>



            <Slider />
            <div >
                <ReactModal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Enter Project Quantity"
                    ariaHideApp={false}
                >

                    <div className='relative bg-white p-2 w-full rounded-sm '>
                        <div
                            onClick={() => closeModal('cancel')}
                            className='absolute  right-[-10px] top-[-10px] bg-white font-extrabold  w-10 h-10 text-white  flex justify-center items-center rounded-full'>
                            <div className='bg-slate-500 grid place-items-center w-7 h-7 rounded-full text-center text-sm text-white'>
                                <div>&#x2715;</div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-gray-600 mb-3 mt-2 text-sm mr-5 font-semibold'>Are you sure you want to buy this plan?</h1>

                            <div className='flex justify-end pt-2'>
                                <button onClick={() => closeModal('ok')} className='bg-red-800 rounded-sm text-[#1d0110] px-2 py-1   w-[64px]'>Yes</button>
                                <button onClick={() => closeModal('cancel')} className='border border-gray-300 rounded-sm text-[#1d0110]  px-2 py-1   w-[64px] ml-2'>No</button>
                            </div>
                        </div>
                    </div>
                </ReactModal>
            </div>

            <div>
                <ReactModal
                    isOpen={welcomeShow}
                    style={customStyles2}
                    contentLabel="Notice"
                    ariaHideApp={false}
                >
                    <div className='w-full rounded-lg shadow-xl z-10 '>
                        <div className='flex  flex-col bg-white w-full text-white rounded-xl bg'>
                            <div className='bg-red-800 text-center p-3 text-lg shadow-md text-white'>Notice</div>
                            <div className='flex flex-col p-2 text-black text-md gap-2 font-[500] bg-white pt-4 pb-[100px]'>
                                <div>
                                    <div>  Dream11 में आपका स्वागत है</div>
                                    <div>Dream11 ऐप भारत में भरोसेमंद लॉन्ग-टर्म इनकम ऐप है</div>
                                    <div>100RS भेजने के लिए रजिस्टर करें</div>
                                    <div>दैनिक आय दैनिक निकासी</div>
                                    <div>आरआरआई एपीपी में पैसा बनाने के कई तरीके हैं, पैसा बनाने के लिए निवेश करना, सदस्यों को पैसा बनाने के लिए आमंत्रित करना और रेफरल कमीशन 30% जितना अधिक है। टीम की संख्या एक निश्चित संख्या तक पहुँचने के बाद, ग्राहक सेवा से संपर्क करें और दैनिक वेतन का 5% प्राप्त करें</div>
                                    <div>अपने अनन्य लिंक को कॉपी करें, इसे अपने सामाजिक मंडली और सामाजिक मंच पर साझा करें, और आपको स्रोत से समृद्ध आय प्राप्त होगी। दीर्घकालिक प्रभावी, दीर्घकालिक लाभ</div>
                                    <div>अभी कार्य करें और अपने आप को अमीर बनाएं</div>
                                </div>
                            </div>
                            <div className='border-t border-gray-600 my-1'></div>
                        </div>
                        <div className='flex justify-end pb-2'>
                            <button className='text-center w-16 m-1 text-black font-semibold p-1 bg-gray-800'
                                onClick={(e) => {
                                    setWelcomeShow(false);
                                    localStorage.setItem('pop_up_closed', 1);
                                }}>
                                Ok
                            </button>
                        </div>
                    </div>
                </ReactModal>
            </div>

            {/*Marquee Implementation*/}
            {/* <div className="bg-red-800 rounded-md items-center px-2 text-white relative flex overflow-x-hidden h-12 mx-auto mt-2 border-2 border-gray-100 sm:w-3/5 lg:w-3/5 overflow-y-hidden">
                <div>
                    <VolumeUpOutlined />
                </div>
                <div className="py-12 animate-marquee flex flex-col whitespace-nowrap">
                    <span className="mx-4 text-sm">91915***05 Member withdrawl 100000 Rs</span>
                    <span className="mx-4 text-sm">91702***84 Member withdrawl 30000 Rs</span>
                    <span className="mx-4 text sm">91827***42 Member withdrawl 2000 Rs</span>
                    <span className="mx-4 text sm">91770***28 Member withdrawl 500 Rs</span>
                    <span className="mx-4 text sm">91983***17 Member withdrawl 100000 Rs</span>
                </div>
            </div> */}

            {/*Navigation bar */}

            <div className="bg-red-800  text-[#2a0118] relative flex justify-around overflow-x-hidden  mx-auto px-[2px]  mt-2  sm:w-3/5 lg:w-3/5 overflow-y-hidden">
                <div className="flex flex-col items-center gap-2">
                    <div className='text-[14px]'>Assets</div>
                    <div className='font-bold text-[25px]'>{Math.round(userDetails.balance)}</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className='text-[14px]'>Recharge</div>
                    <div className='font-bold text-[25px]'>{Math.round(userDetails.recharge_amount)}</div>
                </div>

                <div className="flex flex-col items-center gap-2 ">
                    <div className='text-[14px]'>Income</div>
                    <div className='font-bold text-[25px]'>{Math.round(userDetails.earning)}</div>
                </div>
            </div>

            <div className="  text-[#3b240b] relative flex overflow-x-hidden  mx-auto mt-2 sm:w-3/5 lg:w-3/5 overflow-y-hidden">
                <div className="bg-white flex flex-row justify-around items-center w-full py-2 mx-2">

                    <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                        <img src={w1} alt="recharge" className='w-10' onClick={() => navigate('/recharge')} />
                        <div className='text-[12px] font-[700]'>Recharge</div>
                    </div>

                    <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                        <img src={i1} alt="invite" className='w-10 mr-2' onClick={() => navigate('/invite')} />
                        <div className='text-[12px] font-[700]'>Invite</div>
                    </div>

                    <a href="https://telegram.me/chevronoil55" className=' no-underline  cursor-pointer'>
                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                            <img src={h1} alt="recharge" className='w-10' />
                            <div className='text-[12px] font-[700]'>Online</div>
                        </div>
                    </a>

                    <div onClick={() => isBetween() || true ?
                        navigate('/withdrawal', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } }) : toaster('You are not in the withdrawl time window')
                    }
                        className='cursor-pointer mx-2 flex flex-col justify-center items-center'>
                        <img src={w2} alt="online" className='w-10' />
                        <div className='text-[12px] font-[700]'>Withdrawl</div>
                    </div>

                </div>
            </div>

            {/* <div className='bg-red-800 text-md text-white flex mt-1 items-center shadow-lg  mb-2 sm:w-3/5 lg:w-3/5 mx-auto'>
                <div className={`w-1/2 text-center bg-white  py-4 ${currentVisible === 'big' ? ' bg-red-800' : 'text-red-800 font-bold'}`} onClick={() => setCurrentVisible('big')}>Normal Okinawascoters</div>
                <div className={`w-1/2 text-center bg-white py-4 ${currentVisible === 'short' ? ' bg-red-800 ' : 'text-red-800 font-bold'}`} onClick={() => setCurrentVisible('short')}>VIP Okinawascoters</div>
            </div> */}

            {/*Plans Cards*/}
            <div className={`card_grid grid grid-cols-1 sm:w-3/5 lg:w-3/5 w-[97%] mx-auto mt-2 ${currentVisible === 'big' ? 'mb-1' : ''}`}>

                {(currentVisible === 'big' || true) && (
                    <div className='grid grid-cols-1'>
                        {userDetails && amountDetails?.plan_state && (
                            <div className='grid grid-cols-2 gap-1 pb-[60px]'>
                                {(userDetails.boughtLong < 1 || amountDetails.plan_state[0] === 0) ?
                                    (<span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[0] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 1"} plan_cycle={3} plan_daily_earning={400} plan_amount={700} plan_type={'Short Plan'} />
                                    </span>) :
                                    (<span className=''>
                                        <Card pre_sale={amountDetails.plan_state[0] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 1"} plan_cycle={3} plan_daily_earning={400} plan_amount={700} plan_type={'Short Plan'} />
                                    </span>
                                    )}

                                {userDetails && (amountDetails.plan_state[0] === 1) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[1] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 2"} plan_cycle={365} plan_daily_earning={210} plan_amount={800} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[1] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 2"} plan_cycle={365} plan_daily_earning={210} plan_amount={800} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[2] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[2] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 3"} plan_cycle={365} plan_daily_earning={470} plan_amount={1800} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[2] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 3"} plan_cycle={365} plan_daily_earning={470} plan_amount={1800} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[3] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[3] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 4"} plan_cycle={365} plan_daily_earning={950} plan_amount={4000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[3] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 4"} plan_cycle={365} plan_daily_earning={950} plan_amount={4000} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[4] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[4] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 5"} plan_cycle={365} plan_daily_earning={1800} plan_amount={5500} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[4] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 5"} plan_cycle={365} plan_daily_earning={1800} plan_amount={5500} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[5] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[5] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 6"} plan_cycle={365} plan_daily_earning={3000} plan_amount={10000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[5] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 6"} plan_cycle={365} plan_daily_earning={3000} plan_amount={10000} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[6] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[6] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 7"} plan_cycle={365} plan_daily_earning={10000} plan_amount={30000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[6] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 7"} plan_cycle={365} plan_daily_earning={10000} plan_amount={30000} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {userDetails && (amountDetails.plan_state[7] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card pre_sale={amountDetails.plan_state[7] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 8"} plan_cycle={365} plan_daily_earning={20000} plan_amount={50000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card pre_sale={amountDetails.plan_state[7] === 0} long_plan_state={userDetails.boughtLong < 1} product_type={"long"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 8"} plan_cycle={365} plan_daily_earning={20000} plan_amount={50000} plan_type={'Big Plan'} />
                                    </span>
                                )}

                                {/* {userDetails && (amountDetails.plan_state[6] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={item7} handleClick={handleClick} plan_name={"Dream11 7"} plan_cycle={60} plan_daily_earning={33000} plan_amount={76000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={item7} handleClick={handleClick} plan_name={"Dream11 7"} plan_cycle={60} plan_daily_earning={33000} plan_amount={76000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}

                                {/* {userDetails && (amountDetails.plan_state[7] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={tuborg4} handleClick={handleClick} plan_name={"Windharvester 8"} plan_cycle={365} plan_daily_earning={2500} plan_amount={35000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={tuborg4} handleClick={handleClick} plan_name={"Windharvester 8"} plan_cycle={365} plan_daily_earning={2500} plan_amount={35000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}

                                {/* {userDetails && (amountDetails.plan_state[8] === 0) ? (
                                    <span className='pointer-events-none'>
                                        <Card product_type={"long"} product_image={tuborg5} handleClick={handleClick} plan_name={"Windharvester 9"} plan_cycle={365} plan_daily_earning={4000} plan_amount={60000} plan_type={'Big Plan'} />
                                    </span>
                                ) : (
                                    <span>
                                        <Card product_type={"long"} product_image={tuborg5} handleClick={handleClick} plan_name={"Windharvester 9"} plan_cycle={365} plan_daily_earning={4000} plan_amount={60000} plan_type={'Big Plan'} />
                                    </span>
                                )} */}


                            </div>)}
                    </div>)}

            </div>

            {/*short plans */}
            <div className={`card_grid grid grid-cols-1 sm:w-3/5 lg:w-3/5 w-[97%] mx-auto mt-2 ${currentVisible === 'short' ? 'mb-20' : ''}`}>

                {(currentVisible === 'short' || true) && amountDetails?.plan_state && userDetails && (
                    <div className={`grid grid-cols-2 gap-1`}>

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[7] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 8"} plan_cycle={3} plan_daily_earning={400} plan_amount={700} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 8"} plan_cycle={3} plan_daily_earning={400} plan_amount={700} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[8] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 9"} plan_cycle={4} plan_daily_earning={780} plan_amount={2100} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 9"} plan_cycle={4} plan_daily_earning={780} plan_amount={2100} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[9] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 10"} plan_cycle={3} plan_daily_earning={1700} plan_amount={3300} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 10"} plan_cycle={3} plan_daily_earning={1700} plan_amount={3300} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[10] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 11"} plan_cycle={5} plan_daily_earning={1900} plan_amount={4300} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={pro} handleClick={handleClick} plan_name={"Dream11 11"} plan_cycle={5} plan_daily_earning={1900} plan_amount={4300} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[11] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={item5} handleClick={handleClick} plan_name={"Dream11 11"} plan_cycle={4} plan_daily_earning={50000} plan_amount={30000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={item5} handleClick={handleClick} plan_name={"Dream11 11"} plan_cycle={4} plan_daily_earning={50000} plan_amount={30000} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[12] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={item6} handleClick={handleClick} plan_name={"Dream11 12"} plan_cycle={5} plan_daily_earning={120000} plan_amount={60000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={item6} handleClick={handleClick} plan_name={"Dream11 12"} plan_cycle={5} plan_daily_earning={120000} plan_amount={60000} plan_type={'Short Plan'} />
                            </span>
                            )} */}

                        {/* {(userDetails.boughtLong < 1 || amountDetails.plan_state[15] === 0) ?
                            (<span className='pointer-events-none'>
                                <Card product_type={"short"} product_image={wind4} handleClick={handleClick} plan_name={"Windharvester 16"} plan_cycle={18} plan_daily_earning={1400} plan_amount={10000} plan_type={'Short Plan'} />
                            </span>) :
                            (<span className=''>
                                <Card product_type={"short"} product_image={wind4} handleClick={handleClick} plan_name={"Windharvester 16"} plan_cycle={18} plan_daily_earning={1400} plan_amount={10000} plan_type={'Short Plan'} />
                            </span>
                            )} */}
                    </div>)}
            </div>



            {/*Navigation Bar 2 bg-[#1cb5b2]*/}
            {welcomeShow ? (
                <div className="fixed bottom-0 z-10 bg-gray-50 rounded-none  flex overflow-x-hidden text-[#7c925e]  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
                    <div className="flex flex-row justify-around items-center w-full py-[2px] font-normal  text-[12px]">
                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'
                        >
                            <img src={home} alt="online" className='w-[30px] h-[30px]' />
                            <div>Home</div>
                        </div>

                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/company')}>
                            <img src={m1} alt="recharge" className='w-[30px] h-[30px]' />
                            <div>Company</div>
                        </div>

                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' >
                            <img src={user} alt="app_dwd" className='w-[30px] h-[30px]' />
                            <div>Team</div>
                        </div>


                        <div className='text-red-800 cursor-pointer mx-2 flex flex-col justify-center items-center' >
                            <img src={mine} alt="invite" className='w-[30px] h-[30px]' />
                            <div>My</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="fixed bottom-0 z-10 bg-gray-50 rounded-none  flex overflow-x-hidden text-[#7c925e]  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
                    <div className="flex flex-row justify-around items-center w-full py-[2px] font-normal  text-[12px]">
                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'
                            onClick={() => navigate('/home')}>
                            <img src={home} alt="online" className='w-[30px] h-[30px]' />
                            <div>Home</div>
                        </div>

                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/company')}>
                            <img src={m1} alt="recharge" className='w-[30px] h-[30px]' />
                            <div>Company</div>
                        </div>

                        <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' onClick={() => navigate('/team')}>
                            <img src={user} alt="app_dwd" className='w-[30px] h-[30px]' />
                            <div>Team</div>
                        </div>


                        <div className='text-red-800 cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/mine')}>
                            <img src={mine} alt="invite" className='w-[30px] h-[30px]' />
                            <div>My</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home