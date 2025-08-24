import React, { useState } from "react";

export default function AddTasques({ addTasca }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input != "") {
      addTasca(input);
      setInput("");
    }
  };

  return (
    <main>

    <div className="formulari">
      <form id="form" onSubmit={handleSubmit}>
        <input
          className="input-form"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ></input>
        <button type="submit" className="add">
          ➕
        </button>
      </form>
    </div>
          </main>
  );
}
