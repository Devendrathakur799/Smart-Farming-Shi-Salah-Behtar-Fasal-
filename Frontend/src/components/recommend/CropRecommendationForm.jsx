import { useState } from "react";
import { Leaf } from "lucide-react";

export default function CropRecommendationForm() {
  const [formData, setFormData] = useState({
    N: 90,
    P: 42,
    K: 43,
    temperature: 20.5,
    humidity: 82,
    ph: 6.5,
    rainfall: 200,
    area: 1,
    previousCrop: "",
    region: "Default",
    season: "Kharif",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Crop Recommendation Input:", formData);
    alert("Crop Recommendation will be shown here (API later)");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border p-6 space-y-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="text-green-600" />
          <h2 className="text-lg font-semibold">
            Soil & Environmental Data
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          Enter your field's soil and environmental conditions to get AI-powered
          crop recommendations
        </p>

        {/* NPK */}
        <div className="grid grid-cols-3 gap-4">
          <Input label="Nitrogen (N)" name="N" value={formData.N} onChange={handleChange} />
          <Input label="Phosphorus (P)" name="P" value={formData.P} onChange={handleChange} />
          <Input label="Potassium (K)" name="K" value={formData.K} onChange={handleChange} />
        </div>

        {/* TEMP / HUMIDITY */}
        <div className="grid grid-cols-2 gap-4">
          <Input label="Temperature (°C)" name="temperature" value={formData.temperature} onChange={handleChange} />
          <Input label="Humidity (%)" name="humidity" value={formData.humidity} onChange={handleChange} />
        </div>

        {/* PH / RAIN */}
        <div className="grid grid-cols-2 gap-4">
          <Input label="Soil pH" name="ph" value={formData.ph} onChange={handleChange} />
          <Input label="Rainfall (mm)" name="rainfall" value={formData.rainfall} onChange={handleChange} />
        </div>

        {/* AREA / PREVIOUS */}
        <div className="grid grid-cols-2 gap-4">
          <Input label="Area (hectares)" name="area" value={formData.area} onChange={handleChange} />
          <Input
            label="Previous Crop (optional)"
            name="previousCrop"
            placeholder="wheat, rice, cotton"
            value={formData.previousCrop}
            onChange={handleChange}
          />
        </div>

        {/* REGION / SEASON */}
        <div className="grid grid-cols-2 gap-4">
          <Select label="Region" name="region" value={formData.region} onChange={handleChange}>
            <option>Default</option>
            <option>North India</option>
            <option>South India</option>
          </Select>

          <Select label="Season" name="season" value={formData.season} onChange={handleChange}>
            <option>Kharif</option>
            <option>Rabi</option>
            <option>Zaid</option>
          </Select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          🌱 Get Crop Recommendation
        </button>
      </form>

      {/* RIGHT EMPTY STATE */}
      <div className="bg-white rounded-xl border p-6 flex flex-col items-center justify-center text-center">
        <Leaf className="w-12 h-12 text-gray-300 mb-4" />
        <p className="text-gray-500">
          Fill in your soil and environmental data to get AI-powered crop
          recommendations
        </p>
      </div>
    </div>
  );
}

/* ---------- SMALL REUSABLE COMPONENTS ---------- */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        {...props}
        className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {children}
      </select>
    </div>
  );
}
