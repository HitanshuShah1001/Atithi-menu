import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navigateto from "./Components/Button/Navigateto";
import { styles } from "./styles";
import Atithi from "./assets/table.jpg";

function App() {
  const myStyle = {
    backgroundImage: `url(${Atithi})`,
    height: "100vh",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
  };
  return (
    <div style={myStyle}>
      <Header />
      <Navigateto />
    </div>
  );
}

export default App;
