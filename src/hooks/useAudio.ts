import { useState, useEffect, useRef } from "react";

const useAudio = (url: string) => {
  const audio = useRef<HTMLAudioElement>(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const isReady = useRef(false);

  const toggle = () => {
    setPlaying((prevState) => !prevState);
    if (playing && audio.current.currentSrc === url) {
      audio.current.pause();
      return;
    }
    audio.current.pause();
    audio.current.play();
  };

  useEffect(() => {
    audio.current.pause();
    return () => {
      setPlaying(false);
      audio.current.pause();
    };
  }, []);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);

  // Handle setup when changing tracks
  useEffect(() => {
    audio.current.pause();
    audio.current = new Audio(url);

    if (isReady.current) {
      audio.current.volume = 0.2;
      audio.current.play();
      setPlaying(true);
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [url]);

  return [playing, toggle] as const;
};

export default useAudio;
