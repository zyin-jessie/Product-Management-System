import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

const verifyAuthToken = (request: Request, response: Response, next: NextFunction): void => {
    const authorizationHeader = request.headers?.authorization;

    if(!authorizationHeader) {
        response.sendStatus(401).json({ message: "Authorization header missing." });
        return;
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
        response.status(401).json({ message: "No token provided." });
        return;
    }

    try {
        const decoded = verify(token, process.env.ACCESS_TOKEN_SECRET) as JWTPayload;
        request.user = decoded;
        next();
    } catch (error) {
        response.sendStatus(401);
        return;
    }
}

export default verifyAuthToken;
