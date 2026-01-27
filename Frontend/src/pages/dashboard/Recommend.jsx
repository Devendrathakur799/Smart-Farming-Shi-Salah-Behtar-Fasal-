import { useState } from "react";
import { Brain } from "lucide-react";
import DashboardLayout from "./DashboardLayout"; // 🔥 SIDEBAR WRAPPER

export default function Recommend() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
    season: "kharif",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Crop Recommendation Data:", formData);

    alert(
      "✅ Demo Recommendation Generated\n\n" +
        "Crop: Wheat\n" +
        "Confidence: 92%\n" +
        "Expected Yield: 3.1 ton/acre\n" +
        "Estimated Profit: ₹45,000"
    );
  };

  return (
    <DashboardLayout>
      {/* 🔥 CONTENT AREA (SIDEBAR SAFE) */}
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* PAGE TITLE */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🌾 Crop Recommendation
          </h1>
          <p className="text-gray-600">
            Enter soil and weather details to get crop suggestions
          </p>
        </div>

        {/* FORM CARD */}
        <div className="max-w-4xl bg-white rounded-xl shadow-md p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* NPK */}
            <div>
              <label className="label">Nitrogen (N)</label>
              <input
                name="nitrogen"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 90"
              />
            </div>

            <div>
              <label className="label">Phosphorus (P)</label>
              <input
                name="phosphorus"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 40"
              />
            </div>

            <div>
              <label className="label">Potassium (K)</label>
              <input
                name="potassium"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 40"
              />
            </div>

            {/* WEATHER */}
            <div>
              <label className="label">Temperature (°C)</label>
              <input
                name="temperature"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 25"
              />
            </div>

            <div>
              <label className="label">Humidity (%)</label>
              <input
                name="humidity"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 70"
              />
            </div>

            <div>
              <label className="label">Rainfall (mm)</label>
              <input
                name="rainfall"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 800"
              />
            </div>

            <div>
              <label className="label">Soil pH</label>
              <input
                name="ph"
                onChange={handleChange}
                className="input"
                placeholder="e.g. 6.5"
              />
            </div>

            {/* SEASON */}
            <div>
              <label className="label">Season</label>
              <select
                name="season"
                onChange={handleChange}
                className="input"
              >
                <option value="kharif">Kharif</option>
                <option value="rabi">Rabi</option>
                <option value="zaid">Zaid</option>
              </select>
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
              >
                <Brain className="h-5 w-5" />
                Get Recommendation (Demo)
              </button>
            </div>
          </form>
        </div>

        {/* STYLES */}
        <style>{`
          .input {
            width: 100%;
            padding: 10px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            outline: none;
          }
          .input:focus {
            border-color: #16a34a;
          }
          .label {
            display: block;
            margin-bottom: 6px;
            font-weight: 500;
            color: #374151;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
}
