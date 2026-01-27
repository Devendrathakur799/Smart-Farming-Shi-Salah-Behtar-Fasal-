

import { Link, useLocation } from "react-router-dom";

import {
  Home,
  CloudSun,
  Droplets,
  Brain,
  Camera,
  Settings,
  HelpCircle,
  LogOut,
  Sprout,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const sidebarItems = [
    { title: "Overview", icon: Home, url: "/dashboard" },
    { title: "Weather Analysis", icon: CloudSun, url: "/dashboard/weather" },
    { title: "Soil Analysis", icon: Droplets, url: "/dashboard/soil" },
    { title: "Crop Recommendation", icon: Brain, url: "/dashboard/recommend" },
    { title: "Disease Detection", icon: Camera, url: "/dashboard/detection" },
  ];

  const supportItems = [
    { title: "Settings", icon: Settings, url: "/dashboard/settings" },
    { title: "Help", icon: HelpCircle, url: "/dashboard/help" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white/90 backdrop-blur border-r border-green-200 shadow-sm">
        {/* BRAND */}
        <div className="flex items-center gap-3 px-4 py-5 border-b">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow">
            <Sprout className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-green-700 text-lg">
              Smart Farming
            </div>
            <div className="text-xs text-gray-500">
              Sahi Salah • Behtar Fasal
            </div>
          </div>
        </div>

        {/* MAIN MENU */}
        <div className="p-3">
          <p className="text-xs font-semibold text-green-700 mb-2">
            FARM ANALYSIS
          </p>

          {sidebarItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm mb-1 transition-all
                ${
                  isActive(item.url)
                    ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow"
                    : "text-gray-700 hover:bg-green-100"
                }`}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </div>

        {/* SUPPORT */}
        <div className="p-3 border-t">
          <p className="text-xs font-semibold text-green-700 mb-2">
            SUPPORT
          </p>

          {supportItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-gray-700 hover:bg-green-100"
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}

          <button className="flex items-center gap-3 px-4 py-2 mt-4 w-full rounded-xl text-sm text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col">
        <div className="h-16 bg-white border-b flex items-center px-6">
          <h1 className="text-lg font-semibold text-gray-800">
            Farmer Dashboard
          </h1>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
