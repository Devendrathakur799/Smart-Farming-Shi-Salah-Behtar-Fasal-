import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Sprout, TrendingUp } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  'https://www.shutterstock.com/image-photo/lush-rice-paddy-field-neat-260nw-2499404003.jpg',
  "https://images.unsplash.com/photo-1560493676-04071c5f467b",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌾 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-green-600/90 px-4 py-2 text-sm font-semibold mb-8">
          <Leaf className="h-4 w-4" />
          Smart Farming • AI Based Decisions
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Behtar Faisla,
          <span className="block text-green-300">
            Behtar Fasal 🌱
          </span>
          Smart Farming with AI
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-3xl text-lg sm:text-xl text-gray-100 leading-relaxed">
          Weather analysis, soil fertility check, disease detection aur
          AI-powered crop recommendation – sab kuch ek hi platform par,
          specially farmers ke liye.
        </p>

        {/* CTA Buttons */}
        <div className="mb-14 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/dashboard/recommend"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition"
          >
            <Sprout className="mr-2 h-5 w-5" />
            Get Crop Recommendation
          </Link>

          <Link
            to="/dashboard/weather"
            className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-green-700 transition"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Analyze Weather & Soil
          </Link>
        </div>

        {/* Stats */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-3xl font-bold text-green-300 mb-1">10,000+</div>
            <p className="text-gray-200">Farmers Supported</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-300 mb-1">95%+</div>
            <p className="text-gray-200">Prediction Accuracy</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-300 mb-1">All India</div>
            <p className="text-gray-200">Village & City Support</p>
          </div>
        </div>
      </div>

      {/* 🔘 Slider Dots */}
      <div className="absolute bottom-6 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-green-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
