import { Request, Response } from "express"
import Controller from "@/lib/controller"
import bcrypt from "@/lib/bcrypt"
import prisma from "@/lib/prisma"

class AuthController extends Controller {
    public Signup = async (request: Request, response: Response) => {

    };
    public Login = async (request: Request, response: Response) => {

    };

    public SessionToken = (request: Request, response: Response) => {

    };

    public SessionLogout = (request: Request, response: Response) => {

    };

    public start = (request: Request, response: Response) => {
        response.json({ ExpressJS: "Express v4.21.2" });
    };

}

export default new AuthController;
