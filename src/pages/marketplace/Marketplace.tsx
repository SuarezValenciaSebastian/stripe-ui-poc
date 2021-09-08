import Grid from "@material-ui/core/Grid";
import Product from "components/Marketplace/Product";

const Marketplace = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Product name="Basic plan" productId="SUBSCRIPTION_1" price="99,9" />
      </Grid>
      <Grid item xs={4}>
        <Product name="Premium plan" productId="SUBSCRIPTION_2" price="199,9" />
      </Grid>
      <Grid item xs={4}>
        <Product
          name="Ultimate plan"
          productId="SUBSCRIPTION_3"
          price="499,9"
        />
      </Grid>
    </Grid>
  );
};

export default Marketplace;
