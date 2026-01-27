import { Routes, Route } from "react-router-dom";

// Public pages
import Weather from "../pages/dashboard/Weather";
import Soil from "../pages/dashboard/Soil";


import Home from "../pages/Home";
import DiseaseDetection from "../pages/DiseaseDetection";


// Dashboard pages
import DashboardHome from "../pages/dashboard/DashboardLayout";
import Detection from "../pages/dashboard/Detection";
import Analytics from "../pages/dashboard/Analytics";
import Health from "../pages/dashboard/Health";
import Marketplace from "../pages/dashboard/Marketplace";
import Settings from "../pages/dashboard/Settings";

import Recommend from "../pages/dashboard/Recommend";
import Help from "../pages/dashboard/Help";
import Login from "../pages/Login";


export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/detection" element={<DiseaseDetection />} />

      {/* DASHBOARD ROUTES */}
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/dashboard/detection" element={<Detection />} />
      <Route path="/dashboard/analytics" element={<Analytics />} />
      <Route path="/dashboard/health" element={<Health />} />
      <Route path="/dashboard/marketplace" element={<Marketplace />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      
<Route path="/dashboard/recommend" element={<Recommend />} />

  
 <Route path="/dashboard/weather" element={<Weather />} />
<Route path="/dashboard/soil" element={<Soil />} />
       
      {/* FALLBACK */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
     
       <Route path="/dashboard/help" element={<Help />} /> {/* ✅ */}
       <Route path="/login" element={<Login />} />
      
    </Routes>
  );
}
