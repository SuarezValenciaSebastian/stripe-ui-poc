import { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

interface LoadingButtonProps {
  loading: boolean;
  fullWidth?: boolean;
  [x: string]: any;
}

const Container = styled.div<LoadingButtonProps>`
  display: flex;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;

const Wrapper = styled.div<LoadingButtonProps>`
  position: relative;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;

const Progress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
`;

const LoadingButton: FunctionComponent<LoadingButtonProps> = ({
  loading,
  children,
  fullWidth,
  ...rest
}) => {
  return (
    <Container>
      <Wrapper>
        <Button disabled={loading} fullWidth {...rest}>
          {children}
        </Button>
        {loading && <Progress size={24} />}
      </Wrapper>
    </Container>
  );
};

export default LoadingButton;
