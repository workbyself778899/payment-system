"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const [amountValue, setAmountValue] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<{ amount: number }>();

  const hi = watch("amount");

  const onSubmit = (data:{ amount: number }) => {
    console.log("Amount to pay:", data.amount);
    console.log("Submitted:", data);

    // Reset UI
    setAmountValue(1);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-yellow-100 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-green-600 text-3xl font-bold text-center mb-4">
          Hello, <br /> E-sewa Gateway!
        </h1>

        {/* Display Amount */}
        <div className="text-center text-lg mb-6 font-medium">
          Your Amount: <span className="text-green-700 font-bold">{hi || 0}</span>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

          {/* Amount Input */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Enter Amount</label>

            <input
              type="number"
              className={`bg-green-100 rounded-xl py-3 px-4 text-center border focus:outline-none 
              focus:ring-2 focus:ring-green-400 ${errors.amount ? "border-red-500" : "border-transparent"}`}
              {...register("amount", { 
                required: true,
                onChange: () => {
                  const val = getValues("amount") || 0;
                  setAmountValue(val);
                }
              })}
            />

            {errors.amount && (
              <span className="text-red-500 text-sm mt-1">
                This field is required
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Pay
          </button>
        </form>

      </div>
    </div>
  );
}
