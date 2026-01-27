import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        "Crop Recommendations",
        "Disease Detection",
        "Market Analytics",
        "Marketplace",
      ],
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Tutorials",
        "Success Stories",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Community Forum",
        "Contact Support",
        "Training Programs",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Partners"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Leaf className="h-6 w-6 text-green-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">CropAI</h2>
                <span className="inline-block mt-1 rounded bg-green-600 px-2 py-0.5 text-xs">
                  Smart Farming Platform
                </span>
              </div>
            </div>

            <p className="text-green-100 leading-relaxed mb-6">
              Empowering farmers with AI-driven insights for sustainable and
              profitable agriculture.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 text-green-200 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@cropai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Agricultural Innovation Hub, CA</span>
              </div>
            </div>
          </div>

          {/* LINKS */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="mb-4 text-lg font-semibold text-green-200">
                {section.title}
              </h3>
              <ul className="space-y-2 text-green-100 text-sm">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-white hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 pt-8 border-t border-green-700 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold text-green-200 mb-2">
              Stay Updated with Agricultural Insights
            </h3>
            <p className="text-green-100 text-sm">
              Get farming tips, market trends and AI insights in your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-green-600 bg-white/10 px-4 py-2 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="rounded-lg bg-green-600 px-6 py-2 font-medium hover:bg-green-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-green-700 bg-green-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-green-200">
            <p>
              © {new Date().getFullYear()} CropAI. Made with ❤️ for farmers.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Icon
                    key={i}
                    className="h-5 w-5 cursor-pointer text-green-300 hover:text-white"
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 border-t border-green-700 pt-4 text-sm text-green-300">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
