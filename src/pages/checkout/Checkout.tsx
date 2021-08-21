import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Grid from "@material-ui/core/Grid";
import CheckoutDescription from "../../components/Checkout/Description";
import CheckoutPaymentInfo from "../../components/Checkout/PaymentInfo";

const PUBLIC_KEY =
  "pk_test_51JQOLDDCxmubgxr2QnGM2CcnvmbdfvAbDb5kPRTswixXQ67l5cDmChDhCdIFNhZGZupunAgLiE8zv8LZosb9JcV300ZFSsJpyT"; // TODO: Move this

const stripePromise = loadStripe(PUBLIC_KEY); // TODO: Move initialization to other component

function Checkout() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <CheckoutDescription />
      </Grid>
      <Grid item xs={6}>
        <Elements stripe={stripePromise}>
          <CheckoutPaymentInfo />
        </Elements>
      </Grid>
    </Grid>
  );
}

export default Checkout;
