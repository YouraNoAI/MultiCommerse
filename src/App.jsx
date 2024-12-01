import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Index";
import NAI from "./Pages/NAI";
import Login from "./Pages/Login";
import Blank from "./Pages/blank";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<Blank />} />
        <Route path="/NAI" element={<NAI />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
