import React, { useState } from 'react';

function Event() {
  const [filters, setFilters] = useState({
    name: '',
    duration: '',
    date: '',
    isFree: '', // Use empty string to represent 'All'
    status: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const events = [
    {
      id: 1,
      name: "Concert A",
      description: "An amazing concert featuring popular bands.",
      date: "2024-08-15",
      duration: "3 hours",
      isFree: false,
      status: 'Upcoming'
    },
    {
      id: 2,
      name: "Workshop B",
      description: "A hands-on workshop on event management.",
      date: "2024-09-05",
      duration: "2 hours",
      isFree: true,
      status: 'Past'
    },
    {
      id: 3,
      name: "Festival C",
      description: "A fun-filled festival with food, music, and games.",
      date: "2024-10-01",
      duration: "All day",
      isFree: false,
      status: ''
    },
  ];

  const today = new Date();
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const isUpcoming = eventDate >= today;
    const isPast = !isUpcoming;

    const normalizedEventStatus = event.status.toLowerCase();
    const normalizedFilterStatus = filters.status.toLowerCase();

    return (
      (filters.name ? event.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
      (filters.duration ? event.duration.toLowerCase().includes(filters.duration.toLowerCase()) : true) &&
      (filters.date ? event.date === filters.date : true) &&
      (filters.isFree ? (filters.isFree === 'true' ? event.isFree : !event.isFree) : true) &&
      (normalizedFilterStatus === 'all' ? true : normalizedEventStatus === normalizedFilterStatus)
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{filters.status} Events</h2>
        
        {/* Filter Button */}
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          onClick={() => setShowPopup(!showPopup)}
        >
          Filters
        </button>
        
        {/* Filter Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                &times;
              </button>
              
              <h3 className="text-2xl font-bold mb-4">Filters</h3>
              <label className="block mb-4">
                <span className="text-gray-700 block text-left">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700 block text-left">Duration:</span>
                <input
                  type="text"
                  name="duration"
                  value={filters.duration}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700 block text-left">Date:</span>
                <input
                  type="date"
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                />
              </label>
              <div className="block mb-4">
                <span className="text-gray-700 block text-left">Cost:</span>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="isFree"
                    value=""
                    checked={filters.isFree === ''}
                    onChange={handleFilterChange}
                    className="form-radio"
                  />
                  <span className="ml-2 text-gray-700">All</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="isFree"
                    value="true"
                    checked={filters.isFree === 'true'}
                    onChange={handleFilterChange}
                    className="form-radio"
                  />
                  <span className="ml-2 text-gray-700">Free</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isFree"
                    value="false"
                    checked={filters.isFree === 'false'}
                    onChange={handleFilterChange}
                    className="form-radio"
                  />
                  <span className="ml-2 text-gray-700">Paid</span>
                </label>
              </div>
              <label className="block mb-6">
                <span className="text-gray-700 block text-left">Status:</span>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Past">Past</option>
                  <option value="">All</option>
                </select>
              </label>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                onClick={() => setShowPopup(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Event List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <p className="text-gray-700 mb-2">{event.description}</p>
                <p className="text-gray-600"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {event.duration}</p>
                <p className={`text-lg font-bold ${event.isFree ? 'text-green-500' : 'text-red-500'}`}>
                  {event.isFree ? 'Free' : 'Paid'}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Event;
