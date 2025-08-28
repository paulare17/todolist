import "./App.css";
import Home from "./Home";
import AddTasques from "./components/AddTasques";
import Tasques from "./components/Tasques";
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="pendents" element={<Home/>}></Route>
        <Route path="acabades" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
