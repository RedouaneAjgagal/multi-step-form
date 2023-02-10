import { configureStore } from '@reduxjs/toolkit'
import stepState from './stepState';
import plans from './plans';
import addOns from './addOns';
const store = configureStore({
    reducer: { stepReducer: stepState, planReducer: plans, addOnsReducer: addOns }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;