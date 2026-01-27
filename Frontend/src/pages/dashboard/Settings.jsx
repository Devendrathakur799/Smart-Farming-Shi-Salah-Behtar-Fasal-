import DashboardLayout from "../../components/dashboard/DashboardLayout";
import {
  Bell,
  Shield,
  Globe,
  Database,
} from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-gray-600">
            Manage your account preferences and farm settings
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* NOTIFICATIONS */}
            <Section
              icon={Bell}
              title="Notifications"
              desc="Configure your notification preferences"
            >
              <Toggle label="Disease Alerts" desc="Get notified when diseases are detected" />
              <Toggle label="Weather Updates" desc="Receive weather alerts and forecasts" defaultOn />
              <Toggle label="Irrigation Reminders" desc="Reminders for irrigation schedules" />
              <Toggle label="Market Updates" desc="Latest prices and market trends" defaultOn />
            </Section>

            {/* FARM CONFIG */}
            <Section
              icon={Database}
              title="Farm Configuration"
              desc="Configure your farm details"
            >
              <Input label="Farm Size (acres)" defaultValue="25" />
              <Input label="Location" defaultValue="Maharashtra, India" />

              <Select
                label="Farming Type"
                options={["Organic", "Conventional", "Mixed"]}
              />
              <Select
                label="Primary Crop"
                options={["Tomato", "Wheat", "Rice", "Corn", "Potato"]}
              />
            </Section>

            {/* LANGUAGE */}
            <Section
              icon={Globe}
              title="Language & Region"
              desc="Set your language and regional preferences"
            >
              <Select
                label="Language"
                options={["English", "Hindi", "Marathi", "Telugu"]}
              />
              <Select
                label="Currency"
                options={["₹ INR", "$ USD", "€ EUR"]}
              />
              <Select
                label="Timezone"
                options={["IST", "UTC", "EST"]}
              />
            </Section>
          </div>

          {/* PROFILE */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border bg-white p-6 shadow">
              <h2 className="text-lg font-semibold">Profile Settings</h2>
              <p className="text-sm text-gray-500 mb-4">
                Manage your personal information
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Full Name" defaultValue="Devendra Thakur" />
                <Input label="Email" defaultValue="devendra@email.com" />
                <Input label="Phone" defaultValue="+91 9XXXXXXXXX" />
                <Input label="Password" type="password" defaultValue="password" />
              </div>
            </div>
          </div>
        </div>

        {/* DATA & PRIVACY */}
        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Shield className="h-5 w-5" />
            Data & Privacy
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <div className="space-y-4">
              <Toggle label="Data Analytics" desc="Allow data analysis to improve recommendations" defaultOn />
              <Toggle label="Marketing Emails" desc="Receive emails about new features" />
              <Toggle label="Research Participation" desc="Participate in agricultural research" />
            </div>

            <div className="space-y-4">
              <button className="rounded-lg border px-4 py-2 hover:bg-gray-50">
                Download Data
              </button>

              <button className="rounded-lg border border-red-500 px-4 py-2 text-red-600 hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-2">
          <button className="rounded-lg border px-4 py-2">
            Cancel
          </button>
          <button className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Section({ icon: Icon, title, desc, children }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{desc}</p>
      {children}
    </div>
  );
}

function Toggle({ label, desc, defaultOn }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-sm">{label}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <input type="checkbox" defaultChecked={defaultOn} />
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border px-3 py-2"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <select className="w-full rounded-lg border px-3 py-2">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
