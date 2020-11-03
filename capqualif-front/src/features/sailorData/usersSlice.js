import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CAPQUALIF_URL } from '../../api/apiList';


export const getSailorCivilData = createAsyncThunk(
    'sailors/getSailorCivilDataBySailorNumber',
    async (sailorNumber, thunkAPI) => {
      const response = await axios.get(`${CAPQUALIF_URL}/${sailorNumber}`);
      return response.data;
    }
  )

export const sailorSlice = createSlice({
    name: 'sailor',
    initialState: {
        sailorCivilData: {},
        stauts: 'idle'
    },
    reducers: {
    },
    extraReducers: {
        [getSailorCivilData.fulfilled]: (state, action) => {
            state.sailorCivilData = action.payload;
        }
    }
})

export default sailorSlice.reducer;