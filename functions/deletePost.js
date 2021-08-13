import axios from "axios";
import config from "../config";

export default async function deletePost(id, deleteCode,email) {
  let response;

  response = await axios.delete(config.api + `api/v1/posts/delete-post?id=${id}&deleteCode=${deleteCode}&email=${email}`);
  let { data } = await response;
  return data;
}
