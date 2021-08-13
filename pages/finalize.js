import EmailUpdates from "../components/post/emailUpdate/emailUpdate";
import {useRouter} from "next/router";

export default function Finalize({email}){ 
    return (
        <main id="finalize-posting" className={"post"}>
            <EmailUpdates email={email}/>
        </main>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query);
    if(!context.query.email){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    return {
      props: {email:context.query.email}, // will be passed to the page component as props
    }
  }
  