import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Event from "./screens/Event";
import Venue from "./screens/Venue";
import EventDetails from "./screens/EventDetails";
import VenueDetails from "./screens/VenueDetails";
import Contact from "./screens/Contact";

function App() {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/venuedetails/:id" element={<VenueDetails />} />
      </Routes>

    </div>
  );
}

export default App;
