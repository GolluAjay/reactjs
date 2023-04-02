import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const getHospitals = createAsyncThunk('getHospitals', async (value) => {
    const response = await axios({
  
        // Endpoint to send files
        url: `http://localhost:3000/api/v1/${value.user}/hospitalNames`,
        method: "GET",
        headers: {"content-type": 'application/json'},
        // Attaching the form data
        data: value,
      })
    return response;
});


const getHospitalsSlice = createSlice({
    name:"getHospitals",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(getHospitals.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getHospitals.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
            // console.log(action);
        })
        builder.addCase(getHospitals.rejected, (state, action)=> {
            state.isError = true;
            state.data = null;
            console.log('Error', action.payload);
        })
    },
    reducers:{
        resetToInitalState:(state,action)=>{
            return initalValues;
        }
    }

});
const { actions } = getHospitalsSlice;
export const {resetToInitalState} = actions;
export default getHospitalsSlice.reducer;