import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeContent from "./components/ResumeContent";



function App() {
  return (
    <>
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={
          <ResumeContent />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
