import "./style/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
