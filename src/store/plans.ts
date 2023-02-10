import { createSlice } from '@reduxjs/toolkit'
import arcadeIcon from '../../src/assets/images/icon-arcade.svg'
import advanceIcon from '../../src/assets/images/icon-advanced.svg'
import proIcon from '../../src/assets/images/icon-pro.svg'
type plans = {
    plans: { plan: string, price: number, icon: string, selected: boolean }[],
    yearly: boolean
}

const initialState: plans = {
    plans: [
        { plan: 'Arcade', price: 9, icon: arcadeIcon, selected: true },
        { plan: 'Advanced', price: 12, icon: advanceIcon, selected: false },
        { plan: 'Pro', price: 15, icon: proIcon, selected: false }
    ],
    yearly: false
}

const planSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        billing(state) {
            state.yearly = !state.yearly
            if (state.yearly) {
                state.plans = state.plans.map(plan => {
                    return { ...plan, price: plan.price * 10 }
                });
            } else {
                state.plans = state.plans.map(plan => {
                    return { ...plan, price: plan.price / 10 }
                });
            }
        },
        selectPlan(state, action) {
            const selectedPlans = state.plans.map(item => {
                if (item.plan === action.payload.plan) {
                    return { ...item, selected: true }
                } else {
                    return { ...item, selected: false}
                }
            });
            state.plans = selectedPlans;
        }
    }
});

export const planAction = planSlice.actions;
export default planSlice.reducer;