import * as yup from 'yup'

const signInSchema = yup.object().shape({
    email: yup.string()
    /* .email("Please enter a valid email or username") */
    .required("Please enter a valid email or username"),
    password: yup.string()
    /* .min(8,"Password must contain 8 characters") */
    .required("Please enter a valid password"),
})

const signUpSchema = yup.object().shape({
    name: yup.string()
    .required("Field cannot be empty"),
    email: yup.string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
    password: yup.string()
    .required("Please enter a password"),
    // .min(8,"Password must contain 8 characters")
    // .required("Please enter a valid password")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    // .matches(/[@$#^()_!%*?&]/, "Password must contain at least one special character"),
/*     password_confirmation: yup.string()
    .oneOf([yup.ref('password'), undefined], "Password does not match!")
    .required("Please enter a valid password"), */
})

export {
    signInSchema,
    signUpSchema,
}
