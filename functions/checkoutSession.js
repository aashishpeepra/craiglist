import axios from "axios";
import config from "../config";

export default async function checkoutSession(id) {
  let response;

  response = await axios.post(config.api + `api/v1/payment/create-checkout-session`,{id});
  let { data } = await response;
  return data;
}
