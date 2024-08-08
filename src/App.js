import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Event from "./screens/Event";
import Venue from "./screens/Venue";
import EventDetails from "./screens/EventDetails";
import VenueDetails from "./screens/VenueDetails";
import Contact from "./screens/Contact";
import Profile from "./screens/Profile";
import CreateProfile from "./screens/CreateProfile";
import { useState } from "react";

function App() {
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  const handleProfileSubmit = () => {
    setIsProfileCreated(true);
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/createProfile"
          element={
            <div>
              {!isProfileCreated ? (
                <CreateProfile onSubmit={handleProfileSubmit} />
              ) : (
                <Profile />
              )}
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/venuedetails/:id" element={<VenueDetails />} />
      </Routes>
    </div>
  );
}

export default App;
