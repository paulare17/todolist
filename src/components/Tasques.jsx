import React, { useState } from "react";

export default function Tasques({ tasques, setTasques }) {
  console.log("tasques:", tasques);

  const [checked, setChecked] = useState(
    
  );

  const handleCheckbox = (index) => {
    setChecked((prev) => ({
      ...prev, // Manté els estats anteriors
      [index]: !prev[index], // Alterna l'estat del checkbox per a la tasca específica
    }));
  };

  // const tascaPendent = tasques.filter()

  return (
    <main>
      <div className="tasques">
        <h2>Pendents</h2>
        <ul>
          {tasques.input.map((task, i) => (
            <li key={i}>
              <p
              className="tasca"
              checked={checked[i] || false}
                onClick={() => handleCheckbox(i)}
                style={{
                  textDecoration: checked[i] ? "line-through" : "none" ,
                }}
              >
                {task}
              </p>
            </li>
          ))}
        </ul>
        <h2>Acabades</h2>
        <ul>
          {tasques.input.map((task, i) => (
            <li key={i}>
              <p
              className="tasca"
              checked={checked[i] || true}
                onClick={() => handleCheckbox(i)}
                style={{
                  textDecoration: checked[i] ? "line-through" : "none" ,
                }}
              >
                {task}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
