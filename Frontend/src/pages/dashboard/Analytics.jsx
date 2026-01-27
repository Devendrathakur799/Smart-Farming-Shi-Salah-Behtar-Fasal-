import DashboardLayout from "../../components/dashboard/DashboardLayout";
import {
  BarChart3,
  TrendingUp,
  Leaf,
  DollarSign,
  Calendar,
  AlertCircle,
} from "lucide-react";

const analyticsData = [
  {
    title: "Crop Yield Trends",
    description: "Monthly yield analysis across all crops",
    value: "2,340 kg",
    change: "+12.5%",
    icon: BarChart3,
    period: "This month",
  },
  {
    title: "Revenue Growth",
    description: "Total revenue from crop sales",
    value: "₹1,25,670",
    change: "+18.2%",
    icon: DollarSign,
    period: "Last 30 days",
  },
  {
    title: "Healthy Crops",
    description: "Percentage of crops in good health",
    value: "87.5%",
    change: "+5.1%",
    icon: Leaf,
    period: "Current status",
  },
  {
    title: "Disease Incidents",
    description: "Number of disease cases detected",
    value: "8 cases",
    change: "-23.4%",
    icon: AlertCircle,
    period: "This month",
  },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* PAGE HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Farm Analytics
          </h1>
          <p className="mt-1 text-gray-600">
            Comprehensive insights into your farm performance and trends
          </p>
        </div>

        {/* METRIC CARDS */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {analyticsData.map((metric) => {
            const Icon = metric.icon;
            const positive = metric.change.startsWith("+");

            return (
              <div
                key={metric.title}
                className="rounded-xl bg-white p-4 shadow border"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-600">
                    {metric.title}
                  </h3>
                  <Icon className="h-4 w-4 text-gray-400" />
                </div>

                <div className="mt-2 text-2xl font-bold text-gray-900">
                  {metric.value}
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  <span
                    className={
                      positive ? "text-green-600" : "text-red-600"
                    }
                  >
                    {metric.change}
                  </span>{" "}
                  {metric.period}
                </p>
              </div>
            );
          })}
        </div>

        {/* TWO COLUMN SECTION */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* CROP PERFORMANCE */}
          <div className="rounded-xl bg-white p-6 shadow border">
            <h2 className="text-lg font-semibold text-gray-900">
              Crop Performance Overview
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Health status and yield data for all crops
            </p>

            <div className="space-y-4">
              {[
                { crop: "Tomatoes", health: 92, yield: "High", status: "Excellent" },
                { crop: "Wheat", health: 78, yield: "Medium", status: "Good" },
                { crop: "Corn", health: 85, yield: "High", status: "Good" },
                { crop: "Potatoes", health: 95, yield: "Very High", status: "Excellent" },
              ].map((crop) => (
                <div
                  key={crop.crop}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {crop.crop}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Health: {crop.health}% | Yield: {crop.yield}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      crop.status === "Excellent"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {crop.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI INSIGHTS */}
          <div className="rounded-xl bg-white p-6 shadow border">
            <h2 className="text-lg font-semibold text-gray-900">
              AI Insights & Recommendations
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Smart recommendations based on your farm data
            </p>

            <div className="space-y-4">
              {[
                {
                  type: "recommendation",
                  title: "Optimal Planting Time",
                  description:
                    "Consider planting summer crops in the next 2 weeks",
                  icon: Calendar,
                },
                {
                  type: "warning",
                  title: "Weather Alert",
                  description:
                    "Heavy rainfall predicted next week. Prepare drainage",
                  icon: AlertCircle,
                },
                {
                  type: "success",
                  title: "Yield Improvement",
                  description:
                    "Potato yield increased by 15% compared to last season",
                  icon: TrendingUp,
                },
              ].map((insight, index) => {
                const Icon = insight.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-3 rounded-lg border p-3"
                  >
                    <div
                      className={`rounded-full p-2 ${
                        insight.type === "recommendation"
                          ? "bg-blue-100 text-blue-600"
                          : insight.type === "warning"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CHART PLACEHOLDERS */}
        <div className="rounded-xl bg-white p-6 shadow border">
          <h2 className="text-lg font-semibold text-gray-900">
            Historical Trends
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            6-month overview of key farm metrics
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-dashed p-8 text-center">
              <BarChart3 className="mx-auto mb-2 h-12 w-12 text-gray-400" />
              <h3 className="font-semibold text-gray-700">
                Yield Trends Chart
              </h3>
              <p className="text-sm text-gray-500">
                Monthly yield visualization
              </p>
            </div>

            <div className="rounded-lg border-2 border-dashed p-8 text-center">
              <TrendingUp className="mx-auto mb-2 h-12 w-12 text-gray-400" />
              <h3 className="font-semibold text-gray-700">
                Revenue Analytics
              </h3>
              <p className="text-sm text-gray-500">
                Profit & revenue trends
              </p>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
