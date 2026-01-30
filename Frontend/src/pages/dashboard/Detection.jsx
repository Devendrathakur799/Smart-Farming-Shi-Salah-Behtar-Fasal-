import { useState, useRef } from "react";
import DashboardLayout from "./DashboardLayout";
import { Camera, Image as ImageIcon } from "lucide-react";

export default function Detection() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);

  // 🔥 Trigger file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // 🔥 Handle image select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));

    // DEMO RESULT (later backend/ML se ayega)
    setTimeout(() => {
      setResult({
        disease: "Leaf Blight",
        confidence: "89%",
        treatment: "Use recommended fungicide twice a week",
      });
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">🌿 Disease Detection</h1>
        <p className="text-gray-600 mb-6">
          Upload crop images to detect plant diseases using AI
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* UPLOAD CARD */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Camera className="h-5 w-5 text-green-600" />
              Plant Disease Detection
            </h2>

            {/* Hidden input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            <div
              className="border-2 border-dashed rounded-lg p-10 text-center text-gray-500 cursor-pointer hover:border-green-500 transition"
              onClick={handleButtonClick}
            >
              <ImageIcon className="mx-auto h-10 w-10 text-green-500 mb-3" />
              Click to upload or drag & drop <br />
              PNG, JPG up to 10MB

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Select Image
                </button>
              </div>
            </div>

            {/* IMAGE PREVIEW */}
            {selectedImage && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="rounded-lg max-h-64 mx-auto border"
                />
              </div>
            )}
          </div>

          {/* RESULT CARD */}
          <div className="bg-white rounded-xl border p-6">
            {!result ? (
              <div className="flex items-center justify-center h-full text-gray-400 text-center">
                Upload an image to get instant disease detection results
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  🧠 Detection Result
                </h3>
                <p>
                  <strong>Disease:</strong> {result.disease}
                </p>
                <p>
                  <strong>Confidence:</strong> {result.confidence}
                </p>
                <p className="mt-2">
                  <strong>Treatment:</strong> {result.treatment}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
