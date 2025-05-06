import React from "react";

function AudioPlayer({ onClose }) {
  return (
    <div className="audio-player-container">
      <audio
        controls
        autoPlay
        src="/assets/audio/sach-noi-giet-con-chim-nhai.mp3"
      />
      <button onClick={onClose} className="close-audio-button">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default AudioPlayer;
