import React from 'react'
import { useAppSelector, useAppDispatch } from '../../assets/hooks/redux'
import { stepAction } from '../../store/stepState'
interface Props {
    currentStep: number
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
        <button onClick={navigateHandler} className={`rounded-full h-10 w-10 border border-teal-100 items-center font-medium text-white ease-in-out duration-300 hover:text-slate-900 hover:bg-teal-100 ${(steps.currentStep === props.currentStep || (props.currentStep === 4 && steps.currentStep === 5)) && 'bg-teal-100 text-slate-900'}`}>{props.currentStep}</button>
    )
}

export default NavigationBtn