import React from 'react'
import { addOnAction } from '../../store/addOns'
import { useAppDispatch } from '../../assets/hooks/redux'

interface Props {
    id: string,
    addOn: string,
    details: string,
    price: number,
    selected: boolean,
    yearly: boolean
}

const AddOn: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch();
    const price: string = props.yearly ? `+$${props.price * 10}/yr` : `+$${props.price}/mo`
    const selectAddOnsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(addOnAction.selectAddOn({ addOn: props.addOn }));
        } else {
            dispatch(addOnAction.removeAddOn({ addOn: props.addOn }));
        }
    }

    return (
        <label htmlFor={props.id} className={`flex items-center justify-between p-4  rounded-lg cursor-pointer ${props.selected ? 'border border-indigo-700 bg-indigo-100/25' : 'border border-indigo-500/20'}`}>
            <div className='flex gap-6 items-center relative'>
                <div className='flex'>
                    <input onChange={selectAddOnsHandler} type="checkbox" name="service" id={props.id} className='w-6 h-6 cursor-pointer accent-indigo-700/70' checked={props.selected ? true : false} />
                </div>
                <div className='flex flex-col items-start select-none'>
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