const express = require("express");
const router = express.Router();

/**
 * GET /api/analytics/dashboard
 */
router.get("/dashboard", (req, res) => {
  try {
    const analyticsData = {
      cropYield: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        data: [2400, 2100, 2800, 3200, 2900, 3400],
      },
      revenue: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        data: [125000, 134000, 145000, 167000, 156000, 189000],
      },
      cropHealth: {
        healthy: 87.5,
        diseased: 8.2,
        pending: 4.3,
      },
    };

    res.status(200).json({
      success: true,
      data: analyticsData,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Analytics data error",
      error: error.message,
    });
  }
});

module.exports = router;
