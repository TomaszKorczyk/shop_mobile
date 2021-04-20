import React from "react";
import "./style/index.scss";
import { Route, Switch } from "react-router-dom";
import routes from "./utils/routes/routes";
import { ScrollToTop } from "./components";
import { Navbar, Footer, NotFound } from "./layout";
import { ProductsContextProvider } from "./store/ProductsContext";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);
  // if (isLoading) return <Loading />;
  return (
    <ProductsContextProvider>
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
    </ProductsContextProvider>
  );
}

export default App;
