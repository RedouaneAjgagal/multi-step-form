import React from 'react'
import { useAppDispatch } from '../../assets/hooks/redux'
import { stepAction } from '../../store/stepState'

interface Props {
    plan: string,
    price: number
    billing: 'monthly' | 'yearly'
}

const Plan: React.FC<Props> = (props) => {
    const price = `$${props.price}/${props.billing === 'yearly' ? 'yr' : 'mo'}`
    const plan = `${props.plan} (${props.billing})`
    const dipatch = useAppDispatch()
    const changePlanHandler = () => {
        dipatch(stepAction.navigate({ allowed: true, navigate: 2}));
    }
    return (
        <div className='flex justify-between items-center border-b pb-4'>
            <div>
                <h4 className='font-bold text-lg'>{plan}</h4>
                <button onClick={changePlanHandler} className='underline text-gray-500/80'>Chnage</button>
            </div>
            <div>
                <span className='font-bold text-lg'>{price}</span>
            </div>
        </div>
    )
}

export default Plan