import "./style/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes/routes";
import Navbar from "./layout/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./layout/404/404";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
