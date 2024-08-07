// EventDetails.jsx

import React from 'react';

const EventDetails = ({ event }) => {
  const { name, description, date, duration, guests, venue, pricePerTicket } = event;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Date</h2>
          <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Duration</h2>
          <p className="text-gray-500">{duration}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Guests</h2>
          <p className="text-gray-500">{guests} people</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Venue</h2>
          <p className="text-gray-500">{venue}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Price</h2>
          <p className="text-gray-500">${pricePerTicket} per ticket</p>
        </div>
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={() => alert('Booking tickets...')}
      >
        Book Tickets
      </button>
    </div>
  );
};

export default EventDetails;
