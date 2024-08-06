import React from 'react'

function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/black-silhouettes-music-concert-poster-concept_1194-617147.jpg?t=st=1722848125~exp=1722851725~hmac=bc6f43f2e5a78b674a31453fd465cfafe076825882435420983f7a1fdfca78dd&w=1380)' }}>
    <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to Concertify</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
        The ultimate event management platform for your concerts and events
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default Home
