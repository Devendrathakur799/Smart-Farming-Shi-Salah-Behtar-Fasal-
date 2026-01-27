import { useState } from "react";
import { Leaf, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 TEMP AUTH (college ke liye enough)
    if (form.email && form.password) {
      localStorage.setItem("cropai_user", form.email);
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 mb-3">
            <Leaf className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 text-sm">
            Sign in to your CropAI account
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="farmer@email.com"
              className="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-white font-semibold hover:bg-green-700 transition"
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </button>
        </form>

        {/* EXTRA */}
        <p className="mt-6 text-center text-sm text-gray-600">
          New farmer?{" "}
          <span className="text-green-600 font-medium cursor-pointer">
            Contact Admin
          </span>
        </p>
      </div>
    </div>
  );
}
