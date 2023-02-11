import React from 'react'
interface Props {
    yearly: boolean,
    total: number
}
const Total: React.FC<Props> = (props) => {
    const total = `+$${props.total}/${props.yearly ? 'yr' : 'mo'}`;
    const totalMsg = `Total (${props.yearly ? 'per year' : 'per month'})`
    return (
        <div className='flex justify-between items-center w-full max-w-[95%] m-auto md:max-w-[90%]'>
            <p className='text-gray-500/80 text-lg'>{totalMsg}</p>
            <span className='text-indigo-700 font-bold text-xl'>{total}</span>
        </div>
    )
}

export default Total