import DashboardLayout from "./DashboardLayout";

export default function Recommend() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">Crop Recommendation</h1>
        <p className="text-gray-600 mb-6">
          Get AI-powered crop recommendations based on soil and environment
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* FORM */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold mb-4">Soil & Environmental Data</h2>

            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="Nitrogen (N)" />
              <input className="input" placeholder="Phosphorus (P)" />
              <input className="input" placeholder="Potassium (K)" />
              <input className="input" placeholder="Temperature °C" />
              <input className="input" placeholder="Humidity %" />
              <input className="input" placeholder="Rainfall (mm)" />
            </div>

            <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg">
              Get Crop Recommendation
            </button>
          </div>

          {/* RESULT PLACEHOLDER */}
          <div className="bg-white rounded-xl border p-6 flex items-center justify-center text-gray-400">
            Fill the form to get recommendations
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
