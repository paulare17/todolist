import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AddTasques from "./components/AddTasques";
import Tasques from "./components/Tasques";

function App() {
  const [tasques, setTasques] = useState([]);
  const addTasca = (task) => {
    setTasques([...tasques, task]);
    console.log(task);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout tasques={tasques} addTasca={addTasca} />}>
          <Route
            path="/"
            element={
              <>
                <AddTasques addTasca={addTasca} />
                <Tasques tasques={tasques} />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
