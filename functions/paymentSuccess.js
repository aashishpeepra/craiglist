import axios from "axios";
import config from "../config";

export default async function paymentSuccess(id,paymentIntent) {
  let response;

  response = await axios.post(config.api + `api/v1/payment/payment-success`,{id,paymentIntent});
  let { data } = await response;
  return data;
}
