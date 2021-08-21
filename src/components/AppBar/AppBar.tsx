import MuiAppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function AppBar() {
  return (
    <MuiAppBar>
      <ToolBar>
        <Typography variant="h6">Stripe App</Typography>
      </ToolBar>
    </MuiAppBar>
  );
}

export default AppBar;
