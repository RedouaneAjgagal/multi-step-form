import React from 'react'
interface Props {
    billing: 'yearly' | 'monthly',
    total: number
}
const Total: React.FC<Props> = (props) => {
    const total = `+$${props.total}/mo`;
    return (
        <div className='flex justify-between items-center w-full max-w-[22rem] m-auto'>
            <p className='text-gray-500/80 text-lg'>Total (per month)</p>
            <span className='text-indigo-700 font-bold text-xl'>{total}</span>
        </div>
    )
}

export default Total