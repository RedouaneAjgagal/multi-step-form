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



const Submit = () => {
    // Display pages
    const { steps } = useAppSelector(state => state.stepReducer);
    const personalInfoUI = steps.personalInfo && !steps.plans && !steps.addOns && !steps.total && !steps.thankYou;
    const plansUI = steps.personalInfo && steps.plans && !steps.addOns && !steps.total && !steps.thankYou;
    const addOnsIU = steps.personalInfo && steps.plans && steps.addOns && !steps.total && !steps.thankYou;
    const totalUI = steps.personalInfo && steps.plans && steps.addOns && steps.total && !steps.thankYou;
    const thankYouUI = steps.personalInfo && !steps.plans && !steps.addOns && !steps.total && steps.thankYou;

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const [isError, setIsError] = useState<string[]>([]);

    const dispatch = useAppDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (true) {
            case personalInfoUI:
                const formValues = {
                    nameVal: nameRef.current!.value,
                    emailVal: emailRef.current!.value,
                    phoneVal: phoneRef.current!.value
                }
                const formValidation = validForm(formValues);
                if (!formValidation.validForm) {
                    return setIsError(formValidation.errors);
                }
                return dispatch(stepAction.personalInfo());
            case plansUI:
                return console.log(steps)
            case addOnsIU:
                return console.log(steps)
            case totalUI:
                return console.log(steps)
            default:
                break;
        }
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col justify-between gap-4'>
            <section className='px-4 items-center'>
                <Card>
                    {personalInfoUI && <PersonalInfo nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} errors={isError} />}
                    {plansUI && <Plans />}
                    {addOnsIU && <AddOns />}
                    {totalUI && <Total />}
                    {thankYouUI && <Thankyou />}
                </Card>
            </section>
            <Actions />
        </form>
    )
}

export default Submit