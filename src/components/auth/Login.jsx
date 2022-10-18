import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import githubIcon from "../../images/svgs/github.svg";
import { getUser, useLogin } from "../../hooks/useLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "../../context/AuthContext";
import PageLoading from "../shared/PageLoading";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
    const userLoggedIn = localStorage.getItem("userLoggedIn") || false;
    const navigate = useNavigate();
    const {
        loginWithGithub,
        loginWithGoogle,
        error,
        isGooglePending,
        isGithubPending,
    } = useLogin();

    const { user, dispatch } = useAuthContext();
    console.log("user from state", user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), authUser => {
            if (authUser) {
                if (authUser.email || authUser.providerData[0].email) {
                    dispatch({
                        type: "AUTH_IS_READY",
                        payload: getUser(authUser),
                    });
                    localStorage.setItem(
                        "loggedInUser",
                        JSON.stringify(getUser(authUser))
                    );
                    navigate("/projects");
                }
            } else {
                console.log("Did not get a user");
            }
        });
        return unsubscribe;
    }, []);

    const handleLogin = async medium => {
        if (medium === "github") {
            await loginWithGithub();
        } else if (medium === "google") {
            await loginWithGoogle();
        }
    };

    return !userLoggedIn ? (
        <div className="container">
            <div className="formContainer">
                <div className="formBody">
                    <h2>Login</h2>
                    <p className="text">
                        Login using github or google below to continue to app.
                    </p>
                    {error && <p className="loginError">{error}</p>}
                    <div className="buttonContainer">
                        <button
                            onClick={() => handleLogin("github")}
                            disabled={isGithubPending || isGooglePending}
                        >
                            {/* <img
                                src={githubIcon}
                                width="25px"
                                height="25px"
                                alt="gh icon"
                            /> */}
                            <AiFillGithub size={"25px"} />
                            <p>
                                {isGithubPending
                                    ? "Logging in..."
                                    : "Login with Github"}
                            </p>
                        </button>
                        <button
                            onClick={() => handleLogin("google")}
                            disabled={isGithubPending || isGooglePending}
                        >
                            {/* <img
                                src={githubIcon}
                                width="25px"
                                height="25px"
                                alt="gh icon"
                            /> */}
                            <AiFillGoogleCircle size={"25px"} />
                            <p>
                                {isGooglePending
                                    ? "Logging in..."
                                    : "Login with Google"}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <PageLoading />
    );
};
export default Login;
