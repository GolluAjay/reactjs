import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const donorAuthorize = createAsyncThunk('donorAuthorize', async (value) => {
    const response = await axios({
        // Endpoint to send files
        url: `http://localhost:3000/api/v1/${value.user}/donor/authorize/${value.id}`,
        method: "GET",
        headers: {"content-type": 'application/json', "Authorization" : `Bearer ${value.token}`},
        // Attaching the form data
        data: value,
      })
    return response;
});


const donorAuthorizeSlice = createSlice({
    name:"donorAuthorize",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(donorAuthorize.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(donorAuthorize.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
            console.log(action);
        })
        builder.addCase(donorAuthorize.rejected, (state, action)=> {
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
const { actions } = donorAuthorizeSlice;
export const {resetToInitalState} = actions;
export default donorAuthorizeSlice.reducer;