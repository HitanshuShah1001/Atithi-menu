import React from "react";
import { styles } from "./styles";
import Atithimenu from "../../assets/Atithi.pdf";
export default function Navigateto() {
  function openMenuPdf() {
    console.log("Here");
    window.open(Atithimenu, "_self");
  }
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={openMenuPdf}>
        RESTAURANT MENU
      </button>
      <button style={styles.button}>Hi</button>
      <button style={styles.button}>Hi</button>
    </div>
  );
}
