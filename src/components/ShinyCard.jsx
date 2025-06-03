import React, { useRef, useState } from "react";
import "./ShinyCard.css";

const ShinyCard = ({ frontTitle, frontText, backTitle, backText, inProgress }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isHovered = useRef(false); // ← ref au lieu d’un state
  const cardRef = useRef();

  const handleClick = () => {
    setIsFlipped(true);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;

    // Replier la carte si la souris est bien sortie
    setTimeout(() => {
      if (!isHovered.current) {
        setIsFlipped(false);
      }
    }, 300); // délai à ajuster
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${isFlipped ? 180 : rotateY}deg)
    `;

    const holo = card.querySelector(".holo-overlay");
    if (holo) {
      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
      holo.style.transform = `rotate(${angle}deg)`;
    }
  };

  return (
    <div className="shiny-card-wrapper">
      <div
        ref={cardRef}
        className={`shiny-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="card-face card-front">
          <div className="holo-overlay" />
          <h3>{frontTitle}</h3>
          <p>{frontText}</p>
          {inProgress && (
            <div className="progress-badge">En cours</div>
          )}
        </div>
        <div className="card-face card-back">
          <h3>{backTitle}</h3>
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default ShinyCard;
