import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CAPQUALIF_URL, SAILORS_ENDPOINT } from '../../api/apiList';


export const getSailorCivilData = createAsyncThunk(
    'sailors/getSailorCivilDataBySailorNumber',
    async (sailorNumber, thunkAPI) => {
      const response = await axios.get(`${CAPQUALIF_URL}/${SAILORS_ENDPOINT}/${sailorNumber}`);
      return response.data;
    }
  )

export const sailorSlice = createSlice({
    name: 'sailor',
    initialState: {
        sailorBasicData: {}
    },
    reducers: {
    },
    extraReducers: {
        [getSailorCivilData.fulfilled]: (state, action) => {
            state.sailorBasicData = action.payload;
            state.status = 'fulfilled';
        }
    }
})

export default sailorSlice.reducer;