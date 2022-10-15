import { Form, Formik } from "formik";
import React from "react";
import { issueCreateSchema } from "../../../formSchemas";
import Divider from "../../shared/Divider";
import DropDown from "../DropDown";
import MultiDropDown from "../MultiDropDown";
import Input from "../Input";
import TextArea from "../TextArea";

import db from "./../../../firebase/firebase-config";
import {
    collection,
    doc,
    updateDoc,
    arrayUnion,
    addDoc,
    Timestamp,
} from "firebase/firestore";

const topicOptions = [
    { value: "0Food", label: "Food" },
    { value: "1Being Fabulous", label: "Being Fabulous" },
    { value: "2Ken Wheeler", label: "Ken Wheeler" },
    { value: "3ReasonML", label: "ReasonML" },
    { value: "4Unicorns", label: "Unicorns" },
    { value: "5Kittens", label: "Kittens" },
];

const IssueCreate = ({ onClose, project }) => {
    //submit the form and closemodal
    const onSubmit = async (values, actions) => {
        console.log("topics", values.topics);
        try {
            const docRef = await addDoc(collection(db, "issues"), {
                description: values.description,
                reporterId: values.reporter,
                userIds: [values.assignee],
                descriptionText: values.description,
                listPosition: 0,
                estimate: 0,
                timeRemaining: 0,
                timeSpent: 0,
                projectId: project.id,
                status: "backlog",
                title: values.shortSummary,
                type: values.issueType,
                priority: values.priority,
                createdAt: Timestamp.now(),
            });
            const projectIssues = {
                id: docRef.id,
                title: values.shortSummary,
                userIds: [values.assignee],
                listPosition: 0,
                priority: values.priority,
                status: "backlog",
                type: values.issueType,
            };
            const issueRef = doc(db, "projectss", project.id);
            await updateDoc(issueRef, {
                issues: arrayUnion(projectIssues),
            });
        } catch (err) {
            alert(err);
        }
        actions.resetForm();
        onClose();
    };

    return (
        <Formik
            initialValues={{
                issueType: "",
                shortSummary: "",
                description: "",
                reporter: "",
                assignee: "",
                priority: "",
                topics: [],
            }}
            validationSchema={issueCreateSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="modalHeader">Create Issue</div>
                    <div className="modalContent">
                        <DropDown
                            label="Issue Type"
                            name="issueType"
                            hint="Start typing to get a list of possible matches."
                        >
                            <option value=""></option>
                            <option value="task">Task</option>
                            <option value="story">Story</option>
                            <option value="bug">Bug</option>
                        </DropDown>

                        <Divider />

                        <MultiDropDown
                            label="Select Topics"
                            name="topics"
                            hint="Select at least 1 option"
                            options={topicOptions}
                        />

                        <Divider />

                        <Input
                            label="Short Summary"
                            name="shortSummary"
                            type="text"
                            hint="Concisely summarize the issue in one or two sentences."
                        />

                        <TextArea
                            label="Description"
                            name="description"
                            hint="Describe the issue in as much detail as you'd like."
                        />

                        <DropDown label="Reporter" name="reporter">
                            <option value=""></option>
                            <option value="hAySJV4d4e8sjdun9dS1">
                                Baby Yoda
                            </option>
                            <option value="zbbupHjiyvVVAUOdlM3e">
                                Pickle Rick
                            </option>
                            <option value="Ym8DRtM5mOHnQziSQApP">
                                Rabin Kaspal
                            </option>
                        </DropDown>

                        <DropDown label="Assignee" name="assignee">
                            <option value=""></option>
                            <option value="hAySJV4d4e8sjdun9dS1">
                                Baby Yoda
                            </option>
                            <option value="zbbupHjiyvVVAUOdlM3e">
                                Pickle Rick
                            </option>
                            <option value="Ym8DRtM5mOHnQziSQApP">
                                Rabin Kaspal
                            </option>
                        </DropDown>

                        <DropDown
                            label="Priority"
                            name="priority"
                            hint="Priority in relation to other issues."
                        >
                            <option value=""></option>
                            <option value="0">Very High</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                            <option value="4">Lowest</option>
                        </DropDown>
                    </div>
                    <div className="modalFooter">
                        <button
                            className="primary"
                            disabled={isSubmitting}
                            type="submit"
                        >
                            Create Issue
                        </button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default IssueCreate;
