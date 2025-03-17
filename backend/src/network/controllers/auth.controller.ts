import {
    validationResult,
    matchedData
} from "express-validator"
import { Request, Response } from "express"
import { sign, verify } from "jsonwebtoken"
import Controller from "@/lib/controller"
import bcrypt from "@/lib/bcrypt"
import prisma from "@/lib/prisma"

class AuthController extends Controller {
    public Signup = async (request: Request, response: Response) => {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            const validationErrors: ValidationResultError = {};

            errors.array().map((error) => {
                if (error.type === 'field') {
                    validationErrors[error.path] = [error.msg];
                }
            });

            response.status(422).json({
                errors: validationErrors
            });
            return
        }

        const { name, email, password } = matchedData(request);
        try {

            const hashedPassword = bcrypt.hashPassword(password);

            const user = await prisma.account.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    role: "employee"
                }
            })
            response.status(200).json({
                signup: {
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            })
        }catch(error) {
            response.status(500).json({ error: 'Signup failed' });
        }
    };
    public Login = async (request: Request, response: Response) => {
        const { email, password } = matchedData(request);

        const user = await prisma.account.findUnique({
            where: { email }
        });

        if (!user) {
            response.status(404).json({ error: 'User not found.' });
            return;
        }

        const isPasswordValid = bcrypt.comparePassword(password, user.password);
        if (!isPasswordValid) {
            response.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const userData = {
            id: user.id,
            avatarUrl: user.avatarUrl || null,
            name: user.name,
            email: user.email,
            role: user.role
        };

        const accessToken = sign(userData, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '15m' });
        const refreshToken = sign(userData, process.env.REFRESH_TOKEN_SECRET,{ expiresIn: '7d' });

        response.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 Days
        })

        response.json({ accessToken });
    };

    public SessionToken = (request: Request, response: Response) => {

    };

    public SessionLogout = (request: Request, response: Response) => {

    };

    public start = (request: Request, response: Response) => {
        response.json({ Message: "Product Management System" });
    };

}

export default new AuthController;
