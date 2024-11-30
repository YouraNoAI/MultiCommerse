import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Index";
import NAI from "./Pages/NAI";
import Admin from "./Pages/admin";
import Login from "./Pages/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/NAI" element={<NAI />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
