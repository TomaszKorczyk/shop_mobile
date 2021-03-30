import "./style/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Content from "./layout/Conntent/Content";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Content />
    </Router>
  );
}

export default App;
