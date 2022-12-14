import React, { useEffect, useMemo } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { debounce } from "lodash";
import { useRef } from "react";

const IssueFilters = ({
    projectUsers: users,
    filterIssuesUserIds,
    setFilterUserIds,
    setFilterText,
    setFilterIssuesUserIds,
    filterText,
}) => {
    const user =
        useAuthContext().user ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    // if (user) {
    //     const hasUser = users.find(u => u.id === user.uid);

    //     if (!hasUser) {
    //         users[users.length] = {
    //             name: user.displayName,
    //             avatarUrl: user.photoURL,
    //             id: user.uid,
    //             projectId: "ZYhzWxbKDPG3xHjNAWMH",
    //         };
    //     }
    // }

    const inputRef = useRef();

    const clearFilters = () => {
        setFilterText("");
        setFilterIssuesUserIds([]);
        inputRef.current.value = "";
    };

    const setFilterOnlyMyIssues = () => {
        setFilterIssuesUserIds([]);
        setFilterUserIds(user.uid);
    };

    const changeHandler = event => {
        setFilterText(event.target.value);
    };

    const debouncedChangeHandler = useMemo(() => {
        return debounce(changeHandler, 300);
    }, []);

    useEffect(() => {
        return () => debouncedChangeHandler.cancel();
    }, []);

    const isUserFilterSet = userId => filterIssuesUserIds.includes(userId);

    return (
        <div className="boardFilters">
            <span className="searchField">
                <img
                    src="https://img.icons8.com/ios-glyphs/60/search--v1.png"
                    alt="gh"
                />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search Issues"
                    onChange={debouncedChangeHandler}
                />
            </span>
            <div className="taskMembers">
                {users &&
                    users.map(u => {
                        return (
                            <img
                                className={`${
                                    isUserFilterSet(u.id) ? "selected" : ""
                                }`}
                                src={u.avatarUrl}
                                alt={u.name}
                                key={u.id}
                                onClick={() => setFilterUserIds(u.id)}
                            />
                        );
                    })}
            </div>
            <div className="textFilters">
                {user && (
                    <button
                        className={`button ${
                            isUserFilterSet(user.uid) ? "selected" : ""
                        }`}
                        onClick={setFilterOnlyMyIssues}
                    >
                        <span>Only My Issues</span>
                    </button>
                )}
                <button className="button">
                    <span>Recently Updated</span>
                </button>
                {(filterIssuesUserIds.length > 0 || filterText !== "") && (
                    <button className="button link" onClick={clearFilters}>
                        <span>Clear All</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default IssueFilters;
