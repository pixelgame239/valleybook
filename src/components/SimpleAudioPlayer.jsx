import React, { useEffect, useRef } from "react";
import "./SimpleAudioPlayer.css";

function AudioPlayer({ onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1; // Set volume to 50%
    }
  }, []);

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
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
