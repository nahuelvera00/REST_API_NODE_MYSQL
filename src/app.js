import express from "express";
import morgan from "morgan";

//ROUTES

import languageRoutes from "./routes/language.routes";

const app = express();

//CONFIGURTACIONES
app.set("port", 4000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/language", languageRoutes);

export default app;
