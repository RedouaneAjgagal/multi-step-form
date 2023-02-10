import React from 'react'
import { useAppDispatch } from "../../assets/hooks/redux";
import { planAction } from "../../store/plans";

interface Props {
    icon: string,
    plan: string,
    price: number,
    yearly: boolean
    selected: boolean
}
const Plan: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const price = `$${props.price}/${props.yearly ? 'yr' : 'mo'}`
    const selectPlanHandler = () => {
        dispatch(planAction.selectPlan({ plan: props.plan }))
    }
    return (
        <label htmlFor={props.plan} className={`flex items-center gap-5 p-4 rounded-xl border border-blue-700/20 cursor-pointer ${props.selected && 'border-blue-700 bg-blue-100/25'}`}>
            <input onClick={selectPlanHandler} type='radio' id={props.plan} name={props.plan} className='sr-only' />
            <div>
                <img src={props.icon} alt={`${props.plan} icon`} />
            </div>
            <div className='flex flex-col items-start'>
                <h4 className='font-medium text-lg'>{props.plan}</h4>
                <span className='text-gray-500/80'>{price}</span>
                {props.yearly && <p>2 months free</p>}
            </div>
        </label>
    )
}

export default Plan