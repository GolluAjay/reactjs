import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const signIn = createAsyncThunk('signIn', async (value) => {
    const response = await axios({
  
        // Endpoint to send files
        url: `http://localhost:3000/api/v1/${value.user}/signIn`,
        method: "POST",
        headers: {"content-type": 'application/json'},
        // Attaching the form data
        data: value,
      })
    return response;
});


const signInSlice = createSlice({
    name:"signIn",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(signIn.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
            console.log(action);
        })
        builder.addCase(signIn.rejected, (state, action)=> {
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
const { actions } = signInSlice;
export const {resetToInitalState} = actions;
export default signInSlice.reducer;