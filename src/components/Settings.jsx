import React from 'react';
import setting_bank from '../images/setting_bank.png';
import setting_pwd from '../images/setting_pwd.png';
import { useNavigate, useLocation } from 'react-router-dom';


const Settings = () => {

    const navigate = useNavigate();
    const loc = useLocation();
    //console.log(loc);

    //[#2e9afe]
    return (
        <div className='bg-white h-screen'>
            <div className="options flex items-center text-center text-white bg-red-800 text-lg p-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/mine')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4  storke-white  cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                <div className='flex-grow'>Personal Information</div>
            </div>

            {/* [#4daaff] */}
            <div className="box mx-1  rounded-md mt-4">
                <div
                    onClick={() => navigate('/bank', { state: { withdrawalPassword: loc.state.withdrawalPassword, loginPassword: loc.state.loginPassword } })} className='flex gap-2 items-center text-black  font-semibold text-md p-3 m-1 border-b border-gray-200 cursor-pointer'>
                    <div><img src={setting_bank} alt="bnk_img" width={24} /></div>
                    <div className='flex-grow flex justify-between items-center'>
                        <div>My Bank</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => navigate('/change_login_password', { state: { withdrawalPassword: loc.state.withdrawalPassword, loginPassword: loc.state.loginPassword } })} className='flex gap-2 items-center text-black  font-semibold text-md p-3 m-1 border-b border-gray-200 cursor-pointer'>
                    <div><img src={setting_pwd} alt="bnk_pwd" width={24} /></div>
                    <div className='flex-grow flex justify-between items-center'>
                        <div>Change Login Password</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => navigate('/change_withdrawal_password', { state: { withdrawalPassword: loc.state.withdrawalPassword, loginPassword: loc.state.loginPassword } })} className='flex gap-2 items-center text-black  font-semibold text-md p-3 m-1 border-b border-gray-200 cursor-pointer'>
                    <div><img src={setting_pwd} alt="bnk_pwd" width={24} /></div>
                    <div className='flex-grow flex justify-between items-center'>
                        <div>Change Withdrawal Password</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Settings