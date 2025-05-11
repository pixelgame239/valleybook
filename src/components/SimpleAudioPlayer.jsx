import React, { useEffect, useRef } from "react";
import "./SimpleAudioPlayer.css";

function AudioPlayer({ onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
    }
  }, []);

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
        controls
        autoPlay
        src="https://asrqcfdysjuddpjxnnkx.supabase.co/storage/v1/object/sign/audio/sach-noi-giet-con-chim-nhai.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby9zYWNoLW5vaS1naWV0LWNvbi1jaGltLW5oYWkubXAzIiwiaWF0IjoxNzQ2OTUwNzg3LCJleHAiOjE3Nzg0ODY3ODd9.xI60od7RAy9EEWzfRWUuLQC_dCc1XdGbm7eagS5Dd68"
      />
      <button onClick={onClose} className="close-audio-button">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default AudioPlayer;
