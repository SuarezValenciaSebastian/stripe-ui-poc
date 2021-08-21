import { FormEvent } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "../../Card";
import paymentService from "../../../services/payment";

const PaymentInfo = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const card = elements?.getElement(CardElement);
    if (!card) {
      enqueueSnackbar("This page has an error try again, or contact support", {
        variant: "error",
      });
      console.error({ type: "ERROR", code: "1001" });
      return;
    }
    if (!stripe) {
      enqueueSnackbar("This page has an error try again, or contact support", {
        variant: "error",
      });
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      enqueueSnackbar(`An error ocurred during the payment: ${error.message}`, {
        variant: "error",
      });
      return;
    }

    if (!paymentMethod) {
      enqueueSnackbar("This page has an error try again, or contact support", {
        variant: "error",
      });
      return;
    }

    const { data } = await paymentService(paymentMethod.id, 5914000);
    console.log(data);
    enqueueSnackbar("Successful process", { variant: "success" });
    console.log(paymentMethod);
  };

  return (
    <Card>
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
