import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import AddTasques from "./components/AddTasques";

export default function Layout({tasques, addTasca}) {
  return (
    <div>
      <Header />
      <main>
        <Outlet context= {{tasques, addTasca}}/>
      </main>
    </div>
  );
}
