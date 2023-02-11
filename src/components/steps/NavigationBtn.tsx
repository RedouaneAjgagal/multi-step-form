import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { stepAction } from '../../store/stepState'
interface Props {
    currentStep: number,
    title: string
}

const NavigationBtn: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch();
    const { steps } = useAppSelector(state => state.stepReducer)
    const navigateHandler = () => {
        switch (true) {
            case props.currentStep === 1:
                return dispatch(stepAction.navigate({ allowed: steps.personalInfo.active, navigate: props.currentStep }))
            case props.currentStep === 2:
                return dispatch(stepAction.navigate({ allowed: steps.plans.active, navigate: props.currentStep }))
            case props.currentStep === 3:
                return dispatch(stepAction.navigate({ allowed: steps.addOns.active, navigate: props.currentStep }))
            case props.currentStep === 4:
                return dispatch(stepAction.navigate({ allowed: steps.total.active, navigate: props.currentStep }))
            default:
                break;
        }
    }
    return (
        <button onClick={navigateHandler} className='md:flex md:gap-4 md:items-center md:hover:bg-slate-100/5 md:w-full md:p-2 md:rounded-lg md:ease-in-out duration-200' disabled={steps.currentStep === 5}>
            <span className={`rounded-full h-10 w-10 border border-teal-100 font-medium ease-in-out duration-300 ${(steps.currentStep === props.currentStep || (props.currentStep === 4 && steps.currentStep === 5)) ? 'bg-teal-100 text-slate-900' : 'text-white'} flex justify-center items-center`}>
                {props.currentStep}
            </span>
            <span className='hidden md:flex md:flex-col md:items-start'>
                <span className='text-slate-200/80'>{`Step ${props.currentStep}`}</span>
                <span className='font-medium uppercase text-white'>{props.title}</span>
            </span>
        </button>
    )
}

export default NavigationBtn