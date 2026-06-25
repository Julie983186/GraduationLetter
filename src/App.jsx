import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Quiz from "./pages/Quiz";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";
import Ending from "./pages/Ending";

import BGM from "./components/BGM";

function App() {
  return (
    <BrowserRouter>
      {/* ⭐ 全域音樂，只會存在一個 */}
      <BGM />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;