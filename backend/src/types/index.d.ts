declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string
                avatarUrl?: string
                name: String
                email: string
                role: string
            }
        }
    }

    interface JWTPayload {
        id: string
        avatarUrl?: string
        name: string
        email: string
        role: string
    }

    interface ValidationResultError {
        [string: string]: [string];
    }
}

export {}
