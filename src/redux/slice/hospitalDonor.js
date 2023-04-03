import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const hospitalDonor = createAsyncThunk('hospitalDonor', async (value) => {
    const response = await axios({
  
        // Endpoint to send files
        url: `http://localhost:3000/api/v1/${value.user}/donors`,
        method: "GET",
        headers: {"content-type": 'application/json', "Authorization" : `Bearer ${value.token}`},
        // Attaching the form data
        data: value,
      })
    return response;
});


const hospitalDonorSlice = createSlice({
    name:"hospitalDonor",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(hospitalDonor.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(hospitalDonor.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
            // console.log(action);
        })
        builder.addCase(hospitalDonor.rejected, (state, action)=> {
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
const { actions } = hospitalDonorSlice;
export const {resetToInitalState} = actions;
export default hospitalDonorSlice.reducer;