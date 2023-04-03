import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const donorProfile = createAsyncThunk('donorProfile', async (value) => {
    const response = await axios({
        // const signIn = useSelector((state)=>state.signIn);
        // Endpoint to send files
        
        url: `http://localhost:3000/api/v1/${value.user}/donorDetails`,
        method: "GET",
        headers: {"content-type": 'application/json', "Authorization" : `Bearer ${value.token}`},
        // Attaching the form data
        // data: value,
      })
    return response;
});


const donorProfileSlice = createSlice({
    name:"donorProfile",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(donorProfile.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(donorProfile.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
        })
        builder.addCase(donorProfile.rejected, (state, action)=> {
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
const { actions } = donorProfileSlice;
export const {resetToInitalState} = actions;
export default donorProfileSlice.reducer;