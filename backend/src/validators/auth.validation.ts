import { checkSchema } from "express-validator";
import prisma from "@/lib/prisma";
class Validation {
    public SignupSchema = checkSchema({
        email: {
            in: ['body'],
            notEmpty: {
                errorMessage: "The email field is required."
            },
            isEmail: {
                errorMessage: "The email field must be a valid email address."
            },
            isString: {
                errorMessage: "The email must be string."
            },
            custom: {
                options: async (value) => {
                    const isEmailExist = await prisma.account.findFirst({
                        where: { email: value }
                    });
                    if (isEmailExist) {
                        throw new Error("The email address is already used.");
                    }
                }
            }
        },
        name: {
            in: ['body'],
            notEmpty: {
                errorMessage: "The name field is required."
            }
        },
        password: {
            in: ['body'],
            notEmpty: {
                errorMessage: "The password field is required."
            },
            // isLength: {
            //     options: {
            //         min: 8
            //     },
            //     errorMessage: "The password must contain at least 8 letters."
            // }
        }
    })

    public LoginSchema = checkSchema({
        email: {
            in: ['body'],
            notEmpty: {
                errorMessage: "The email field is required."
            },
            isEmail: {
                errorMessage: "The email field must be a valid email address."
            },
            isString: {
                errorMessage: "The email must be string."
            }
        },
        password: {
            in: ['body'],
            notEmpty: {
                errorMessage: "The password field is required."
            },
            // isLength: {
            //     options: {
            //         min: 8
            //     },
            //     errorMessage: "The password must contain at least 8 letters."
            // }
        }
    });
}

export default new Validation;
