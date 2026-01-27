import DashboardLayout from "../../components/dashboard/DashboardLayout";
import {
  ShoppingCart,
  Star,
  Package,
  Truck,
  Leaf,
  Droplets,
  Zap,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomato Seeds",
    price: "₹450",
    originalPrice: "₹600",
    rating: 4.8,
    reviews: 124,
    seller: "Green Valley Seeds",
    discount: "25% OFF",
    description:
      "High-yield organic tomato seeds resistant to common diseases",
  },
  {
    id: 2,
    name: "Bio-Fertilizer NPK 20:20:20",
    price: "₹890",
    originalPrice: "₹1,200",
    rating: 4.6,
    reviews: 89,
    seller: "AgriCare Solutions",
    discount: "26% OFF",
    description:
      "Complete nutrition for all crops with slow-release formula",
  },
  {
    id: 3,
    name: "Smart Irrigation Controller",
    price: "₹12,500",
    originalPrice: "₹15,000",
    rating: 4.9,
    reviews: 45,
    seller: "FarmTech India",
    discount: "17% OFF",
    description:
      "WiFi-enabled automatic irrigation system with weather integration",
  },
  {
    id: 4,
    name: "Organic Pesticide Spray",
    price: "₹320",
    originalPrice: "₹400",
    rating: 4.7,
    reviews: 203,
    seller: "EcoGarden Products",
    discount: "20% OFF",
    description:
      "Natural pest control solution safe for organic farming",
  },
];

/* ---------------- PAGE ---------------- */

export default function Marketplace() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Marketplace
            </h1>
            <p className="mt-1 text-gray-600">
              Find quality seeds, fertilizers, and equipment
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            <ShoppingCart className="h-4 w-4" />
            View Cart (3)
          </button>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg transition"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
                <span className="absolute top-2 left-2 rounded bg-red-600 px-2 py-0.5 text-xs text-white">
                  {p.discount}
                </span>
                <Package className="h-16 w-16 text-gray-300" />
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold">{p.name}</h3>

                <p className="text-xs text-gray-600 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex items-center gap-1 text-xs">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span>{p.rating}</span>
                  <span className="text-gray-500">({p.reviews})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                    {p.price}
                  </span>
                  <span className="text-xs text-gray-500 line-through">
                    {p.originalPrice}
                  </span>
                </div>

                <p className="text-xs text-gray-600">
                  by {p.seller}
                </p>

                <button className="mt-2 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700">
                  <ShoppingCart className="h-3 w-3" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* QUICK STATS */}
        <div className="grid gap-4 md:grid-cols-3">
          <Stat
            icon={Truck}
            title="Free Delivery"
            text="On orders above ₹1,000"
            color="text-blue-600"
          />
          <Stat
            icon={Star}
            title="Quality Assured"
            text="100% genuine products"
            color="text-yellow-500"
          />
          <Stat
            icon={Package}
            title="Easy Returns"
            text="15-day return policy"
            color="text-green-600"
          />
        </div>

      </div>
    </DashboardLayout>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */

function Stat({ icon: Icon, title, text, color }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-white p-6 shadow">
      <Icon className={`h-8 w-8 ${color}`} />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
