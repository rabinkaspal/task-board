import * as yup from "yup";

export const issueCreateSchema = yup.object().shape({
  shortSummary: yup
    .string()
    .min(10, "Summary too short")
    .max(200, "Summary too long.")
    .required("This field is required."),
  issueType: yup
    .string()
    .oneOf(["story", "task", "bug"], "Invalid Issue Type")
    .required("This field is required."),
  description: yup
    .string()
    .min(50, "Description too short")
    .max(6000, "Description too long")
    .required("This field is required."),
  assignee: yup.string().required("This field is required."),
  reporter: yup.string().required("This field is required."),
  priority: yup
    .number()
    .oneOf([0, 1, 2, 3, 4], "Invalid Priority Type")
    .required("This field is required."),
  // users: yup
  //     .array()
  //     .of(
  //         yup.object().shape({
  //             label: yup.string().required(),
  //             value: yup.string().required(),
  //         })
  //     )
  //     .min(1, "At least 1 required."),
});
