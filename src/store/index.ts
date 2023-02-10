import { configureStore } from '@reduxjs/toolkit'
import stepState from './stepState';
import personalInfo from './personalInfo';
import plans from './plans';
import addOns from './addOns';
const store = configureStore({
    reducer: {
        stepReducer: stepState,
        planReducer: plans,
        addOnsReducer: addOns,
        personalInfoReducer: personalInfo
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;