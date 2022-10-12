import express from "express";
import morgan from "morgan";

const app = express();

//CONFIGURTACIONES
app.set("port", 4000);

//MIDDLEWARES
app.use(morgan("dev"));

export default app;
