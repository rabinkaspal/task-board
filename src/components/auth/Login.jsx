import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import githubIcon from "../../images/svgs/github.svg";
import { useLogin } from "../../hooks/useLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "../../context/AuthContext";
import PageLoading from "../shared/PageLoading";

const Login = () => {
    const userLoggedIn = localStorage.getItem("userLoggedIn") || false;
    const navigate = useNavigate();
    const {
        loginWithGithub,
        loginWithGoogle,
        logOut,
        error,
        isPending,
    } = useLogin();

    const { user, dispatch } = useAuthContext();
    console.log("user from state", user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            dispatch({ type: "AUTH_IS_READY", payload: user });
            if (user) {
                navigate("/projects");
                localStorage.setItem("loggedInUser", JSON.stringify(user));
            }
        });
        return unsubscribe;
    }, []);

    const handleLogin = async medium => {
        if (medium === "github") {
            await loginWithGithub();
            navigate("/projects");
        } else if (medium === "google") {
            await loginWithGoogle();
            console.log("Login with google");
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
                            disabled={isPending}
                        >
                            <img
                                src={githubIcon}
                                width="25px"
                                height="25px"
                                alt="gh icon"
                            />
                            {isPending ? "Logging in..." : "Login with Github"}
                        </button>
                        <button
                            onClick={() => handleLogin("google")}
                            disabled={isPending}
                        >
                            <img
                                src={githubIcon}
                                width="25px"
                                height="25px"
                                alt="gh icon"
                            />
                            Login with Google
                        </button>
                    </div>
                </div>
                <button onClick={logOut}>Logout</button>
            </div>
        </div>
    ) : (
        <PageLoading />
    );
};
export default Login;
