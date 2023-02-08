import React, { useRef } from 'react'
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
    const { steps } = useAppSelector(state => state.stepReducer);

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (true) {
            case steps.personalInfo:
                const formValues = {
                    nameVal: nameRef.current!.value,
                    emailVal: emailRef.current!.value,
                    phoneVal: phoneRef.current!.value
                }
                if (validForm(formValues)) {
                    dispatch(stepAction.personalInfo());
                }
                return
            case steps.plans:
                return console.log('plans')
            case steps.addOns:
                return console.log('addons')
            case steps.total:
                return console.log('total')
            default:
                break;
        }
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col justify-between gap-4'>
            <section className='px-4 items-center'>
                <Card>
                    {steps.personalInfo && <PersonalInfo nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} />}
                    {steps.plans && <Plans />}
                    {steps.addOns && <AddOns />}
                    {steps.total && <Total />}
                    {steps.thankYou && <Thankyou />}
                </Card>
            </section>
            <Actions />
        </form>
    )
}

export default Submit