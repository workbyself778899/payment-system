import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Proceed to Payment
        </h1>

        <Link
          href="/payment"
          className="block py-3 px-5 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-200"
        >
          Pay with eSewa
        </Link>

        <p className="text-gray-500 text-sm mt-4">
          Secure payment gateway powered by eSewa.
        </p>
      </div>
    </div>
  );
}
