import {useRouter} from "next/router";
import deletePost from "../functions/deletePost";
export default function Finalize({email}){ 
    return (
        <main id="finalize-posting" className={"post"}>
            <h1>Your job posting associated with {email} is successfully deleted now.</h1>
        </main>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query);
    if(!context.query.id && !context.query.deleteCode){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    let response;
    try{
        response = await deletePost(context.query.id,context.query.deleteCode,context.query.email);
    }catch(err){
        
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
  