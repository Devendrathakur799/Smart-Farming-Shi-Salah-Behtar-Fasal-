export default function Soil() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        🌱 Soil Analysis
      </h1>
      <p className="text-gray-600 mb-6">
        Soil fertility & nutrients check (Demo)
      </p>

      <div className="bg-white rounded-xl shadow p-6">
        <p>Nitrogen: Medium</p>
        <p>Phosphorus: Low</p>
        <p>Potassium: High</p>
        <p>pH: 6.5 (Optimal)</p>
      </div>
    </div>
  );
}
