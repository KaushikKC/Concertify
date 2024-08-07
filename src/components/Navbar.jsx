import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="/">Concertify</a>
        </div>
        <div className="flex items-center space-x-3">
          <ul className="flex space-x-4">
            <Link to="/event" className="text-gray-300 hover:text-white">
              Events
            </Link>
            <Link to="/venue" className="text-gray-300 hover:text-white">
              Venues
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </ul>
          <w3m-button />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
