import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./app/pages/Home";
import OrderPage from "./app/pages/OrderPage";
import Navbar from "./app/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/objednavka" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
