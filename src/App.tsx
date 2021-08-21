import CssBaseline from "@material-ui/core/CssBaseline";
import CheckoutPage from "./pages/checkout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <CssBaseline />
      <Dashboard>
        <CheckoutPage />
      </Dashboard>
    </>
  );
}

export default App;
