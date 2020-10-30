import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        sailorNumber: ''
    },
    reducers: {
        setSailorNumber: (state, action) => {
            state.sailorNumber = action.payload;
        }
    }
})

export const { setSailorNumber } = userSlice.actions;

export default userSlice.reducer;