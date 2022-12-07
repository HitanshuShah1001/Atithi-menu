import React from "react";
import { styles } from "./styles";
import { OPTIONS } from "../Options/options";
export default function Navigateto() {
  return (
    <div style={styles.container}>
      {Object.keys(OPTIONS).map((option, index) => (
        <button
          style={styles.button}
          onClick={() => OPTIONS[option]()}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
