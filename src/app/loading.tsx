import { PiWatchFill } from "react-icons/pi";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#252B42] text-gray-200">
      <div className="text-center ">
        {/* Loading Icon */}
        <div className="text-center">
          <PiWatchFill size={100} className="text-gray-400" />
        </div>
        
        {/* Loading Text */}
        <h1 className="mt-6 text-2xl font-semibold">Prepping your experience...</h1>
        <p className="text-gray-400 mt-2">Just one more second!</p>
    
      </div>
    </div>
  );
}
