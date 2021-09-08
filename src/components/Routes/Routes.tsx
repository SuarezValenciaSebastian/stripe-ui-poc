import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "pages/checkout";
import MarketplacePage from "pages/marketplace";
import LoginPage from "pages/login";
import Dashboard from "components/Dashboard";
import routes from "./routes.json";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.login.path} exact>
          <LoginPage />
        </Route>
        <Route path={routes.dashboard.path}>
          <Dashboard>
            <Route path={routes.checkout.path} exact>
              <CheckoutPage />
            </Route>
            <Route path={routes.marketplace.path} exact>
              <MarketplacePage />
            </Route>
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
