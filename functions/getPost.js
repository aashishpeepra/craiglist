import axios from "axios";
import config from "../config";
import format_date from "../utils/formatter";

export default async function get_post(id){
    let response ;
    console.log(id)
    response = await axios.get(config.api+`api/v1/posts/get-post?id=${id}`);
    let {data} = await response;
    // if(response.status===200){
         
        
    //      data.data["formattedDate"] = format_date(data.data.createdAt);
         
    // }
   

    return data;
}