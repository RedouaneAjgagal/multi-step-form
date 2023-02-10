import React from 'react'
interface Props {
    title: string,
    price: number,
    yearly: boolean
}
const AddOn: React.FC<Props> = (props) => {
    const price = `+$${props.price}/${props.yearly ? 'yr' : 'mo'}`;
    return (
        <div className='flex justify-between items-center'>
            <h6 className='text-gray-500/80 text-lg'>{props.title}</h6>
            <span className='font-medium'>{price}</span>
        </div>
    )
}

export default AddOn