import { BrowserRouter, Routes, Route } from "react-router"
import Portfolio  from './Portfolio/Portfolio.jsx';
import Preview from "./Preview"
import Navbar from "./component/Navbar.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/preview" element={<Preview><Portfolio /></Preview>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
