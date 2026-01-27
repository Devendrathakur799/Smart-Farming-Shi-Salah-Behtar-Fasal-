const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
const analyticsRoutes = require("./routes/weather");

// mount route
app.use("/api/analytics", analyticsRoutes);

// test route
app.get("/", (req, res) => {
  res.json({
    message: "CropAI Backend Running ✅",
  });
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📊 Analytics API: http://localhost:${PORT}/api/analytics/dashboard`);
});
