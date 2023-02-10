import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    addOns: [
        {
            addOn: 'Online service',
            details: 'Access to multiplayer games',
            price: 1,
            selected: true
        },
        {
            addOn: 'Larger storage',
            details: 'Extra 1TB of cloud save',
            price: 2,
            selected: true
        },
        {
            addOn: 'Customizable profile',
            details: 'Custom theme on your profile',
            price: 2,
            selected: false
        },
    ]
}

const addOnSlice = createSlice({
    name: 'addOns',
    initialState,
    reducers: {
        selectAddOn(state, action) {
            const selectedAddons = state.addOns.map(item => {
                if (item.addOn === action.payload.addOn) {
                    return { ...item, selected: true }
                } else {
                    return item
                }
            });
            state.addOns = selectedAddons;
        },
        removeAddOn(state, action) {
            const unSelectAddons = state.addOns.map(item => {
                if (item.addOn === action.payload.addOn) {
                    return { ...item, selected: false }
                } else {
                    return item
                }
            });
            state.addOns = unSelectAddons;
        }
    }
});

export const addOnAction = addOnSlice.actions;
export default addOnSlice.reducer;