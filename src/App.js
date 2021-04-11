import React, { useEffect, useState } from "react";
import "./style/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes/routes";
import { Loading, ScrollToTop } from "./components";
import { Navbar, Footer, NotFound } from "./layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  // if (isLoading) return <Loading />;
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
      <Footer />
    </Router>
  );
}

export default App;
