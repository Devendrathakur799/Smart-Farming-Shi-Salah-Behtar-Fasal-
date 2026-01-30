import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart3,
  Camera,
  Leaf,
  ShoppingCart,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

/* 🔥 OVERVIEW ADDED HERE */
const sidebarItems = [
  { title: "Overview", icon: Home, url: "/dashboard" },   // ✅ NEW
  { title: "Analytics", icon: BarChart3, url: "/dashboard/analytics" },
  { title: "Disease Detection", icon: Camera, url: "/dashboard/detection" },
  { title: "Crop Recommendation", icon: Leaf, url: "/dashboard/recommend" },
  { title: "Marketplace", icon: ShoppingCart, url: "/dashboard/marketplace" },
  { title: "Farm Health", icon: Heart, url: "/dashboard/health" },
];

const supportItems = [
  { title: "Settings", icon: Settings, url: "/dashboard/settings" },
  { title: "Help & Support", icon: HelpCircle, url: "/dashboard/help" },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (url) =>
    `flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition
     ${
       pathname === url
         ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow"
         : "text-emerald-800 hover:bg-emerald-100"
     }`;

  return (
    <aside className="w-64 min-h-screen border-r border-emerald-200 bg-gradient-to-b from-emerald-50 to-green-50 flex flex-col">
      
      {/* LOGO */}
      <div className="flex items-center gap-3 px-4 py-4 border-b bg-white/80">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
          <Leaf className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="font-bold text-emerald-800 text-lg">
            Smart Farming
          </div>
          <div className="text-xs text-emerald-600">
            Shi Salah • Behtar Fasal
          </div>
        </div>
      </div>

      {/* MAIN MENU */}
      <div className="flex-1 p-3">
        <p className="text-xs font-semibold text-emerald-700 mb-2 px-2">
          MAIN FEATURES
        </p>

        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} to={item.url} className={linkClass(item.url)}>
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}

        <p className="text-xs font-semibold text-emerald-700 mt-6 mb-2 px-2">
          SUPPORT
        </p>

        {supportItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} to={item.url} className={linkClass(item.url)}>
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* LOGOUT */}
      <div className="border-t bg-white/80 p-3">
        <button className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-md mx-auto">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
