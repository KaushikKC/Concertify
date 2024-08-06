import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Event from "./screens/Event";
import Venue from "./screens/Venue";

function App() {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/venue" element={<Venue />} />
      </Routes>

    </div>
  );
}

export default App;
