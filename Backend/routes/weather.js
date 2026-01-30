import express from "express";
import { getWeatherByCity } from "../controllers/weather.controller.js";

const router = express.Router();

// GET /api/weather?city=Bhopal
router.get("/", getWeatherByCity);

export default router;
