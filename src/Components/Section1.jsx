import React from 'react';
import './Section1.css';
import { GiNetworkBars } from 'react-icons/gi';
import { IoWifiSharp } from 'react-icons/io5';
import { IoBatteryFull } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa6';
import { IoBagAdd } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { IoHomeSharp } from 'react-icons/io5';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { AiOutlineCompass } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { GiLunarWand } from 'react-icons/gi';
export const Section1 = () => {
  return (
    <>
      <div className='bg-black h-[100dvh] w-[100%] grid place-items-center  '>
        <div className='mobile-body  rounded-2xl h-auto bg-white w-auto relative overflow-hidden'>
          <div className=' z-10 w-[270px] h-[100%]  relative overflow-hidden  p-2'>
            {/* mobile app */}
            <p className='h-[1rem] text-[12px] px-2 font-semibold w-full flex items-center justify-between ml-1'>
              19:20
              <div className='flex '>
                <GiNetworkBars className='mx-1'></GiNetworkBars>
                <IoWifiSharp></IoWifiSharp>
                <IoBatteryFull className='mx-1 '></IoBatteryFull>
              </div>
            </p>
            <div className='flex items-center justify-between my-2 text-[#327b81]'>
              <img
                className='h-[2rem] w-[2rem] rounded-full'
                src='./images/image_9854mIve_1718286676834_raw.jpg'
                alt='...'
              ></img>
              <p className='text-black flex items-center justify-center '>
                <IoBagAdd className='text-[#327b81]'></IoBagAdd>
                KareHub
              </p>
              <FaBell className=' jinggle-bell text-[1.6rem]'></FaBell>
            </div>

            <p className='text-[#327b81]'>Hello,</p>
            <h1 className='text-[#327b81] text-3xl font-bold'>Caroline!</h1>
            <div className='w-auto h-auto relative mt-1'>
              <input
                type='text'
                placeholder='What are you for today'
                className=' top-search shadow rounded-md text-[12px] bg-slate-100 pl-8 p-2 w-full'
              ></input>
              <IoIosSearch className=' search-icon absolute top-[30%] left-[3%] text-gray-400'></IoIosSearch>
            </div>

            <div className='scroll-container w-full flex flex-nowrap justify-between items-center h-[2rem] my-3 overflow-hidden'>
              <button className='btns mx-1 bg-[#327b81] shadow rounded-2xl px-4 text-white text-[12px] h-[80%]  whitespace-nowrap'>
                Active Feeds
              </button>
              <button className=' btns bg-white shadow rounded-2xl px-4 text-[#327b81] text-[12px] h-[80%] whitespace-nowrap'>
                Bookmarks
              </button>
              <button className=' btns mx-1 bg-white shadow rounded-2xl px-4 text-[#327b81] text-[12px] h-[80%] whitespace-nowrap'>
                Followings
              </button>
            </div>

            <div className='register-box w-[full] h-[8rem]  rounded-xl mx-auto relative overflow-hidden'>
              <GiLunarWand className='wand absolute text-[10rem] top-[20%] right-[-5%]'></GiLunarWand>
              <div className='p-2 relative z-10'>
                <h1 className=' text-white font-bold text-[14px] mb-0 pb-0 mx-auto tracking-[2px] '>
                  Join our
                </h1>
                <h1 className='text-[22px] m-0 p-0 h-[22px] text-white font-semibold tracking-[3px]'>
                  HEALTHCARE{' '}
                </h1>
                <h1 className='text-[22px] m-0 p-0 text-white h-auto font-semibold tracking-[2px]'>
                  TOWN HALL
                </h1>
                <button className='border register-btn border-white  mt-1 text-[10px] text-white rounded-full py-1  px-3'>
                  Register Now {' >'}
                </button>
              </div>
            </div>
            <div className='feeds-container w-full'>
              <div className='feeds-item w-[full] h-[10rem]  rounded-sm mt-2 '>
                <div className='flex gap-1 relative items-center p-2 '>
                  <img
                    src='./images/smile-profile-face-male-preview.jpg'
                    alt=''
                    className='rounded-full h-8 w-14'
                  />
                  <div className='flex flex-wrap items-start  '>
                    <h1 className='font-semibold text-xs whitespace-nowrap '>
                      Matt Jacbos{' '}
                      <span className='whitespace-nowrap text-gray-300 text-[12px] '>
                        posted
                      </span>
                    </h1>
                    <button className='bg-[#efba41] text-white rounded-md text-[10px] px-2 grid place-items-center mx-1 '>
                      update
                    </button>
                    <p className='text-[10px] text-gray-300 '>
                      12 min ago | view bette together
                    </p>
                  </div>
                  <span>
                    <HiOutlineDotsHorizontal></HiOutlineDotsHorizontal>
                  </span>
                </div>
                <p className='text-gray-400 w-full text-[10px] font-semibold px-3'>
                  We got great feedback from phase 1 of our karehub rollout.
                  tested with the community,
                  <span className=' text-[#327b81]'>
                    {' '}
                    Read more about the impact here.
                  </span>
                </p>
                <img
                  className='mt-1'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGxTbSGF4yDI0SOgiuLIj9LGCFpMZdnGQUg&s'
                  alt='...'
                ></img>
              </div>
            </div>
            <div className='w-full h-[3rem]  absolute left-0  bottom-0 flex items-center justify-center bg-[#e7f0ef]'>
              <IoHomeSharp className='text-[#327b81] text-[1.7rem] mx-3'></IoHomeSharp>
              <IoIosSearch className='nav-btns text-gray-400 text-[1.7rem] mx-3'></IoIosSearch>
              <span className='text-gray-400 text-[1.5rem] h-2px w-[2rem]'></span>
              <AiOutlineCompass className='nav-btns text-gray-400 text-[1.7rem] mx-3'></AiOutlineCompass>
              <IoChatbubbleOutline className=' nav-btns text-gray-400 text-[1.7rem] mx-3'></IoChatbubbleOutline>
            </div>
            <span className='bottom-[5%] left-[43%] absolute h-[2.4rem] w-[2.4rem] rounded-full grid place-items-center bg-[#327b81] text-[22px] text-white '>
              <IoMdAdd></IoMdAdd>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
