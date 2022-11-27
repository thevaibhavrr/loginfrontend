import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./pages/navbar";
import Singup from "./pages/register";
import Home from "./pages/home";
import Contect from "./pages/contect";
import About from "./pages/about";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// "proxy": "http://localhost:5000"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Singup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
