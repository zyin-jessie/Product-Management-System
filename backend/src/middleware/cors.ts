import corsConfig from "cors"

const cors = corsConfig({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    allowedHeaders: ["Content-Type"]
});

export default cors;
