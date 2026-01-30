import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { HelpCircle, Mail, Phone, BookOpen } from "lucide-react";

export default function Help() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600 mt-1">
            We’re here to help you with CropAI platform
          </p>
        </div>

        {/* HELP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <BookOpen className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-lg">Documentation</h3>
            <p className="text-sm text-gray-600 mt-1">
              Learn how to use crop recommendation, disease detection and dashboard features.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <Mail className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-lg">Email Support</h3>
            <p className="text-sm text-gray-600 mt-1">
              Reach us at <br />
              <span className="font-medium text-emerald-700">
                support@smatforming.com
              </span>
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <Phone className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-lg">Phone Support</h3>
            <p className="text-sm text-gray-600 mt-1">
              Mon–Fri (10AM–6PM) <br />
              +917999575817
            </p>
          </div>

        </div>

        {/* FAQ */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-emerald-600" />
            Frequently Asked Questions
          </h2>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>• How does AI crop recommendation work?</li>
            <li>• How accurate is disease detection?</li>
            <li>• Can I use this platform for free?</li>
            <li>• How often is market data updated?</li>
          </ul>
        </div>

      </div>
    </DashboardLayout>
  );
}
