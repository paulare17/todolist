import React from "react";
import Header from "./components/Header";
import AddTasques from "./components/AddTasques";
import Footer from "./components/Footer";
import { useState } from "react";
import Tasques from "./components/Tasques";

export default function Home() {
  const [tasques, setTasques] = useState([]);
  const addTasca = (task) => {
    setTasques([...tasques, task]);
    console.log(task);
  };
  return (
    <div>
      <main>
        <AddTasques addTasca={addTasca} />
        <Tasques tasques={tasques} />
      </main>
      <Footer />
    </div>
  );
}
