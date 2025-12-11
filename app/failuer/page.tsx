"use client";

import { useRouter } from "next/navigation";


export default function Failure(){
    const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-100 to-red-200 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center">

        {/* Error Icon (Tailwind SVG only) */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 9v4m0 4h.01M5.07 19h13.86c1.1 0 1.99-.9 1.99-2L12 4 3.08 17c0 1.1.89 2 1.99 2z" 
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-700 mb-2">
          Payment Failed!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          There was an issue with your payment. Please try again.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/")}
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );   
}