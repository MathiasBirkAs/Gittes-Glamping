// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/login" element={<Home />} />
  </Routes>

  );
}

export default App;
