import { useQuery } from "react-query";
import fetcher from "utils/fetcher";

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface IUseProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  product: "open" | "free" | "premium";
  type: "user";
  uri: string;
}

const useProfile = () => {
  const config = { method: "get", url: "/me" };
  const { data, isLoading, error } = useQuery<IUseProfile, Error>(
    ["profile", config],
    () => fetcher(config)
  );
  return { data, isLoading, error };
};
export default useProfile;
