import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Grid from "@material-ui/core/Grid";
import CheckoutDescription from "components/Checkout/Description";
import CheckoutPaymentInfo from "components/Checkout/PaymentInfo";

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

if (!PUBLIC_KEY) {
  throw new Error(
    "Stripe public key not defined, set the environment variable REACT_APP_STRIPE_PUBLIC_KEY in the .env file"
  );
}

const stripePromise = loadStripe(PUBLIC_KEY);

const Checkout = () => {
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
};

export default Checkout;
