import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Index from '../Pages/index.jsx'
import NAI from '../Pages/NAI/NAI.jsx'
import Buy from '../Pages/buyProducts.jsx'
import BLANKS from '../Pages/BLANKS.jsx'
import Checkout from '../Pages/Checkout.jsx'
function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/NAI" element={<NAI />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/Checkout/:id" element={<Checkout />} />
        <Route path="/*" element={<BLANKS />} />
      </Routes>
    </Router>
  )
}

export default App