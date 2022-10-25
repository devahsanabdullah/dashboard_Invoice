import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineDocument} from 'react-icons/hi'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {HiOutlineSupport} from 'react-icons/hi'
import {AiOutlineUnorderedList} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between absolute items-center flex-col z-50 shadow-md bg-white h-full px-2'>
         <div>
                <img src='/images/logo.svg' className='w-16 p-2  ' alt='image'/>
            </div>
        <div className='items-center flex justify-center flex-col '>
           
        <AiOutlineHome className='text-2xl'/>
        <p  >DashBord</p>
        </div>
        <div className='items-center flex justify-center flex-col '>
        <HiOutlineSupport className='text-xl'/>
        <p>Documentation</p>
        </div>
        <div className='items-center flex justify-center flex-col '>
        <HiOutlineDocument className='text-xl'/>
        <p>Pages</p>
        </div>
        <p>User Interface</p>
        <div className='items-center flex justify-center flex-col '>
        <HiOutlineSupport className='text-xl'/>
        <p>Documentation</p>
        </div>
        <div className='items-center flex justify-center flex-col '>
        <VscWorkspaceTrusted className='text-xl' />
        <p >Auth</p>
        </div>
        <div className='items-center flex justify-center flex-col mb-12 '>
        <AiOutlineUnorderedList className='text-xl' />
        <p >Navigation</p>
        </div>


    </div>
  )
}

export default Navbar