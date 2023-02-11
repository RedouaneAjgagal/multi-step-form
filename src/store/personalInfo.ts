import { createSlice } from "@reduxjs/toolkit";

type values = {
    data: {
        name: {
            value: null | string,
            error: boolean,
        },
        email: {
            value: null | string,
            error: boolean,
        },
        phone: {
            value: null | number,
            error: boolean,
        },
    },
}

const initialState: values = {
    data: {
        name: {
            value: null,
            error: true,
        },
        email: {
            value: null,
            error: true,
        },
        phone: {
            value: null,
            error: true,
        }
    }
}

const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        name(state, action) {
            if (action.payload.name.trim().length < 2) {
                state.data.name.error = true;
            } else {
                state.data.name = { ...state.data.name, value: action.payload.name, error: false }
            }
        },
        email(state, action) {
            const validEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(action.payload.email));
            if (!validEmail) {
                state.data.email.error = true;
            } else {
                state.data.email = { ...state.data.email, value: action.payload.email, error: false }
            }
        },
        phone(state, action) {
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