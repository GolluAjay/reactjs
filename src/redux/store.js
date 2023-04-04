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
import hospitalDonorRedure from "./slice/hospitalDonor";
import donorAuthorizeRedure from './slice/hospitalDonorAuthorize';
import donorUnuthorizeRedure from './slice/hospitalDonorUnauthorize';
import recipientAuthorizeRedure from './slice/hospitalRecipientAuthorize';
import recipientUnauthorizeRedure from './slice/hospitalRecipientUnauthorize';
import hospitalRecipientReducer from './slice/hospitalRecipients';
import donorMatchReducer from './slice/donorMatch'
import hospitalDonorStatusReducer from './slice/hospitalDonorStatus';
import hospitalRecipientStatusReducer from "./slice/hospitalRecipientStatus";

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
        recipientProfile : recipientProfileReducer,
        hospitalDonor : hospitalDonorRedure,
        donorAuthorize : donorAuthorizeRedure,
        donorUnuthorize : donorUnuthorizeRedure,
        recipientAuthorize : recipientAuthorizeRedure,
        recipientUnauthorize : recipientUnauthorizeRedure,
        hospitalRecipient : hospitalRecipientReducer,
        donorMatch : donorMatchReducer,
        hospitalDonorStatus : hospitalDonorStatusReducer,
        hospitalRecipientStatus : hospitalRecipientStatusReducer
    },
});
