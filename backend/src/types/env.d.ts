declare namespace NodeJS {
    interface ProcessEnv {
      BACKEND_PORT: string
      FRONTEND_URL: string
      BACKEND_BASE_URL: string
      JWT_SECRET: string
      DATABASE_URL: string
      REDIS_URL: string
      NEXUS_KEY: string
      JOSE_PRIVATE_KEY: string
      JOSE_PUBLIC_KEY: string
      JWT_PRIVATE_KEY: string
      JWT_PUBLIC_KEY: string

      ACCESS_TOKEN_SECRET: string
      REFRESH_TOKEN_SECRET: string
      RESET_TOKEN_SECRET: string

      SMTP_HOST: string
      SMTP_PORT: string
      SMTP_SERVICE: string
      SMTP_EMAIL: string
      SMTP_PASSWORD: string

      CLOUDINARY_NAME: string
      CLOUDINARY_KEY: string
      CLOUDINARY_SECRET: string
    }
  }
