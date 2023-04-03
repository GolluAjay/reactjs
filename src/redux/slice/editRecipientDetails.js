import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const editRecipientDetails = createAsyncThunk('editRecipientDetails', async (value) => {
    console.log(value);
    const response = await axios({
        // const signIn = useSelector((state)=>state.signIn);
        // Endpoint to send files
        
        url: `http://localhost:3000/api/v1/${value.user}/editDetails`,
        method: "POST",
        headers: {"content-type": 'application/json', "Authorization" : `Bearer ${value.token}`},
        // Attaching the form data
        data: value,
      })
    return response;
});


const editRecipientDetailsSlice = createSlice({
    name:"editRecipientDetails",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(editRecipientDetails.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(editRecipientDetails.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload.data;
        })
        builder.addCase(editRecipientDetails.rejected, (state, action)=> {
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
const { actions } = editRecipientDetailsSlice;
export const {resetToInitalState} = actions;
export default editRecipientDetailsSlice.reducer;