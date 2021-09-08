import { FunctionComponent } from "react";
import styled from "styled-components";
import MuiToolBar from "@material-ui/core/Toolbar";
import MuiContainer from "@material-ui/core/Container";
import Toolbar from "components/AppBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 3rem 0;
`;

const Dashboard: FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Toolbar />
      <MuiToolBar />
      <MuiContainer>
        <Content>{children}</Content>
      </MuiContainer>
    </Container>
  );
};

export default Dashboard;
