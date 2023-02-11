import { createSlice } from '@reduxjs/toolkit';

type steps = {
    steps: {
        personalInfo: {
            active: boolean,
            data: { name: string | null, email: string | null, phone: string | null }
        },
        plans: {
            active: boolean,
            data: { plan: string | null, price: number | null, yearly: boolean }
        },
        addOns: {
            active: boolean,
            data: [{ addOn: string | null, price: number | null }]
        },
        total: {
            active: boolean,
            data: { total: number | null }
        },
        thankYou: boolean,
        currentStep: number,
        maxStep: number,
    },
}

const initialState: steps = {
    steps: {
        personalInfo: {
            active: true,
            data: { name: null, email: null, phone: null }
        },
        plans: {
            active: false,
            data: { plan: null, price: null, yearly: false }
        },
        addOns: {
            active: false,
            data: [{ addOn: null, price: null }]
        },
        total: {
            active: false,
            data: { total: null }
        },
        thankYou: false,
        currentStep: 1,
        maxStep: 1
    }
}

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        personalInfo(state, action) {
            state.steps = {
                ...state.steps,
                personalInfo: {
                    ...state.steps.personalInfo,
                    data: action.payload.data
                },
                plans: {
                    ...state.steps.plans,
                    active: true
                },
                currentStep: state.steps.currentStep + 1
            }
        },
        plans(state, action) {
            state.steps = {
                ...state.steps,
                plans: {
                    ...state.steps.plans,
                    data: action.payload.data
                },
                addOns: {
                    ...state.steps.addOns,
                    active: true
                },
                currentStep: state.steps.currentStep + 1
            }
        },
        addOns(state, action) {
            state.steps = {
                ...state.steps,
                addOns: {
                    ...state.steps.addOns,
                    data: action.payload.data
                },
                total: {
                    ...state.steps.total,
                    active: true
                },
                currentStep: state.steps.currentStep + 1
            }
        },
        total(state, action) {
            state.steps = {
                ...state.steps,
                total: {
                    ...state.steps.total,
                    data: action.payload.data
                },
                thankYou: true,
                currentStep: state.steps.currentStep + 1
            }
        },
        goBack(state) {
            state.steps = {
                ...state.steps,
                currentStep: state.steps.currentStep - 1
            }
        },
        navigate(state, action) {
            if (action.payload.allowed) {
                state.steps = {...state.steps, currentStep: action.payload.navigate}
            }
        }
    }
});

export const stepAction = stepSlice.actions;
export default stepSlice.reducer; 