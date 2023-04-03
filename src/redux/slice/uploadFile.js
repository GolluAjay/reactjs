import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalValues = {
    isLoading:false,
    data:null,
    isError:false
};

export const uploadFile = createAsyncThunk('uploadFile', async (value) => {
    console.log(value);
    const formData = new FormData();
    formData.append("file", value.file);

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + value.token
      };
    
    const response = await axios.post(`http://localhost:3000/api/v1/${value.user}/upload`, formData, {headers})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    return response;
});


const uploadFileSlice = createSlice({
    name:"uploadFile",
    initialState:initalValues,
    extraReducers:(builder) => {
        builder.addCase(uploadFile.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(uploadFile.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload;
        })
        builder.addCase(uploadFile.rejected, (state, action)=> {
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
const { actions } = uploadFileSlice;
export const {resetToInitalState} = actions;
export default uploadFileSlice.reducer;