import React from "react";
import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

const ProjectHeader = ({ user, logOut }) => {
    const email = user.email || user.providerData[0].email;
    const username = user.username || email.slice(0, email.indexOf("@"));
    return (
        <NavHeader>
            <NavMenu>
                <NavItem>
                    <a href="http://example.com/">
                        <BiPlus size="22px" />
                        Add New Project
                    </a>
                </NavItem>
            </NavMenu>
            <NavMenu>
                {/* <NavItem>
                    <a href="http://example.com/">
                        <BiLogOut size="22px" />
                        Log Out
                    </a>
                </NavItem> */}
                <NavItem>
                    <ProfileIcon>
                        <img src={user.photoURL} alt={user.displayName} />
                        <UserInfo>
                            <p>
                                <span>{user.displayName}</span>@{username}
                            </p>

                            <button onClick={logOut}>
                                <p className="logout">Log Out</p>
                            </button>
                        </UserInfo>
                    </ProfileIcon>
                </NavItem>
            </NavMenu>
        </NavHeader>
    );
};

const NavHeader = styled.nav`
    background: #0747a6;
    border-bottom: 0 solid #0747a6;
    box-sizing: border-box;
    color: #deebff;
    padding: 0 15px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const NavMenu = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;
`;

const NavItem = styled.li`
    display: flex;
    & a {
        color: #deebff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        line-height: 1.5;
        padding: 10px;
        background-color: #0747a6;

        &:hover {
            background-color: rgba(9, 30, 66, 0.48);
        }
    }
`;

const ProfileIcon = styled.div`
    background: none;
    display: flex;
    align-items: center;
    position: relative;

    & img {
        width: 30px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    &:hover div {
        display: block;
    }
`;

const UserInfo = styled.div`
    display: none;
    position: absolute;
    min-width: 200px;
    top: 45px;
    right: -8px;
    background: white;
    border: 1px solid #dedede;
    border-radius: 4px;
    color: #474444;

    &:before {
        content: " ";
        width: 10px;
        height: 10px;
        border-left: 1px solid #dedede;
        position: absolute;
        top: -6px;
        background-color: white;
        transform: rotate(45deg);
        border-top: 1px solid #dedede;
        right: 16px;
    }

    & p.logout {
        font-size: 14px;
        color: #5a5858;
    }

    & p {
        padding: 15px 20px;
        text-align: left;
        margin: 0;
        border-bottom: 1px solid #eee;

        &:last-child {
            border: none;
        }

        & span {
            display: block;
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 16px;
        }
    }
    & button {
        width: 100%;
        border: none;
        background: none;
        color: #000;
        padding: 0;
        text-align: left;
        display: block;
        cursor: pointer;

        &:hover {
            background-color: #dddeee;
        }
    }
`;

export default ProjectHeader;
