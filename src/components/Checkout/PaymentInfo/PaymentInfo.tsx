import { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "components/shared/Card";
import useAlerts from "hooks/useAlerts";
import { createSubscriptionIntentService } from "services/payment";
import useRoutes from "hooks/useRoutes";

const PaymentInfo = () => {
  const customerId = useSelector((state: RootState) => state.customer.id);
  const productId = useSelector((state: RootState) => state.cart.product.id);
  const alert = useAlerts();
  const routes = useRoutes();

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await createSubscriptionIntentService(
          customerId,
          productId
        );
        setClientSecret(data.clientSecret);
      } catch (error) {
        alert.error("Something went wrong", error);
      }
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    if (!elements || !stripe) {
      alert.error(
        "Something went wrong with this page, try again later or contact support",
        { message: "'stripe' or 'elements' were not ready yet" }
      );
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      alert.error(
        "Something went wrong with this page, try again later or contact support",
        "'Card' component is undefined"
      );
      return;
    }

    const payload = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
      },
    });

    if (payload.error) {
      alert.error(payload.error.message, payload.error);
    } else {
      alert.success("Successful purchase");
    }

    setProcessing(false);
    routes.marketplace();
  };

  return (
    <Card>
      {processing && <LinearProgress />}
      <Typography variant="h6">Payment information</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardElement />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={processing}
              disableElevation
              fullWidth
            >
              Buy
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default PaymentInfo;
