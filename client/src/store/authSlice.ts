import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    userId: string | null;
    isAuthenticated: boolean;
}

const initialState : AuthState = {
    token : null,
    userId : null,
    isAuthenticated : false,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, actions : PayloadAction<{ token: string; userId: string }>) => {
            state.token = actions.payload.token;
            state.userId = actions.payload.userId;
            state.isAuthenticated = true;
        },

        logout : (state) => {
            state.token = null;
            state.userId = null;
            state.isAuthenticated = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;