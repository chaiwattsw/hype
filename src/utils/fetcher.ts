import axios, { AxiosError, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: { "Content-Type": "application/json" },
});

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const { data } = await axios.get(
        `/refresh_token?refresh_token=${localStorage.getItem(
          "hype_refresh_token"
        )}`
      );
      localStorage.setItem("hype_client_token", data.access_token);
      prevRequest.headers["Authorization"] = `Bearer ${data.access_token}`;
      return fetcher(prevRequest);
    }
    return Promise.reject(error);
  }
);

const token = window.localStorage.getItem("hype_client_token");
client.defaults.headers.common.Authorization = `Bearer ${token}`;

async function fetcher(config: Record<string, unknown>) {
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    throw new Error(error.message);
  };

  return client(config).then(onSuccess).catch(onError);
}

export default fetcher;
