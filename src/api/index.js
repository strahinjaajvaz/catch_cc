import axios from "axios";

const url = `http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json`;

export function productList() {
  return axios.get(url);
}
