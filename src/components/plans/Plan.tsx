import React from 'react'
interface Props {
    icon: string,
    plan: string,
    price: number
}
const Plan: React.FC<Props> = (props) => {
    const price = `$${props.price}/mo`
    return (
        <button className='flex items-center gap-5 p-4 rounded-xl border border-blue-700/20'>
            <div>
                <img src={props.icon} alt="arcade-icon" />
            </div>
            <div className='flex flex-col items-start'>
                <h4 className='font-medium text-lg'>{props.plan}</h4>
                <span className='text-gray-500/80'>{price}</span>
            </div>
        </button>
    )
}

export default Plan