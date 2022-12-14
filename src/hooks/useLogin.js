import { useState } from "react";
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const getUser = userObject => {
    const email = userObject.email || userObject.providerData[0].email;

    return {
        id: userObject.uid,
        displayName: userObject.displayName,
        photoURL: userObject.photoURL,
        email,
    };
};

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isGithubPending, setIsGithubPending] = useState(false);
    const [isGooglePending, setIsGooglePending] = useState(false);

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const verifyAndDispatchLogin = user => {
        if (!(user.email || user.providerData[0].email)) {
            console.log("signing user out");
            signOut(getAuth());
            throw new Error("No email address found");
        }
        dispatch({ type: "LOGIN", payload: getUser(user) });
        localStorage.setItem("userLoggedIn", true);
        localStorage.setItem("loggedInUser", JSON.stringify(getUser(user)));
        navigate("/projects");
    };

    const loginWithGithub = async () => {
        setError(null);
        setIsGithubPending(true);

        try {
            const result = await signInWithPopup(getAuth(), githubProvider);
            if (!result) throw new Error("Could not complete action.");

            //access token for Github API
            // const credential = GithubAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            verifyAndDispatchLogin(result.user);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsGithubPending(false);
        }
    };

    const loginWithGoogle = async () => {
        setError(null);
        setIsGooglePending(true);

        try {
            const result = await signInWithPopup(getAuth(), googleProvider);
            if (!result) throw new Error("Could not complete action.");
            verifyAndDispatchLogin(result.user);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsGooglePending(false);
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

    return {
        loginWithGithub,
        loginWithGoogle,
        logOut,
        error,
        isGithubPending,
        isGooglePending,
    };
};
