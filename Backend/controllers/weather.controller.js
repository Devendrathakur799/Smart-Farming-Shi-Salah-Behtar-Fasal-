import axios from "axios";

export const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }

    const API_KEY = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);
    const w = response.data;

    res.status(200).json({
      location: {
        city: w.name,
        country: w.sys.country,
        lat: w.coord.lat,
        lon: w.coord.lon
      },
      weather: {
        temperature: w.main.temp,
        humidity: w.main.humidity,
        pressure: w.main.pressure,
        condition: w.weather[0].description,
        windSpeed: w.wind.speed
      }
    });

  } catch (error) {
    console.error("Weather Error:", error.message);
    res.status(500).json({ message: "Weather fetch failed" });
  }
};
