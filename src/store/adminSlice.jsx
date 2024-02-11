import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'adminAuth',
    initialState: {
        name: null,
        role: null,
        token: null,
        adminId: null,
        isBlocked: false,
        cartItems: [],
    },
    reducers: {
        adminLogin:(state,action)=>{
            console.log("action.payload.token", action.payload.token)
            state.name = action.payload.name
            state.role = action.payload.role
            state.token = action.payload.token
            state.adminId = action.payload.adminId
        },
        adminLogout: (state, action) => {
                state.name = null
                state.role = null
                state.token = null
                state.userId = null
        }
    }
});

export const { adminLogin, adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
