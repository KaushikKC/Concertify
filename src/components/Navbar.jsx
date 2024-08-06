import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <a href="/">Concertify</a>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <Link to="/event" className="text-gray-300 hover:text-white">Events</Link>
          <Link to="/venue" className="text-gray-300 hover:text-white">Venue</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </ul>
        <button 
          onClick=""
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  </div>
  )
}

export default Navbar
