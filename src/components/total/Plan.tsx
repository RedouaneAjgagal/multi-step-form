import React from 'react'

interface Props {
    plan: string,
    price: number
    billing: 'monthly' | 'yearly'
}

const Plan: React.FC<Props> = (props) => {
    const price = `$${props.price}/mo`
    const plan = `${props.plan} (${props.billing})`
    return (
        <div className='flex justify-between items-center border-b pb-4'>
            <div>
                <h4 className='font-bold text-lg'>{plan}</h4>
                <button className='underline text-gray-500/80'>Chnage</button>
            </div>
            <div>
                <span className='font-bold text-lg'>{price}</span>
            </div>
        </div>
    )
}

export default Plan