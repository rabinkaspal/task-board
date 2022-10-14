import React from "react";
import { useParams } from "react-router-dom";

const IssueDetail = ({ project, onSave, onClose }) => {
    const params = useParams();

    return (
        <div>
            IssueDetail <br />
            Issue Id: {params.issueId}
            <button onClick={onClose}>Close Modal</button>
        </div>
    );
};

export default IssueDetail;
