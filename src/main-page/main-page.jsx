import React from "react";
import Header from "./header";
import MainBlock from "./main-block";
import "./main-page.css";

function MainPage () {
  return (
    <section style={{ display: "grid" }}>
      <Header />
      <MainBlock />
    </section>
    
  )
}

export default MainPage