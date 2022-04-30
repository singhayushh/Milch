// Load env file based on run command
if (!process.env.NODE_ENV) {
    require("dotenv").config({ path: `.env.production` });
} else {
    require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
}

// Import npm modules
import cors from "cors";
import path from "path";
import swaggerUi from "swagger-ui-express";
import express, { Application, RequestHandler } from "express";

// Import custom modules
import connect from "./config/db.config";
import swaggerSpec from "./config/swagger.config";

// Env variables for logging
const PROJECT_NAME: String = String(process.env.PROJECT_NAME);
const BASE_URL: String = String(process.env.BASE_URL);
const PORT: Number = Number(process.env.PORT);

// Config for express app
const app: Application = express();
app.use(cors());
app.use(express.json() as RequestHandler);

// EJS template engine static assets
app.set("views", path.join(__dirname, "../client"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../client/public")));

// Default route for logging server startup time
app.get("/", (_req: express.Request, res: express.Response) =>
    res.render('index')
);

// Swagger Documentation
app.get("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the express server in the defined port
app.listen(Number(process.env.PORT), () => {
    connect; // connect to the mongo instance
    console.log(`Listening on ${BASE_URL}:${PORT}...`); // Log on server start up
});
