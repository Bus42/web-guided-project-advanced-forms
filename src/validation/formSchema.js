// Here goes the schema for the form
import * as yup from "yup"

export default yup.object().shape({
    username: yup.string().required("hey dawg, username is required"),
    email: yup.string().email().required(),
    role: yup.string().oneOf(["tl", "instructor", "alumni", "student"]),
    civil: yup.string().oneOf(["single", "married"]),
    hiking: yup.boolean(),
    reading: yup.boolean(),
    coding: yup.boolean()
})