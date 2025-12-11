"use client";

import { useRouter } from "next/navigation";

export default function Success(){
    const router = useRouter();
     return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 to-green-200 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center">

        {/* Circle Check Icon (Tailwind only) */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Payment Successful!
        </h1>

        {/* Text */}
        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your transaction was completed successfully.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/")}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}