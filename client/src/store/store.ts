import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modalSlice.ts';
import authReducer from './authSlice.ts';

export const store = configureStore ({
    reducer : {
        auth : authReducer,
        modal : modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;