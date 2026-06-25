import { useRef } from "react";

export default function BGM() {
  const audioRef = useRef(null);

  const startMusic = async () => {
    try {
      await audioRef.current.play();
    } catch (err) {
      console.log("play blocked:", err);
    }
  };

  return (
    <>
      <button
        onClick={startMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999
        }}
      >
        🎵 Play Music
      </button>

      <audio ref={audioRef} loop>
        <source src="/Wildfire.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}