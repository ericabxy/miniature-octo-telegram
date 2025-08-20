import React from 'react';

function Card ({ id, image, isFlipped, isMatched, onCardClick }) {
  const doCardClick = () => {
    if (!isFlipped && !isMatched) {
      onCardClick(id);
    }
  };

  return (
    <
      div
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={doCardClick}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={image} alt="card" />
        </div>
      </div>
    </div>
  )
}

export default Card;
