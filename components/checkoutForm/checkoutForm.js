import styles from "./checkoutForm.module.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import paymentSuccess from "../../functions/paymentSuccess";
import {useRouter} from "next/router";
const cardStyle = {
  base: {
    color: "#303238",
    fontSize: "16px",
    fontFamily: '"Open Sans", sans-serif',
    fontSmoothing: "antialiased",
    "::placeholder": {
      color: "#CFD7DF",
    },
  },
  invalid: {
    color: "#e5424d",
    ":focus": {
      color: "#303238",
    },
  },
};

export default function CheckoutForm({ posting, clientSecret, client }) {
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [processing, setProcessing] = useState(false);
  const route = useRouter();

  const [disabled, setDisabled] = useState(false);
  const handleCardChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (eve) => {
    eve.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: posting.email,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
   
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);

      setProcessing(false);
    } else {
      setError(null);

      setProcessing(false);
      if (
        payload.paymentIntent &&
        payload.paymentIntent.status === "succeeded"
      ) {
        // payment is successful
        setSucceeded(true);
        try{
            await paymentSuccess(posting._id, payload.paymentIntent);
            route.push("https://craiglist.vercel.app")
            
        }catch(err){
            console.error(err);
            setError("Couldn't update payment of your posting. Please contact admin with payment slip.")
        }
        
      }
    }
  };
  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit}
      className={styles.checkout_form}
    >
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleCardChange}
      />
      <button id="submit" disabled={processing || disabled || succeeded}>
        Submit
      </button>
      {error && (
        <div className={styles.card_error} role="alert">
          {error}
        </div>
      )}
      {!error && (
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          {processing
            ? "Processing your payment please wait"
            : succeeded
            ? "Your payment is done successfully. Please wait for the redirect or you can close this window."
            : "Click on submit to pay."}
          <br />
          Refresh the page to pay again.
        </p>
      )}
    </form>
  );
}
