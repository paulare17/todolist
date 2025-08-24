import React from "react";

export default function Tasques({ tasques }) {
  console.log("tasques:", tasques);

  return (
    <main>
      <div className="tasques">
        <ul>
          {tasques.map((task) => (
            <li>
              <input type="checkbox"></input>
              <label>{task}</label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
