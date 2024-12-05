import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isLoginFormOpen : boolean;
    isRegisterFormOpen : boolean;
}

const initialState : ModalState = {
    isLoginFormOpen :false,
    isRegisterFormOpen : false
}

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        openLoginModal (state) {
            state.isLoginFormOpen = true;    
        },

        closeLoginModal (state) {
            state.isLoginFormOpen = false;
        },

        openRegisterModel (state) {
            state.isRegisterFormOpen = true;
        },

        closeRegisterModal (state) {
            state.isRegisterFormOpen = false;
        }
    } 
});

export const {
    openLoginModal,
    closeLoginModal,
    openRegisterModel,
    closeRegisterModal,
} = modalSlice.actions;

export default modalSlice.reducer;