import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "components/shared/Card";
import {
  setProductId,
  setProductName,
  setProductPrice,
} from "redux/cart/slice";
import useRoutes from "hooks/useRoutes";

interface ProductProps {
  name: string;
  productId: string;
  price: string;
}

const Product: FunctionComponent<ProductProps> = ({
  name,
  productId,
  price,
}) => {
  const dispatch = useDispatch();
  const routes = useRoutes();

  const handleBuy = () => {
    dispatch(setProductId(productId));
    dispatch(setProductName(name));
    dispatch(setProductPrice(price));
    routes.checkout();
  };

  return (
    <Card>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h5">{price}</Typography>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        fullWidth
        onClick={handleBuy}
      >
        Buy
      </Button>
    </Card>
  );
};

export default Product;
