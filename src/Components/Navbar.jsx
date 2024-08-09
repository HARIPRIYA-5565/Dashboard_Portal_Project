import React from "react";

export default function NavbarSection({ statusChanged }) {
  return (
    <div className="bg-[#17A2B7] py-4 px-4 flex justify-between items-center">
      <div className="flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      
      {!statusChanged && (
        <span className="text-white">Hello!</span>
      )}
      
      {statusChanged && (
        <div className="flex items-center mt-2  bg-white text-green-800 py-2 px-4 rounded-lg">
          <div className="border border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg></div>
          <span >Status changed successfully</span>
        </div>
      )}
    </div>
  );
}
