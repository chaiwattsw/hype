import axios, { AxiosError, AxiosResponse } from "axios";

const client = axios.create({ baseURL: "https://api.spotify.com/v1" });

const fetcher = async (config: Record<string, unknown>) => {
  const token = window.localStorage.getItem("hype_client_token");
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    throw new Error(error.message);
  };

  return client(config).then(onSuccess).catch(onError);
};

export default fetcher;
