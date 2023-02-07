import { loadPlugin } from 'immer/dist/internal';
import React, { useState } from 'react'
const Toggle = () => {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
    const billingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setBilling('yearly');
        } else {
            setBilling('monthly');
        }
    }

    return (
        <div className='flex justify-center gap-6 bg-blue-100/30 py-4 rounded-xl'>
            <h5 className={`font-bold  ${billing === 'monthly' ? 'text-blue-900' : 'text-gray-500/80'}`}>Monthly</h5>
            <label htmlFor="billing" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input type="checkbox" onChange={billingHandler} name="billing" id="billing" className="sr-only" />

                    <div className={`block w-11 h-6 rounded-full bg-blue-900`}></div>

                    <div className={`dot absolute left-1 top-1 w-4 h-4 rounded-full bg-white  duration-300 ${billing === 'yearly' && 'translate-x-5'}`}></div>
                </div>
            </label>
            <h5 className={`font-bold text-gray-500/80 ${billing === 'yearly' ? 'text-blue-900' : 'text-gray-500/80'}`}>Yearly</h5>
        </div>
    )
}

export default Toggle