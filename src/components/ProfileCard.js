import React from "react";

const ProfileCard = ({ user }) => {
    const email = user.email || user.providerData[0].email;
    const username = user.username || email.slice(0, email.indexOf("@"));
    return (
        <>
            <div className="profile-card">
                <img className="profile-img" src={user.photoURL} alt="" />
                <div className="info">
                    <p>
                        Name: <span>{user.displayName}</span>
                    </p>
                    <p>
                        Username: <span>{username}</span>
                    </p>
                    <p>
                        Email: <span>{email}</span>
                    </p>
                    <p>
                        User ID: <span>{user.id}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
