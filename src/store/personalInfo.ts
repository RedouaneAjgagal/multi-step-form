import { createSlice } from "@reduxjs/toolkit";

type values = {
    data: {
        name: {
            value: null | string,
            error: boolean,
            touched: boolean
        },
        email: {
            value: null | string,
            error: boolean,
            touched: boolean
        },
        phone: {
            value: null | number,
            error: boolean,
            touched: boolean
        },
    },
}

const initialState: values = {
    data: {
        name: {
            value: null,
            error: true,
            touched: false
        },
        email: {
            value: null,
            error: true,
            touched: false
        },
        phone: {
            value: null,
            error: true,
            touched: false
        }
    }
}

const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        name(state, action) {
            state.data.name.touched = true;
            if (action.payload.name.trim().length < 2) {
                state.data.name.error = true;
            } else {
                state.data.name = { ...state.data.name, value: action.payload.name, error: false }
            }
        },
        email(state, action) {
            state.data.email.touched = true;
            const validEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(action.payload.email));
            if (!validEmail) {
                state.data.email.error = true;
            } else {
                state.data.email = { ...state.data.email, value: action.payload.email, error: false }
            }
        },
        phone(state, action) {
            state.data.phone.touched = true
            const phoneValue = action.payload.phone
            if (phoneValue.toString().trim().length < 7) {
                state.data.phone.error = true;
            } else {
                state.data.phone = { ...state.data.phone, value: action.payload.phone, error: false }
            }
        }
    }
});

export const infoAction = personalInfoSlice.actions;
export default personalInfoSlice.reducer;