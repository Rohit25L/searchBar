import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

app.get('/', (req, res) => {
  res.send("API is running!","");
});

export default app; // Export for server.js