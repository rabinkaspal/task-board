import { Form, Formik } from "formik";
import React from "react";
import { issueCreateSchema } from "../../../formSchemas";
import Divider from "../../shared/Divider";
import DropDown from "../DropDown";
// import MultiDropDown from "../MultiDropDown";
import Input from "../Input";
import TextArea from "../TextArea";

import db from "./../../../firebase/firebase-config";
import { collection, doc, updateDoc, arrayUnion, addDoc, Timestamp } from "firebase/firestore";

const taskTypeOptions = [
  { value: "", label: "Select Issue Type" },
  { value: "task", label: "Task" },
  { value: "story", label: "Story" },
  { value: "bug", label: "Bug" },
];

const userOptions = [
  { value: "hAySJV4d4e8sjdun9dS1", label: "Baby Yoda" },
  { value: "zbbupHjiyvVVAUOdlM3e", label: "Pickle Rick" },
  { value: "Ym8DRtM5mOHnQziSQApP", label: "Rabin Kaspal" },
];

const priorityOptions = [
  { value: "", label: "Select Priority" },
  { value: "0", label: "Very High" },
  { value: "1", label: "High" },
  { value: "2", label: "Medium" },
  { value: "3", label: "Low" },
  { value: "4", label: "Lowest" },
];

const IssueCreate = ({ onClose, project }) => {
  //submit the form and closemodal
  const onSubmit = async (values, actions) => {
    console.log("values", values);
    // return;
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
      const issueRef = doc(db, "projects", project.id);
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
        // users: [],
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
              options={taskTypeOptions}
            />

            <Divider />

            {/* <MultiDropDown
                            label="Select Users"
                            placeholder="Select users..."
                            name="users"
                            hint="Add users from the dropdown menu"
                            options={userOptions}
                        />

            <Divider /> */}

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

            <DropDown label="Reporter" name="reporter" options={userOptions} />

            <DropDown label="Assignee" name="assignee" options={userOptions} />

            <DropDown
              label="Priority"
              name="priority"
              hint="Priority in relation to other issues."
              options={priorityOptions}
            />
          </div>
          <div className="modalFooter">
            <button className="primary" disabled={isSubmitting} type="submit">
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
