import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import weatherRoutes from "./routes/weather.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 Smart Farming Backend Running");
});

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
