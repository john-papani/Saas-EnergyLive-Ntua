import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Main1 from "./Pages/Main1";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Basics/Navbar";
import Testing from "./Pages/Testing";
import ExtendPlan from "./Pages/ExtendPlan";
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main1 />} />
        <Route path="/extend" element={<ExtendPlan />} />

        <Route path="*" element={<ErrorPage />} />
        <Route path="/test" element={<Testing />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/upload" element={<Upload/>}/> */}
      </Routes>

      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          '.google-btn',
          '.google_button',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
    </Router>
  );
}

export default App;
