import express from "express";
import cors from "cors";

// ✅ EXACT file name yahin likho
import weatherRoutes from "./routes/weather.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚜 Smart Farming Backend Running",
  });
});

// ✅ Weather API
app.use("/api/weather", weatherRoutes);

export default app;
