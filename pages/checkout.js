import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import styles from "../styles/checkout.module.css";
// import getStripe from '../utils/get-stripe';
// import ElementsForm from "../components/ElementForm/elementForm"
import CheckoutForm from '../components/checkoutForm/checkoutForm';
const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import checkoutSession from "../functions/checkoutSession";

export default function Checkout({posting,clientSecret,client}){
    
    return (
        <main className={"post"+" "+styles.checkout} id="checkout">
            <div className={styles.checkout_info}>
                <h1>{posting.title}</h1>
                <h3>Pay ${posting.price || posting.subCategory.length*45 || 45} for this posting on Kaiserlist.</h3>
                <p>Safe transactions through <b>Stripe</b>.</p>
            </div>
            <Elements stripe={promise}>
            <CheckoutForm posting={posting} clientSecret={clientSecret} client={client}/>
            </Elements>
        </main>
    )
}


export async function getServerSideProps(context) {
   
    if (!context.query.id) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    let response;
    try {
      response = await checkoutSession(context.query.id);
 
    } catch (err) {
        
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  
    return {
      props: { posting:response.data.posting,clientSecret:response.data.clientSecret,client:response.data.client }, // will be passed to the page component as props
    };
  }
  
// const DonatePage = () => {
//   return (
//     <div title="Donate with Elements | Next.js + TypeScript Example">
//       <div className="page-container">
//         <h1>Donate with Elements</h1>
//         <p>Donate to our project 💖</p>
//         <Elements stripe={getStripe()}>
//           <ElementsForm />
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default DonatePage;