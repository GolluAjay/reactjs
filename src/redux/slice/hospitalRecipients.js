import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const hospitalRecipient = createAsyncThunk('hospitalRecipient', async (value) => {
    const response = await axios({
  
        // Endpoint to send files
        url: `http://localhost:3000/api/v1/${value.user}/recipients`,
        method: "GET",
        headers: {"content-type": 'application/json', "Authorization" : `Bearer ${value.token}`},
        // Attaching the form data
        data: value,
      })
    return response;
});


const hospitalRecipientSlice = createSlice({
    name:"hospitalRecipient",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(hospitalRecipient.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(hospitalRecipient.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
            // console.log(action);
        })
        builder.addCase(hospitalRecipient.rejected, (state, action)=> {
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
const { actions } = hospitalRecipientSlice;
export const {resetToInitalState} = actions;
export default hospitalRecipientSlice.reducer;