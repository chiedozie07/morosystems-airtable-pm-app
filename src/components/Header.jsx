import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and App Title */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">
            {/* Replace with a logo image or keep a clean text logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l-5.5 9h11z" />
              <path d="M12 22l-5.5-9h11z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
          <h1 className="text-2xl font-bold text-gray-800">Project Dashboard</h1>
        </div>

        {/* User Profile and Notifications (simulated) */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span className="sr-only">View notifications</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.405L4 17h5m6 0a3 3 0 11-6 0m6 0h6" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm font-medium">Welcome, Guest!</span>
            <img
              className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-gray-300"
              src="https://via.placeholder.com/150" // Replace with a real user profile image URL
              alt="User profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
