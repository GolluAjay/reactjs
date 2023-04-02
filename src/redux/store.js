import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import signInReducer from "./slice/signIn";
import signUpReducer from "./slice/signUp";
import getHospitalsReducer from "./slice/getHospitals";

export const store = configureStore({
    middleware:[thunk],
    reducer:{
        signUp: signUpReducer,
        signIn: signInReducer,
        hospitalNames : getHospitalsReducer
    },
});
