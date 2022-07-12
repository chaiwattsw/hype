import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import { Profile } from "types";

const useProfile = (token: string) => {
  const config = { method: "get", url: "/me", token };
  const { data, isLoading, error } = useQuery<Profile, Error>(
    ["profile", config],
    () => fetcher(config)
  );
  return { data, isLoading, error };
};
export default useProfile;
