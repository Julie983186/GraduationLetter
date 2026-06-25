import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { friends } from "../data/friends";

import "../styles/Letter.css";

export default function Letter() {
  const location = useLocation();

  const queryParams =
    new URLSearchParams(location.search);

  const friendKey =
    queryParams.get("friend");

  const friend =
    friends[friendKey];

  const [opened, setOpened] =
    useState(false);

  const navigate =
    useNavigate();

  if (!friend) {
    return <div>找不到資料</div>;
  }

  return (
    <div className="letter-page">

      {!opened && (
        <div className="envelope-scene">

          <div className="envelope">
            ✉
          </div>

          <h1>
            給 {friend.name} 的一封信
          </h1>

          <p>
            在畢業分別之際，
            有些話想留給你。
          </p>

          <button
            onClick={() =>
              setOpened(true)
            }
          >
            打開信封
          </button>

        </div>
      )}

      {opened && (
        <div className="letter-paper">

          <div className="letter-content">

            {friend.letter}

            <div className="letter-footer">
              <div className="memory-photo">

                <img
                  src={friend.backgroundPhoto}
                  alt={friend.name}
                />

              </div>

              <div className="signature">
                Julie
              </div>
            </div>  
          
          </div>

          <button
            className="finish-btn"
            onClick={() =>
              navigate(
                `/ending?friend=${friendKey}`
              )
            }
          >
            關閉
          </button>

        </div>
      )}

    </div>
  );
}