import { useAppSelector } from '../../assets/hooks/redux'

const useCurrentStep = () => {
    const { steps } = useAppSelector(state => state.stepReducer)
    const personalInfoUI = steps.personalInfo.active && !steps.plans.active && !steps.addOns.active && !steps.total.active && !steps.thankYou;
    const plansUI = steps.personalInfo.active && steps.plans.active && !steps.addOns.active && !steps.total.active && !steps.thankYou;
    const addOnsIU = steps.personalInfo.active && steps.plans.active && steps.addOns.active && !steps.total.active && !steps.thankYou;
    const totalUI = steps.personalInfo.active && steps.plans.active && steps.addOns.active && steps.total.active && !steps.thankYou;
    const thankYouUI = steps.personalInfo.active && steps.plans.active && steps.addOns.active && steps.total.active && steps.thankYou;

    type steps = {
        personalInfo: boolean
        plans: boolean,
        addOns: boolean,
        total: boolean,
        thankYou: boolean
    }
    const currentStep: steps = {
        personalInfo: personalInfoUI,
        plans: plansUI,
        addOns: addOnsIU,
        total: totalUI,
        thankYou: thankYouUI
    }
    return currentStep;
}

export default useCurrentStep