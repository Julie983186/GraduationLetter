import { useLocation } from "react-router-dom";
import { friends } from "../data/friends";
import "../styles/Ending.css";

export default function Ending() {

  const location = useLocation();

  const queryParams =
    new URLSearchParams(location.search);

  const friendKey =
    queryParams.get("friend");

  const friend =
    friends[friendKey];

  if (!friend) return null;

  return (

    <div className="ending-page">

      <div className="ending-content">


        <p>
          謝謝你出現在我的大學時光裡，
        </p>

        <p>
          這些回憶我都會好好收藏。
        </p>

        <p>
          希望未來的某一天，
          我們都成為更喜歡的自己。
        </p>

        <div className="ending-sign">

          Julie

        </div>

      </div>

    </div>
  );
}