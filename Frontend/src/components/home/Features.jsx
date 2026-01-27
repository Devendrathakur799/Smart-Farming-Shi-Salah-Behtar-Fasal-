import {
  Brain,
  Camera,
  Globe,
  ShoppingCart,
  BarChart3,
  TrendingUp,
  Leaf,
  Users,
  DollarSign,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Crop Recommendation",
    description:
      "Personalized suggestions for the best crops based on soil, weather, and historical data.",
    badge: "AI-Powered",
    badgeColor: "bg-green-100 text-green-800",
    iconBg: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: Camera,
    title: "Real-Time Disease Detection",
    description:
      "Advanced image recognition to identify crop diseases instantly from uploaded photos.",
    badge: "Computer Vision",
    badgeColor: "bg-blue-100 text-blue-800",
    iconBg: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Globe,
    title: "Multilingual Accessibility",
    description:
      "Guidance and insights in local languages to ensure broad usability.",
    badge: "Inclusive",
    badgeColor: "bg-purple-100 text-purple-800",
    iconBg: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: ShoppingCart,
    title: "Integrated Marketplace",
    description:
      "Connect farmers directly with buyers and suppliers seamlessly.",
    badge: "E-Commerce",
    badgeColor: "bg-orange-100 text-orange-800",
    iconBg: "from-orange-100 to-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics Dashboard",
    description:
      "Track progress, analyze data, and plan future yields effectively.",
    badge: "Analytics",
    badgeColor: "bg-indigo-100 text-indigo-800",
    iconBg: "from-indigo-100 to-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Market Insights & Price Trends",
    description:
      "Real-time market demand and pricing trends for better decisions.",
    badge: "Market Intelligence",
    badgeColor: "bg-emerald-100 text-emerald-800",
    iconBg: "from-emerald-100 to-emerald-200",
    iconColor: "text-emerald-600",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-4">
            <Leaf className="h-4 w-4" />
            Features
          </span>

          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900">
            Comprehensive Agricultural Solutions
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Cutting-edge AI technology combined with practical farming insights
            to revolutionize agricultural decision-making.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`rounded-full bg-gradient-to-r ${feature.iconBg} p-3`}
                  >
                    <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${feature.badgeColor}`}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative blob */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-green-200 opacity-20"></div>
              </div>
            );
          })}
        </div>

        {/* EXTRA INFO */}
        <div className="mt-16 text-center">
          <div className="mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureMini icon={Target} label="Precision Farming" />
            <FeatureMini icon={Zap} label="Real-Time Processing" />
            <FeatureMini icon={Users} label="Community Driven" />
            <FeatureMini icon={DollarSign} label="Cost Effective" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* MINI FEATURE ITEM */
function FeatureMini({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="mb-2 h-8 w-8 text-green-600" />
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
}
