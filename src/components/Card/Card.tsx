import { FunctionComponent } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const Content = styled.div`
  padding: 2rem;
`;

const Card: FunctionComponent = ({ children }) => {
  return (
    <Paper>
      <Content>{children}</Content>
    </Paper>
  );
};

export default Card;
