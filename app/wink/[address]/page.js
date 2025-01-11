// app/wink/[address]/page.js
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function DonationPage() {
  const params = useParams();
  const [amount, setAmount] = useState("");
  const recipientAddress = params.address || "";

  const handleDonate = () => {
    if (!amount) return;
    // Implement your donation logic here
    console.log(`Donating ${amount} to ${recipientAddress}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-customStart to-customEnd/50 font-mono">
      <div className="flex justify-center items-center min-h-screen max-w-[500px] mx-auto">
        <div className="bg-customGrayFill/50 h-fit rounded w-full p-10">
          <div className="mb-6">
            <div className="mb-2">Recipient's wallet address</div>
            <input
              className="w-full p-2 bg-transparent border border-customGrayStroke placeholder-slate-500 rounded cursor-not-allowed opacity-75 text-sm"
              value={recipientAddress}
              disabled
            />
          </div>
          
          <div className="mb-6">
            <div className="mb-2">Enter amount</div>
            <input
              type="number"
              className="w-full p-2 bg-transparent border border-customGrayStroke placeholder-slate-500 rounded"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button
            className="bg-customButtonStroke p-2 w-full rounded"
            onClick={handleDonate}
          >
            Donate
          </button>
          <p className=" text-center pt-4">Powered by winks.fun</p>
        </div>
      </div>
    </div>
  );
}