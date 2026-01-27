import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <div className="h-16 border-b bg-white px-6 flex items-center font-semibold">
          Farm Dashboard
        </div>

        {/* PAGE CONTENT */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
