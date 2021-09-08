import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { RootState } from "redux/store";
import Card from "components/shared/Card";

const Description = () => {
  const productName = useSelector(
    (state: RootState) => state.cart.product.name
  );
  const productPrice = useSelector(
    (state: RootState) => state.cart.product.price
  );

  return (
    <Card>
      <Typography variant="h4">{productName}</Typography>
      <Typography>
        $
        <Typography variant="h5" component="span">
          {productPrice}
        </Typography>
        /Month
      </Typography>
      <Typography variant="subtitle2">Powered by Stripe</Typography>
    </Card>
  );
};

export default Description;
