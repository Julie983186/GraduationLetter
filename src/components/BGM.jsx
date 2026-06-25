import { useRef } from "react";

export default function BGM() {
  const audioRef = useRef(null);

  const start = () => {
    audioRef.current.play();
  };

  return (
    <>
      <button
        onClick={start}
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        🎵 Start
      </button>

      <audio ref={audioRef} loop>
        <source src="/Wildfire.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}