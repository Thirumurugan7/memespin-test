// app/page.js
"use client";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generateLink = () => {
    if (!address) return;
    const link = `https://donate-dynamic.vercel.app/wink/${address}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    if (generatedLink) {
      try {
        await navigator.clipboard.writeText(generatedLink);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-customStart to-customEnd/50 font-mono">
      <div className="flex justify-center items-center min-h-screen max-w-[500px] mx-auto">
        <div className="bg-customGrayFill/50 h-fit rounded w-full p-10">
          <div>
            Enter Recipient's wallet address
            <input
              className="w-full p-2 bg-transparent border border-customGrayStroke placeholder-slate-500 mt-2 rounded"
              placeholder="0x1234567890abcdef1234567890abcdef12345678"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            className="bg-customButtonStroke p-2 w-full mt-6 rounded"
            onClick={generateLink}
          >
            Generate Link
          </button>

          {generatedLink && (
            <div className="mt-4">
              <div className="bg-black/20 p-2 rounded break-all">
                {generatedLink}
              </div>
              <button
                className="bg-customButtonStroke p-2 w-full mt-2 rounded"
                onClick={copyToClipboard}
              >
                Copy Link
              </button>
            </div>
          )}
          <p className=" text-center pt-4">Powered by winks.fun</p>
        </div>
      </div>
    </div>
  );
}
