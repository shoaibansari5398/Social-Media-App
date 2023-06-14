import "./App.css";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import Signup from "./Pages/Signup/SIgnup";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
