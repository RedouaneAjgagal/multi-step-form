import React from 'react'
import sidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
import useCurrentStep from './useCurrentStep'
import { useAppSelector } from '../../assets/hooks/redux'
export const Index = () => {
    const { steps } = useAppSelector(state => state.stepReducer)
    return (
        <div style={{ backgroundImage: `url(${sidebarMobile})` }} className='bg-no-repeat bg-cover flex h-full min-h-[14rem] justify-center'>
            <div className='flex gap-5 mb-16 items-center'>
                <button className={`rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100 ${steps.currentStep === 1 && 'bg-teal-100 text-slate-900'}`}>1</button>
                <button className={`rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100 ${steps.currentStep === 2 && 'bg-teal-100 text-slate-900'}`}>2</button>
                <button className={`rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100 ${steps.currentStep === 3 && 'bg-teal-100 text-slate-900'}`}>3</button>
                <button className={`rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100 ${(steps.currentStep === 4 || steps.currentStep === 5) && 'bg-teal-100 text-slate-900'}`}>4</button>
            </div>
        </div>
    )
}