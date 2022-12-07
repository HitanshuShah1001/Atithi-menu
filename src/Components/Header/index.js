import React from "react";
import { styles } from "./styles";
import Aithilogo from "../../assets/Logo.png";
export default function Header() {
  return (
    <img
      src={Aithilogo}
      width="100%"
      height={170}
      alt="Atithi Hotel"
      style={styles.header}
    />
  );
}
