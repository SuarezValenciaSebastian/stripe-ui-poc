import axios from "axios";

const URL = "http://localhost:1337/api";

function paymentService(id: string, amount: number) {
  return axios.post(`${URL}/payments`, {
    id,
    amount,
  });
}

export default paymentService;
