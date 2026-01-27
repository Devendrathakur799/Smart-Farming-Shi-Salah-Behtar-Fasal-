import os

structure = {
    # public
    "public/images": [
        "hero.png",
        "logo.svg",
        "dashboard.png"
    ],
    "public": ["index.html"],

    # assets
    "src/assets/icons": [],
    "src/assets/styles": ["globals.css"],

    # components - common
    "src/components/common": [
        "Navbar.jsx",
        "Footer.jsx",
        "ProtectedRoute.jsx"
    ],

    # components - home
    "src/components/home": [
        "Hero.jsx",
        "Features.jsx",
        "Stats.jsx"
    ],

    # components - recommend
    "src/components/recommend": [
        "CropRecommendationForm.jsx"
    ],

    # components - detection
    "src/components/detection": [
        "DiseaseDetection.jsx"
    ],

    # components - dashboard
    "src/components/dashboard": [
        "Sidebar.jsx",
        "DashboardLayout.jsx",
        "DashboardHeader.jsx"
    ],

    # pages
    "src/pages": [
        "Home.jsx",
        "Recommend.jsx",
        "Detection.jsx",
        "Marketplace.jsx",
        "SignIn.jsx",
        "SignUp.jsx"
    ],

    # pages - dashboard
    "src/pages/dashboard": [
        "DashboardHome.jsx",
        "Analytics.jsx",
        "Health.jsx",
        "Marketplace.jsx",
        "Recommend.jsx",
        "Settings.jsx"
    ],

    # other folders
    "src/routes": ["AppRoutes.jsx"],
    "src/hooks": ["useMobile.js"],
    "src/utils": ["helpers.js"],

    # root src files
    "src": [
        "App.jsx",
        "main.jsx",
        "index.css"
    ]
}

for folder, files in structure.items():
    os.makedirs(folder, exist_ok=True)
    for file in files:
        path = os.path.join(folder, file)
        if not os.path.exists(path):
            with open(path, "w") as f:
                if file.endswith(".jsx"):
                    f.write("export default function Component() {\n  return <div />;\n}\n")
                elif file.endswith(".css"):
                    f.write("/* Global styles */\n")
                elif file == "index.html":
                    f.write("""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Smart Krishi</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
""")
                else:
                    pass

print("✅ Smart Krishi frontend folder structure created successfully!")
