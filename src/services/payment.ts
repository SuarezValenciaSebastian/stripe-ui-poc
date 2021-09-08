import axios from "axios";

const URL = "http://localhost:1337/api";

function paymentService(id: string, amount: number) {
  return axios.post(`${URL}/payments`, {
    id,
    amount,
  });
}

function createPaymentIntentService(productId: string) {
  return axios.post(`${URL}/payment-intents`, { productId });
}

function createSubscriptionIntentService(
  customerId: string,
  productId: string
) {
  return axios.post(`${URL}/subscription-intents`, { customerId, productId });
}

export {
  paymentService,
  createPaymentIntentService,
  createSubscriptionIntentService,
};
