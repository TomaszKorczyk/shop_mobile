import "./style/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Content from "./layout/Conntent/Content";
import ScrollToTop from "./components/ScrollToTop";
import MyCarousel from "./components/carousel/MyCarousel";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <MyCarousel />
      <Content />
    </Router>
  );
}

export default App;
