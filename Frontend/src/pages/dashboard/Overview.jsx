export default function Overview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        🌾 Dashboard Overview
      </h1>

      <p className="text-gray-600 mb-6">
        Smart Farming – Shi Salah, Behtar Fasal
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-green-700">Weather</h2>
          <p className="text-2xl font-bold mt-2">Live Data</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-green-700">Soil Health</h2>
          <p className="text-2xl font-bold mt-2">Good 🌱</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-green-700">AI Accuracy</h2>
          <p className="text-2xl font-bold mt-2">92%</p>
        </div>
      </div>
    </div>
  );
}
