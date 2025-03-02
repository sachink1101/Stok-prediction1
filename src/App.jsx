import Home from "./Components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StockNews from "./Components/News";
import Privacy from "./Components/Privacy";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter basename="/Stok-prediction1">  {/* ✅ Fix: Add basename */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<StockNews />} />
          <Route path="/policy" element={<Privacy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
