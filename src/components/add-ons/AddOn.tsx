import React from 'react'

interface Props {
    id: string,
    addOn: string,
    details: string,
    price: number
}

const AddOn: React.FC<Props> = (props) => {
    const price: string = `+$${props.price}/mo`
    return (
        <label htmlFor={props.id} className='flex items-center justify-between p-4 border border-indigo-500/20 rounded-lg cursor-pointer'>
            <div className='flex gap-6 items-center relative'>
                <div className='flex'>
                    <input type="checkbox" name="service" id={props.id} className='w-6 h-6 cursor-pointer' />
                </div>
                <div className='flex flex-col items-start'>
                    <h4 className='font-bold'>{props.addOn}</h4>
                    <p className='text-gray-500/80'>{props.details}</p>
                </div>
            </div>
            <div>
                <span className='text-indigo-700'>{price}</span>
            </div>
        </label>
    )
}

export default AddOn