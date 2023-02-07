import { configureStore } from '@reduxjs/toolkit'
import stepState from './stepState';

const store = configureStore({
    reducer: { stepReducer: stepState }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;