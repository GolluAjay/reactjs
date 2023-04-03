import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import signInReducer from "./slice/signIn";
import signUpReducer from "./slice/signUp";
import getHospitalsReducer from "./slice/getHospitals";
import editDonorDetailsRedure from './slice/editDonorDetails'
import uploadFileRedure from "./slice/uploadFile";
import donorProfileRedure from "./slice/donorProfile";
import editRecipientDetailsReducer from "./slice/editRecipientDetails";
import recipientProfileReducer from "./slice/recipientProfile";

export const store = configureStore({
    middleware:[thunk],
    reducer:{
        signUp: signUpReducer,
        signIn: signInReducer,
        hospitalNames : getHospitalsReducer,
        editDonorDetails : editDonorDetailsRedure,
        uploadFile : uploadFileRedure,
        donorProfile : donorProfileRedure,
        editRecipientDetails : editRecipientDetailsReducer,
        recipientProfile : recipientProfileReducer
    },
});
