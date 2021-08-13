import axios from "axios";
import config from "../config";


export default async function submitPost(mapData, postData) {
  postData["coords"] = {
    latitude: mapData.latitude,
    longitude: mapData.longitude,
  };
  postData["images"] = [];
  if (postData["reachEmail"].length == 0) postData["reachEmail"] = true;
  if (postData.category.length > 0) {
    switch (postData.category[0]) {
      case "jobs":
        postData.postType = ["jobs"];
    }
  }

  console.log(mapData, postData, config.api);
  let response;

  response = await axios.post(config.api + "api/v1/posts/create", postData);
  let { data } = await response;
  return data;
}
