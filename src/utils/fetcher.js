import axios from "axios";

const fetcher = (method, url, accessToken) =>
  axios({
    method: method,
    url: url,
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then((res) => {
    return res.data;
  });

export default fetcher;
