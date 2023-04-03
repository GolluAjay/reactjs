import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const recipientProfile = createAsyncThunk('recipientProfile', async (value) => {
    const response = await axios({
        // const signIn = useSelector((state)=>state.signIn);
        // Endpoint to send files
        
        url: `http://localhost:3000/api/v1/${value.user}/recipientDetails`,
        method: "GET",
        headers: {"content-type": 'application/json', "Authorization" : `Bearer ${value.token}`},
        // Attaching the form data
        // data: value,
      })
    return response;
});


const recipientProfileSlice = createSlice({
    name:"recipientProfile",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(recipientProfile.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(recipientProfile.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
        })
        builder.addCase(recipientProfile.rejected, (state, action)=> {
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
const { actions } = recipientProfileSlice;
export const {resetToInitalState} = actions;
export default recipientProfileSlice.reducer;