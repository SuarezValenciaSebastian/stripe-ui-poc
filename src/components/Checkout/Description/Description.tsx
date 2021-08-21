import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import itemImage from "./Item2.png";
import Card from "../../Card";

const ItemImageContainer = styled.img`
  padding: 1rem;
  margin: 1rem 0;
  max-width: 100%;
`;

const Description = () => {
  return (
    <Card>
      <Typography variant="h4">2020 Ford Shelby GT350</Typography>
      <Typography variant="h5">$59,140</Typography>
      <ItemImageContainer src={itemImage} alt="Mazda 3" />
      <Typography variant="subtitle2">Powered by Stripe</Typography>
    </Card>
  );
};

export default Description;
