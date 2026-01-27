import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  Menu,
  X,
  CloudSun,
  Droplets,
  Brain,
  Camera,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: "Weather",
      href: "/dashboard/weather",
      icon: CloudSun,
    },
    {
      name: "Soil",
      href: "/dashboard/soil",
      icon: Droplets,
    },
    {
      name: "Recommend",
      href: "/dashboard/recommend",
      icon: Brain,
    },
    {
      name: "Disease",
      href: "/dashboard/detection",
      icon: Camera,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-green-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO / BRAND */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block leading-tight">
              <h1 className="text-lg font-bold text-green-700">
                Smart Farming
              </h1>
              <p className="text-xs text-gray-500">
                Sahi Salah • Behtar Fasal
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                  text-sm font-medium text-gray-700
                  hover:bg-green-100 hover:text-green-700
                  transition-all"
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* AUTH */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-block rounded-full border border-green-500 px-4 py-1.5 text-sm text-green-700 hover:bg-green-50 transition"
            >
              Sign In
            </Link>

            <Link
              to="/dashboard"
              className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-1.5 text-sm font-semibold text-white shadow-md hover:from-green-700 hover:to-emerald-700 transition"
            >
              Get Started
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-xl p-2 text-gray-700 hover:bg-green-100"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl bg-white shadow border border-green-100 p-4">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-4 py-2
                    text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="mt-3 border-t border-green-100 pt-3 space-y-2">
                <Link
                  to="/login"
                  className="block w-full rounded-lg border border-green-500 px-4 py-2 text-center text-green-700"
                >
                  Sign In
                </Link>
                <Link
                  to="/dashboard"
                  className="block w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-center text-white"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
