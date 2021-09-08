import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import Routes from "components/Routes";
import store from "redux/store";

function App() {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
