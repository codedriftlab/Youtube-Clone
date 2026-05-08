import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoPlayer from "./pages/VideoPlayer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BrowserRouter>
      <Header onToggleSidebar={() => setIsOpen(!isOpen)} />

      <Sidebar isOpen={isOpen} />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/watch/:videoId" element={<Watch />} /> */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;