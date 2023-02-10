import React, { useRef, useState } from 'react'
import Card from './UI/Card'
// pages
import { Index as PersonalInfo } from './personal-info/Index'
import { Index as Plans } from './plans/Index'
import { Index as AddOns } from './add-ons/Index'
import { Index as Total } from './total/Index'
import { Index as Thankyou } from './thank-you/Index'
// redux
import { useAppSelector, useAppDispatch } from '../assets/hooks/redux'
import { stepAction } from '../store/stepState'
import Actions from './actions/Index'
// validation
import { validForm } from './personal-info/Validation'
import useCurrentStep from './steps/useCurrentStep'



const Submit = () => {
    // Display pages
    const { steps } = useAppSelector(state => state.stepReducer);
    const { yearly, plans } = useAppSelector(state => state.planReducer);
    const { addOns } = useAppSelector(state => state.addOnsReducer);

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const [isError, setIsError] = useState<string[]>([]);

    const dispatch = useAppDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (true) {
            case steps.currentStep === 1:
                const formValues = {
                    nameVal: nameRef.current!.value,
                    emailVal: emailRef.current!.value,
                    phoneVal: phoneRef.current!.value
                }
                const formValidation = validForm(formValues);
                if (!formValidation.validForm) {
                    return setIsError(formValidation.errors);
                }
                return dispatch(stepAction.personalInfo({ data: formValues }));
            case steps.currentStep === 2:
                const planSelected = plans.find(plan => plan.selected);
                const planData = {
                    plan: planSelected!.plan,
                    price: planSelected!.price,
                    yearly: yearly
                }
                return dispatch(stepAction.plans({ data: planData }));
            case steps.currentStep === 3:
                const selectedAddOns = addOns.filter(item => item.selected);
                const addOnsData = selectedAddOns.map(item => {
                    return { addOn: item.addOn, price: yearly ? item.price * 10 : item.price }
                });
                return dispatch(stepAction.addOns({ data: addOnsData }));
            case steps.currentStep === 4:
                const totalAddons = steps.addOns.data.reduce((intialState, item) => {
                    return intialState + item.price!;
                }, 0);

                const total = steps.plans.data.price! + totalAddons;
                return dispatch(stepAction.total({ data: { total } }));
            default:
                break;
        }
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col justify-between gap-4'>
            <section className='px-4 items-center'>
                <Card>
                    {steps.currentStep === 1 && <PersonalInfo nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} errors={isError} />}
                    {steps.currentStep === 2 && <Plans />}
                    {steps.currentStep === 3 && <AddOns />}
                    {steps.currentStep === 4 && <Total />}
                    {steps.currentStep === 5 && <Thankyou />}
                </Card>
            </section>
            {steps.currentStep !== 5 && <Actions confirm={steps.currentStep === 4} />}
        </form>
    )
}

export default Submit