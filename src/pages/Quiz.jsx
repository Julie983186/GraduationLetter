import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { friends } from "../data/friends";
import "../styles/Quiz.css";

export default function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const friendKey = queryParams.get("friend");
  const friend = friends[friendKey];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // ⭐ 合併成一個 state（關鍵修正）
  const [selected, setSelected] = useState(null);

  if (!friend) {
    return <div className="quiz-container">找不到這位朋友 😢</div>;
  }

  const question = friend.questions[current];

  const handleAnswer = (opt) => {
    const isCorrect = opt === question.answer;

    // ⭐ 一次存 option + correct
    setSelected({
      option: opt,
      correct: isCorrect
    });

    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      setSelected(null);

      if (current + 1 < friend.questions.length) {
        setCurrent((c) => c + 1);
      } else {
        setFinished(true);
      }
    }, 500);
  };

  const message =
    score === 5
      ? "你把那些日常細節記得很清楚ㄟ！希望10年後的你依然記得這些小事"
      : score >= 4
      ? "很多我們的片段都還保留在你的記憶裡，就差那麼一咪咪，可能我們是差一頓飯的時光。"
      : score >= 3
      ? "大部分的我們的回憶，你都還留著一點影子，但快要被風吹走了，所以別忘了偶爾翻翻我們曾經的照片回憶那些歡笑吧～"
      : score >= 2
      ? "時間已經帶走了太多你的記憶，趁著還沒離開校園，找時間聚聚吧！"
      : score >= 1
      ? "你還記得一點點，但那些故事好像已經變得很遠。"
      : "看來時間真的帶走了很多東西，但也許某些回憶只是暫時被藏起來了。";

  return (
    <div className="quiz-container">

      {/* top */}
      <div className="quiz-title-top">
        關於 {friend.name} 的回憶測驗
      </div>

      {/* bottom */}
      <div className="scene-label-bottom">
        MEMORY {finished ? "END" : `${current + 1} / 5`}
      </div>

      {/* main */}
      {!finished ? (
        <div className="quiz-center">

          <h2 className="question">
            Q{current + 1}. {question.question}
          </h2>

          <div className="options">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className={`option-btn
                  ${selected?.option === opt && selected?.correct ? "correct" : ""}
                  ${selected?.option === opt && selected?.correct === false ? "wrong" : ""}
                `}
              >
                {opt}
              </button>
            ))}
          </div>

        </div>
      ) : (
        <div className="result-box">
          <h2>測驗完成</h2>
          <h3>你答對了 {score} / 5 題</h3>
          <p>{message}</p>

          <button
            className="next-btn"
            onClick={() => navigate(`/gallery?friend=${friendKey}`)}
          >
            進入回憶畫面
          </button>
        </div>
      )}

    </div>
  );
}