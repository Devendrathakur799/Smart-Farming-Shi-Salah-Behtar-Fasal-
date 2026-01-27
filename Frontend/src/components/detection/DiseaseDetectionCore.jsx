import { useEffect, useRef, useState } from "react";

export default function DiseaseDetectionCore() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [result, setResult] = useState(null);

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setCameraOn(true);
    } catch (err) {
      alert("Camera access denied");
    }
  };

  // Capture image
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);
    setCaptured(true);

    // Fake AI result (for now)
    setTimeout(() => {
      setResult({
        disease: "Early Blight",
        confidence: "87%",
        suggestion: "Use organic fungicide and reduce humidity",
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Crop Disease Detection (Camera)
      </h2>

      {/* Camera Preview */}
      {!captured && (
        <div className="relative overflow-hidden rounded-lg border">
          <video
            ref={videoRef}
            autoPlay
            className="w-full rounded-lg"
          />
        </div>
      )}

      {/* Captured Image */}
      <canvas
        ref={canvasRef}
        className={`w-full rounded-lg border ${
          captured ? "block" : "hidden"
        }`}
      />

      {/* Buttons */}
      <div className="flex gap-3">
        {!cameraOn && (
          <button
            onClick={startCamera}
            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Start Camera
          </button>
        )}

        {cameraOn && !captured && (
          <button
            onClick={captureImage}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Capture Image
          </button>
        )}
      </div>

      {/* Result */}
      {result && (
        <div className="rounded-lg border bg-green-50 p-4">
          <h3 className="font-semibold text-green-800">
            Detection Result
          </h3>
          <p className="text-sm mt-1">
            <strong>Disease:</strong> {result.disease}
          </p>
          <p className="text-sm">
            <strong>Confidence:</strong> {result.confidence}
          </p>
          <p className="text-sm">
            <strong>Suggestion:</strong> {result.suggestion}
          </p>
        </div>
      )}
    </div>
  );
}
