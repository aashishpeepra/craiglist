import moment from "moment";


export default function format_date(dateObject){
    let temp = moment(dateObject);
    return temp.format("MMM Do YY")
}