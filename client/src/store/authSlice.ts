import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    userId: string | null;
    userName: string | null;
    isAuthenticated: boolean;
}

const initialState : AuthState = {
    token : null,
    userId : null,
    userName: null,
    isAuthenticated : false,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, actions : PayloadAction<{ token: string; userId: string; userName: string; }>) => {
            state.token = actions.payload.token;
            state.userId = actions.payload.userId;
            state.userName = actions.payload.userName;
            state.isAuthenticated = true;
        },

        logout : (state) => {
            state.token = null;
            state.userId = null;
            state.userName= null;
            state.isAuthenticated = false;

            localStorage.removeItem("userData");
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;