import { createSlice } from '@reduxjs/toolkit';

type steps = {
    steps: {
        personalInfo: boolean,
        plans: boolean,
        addOns: boolean,
        total: boolean,
        thankYou: boolean
    }
}

const initialState: steps = {
    steps: {
        personalInfo: true,
        plans: false,
        addOns: false,
        total: false,
        thankYou: false
    }
}

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        personalInfo(state) {
            state.steps = { ...state.steps, personalInfo: false, plans: true }
        },
        plans(state) {
            state.steps = { ...state.steps, plans: false, addOns: true }
        },
        addOns(state) {
            state.steps = { ...state.steps, addOns: false, total: true }
        },
        total(state) {
            state.steps = { ...state.steps, total: false, thankYou: true }
        },
    }
});
export const stepAction = stepSlice.actions;
export default stepSlice.reducer; 