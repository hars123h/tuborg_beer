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

        <div className="flex items-center border-b border-gray-300 py-2" onClick={() => (isBetween() || true) ?
          navigate('/withdrawal', { state: { withdrawalPassword: originalwpwd, loginPassword: originalpwd } }) : toaster('You are not in the withdrawl time window')
        }>
          <div className='w-[10%]'><img src={asset6} alt="setting" className=' w-6 h-6' /></div>

          <div className='flex-grow'>Withdrawal</div>
          <div className='w-[10%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-gray-300">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <a href="https://t.me/TuborgbeerApp1" className=' no-underline  cursor-pointer'>
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

      <div className="fixed bottom-0 z-10 bg-gray-50 rounded-none  flex overflow-x-hidden text-gray-600  mx-auto mt-2 border-2 border-gray-100 w-full overflow-y-hidden">
        <div className="flex flex-row justify-around items-center w-full py-2 font-normal  text-sm">
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center'
            onClick={() => navigate('/home')}>
            <img src={asset10} alt="online" className='w-8' />
            <div>Home</div>
          </div>

          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/company')}>
            <img src={asset11} alt="recharge" className='w-8' />
            <div>Company</div>
          </div>
          <div className='cursor-pointer mx-2 flex flex-col justify-center items-center ' onClick={() => navigate('/team')}>
            <img src={asset12} alt="app_dwd" className='w-8' />
            <div>Team</div>
          </div>


          <div className='text-red-800 cursor-pointer mx-2 flex flex-col justify-center items-center' onClick={() => navigate('/mine')}>
            <img src={asset13} alt="invite" className='w-8' />
            <div>Mine</div>
          </div>
        </div>
      </div>



    </div>
  )
}


export default Mine;