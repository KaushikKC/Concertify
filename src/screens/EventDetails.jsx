import React from 'react';
import { useLocation } from 'react-router-dom';

function EventDetails() {
  const { state } = useLocation();
  const event = state?.event;

  if (!event) {
    return <p>No event data available.</p>;
  }

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <p className="text-gray-600 mb-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p className="text-gray-600 mb-2"><strong>Duration:</strong> {event.duration}</p>
          <p className="text-gray-600 mb-2"><strong>Guests:</strong> {event.hostname}</p>
          <p className="text-gray-600 mb-2"><strong>Venue:</strong> {event.address}</p>
          <p className={`text-lg font-bold ${event.isFree ? 'text-green-500' : 'text-red-500'}`}>
            {event.isFree ? 'Free' : 'Paid'}
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition mt-4"
            onClick={() => alert('Booking functionality not implemented yet')}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
