import React from "react";
import { useLogin } from "../hooks/useLogin";

const ProfileCard = ({ user }) => {
    const { logOut } = useLogin();
    return (
        <>
            <div className="profile-card">
                <img className="profile-img" src={user.photoURL} alt="" />
                <div className="info">
                    <p>
                        Name: <span>{user.displayName}</span>
                    </p>
                    <p>
                        Username: <span>{user.reloadUserInfo.screenName}</span>
                    </p>
                    <p>
                        Email: <span>{user.email}</span>
                    </p>
                    <p>
                        User ID: <span>{user.uid}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
