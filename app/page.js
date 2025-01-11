import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-t from-customStart to-customEnd/50">
      <div className=" flex justify-center items-center min-h-screen max-w-[500px] mx-auto  ">
        <div className=" bg-customGrayFill/50 h-96 w-full p-10">
          <div>
            Enter Recipient's wallet address
            <input
              className=" w-full p-2 bg-transparent border border-customGrayStroke placeholder-slate-500"
              placeholder=" 0x1234567890abcdef1234567890abcdef12345678"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
