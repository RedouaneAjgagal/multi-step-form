import React from 'react'
import sidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
export const Index = () => {
    return (
        <div style={{ backgroundImage: `url(${sidebarMobile})` }} className='bg-no-repeat bg-cover flex h-full min-h-[14rem] justify-center'>
            <div className='flex gap-5 mb-16 items-center'>
                <button className='rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100'>1</button>
                <button className='rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100'>2</button>
                <button className='rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100'>3</button>
                <button className='rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100'>4</button>
            </div>
        </div>
    )
}