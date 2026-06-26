import { useLocation, useNavigate } from "react-router-dom";
import { friends } from "../data/friends";
import "../styles/Gallery.css";
import { useState, useMemo, useEffect } from "react";

useEffect(() => {
  const handleKeyDown = (e) => {
    if (!open) return; // modal 沒開不作用

    if (e.key === "ArrowLeft") {
      prev();
    }

    if (e.key === "ArrowRight") {
      next();
    }

    if (e.key === "Escape") {
      closeModal();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [open, selectedIndex]);

export default function Gallery() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const friendKey = queryParams.get("friend");
  const friend = friends[friendKey];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showEnding, setShowEnding] = useState(false);

  if (!friend) return <div>找不到資料</div>;

  const positions = useMemo(() => {
    return friend.photos.map((_, index) => {
      const direction = index % 2 === 0 ? -1 : 1;

      return {
        top: 15 + Math.random() * 35,
        left: 50 + direction * (Math.random() * 35),
        rotate: Math.random() * 50 - 25
      };
    });
  }, [friendKey]);

  const open = selectedIndex !== null;
  const currentPhoto = open ? friend.photos[selectedIndex] : null;

  const prev = () => {
    setSelectedIndex((i) =>
      i > 0 ? i - 1 : friend.photos.length - 1
    );
  };

  const next = () => {
    setSelectedIndex((i) =>
      i < friend.photos.length - 1 ? i + 1 : 0
    );
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setShowEnding(true);
  };

  return (
    <div className="gallery-container">

      {/* 🎯 引導文案 */}
      {!open && !showEnding && (
        <div className="gallery-hint">
          點開照片看看吧，也許會有一些小驚喜等著你
        </div>
      )}

      {/* 📸 散落照片 */}
      {friend.photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          className="photo"
          style={{
            top: `${positions[index].top}%`,
            left: `${positions[index].left}%`,
            transform: `rotate(${positions[index].rotate}deg)`
          }}
          onClick={() => setSelectedIndex(index)}
        />
      ))}

      {/* 🎞 modal */}
      {open && (
        <div className="modal-overlay" onClick={closeModal}>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={closeModal}>✕</button>

            <div className="modal-main">

              <button className="nav-side-btn" onClick={prev}>←</button>

              <img src={currentPhoto.src} className="modal-image" />

              <button className="nav-side-btn" onClick={next}>→</button>

            </div>

            {(currentPhoto.title || currentPhoto.text) && (
              <div className="modal-info">
                {currentPhoto.title && <h2>{currentPhoto.title}</h2>}
                {currentPhoto.text && <p>{currentPhoto.text}</p>}
              </div>
            )}

          </div>
        </div>
      )}

      {/* 🌑 ending */}
      {showEnding && !open && (
        <div className="end-card fade-in">

          <h2>你已經走完這段回憶</h2>

          <p>希望瀏覽過這些照片的你，能夠想起那些一起歡笑的時光</p>

          <p className="sub">
            接下來，是最後一份禮物。
          </p>

          <button
            onClick={() =>
              navigate(`/letter?friend=${friendKey}`)
            }
          >
            下一步 →
          </button>

        </div>
      )}

    </div>
  );
}