import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Index";
import NAI from "./Pages/NAI";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/NAI" element={<NAI />} />
      </Routes>
    </Router>
  );
};

export default App;
