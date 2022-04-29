import { useState, useEffect, useMemo } from "react";

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useMemo(() => {
    if (url) {
      return new Audio(url);
    }
  }, []);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio?.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio?.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return [isPlaying, handlePlay];
};

export default useAudio;
