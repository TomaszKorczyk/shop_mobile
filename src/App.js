import React, { useEffect, useState } from "react";
import "./style/index.scss";
import { auth, db } from "./config/Config";
import { Route, Switch, useLocation } from "react-router-dom";
import { ProductsContextProvider } from "./store/ProductsContext";
import AppContext from "./store/AppContext";
import { Loading, ScrollToTop } from "./components";
import { Navbar, Footer, NotFound } from "./layout";
import { AdminRoute, AuthRoute, GuestRoute, routes } from "./utils/routes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsLoading(false);
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setUser({
              user: snapshot.data().Name,
              role: snapshot.data().Role,
            });
          });
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <AppContext.Provider value={[isLoggedIn, user]}>
      <ProductsContextProvider>
        <Navbar />
        <ScrollToTop />
        <Switch key={location.pathname} location={location}>
          {routes.map((route, index) => {
            if (route.protected === "admin" || user.role === "admin") {
              return (
                <AdminRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            if (route.protected === "user" || user.role === "user") {
              return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            if (route.protected === "guest" || !isLoggedIn) {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </ProductsContextProvider>
    </AppContext.Provider>
  );
}

export default App;
