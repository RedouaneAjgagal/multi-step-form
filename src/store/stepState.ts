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
        thankYou: boolean
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
        thankYou: false
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
                }
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
                }
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
                }
            }
        },
        total(state, action) {
            state.steps = {
                ...state.steps,
                total: {
                    ...state.steps.total,
                    data: action.payload.data
                },
                thankYou: true
            }
        },
    }
});
export const stepAction = stepSlice.actions;
export default stepSlice.reducer; 