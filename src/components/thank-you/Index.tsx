import React from 'react'
import icon from '../../assets/images/icon-thank-you.svg';

export const Index = () => {
    return (
        <div className='text-center flex flex-col items-center gap-6 py-16'>
            <div>
                <img src={icon} alt="checked-icon" className='w-16' />
            </div>
            <h1 className='text-3xl font-bold'>Thank you!</h1>
            <div className='text-gray-500/80 text-lg'>
                <p>Thanks for confirming your subscription!</p>
                <p>We home you have fun using our platform. if you ever need support, please feel free to email us at</p>
                <p>support@loremgaming.com</p>
            </div>
        </div>
    )
}