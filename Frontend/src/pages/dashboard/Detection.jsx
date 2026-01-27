import DashboardLayout from "./DashboardLayout";
import { Camera } from "lucide-react";

export default function Detection() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">Disease Detection</h1>
        <p className="text-gray-600 mb-6">
          Upload images of your crops to detect diseases using AI
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Upload Card */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Camera className="h-5 w-5 text-green-600" />
              Plant Disease Detection
            </h2>

            <div className="border-2 border-dashed rounded-lg p-10 text-center text-gray-500">
              Click to upload or drag & drop <br />
              PNG, JPG up to 10MB
              <div className="mt-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  Select Image
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-xl border p-6 flex items-center justify-center text-gray-400">
            Upload an image to get instant disease detection results
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
