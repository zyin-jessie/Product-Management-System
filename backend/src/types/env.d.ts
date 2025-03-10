declare namespace NodeJS {
    interface ProcessEnv {
      BACKEND_PORT: string
      FRONTEND_URL: string
      BACKEND_BASE_URL: string
      JWT_SECRET: string
      DATABASE_URL: string
      JWT_PRIVATE_KEY: string
      JWT_PUBLIC_KEY: string

    }
  }
