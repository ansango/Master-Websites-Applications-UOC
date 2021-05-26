import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./views/Loading";

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Nav />
        <Switch>{routeComponents}</Switch>
        <Footer />
      </Router>
    </Suspense>
  );
};
export default App;
