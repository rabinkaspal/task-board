import React, { useEffect, useState } from "react";
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const loginWithGithub = async () => {
        setError(null);
        setIsPending(true);

        try {
            const result = await signInWithPopup(getAuth(), githubProvider);
            if (!result) throw new Error("Could not complete action.");

            //access token for Github API
            // const credential = GithubAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;

            const user = result.user;
            dispatch({ type: "LOGIN", payload: user });
            localStorage.setItem("userLoggedIn", true);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
        } catch (error) {
            setError(error.message);
        } finally {
            setIsPending(false);
        }
    };

    const loginWithGoogle = async () => {
        setError(null);
        setIsPending(true);

        try {
            const result = await signInWithPopup(getAuth(), googleProvider);
            if (!result) throw new Error("Could not complete action.");
            const user = result.user;
            dispatch({ type: "LOGIN", payload: user });
            localStorage.setItem("userLoggedIn", true);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
        } catch (error) {
            setError(error.message);
        } finally {
            setIsPending(false);
        }
    };

    const logOut = async () => {
        try {
            await signOut(getAuth());
            console.log("user logged out");
            dispatch({ type: "LOGOUT" });
            localStorage.removeItem("userLoggedIn");
            localStorage.removeItem("loggedInUser");
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return { loginWithGithub, loginWithGoogle, logOut, error, isPending };
};
