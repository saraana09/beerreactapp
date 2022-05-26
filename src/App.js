import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<Beers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
