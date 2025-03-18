import React from 'react'
import SportsIcon from '@mui/icons-material/Sports';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full bg-neutral-950' style={{height:'85px'}}>
        <div className='flex justify-start'>
            <div className='flex items-center ml-16 mt-4'>
                <SportsIcon className='text-yellow-500' style={{fontSize: 50 }}/>
                <i className='text-white text-xl ml-2  '>CHAMPIANS</i>
            </div>
            


            {/* Center Urls */}
            <div className='flex justify-between p-4 items-center ml-16 mt-4'> 
                <ul className='flex text-white space-x-4 gap-5'>
                    <li className='hover:text-yellow-400  text-lg cursor-pointer relative'>Home</li>
                    <li className='relative'>
                        <button 
                            className='hover:text-yellow-400 text-lg cursor-pointer'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Pages
                            <KeyboardArrowDownIcon className='text-white' />
                        </button>
                        {isOpen && (
                            <ul className='absolute left-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg py-2'>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Page 1</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Page 2</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Page 3</li>
                            </ul>
                        )}
                    </li>
                    <li className='relative'>
                        <button 
                            className='hover:text-yellow-400 text-lg cursor-pointer'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Blogs
                            <KeyboardArrowDownIcon className='text-white' />
                        </button>
                        {isOpen && (
                            <ul className='absolute left-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg py-2'>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Blog 1</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Blog 2</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Blog 3</li>
                            </ul>
                        )}
                    </li>
                    <li className='relative'>
                        <button 
                            className='hover:text-yellow-400 text-lg cursor-pointer'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Shops
                            <KeyboardArrowDownIcon className='text-white' />
                        </button>
                        {isOpen && (
                            <ul className='absolute left-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg py-2'>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Shop 1</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Shop 2</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>Shop 3</li>
                            </ul>
                        )}
                    </li>
                    <li className='relative'>
                        <button 
                            className='hover:text-yellow-400 text-lg cursor-pointer'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Shorts Press
                            <KeyboardArrowDownIcon className='text-white' />
                        </button>
                        {isOpen && (
                            <ul className='absolute left-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg py-2'>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>News 1</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>News 2</li>
                                <li className='px-4 py-2 hover:bg-neutral-800 text-white cursor-pointer'>News 3</li>
                            </ul>
                        )}
                    </li>
                    <li className='hover:text-yellow-400  text-lg cursor-pointer'>Contact Us</li>
                </ul>
            </div>

            {/* Right Urls */}
            <div className='flex justify-end items-center pl-4 mt-4 ml-16 '>
                <div className='flex items-center'>
                        <PermPhoneMsgIcon className='text-gray-950 p-3 bg-yellow-400 ' style={{fontSize: "3rem"}}  />
                        <div className='flex flex-col'>
                            <p className='text-white ml-2'>Call 24/7 Days</p>
                            <p className='text-white ml-2'>+92 123 456 7890</p>
                        </div>
                    </div>
                    <div className='flex items-center ml-4 gap-8'>
                        <SearchIcon className='text-white ml-4' style={{fontSize: "2rem"}} />
                        <PersonIcon className='text-white' style={{fontSize: "2rem"}} />
                        <LocalMallIcon className='text-white' style={{fontSize: "2rem"}} />
                        </div>

                        
                </div>
        </div>

    </div>
  )
}

export default Navbar