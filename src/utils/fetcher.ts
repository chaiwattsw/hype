import axios, { AxiosError, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://api.spotify.com/v1",
});
client.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("hype_access_token");
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }
  return config;
});

async function fetcher(config: Record<string, unknown>) {
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    throw new Error(error.message);
  };

  return client(config).then(onSuccess).catch(onError);
}

export default fetcher;
