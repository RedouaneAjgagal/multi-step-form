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
    const { yearly, plans } = useAppSelector(state => state.planReducer);
    const { addOns } = useAppSelector(state => state.addOnsReducer);
    const personalInfoUI = steps.personalInfo.active && !steps.plans.active && !steps.addOns.active && !steps.total.active && !steps.thankYou;
    const plansUI = steps.personalInfo.active && steps.plans.active && !steps.addOns.active && !steps.total.active && !steps.thankYou;
    const addOnsIU = steps.personalInfo.active && steps.plans.active && steps.addOns.active && !steps.total.active && !steps.thankYou;
    const totalUI = steps.personalInfo.active && steps.plans.active && steps.addOns.active && steps.total.active && !steps.thankYou;
    const thankYouUI = steps.personalInfo.active && steps.plans.active && steps.addOns.active && steps.total.active && steps.thankYou;

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
                return dispatch(stepAction.personalInfo({ data: formValues }));
            case plansUI:
                const planSelected = plans.find(plan => plan.selected);
                const planData = {
                    plan: planSelected!.plan,
                    price: planSelected!.price,
                    yearly: yearly
                }
                return dispatch(stepAction.plans({ data: planData }));
            case addOnsIU:
                const selectedAddOns = addOns.filter(item => item.selected);
                const addOnsData = selectedAddOns.map(item => {
                    return { addOn: item.addOn, price: yearly ? item.price * 10 : item.price }
                });
                return dispatch(stepAction.addOns({ data: addOnsData }));
            case totalUI:
                const totalAddons = steps.addOns.data.reduce((intialState, item) => {
                    return intialState + item.price!;
                }, 0);

                const total = steps.plans.data.price! + totalAddons;
                return dispatch(stepAction.total({ data: { total } }));
            case thankYouUI:
                console.log('Thanks');
            default:
                break;
        }
    }
    console.log(steps)
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
            {!thankYouUI && <Actions hideGoBack={personalInfoUI} confirm={totalUI} />}
        </form>
    )
}

export default Submit