import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef(new Audio(url));
  const isReady = useRef(false);

  const toggle = () => {
    setIsPlaying(!isPlaying);
  };

  const play = () => audio.current.play();
  const pause = () => audio.current.pause();

  useEffect(() => {
    isPlaying ? play() : pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.current.volume = 0.3;
    return () => {
      pause();
    };
  }, []);

  useEffect(() => {
    pause();
    if (url === null) {
      toast.error("Oops! This song is unavailable for now.", {
        position: "bottom-center",
      });
      setIsPlaying(false);
      return;
    }
    audio.current = new Audio(url);
    if (isReady.current) {
      play();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [url]);

  return [isPlaying, toggle];
};

export default useAudio;
