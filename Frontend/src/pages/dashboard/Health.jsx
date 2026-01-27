import DashboardLayout from "../../components/dashboard/DashboardLayout";
import {
  Heart,
  AlertTriangle,
  CheckCircle,
  ThermometerSun,
  Droplets,
  Wind,
  Calendar,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const healthMetrics = [
  {
    title: "Overall Farm Health",
    score: 87,
    status: "Excellent",
    icon: Heart,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Soil Quality",
    score: 92,
    status: "Excellent",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Crop Vitality",
    score: 78,
    status: "Good",
    icon: CheckCircle,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    title: "Disease Risk",
    score: 15,
    status: "Low Risk",
    icon: AlertTriangle,
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

const environmentalData = [
  {
    label: "Temperature",
    value: "28°C",
    status: "Optimal",
    icon: ThermometerSun,
    color: "text-green-600",
  },
  {
    label: "Humidity",
    value: "65%",
    status: "Good",
    icon: Droplets,
    color: "text-blue-600",
  },
  {
    label: "Wind Speed",
    value: "12 km/h",
    status: "Moderate",
    icon: Wind,
    color: "text-gray-600",
  },
  {
    label: "Last Rainfall",
    value: "3 days ago",
    status: "Recent",
    icon: Calendar,
    color: "text-blue-600",
  },
];

const cropStatus = [
  { name: "Tomato Field A", health: 95, status: "Excellent", lastCheck: "2 hours ago", issues: 0 },
  { name: "Wheat Field B", health: 78, status: "Good", lastCheck: "4 hours ago", issues: 1 },
  { name: "Corn Field C", health: 85, status: "Good", lastCheck: "1 hour ago", issues: 0 },
  { name: "Potato Field D", health: 92, status: "Excellent", lastCheck: "3 hours ago", issues: 0 },
];

const alerts = [
  {
    type: "warning",
    title: "Nutrient Deficiency Detected",
    description: "Wheat Field B showing nitrogen deficiency",
    time: "2 hours ago",
    action: "Apply nitrogen fertilizer",
  },
  {
    type: "info",
    title: "Irrigation Scheduled",
    description: "Automatic irrigation starts in 30 minutes",
    time: "30 minutes",
    action: "Monitor water levels",
  },
  {
    type: "success",
    title: "Pest Control Effective",
    description: "Aphid population reduced by 85%",
    time: "6 hours ago",
    action: "Continue monitoring",
  },
];

/* ---------------- PAGE ---------------- */

export default function Health() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farm Health Status</h1>
          <p className="mt-1 text-gray-600">
            Monitor the overall health and vitality of your crops
          </p>
        </div>

        {/* METRICS */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {healthMetrics.map((m) => {
            const Icon = m.icon;
            const progress = m.title === "Disease Risk" ? 100 - m.score : m.score;

            return (
              <div key={m.title} className="rounded-xl border bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-600">{m.title}</h3>
                  <div className={`rounded-full p-2 ${m.bg}`}>
                    <Icon className={`h-4 w-4 ${m.color}`} />
                  </div>
                </div>

                <div className="mt-2 text-2xl font-bold">
                  {m.score}{m.title === "Disease Risk" ? "%" : "/100"}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                    {m.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ENVIRONMENT + ALERTS */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* ENVIRONMENT */}
          <div className="rounded-xl border bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">Environmental Conditions</h2>
            <p className="text-sm text-gray-500 mb-4">
              Current weather and environmental factors
            </p>

            <div className="grid gap-4">
              {environmentalData.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.label} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${d.color}`} />
                      <div>
                        <p className="font-medium">{d.label}</p>
                        <p className="text-sm text-gray-500">{d.status}</p>
                      </div>
                    </div>
                    <p className="font-semibold">{d.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ALERTS */}
          <div className="rounded-xl border bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">Recent Alerts</h2>
            <p className="text-sm text-gray-500 mb-4">
              Important notifications and actions
            </p>

            <div className="space-y-4">
              {alerts.map((a, i) => (
                <div key={i} className="flex gap-3 rounded-lg border p-3">
                  <div className={`mt-1 h-2 w-2 rounded-full ${
                    a.type === "warning" ? "bg-yellow-500" :
                    a.type === "info" ? "bg-blue-500" : "bg-green-500"
                  }`} />
                  <div>
                    <h4 className="font-medium text-sm">{a.title}</h4>
                    <p className="text-xs text-gray-600">{a.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Action: {a.action} • {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CROP STATUS */}
        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Individual Crop Health</h2>
          <p className="text-sm text-gray-500 mb-4">
            Detailed health status for each crop field
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {cropStatus.map((c) => (
              <div key={c.name} className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{c.name}</h3>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                    {c.status}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                  Health: {c.health}/100
                </div>

                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: `${c.health}%` }}
                  />
                </div>

                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Last check: {c.lastCheck}</span>
                  <span>{c.issues} issues</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
