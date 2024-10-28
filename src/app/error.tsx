"use client";
import Link from "next/link";
import {Button} from '@/components/ui/button';
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#252B42] text-gray-200">
      {/* Error Icon */}
      <FaExclamationTriangle size={80} className="text-red-500 mb-4" />

      {/* Error Message */}
      <h1 className="text-6xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-800 mt-4 text-lg">
          We’re sorry, but something went wrong on our end. Please try refreshing the page or come back later.
        
      </p>

      {/*Home Button */}
      <Link href="/">
        <Button className="px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
}
