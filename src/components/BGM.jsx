import { useEffect, useRef } from "react";

export default function BGM() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 先靜音播放（瀏覽器允許）
    audio.muted = true;
    audio.play();

    // 1 秒後解除靜音
    const timer = setTimeout(() => {
      audio.muted = false;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}