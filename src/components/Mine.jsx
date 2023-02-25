import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';
import BASE_URL from '../api_url';
import setting from '../images/assets/asset 1.png';
import asset3 from '../images/assets/asset 3.png';
import asset4 from '../images/assets/asset 4.png';
import asset5 from '../images/assets/asset 5.png';
import asset6 from '../images/assets/asset 6.png';
import asset7 from '../images/assets/asset 7.png';
import asset8 from '../images/assets/asset 8.png';
import asset9 from '../images/assets/asset 9.png';
import asset10 from '../images/assets/asset 10.png';
import asset11 from '../images/assets/asset 11.png';
import asset12 from '../images/assets/asset 12.png';
import asset13 from '../images/assets/asset 13.png';
import ReactModal from 'react-modal';
import tuborg_logo from '../images/tuborg_logo.svg';

const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: 'none',
    padding: 0,
    width: '80%'
  },
};

const Mine = () => {

  const navigate = useNavigate();
  const [mobileno, setMobileno] = useState('');
  const [recharge_amount, setRecharge_amount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [originalwpwd, setOriginalwpwd] = useState(null);
  const [originalpwd, setOriginalpwd] = useState(null);
  const [earning, setEarning] = useState(0);
  const [loading, setLoading] = useState(true);
  const [toasterShow, setToasterShow] = useState(false);
  const [toasterText, setToasterText] = useState('');
  const [user_refer, setUser_refer] = useState(null);
  const [logout_popup, setLogout_popup] = useState(false);

  const toaster = (text) => {
    setToasterText(text);
    setToasterShow(true);
    setTimeout(() => {
      setToasterShow(false);
      //navigate('/mine');
    }, 5000);
  }


  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
    const getUserInfo = async () => {
      const docRef = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data);
      if (docRef) {
        //console.log(docRef.data());
        setMobileno(docRef.mobno);
        setRecharge_amount(docRef.recharge_amount);
        setBalance(docRef.balance);
        setEarning(docRef.earning);
        setOriginalwpwd(docRef.wpwd);
        setOriginalpwd(docRef.pwd);
        setUser_refer(docRef.user_invite);
        //console.log(new Date(((docRef.data().time.toDate()))));
      } else {
        console.log('Document does not exits');
      }
    }
    setLoading(true);
    getUserInfo()
      .then(() => setLoading(false));
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/login');
  }

  const isBetween = () => {
    var startTime = '9:00:00';
    var endTime = '19:00:00';

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

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center  h-screen bg-gray-50 z-10 opacity-90'>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="2"
          animationDuration="0.75"
          width="40"
          visible={true}
        />
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className='relative h-screen bg-white'>
      {toasterShow ?
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex gap-2 bg-black opacity-80 text-white px-2 py-1 rounded-md'>
            <div>{toasterText}</div>
          </div>
        </div> : null}

      <div>
        <ReactModal
          isOpen={logout_popup}
          style={customStyles2}
          contentLabel="Notice"
          ariaHideApp={false}
        >
          <div className='w-full  shadow-xl z-10 border border-gray-200'>
            <div className='flex gap-2 flex-col bg-white w-full '>
              <div className=' text-lg px-3  py-3'>Are you sure to log out?</div>
              <div className="flex text-blue-400 justify-end">
                <div className='text-center w-[80px]  text-gray-400   font-semibold p-2'
                  onClick={(e) => {
                    setLogout_popup(false);
                  }}>
                  no
                </div>
                <div className='text-center w-[80px]  font-semibold p-2'
                  onClick={(e) => {
                    setLogout_popup(false);
                    handleSignOut();
                  }}>
                  Ok
                </div>

              </div>
            </div>
          </div>
        </ReactModal>
      </div>

      {/* <div className='flex flex-col mine_image'>
        <div className="top h-40">

          <div className="info pt-6 pl-10 flex items-center justify-start">
            <div className='flex justify-center items-center bg-white rounded-full'>
              <img src={cartoon_user} alt="logo" className='w-20 rounded' />
            </div>
            <div className="user_no flex flex-col text-white ml-3 items-start justify-start">
              <div className="no text-2xl font-medium">{mobileno.substr(0, 3) + "****" + mobileno.substr(7)}</div>
              <div className='text-sm text-center  mt-1'>Invite Code: {user_refer}</div>
            </div>
          </div>

          <div className="h-26 overflow-y-visible rounded-xl  info_box bg-[#ffffff] text-gray-500 flex flex-col shadow-lg shadow-gray-400  items-center justify-between w-[90%] mx-auto mt-2 px-4 py-2">

            <div className='flex justify-center flex-col items-center font-semibold'>
              <div className='text-cyan-400'>Account Balance</div>
              <div className='text-xl font-bold text-black'><span className='text-[#12a6b4] mr-2 '>&#8377;</span>{new Intl.NumberFormat().format(balance)}</div>
            </div>

            <div className='flex gap-4 text-white'>
              <div className='rounded-full text-center px-4 py-1 bg-cyan-400 w-32 shadow-lg' onClick={() => navigate('/recharge')}>Recharge</div>
              {isBetween() === false ? (
                <div className='bg-cyan-400 text-center rounded-full px-4 py-1 w-32 shadow-lg' onClick={() => toaster('You can withdraw only between 9:00 to 19:00 hours only.')}>Withdraw</div>
              ) : (
                <div className='bg-cyan-400 text-center rounded-full px-4 py-1 w-32 shadow-lg' onClick={() => navigate('/withdrawal', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } })}>Withdraw</div>
              )}
            </div>
          </div>
        </div>

        <div className="box  bg-[#fafff9] relative  shadow-xl mx-4 mt-16 border border-gray-300" onClick={()=>navigate('/invite')}>
          <img src={invite_bg} alt="invite_image" className='rounded-xl w-full' />
          <div className='flex flex-col gap-5 absolute top-5 left-5 justify-around'>
            <div className='text-2xl font-extrabold text-white'>Invite friends to make money</div>
            <div className='shadow-2xl px-4 text-center py-1 rounded-full font-extrabold text-white text-lg button_bg'>Implement friends right away</div>
          </div>        
        </div>

        <div className="box mb-20 gap-1 flex flex-col text-gray-500 font-semibold bg-[#fafff9] rounded-xl  shadow-xl m-3 border border-gray-300">

          <div className=' cursor-pointer flex justify-between p-2 items-center' onClick={() => navigate('/rewards')}>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />                  </svg>
              </div>
              <div>
                Rewards
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className=' cursor-pointer flex justify-between p-2 items-center' onClick={() => navigate('/team')}>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />                   </svg>
              </div>
              <div>
                My Good Friend
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className=' cursor-pointer flex justify-between p-2 items-center' onClick={() => navigate('/record')}>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />                  </svg>
              </div>
              <div>
                My Bill
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className=' cursor-pointer flex justify-between p-2 items-center' onClick={() => navigate('/settings', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } })}>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />                  </svg>
              </div>
              <div>
                Update Details
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className=' cursor-pointer flex justify-between p-2 items-center'>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />                  </svg>
              </div>
              <div>
                Help Center
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className=' cursor-pointer flex justify-between p-2 items-center' onClick={() => navigate('/user_feedback')}>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />                  </svg>
              </div>
              <div>
                Feedback
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>


          <div className=' cursor-pointer flex justify-between p-2 items-center' onClick={handleSignOut}>
            <div className='flex gap-2 items-center px-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 fill-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />                  </svg>
              </div>
              <div>
                Log Out
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 z-10 bg-white  rounded-none text-gray-800 flex overflow-x-hidden  mx-auto mt-2 border-2 border-gray-200 shadow-xl w-full overflow-y-hidden">
          <div className="flex flex-row justify-around items-center w-full py-2">
            <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/home')}>
              <img src={make_money} alt="online" className='w-4' />
              <div className='text-xs pt-1'>make money</div>
            </div>

            <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/financial')} >
              <img src={financial} alt="online" className='w-4' />
              <div className='text-xs pt-1'>financial</div>
            </div>

            <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/record')}>
              <img src={rent} alt="recharge" className='w-4' />
              <div className='text-xs pt-1'>rent</div>
            </div>
            <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' onClick={() => navigate('/project')}>
              <img src={dividend} alt="app_dwd" className='w-4' />
              <div className='text-xs pt-1'>dividend</div>
            </div>


            <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/mine')}>
              <img src={user} alt="invite" className='w-4' />
              <div className='text-xs pt-1'>user</div>
            </div>
          </div>
        </div>

      </div> */}

      <div className="flex flex-col bg-red-800 gap-3 text-white">
        <div className='flex flex-col justify-center items-center gap-1 p-3'>
          <img src={tuborg_logo} alt="wind_login" width={100} className="bg-white py-2 px-3 rounded-sm" />
          <div className='text-lg'>VIP: {mobileno}</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <div>{balance}</div>
          <div>Balance</div>
        </div>

        <div className='flex flex-row w-full items-center h-20'>

          <div className="flex flex-col justify-center items-center gap-1 w-1/2 border-r border-white h-full">
            <div>{recharge_amount}</div>
            <div>Recharge</div>
          </div>

          <div className="flex flex-col w-1/2 h-full justify-center items-center gap-1">
            <div>{earning}</div>
            <div>Earning</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-2  font-medium text-sm">

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => navigate('/settings', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } })}>
          <div className='w-[10%]'><img src={setting} alt="setting" className=' w-6 h-6' /></div>
          <div className='flex-grow'>Personal Information</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => navigate('/invite')}>
          <div className='w-[10%]'><img src={asset3} alt="setting" className=' w-6 h-6' /></div>
          <div className='flex-grow'>Invite</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => navigate('/project')}>
          <div className='w-[10%]'><img src={asset4} alt="setting" className=' w-6 h-6' /></div>
          <div className='flex-grow'>Transaction details</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => navigate('/record')}>
          <div className='w-[10%]'><img src={asset5} alt="setting" className=' w-6 h-6' /></div>

          <div className='flex-grow'>Account record</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => isBetween() ?
          navigate('/withdrawal') : toaster('You are not in the withdrawl time window')
        }>
          <div className='w-[10%]'><img src={asset6} alt="setting" className=' w-6 h-6' /></div>

          <div className='flex-grow'>Withdrawal</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <a href="https://t.me/TuborgbeerApp" className=' no-underline  cursor-pointer'>
          <div className="flex items-center border-b border-gray-300 py-2" >
            <div className='w-[10%]'><img src={asset7} alt="setting" className=' w-6 h-6' /></div>

            <div className='flex-grow'>Telegram</div>
            <div className='w-[10%]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </a>

        <div className="flex items-center border-b border-gray-300 py-2" >
          <div className='w-[10%]'><img src={asset8} alt="setting" className=' w-6 h-6' /></div>

          <div className='flex-grow'>Download</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => navigate('/team')} >
          <div className='w-[10%]'><img src={asset9} alt="setting" className=' w-6 h-6' /></div>

          <div className='flex-grow'>Team report</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>

      <div onClick={() => setLogout_popup(true)} className="flex flex-row justify-center text-xl
        w-[90%] mx-auto py-1 mt-4 text-center rounded-lg bg-red-800 text-white">
        <div>Sign out</div>
      </div>

      <div className="fixed bottom-0 z-10 bg-gray-50 rounded-none text-red-800 flex overflow-x-hidden  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
        <div className="flex flex-row justify-around items-center w-full py-2 font-medium text-sm">
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'
            onClick={() => navigate('/home')}>
            <img src={asset10} alt="online" className='w-8' />
            <div>Home</div>
          </div>

          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/company')}>
            <img src={asset11} alt="recharge" className='w-8' />
            <div>Company</div>
          </div>
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' onClick={() => navigate('/project')}>
            <img src={asset12} alt="app_dwd" className='w-8' />
            <div>Project</div>
          </div>


          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/mine')}>
            <img src={asset13} alt="invite" className='w-8' />
            <div>Mine</div>
          </div>
        </div>
      </div>



    </div>
  )
}


export default Mine;