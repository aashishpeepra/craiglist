import axios from "axios";
import config from "../config";
import format_date from "../utils/formatter";

export default async function get_feed(category,subCategory){
    let response ;
    
    if(subCategory && subCategory.indexOf("-")!=-1){
        subCategory =  subCategory.replace("-","+")
    }
    let haveSub = subCategory ? `&subCategory=${subCategory}` : ""
    response = await axios.get(config.api+`api/v1/posts/get-feed?category=${category}${haveSub}`)
    let {data} = await response;
    if(response.status===200){
         
        
         data.data = data.data.map(each=>{
             each["formattedDate"] = format_date(each.createdAt);
             return each;
         })
         
    }
   

    return data;
}