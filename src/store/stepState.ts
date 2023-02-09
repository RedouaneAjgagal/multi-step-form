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
            state.steps = { ...state.steps, plans: true }
        },
        plans(state) {
            state.steps = { ...state.steps, addOns: true }
        },
        addOns(state) {
            state.steps = { ...state.steps, total: true }
        },
        total(state) {
            state.steps = { ...state.steps, thankYou: true }
        },
    }
});
export const stepAction = stepSlice.actions;
export default stepSlice.reducer; 