import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import type { Profile } from "types";

const useProfile = () => {
  const config = { method: "get", url: "/me" };
  const { data, isLoading, error } = useQuery<Profile, Error>(
    ["profile", config],
    () => fetcher(config)
  );
  return { data, isLoading, error };
};
export default useProfile;
