import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeContent from "./components/ResumeContent";
import PrintButton from "./components/PrintButton";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <div className="bg-gray-200 ">
      <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={
          <ResumeContent />} />
          <Route path="/download" element={<PrintButton/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
