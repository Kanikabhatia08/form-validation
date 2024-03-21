import * as Yup from "yup";
import YupPassword from 'yup-password';
YupPassword(Yup);
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signUpSchema = Yup.object({
    name: Yup.string()
            .min(2)
            .max(25)
            .required("Please Enter your name!"),

    email: Yup.string()
            .email()
            .required("Please enter your email"),

    password: Yup.string()
            .min(8,"password should be more than 8 characters")
            .minLowercase(1, 'At least 1 lower case letter required!')
            .minUppercase(1, 'At least 1 upper case letter required!')
            .minNumbers(1, 'At least 1 number required!')
            .minSymbols(1, 'At least 1 special character required!')
            .required("Please Enter your password!"),
            // .matches(passwordRules, { message: "Please create a stronger password" })


    confirm_password: Yup.string()
            .required("Confirm your Password")
            .oneOf([Yup.ref('password'),null], "Passwords must match!"),
})