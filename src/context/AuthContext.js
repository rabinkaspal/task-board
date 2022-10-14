import React, { useContext, useReducer, createContext } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();

const initialState = {
    user: null,
    authIsReady: false,
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
