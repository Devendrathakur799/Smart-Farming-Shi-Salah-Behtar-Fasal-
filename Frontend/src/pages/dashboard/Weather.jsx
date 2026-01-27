import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "leaflet/dist/leaflet.css";
import DashboardLayout from "./DashboardLayout"; 

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [soil, setSoil] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "8c9c5d31ffd1cc07782c77982b285d4a"; // same as yours

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        alert("City / Village not found");
        setLoading(false);
        return;
      }

      setWeather(data);

      // 🌱 Dummy soil data (later backend / ML)
      setSoil({
        rainfall: (Math.random() * 200).toFixed(1),
        ph: (Math.random() * (8.5 - 4.5) + 4.5).toFixed(1),
        nitrogen: (Math.random() * 100).toFixed(1),
        phosphorus: (Math.random() * 100).toFixed(1),
        potassium: (Math.random() * 100).toFixed(1),
      });
    } catch (err) {
      alert("Error fetching weather");
    }

    setLoading(false);
  };

  const chartData = weather && soil && {
    labels: ["Temp", "Humidity", "Rainfall", "pH", "N", "P", "K"],
    datasets: [
      {
        label: "Weather & Soil Stats",
        data: [
          weather.main.temp,
          weather.main.humidity,
          soil.rainfall,
          soil.ph,
          soil.nitrogen,
          soil.phosphorus,
          soil.potassium,
        ],
        backgroundColor: [
          "#22c55e",
          "#38bdf8",
          "#facc15",
          "#fb7185",
          "#4ade80",
          "#a78bfa",
          "#fb923c",
        ],
      },
    ],
  };

  return (
    <DashboardLayout>
    <div className="space-y-6">
      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          🌤️ Weather & Soil Analysis
        </h1>
        <p className="text-gray-600">
          Enter city or village name to get live weather & soil insights
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={fetchWeather}
        className="bg-white p-6 rounded-xl shadow flex gap-4 max-w-xl"
      >
        <input
          type="text"
          placeholder="Enter City / Village"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          {loading ? "Loading..." : "Analyze"}
        </button>
      </form>

      {/* RESULTS */}
      {weather && soil && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DETAILS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">🌾 Weather & Soil Data</h2>

            <table className="w-full text-sm">
              <tbody className="divide-y">
                <tr><td>City</td><td>{weather.name}</td></tr>
                <tr><td>Temperature</td><td>{weather.main.temp} °C</td></tr>
                <tr><td>Humidity</td><td>{weather.main.humidity} %</td></tr>
                <tr><td>Condition</td><td>{weather.weather[0].description}</td></tr>
                <tr><td>Rainfall</td><td>{soil.rainfall} mm</td></tr>
                <tr><td>Soil pH</td><td>{soil.ph}</td></tr>
                <tr><td>Nitrogen</td><td>{soil.nitrogen} ppm</td></tr>
                <tr><td>Phosphorus</td><td>{soil.phosphorus} ppm</td></tr>
                <tr><td>Potassium</td><td>{soil.potassium} ppm</td></tr>
              </tbody>
            </table>
          </div>

          {/* MAP */}
          <div className="bg-white rounded-xl shadow p-4 h-[350px]">
            <MapContainer
              center={[weather.coord.lat, weather.coord.lon]}
              zoom={10}
              className="h-full w-full rounded-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[weather.coord.lat, weather.coord.lon]}>
                <Popup>
                  {weather.name} <br />
                  Temp: {weather.main.temp}°C
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* CHART */}
          <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
    </DashboardLayout>
  );
}
