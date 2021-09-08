import { Link } from "react-router-dom";
import MuiAppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import routes from "components/Routes/routes.json";

const AppBar = () => {
  return (
    <MuiAppBar>
      <ToolBar>
        <MuiLink
          component={Link}
          to={routes.marketplace.path}
          color="inherit"
          underline="none"
        >
          <Typography variant="h6">Stripe App</Typography>
        </MuiLink>
      </ToolBar>
    </MuiAppBar>
  );
};

export default AppBar;
