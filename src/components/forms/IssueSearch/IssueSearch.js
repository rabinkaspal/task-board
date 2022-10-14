import React, { Fragment } from "react";

const IssueSearch = ({ onClose }) => {
    return (
        <Fragment>
            <div className="modalIssueSearch">
                <h2>IssueSearch</h2>
                <button className="modalSearchClose" onClick={() => onClose()}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </Fragment>
    );
};

export default IssueSearch;
