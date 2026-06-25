import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const friendKey = queryParams.get("friend");

  const handleStart = () => {
    navigate(`/quiz?friend=${friendKey}`);
  };

  return (
    <div className="welcome-container">
      <div className="mail-icon">📩</div>

      <h1 className="welcome-title">
        For You, From Julie
      </h1>

      <p className="welcome-text">
        這裡有一份為你準備的小禮物。
        <br />
        不過在打開之前，
        <br />
        先來看看你還記得多少我們的故事吧。
      </p>

      <button
        className="start-btn"
        onClick={handleStart}
      >
        Open
      </button>
    </div>
  );
}