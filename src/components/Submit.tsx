import { useState } from 'react'
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

type errorType = {
    name: boolean,
    email: boolean,
    phone: boolean
}

const Submit = () => {
    // Display pages
    const { steps } = useAppSelector(state => state.stepReducer);
    const { yearly, plans } = useAppSelector(state => state.planReducer);
    const { addOns } = useAppSelector(state => state.addOnsReducer);
    const personalInfo = useAppSelector(state => state.personalInfoReducer);

    const [errors, setErrors] = useState<errorType>({ name: false, email: false, phone: false });

    const dispatch = useAppDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (true) {
            case steps.currentStep === 1:
                const formErrors = Object.values(personalInfo.data).some(value => value.error);
                if (formErrors) {
                    const errorData = {
                        name: personalInfo.data.name.error,
                        email: personalInfo.data.email.error,
                        phone: personalInfo.data.phone.error
                    }
                    return setErrors(errorData);
                }
                setErrors({ name: false, email: false, phone: false });
                return dispatch(stepAction.personalInfo({ data: personalInfo.data }));
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
        <form onSubmit={submitHandler} className='flex flex-col justify-between gap-4 h-full min-h-screen md:col-span-2 md:min-h-0'>
            <section className='px-4 items-center relative z-10 mt-32 md:mt-0'>
                <Card>
                    {steps.currentStep === 1 && <PersonalInfo errors={errors} />}
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