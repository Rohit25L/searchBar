import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

app.get("/", (req, res) => {








  res.send("API is running!");





});

export default app; // Export for server.js
