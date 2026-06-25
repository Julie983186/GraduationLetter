import { useEffect, useRef } from "react";

export default function BGM() {
  return (
    <audio autoPlay loop>
      <source src="/Wildfire.mp3" type="audio/mpeg" />
    </audio>
  );
}