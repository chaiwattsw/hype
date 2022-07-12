import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";

async function fetcher(config: Record<string, unknown>) {
  const client = axios.create({
    baseURL: "https://api.spotify.com/v1",
  });
  const token = Cookies.get("spotify_auth_state");
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    throw new Error(error.message);
  };

  return client(config).then(onSuccess).catch(onError);
}

export default fetcher;
