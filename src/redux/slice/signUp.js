import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false,
    registered:false
};

export const signUp = createAsyncThunk('signUp', async (value) => {
    const response = await axios({
  
        // Endpoint to send files
        url: `http://localhost:3000/api/v1/${value.user}/signUp`,
        method: "POST",
        headers: {"content-type": 'application/json'},
        // Attaching the form data
        data: value,
      })
    return response;
});


const signUpSlice = createSlice({
    name:"signup",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(signUp.pending, (state, action)=> {
            state.isLoading = true;
            state.registered = false;
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data.message;
            state.registered = true;
            console.log(state);
        })
        builder.addCase(signUp.rejected, (state, action)=> {
            state.isError = true;
            state.registered = false;
            console.log('Error', action.payload);
        })
    },
    reducers:{
        resetToInitalState:(state,action)=>{
            return initalValues;
        }
    }

});
const { actions } = signUpSlice;
export const {resetToInitalState} = actions;
export default signUpSlice.reducer;