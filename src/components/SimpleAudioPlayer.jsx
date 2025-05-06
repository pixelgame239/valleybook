import React, { useRef } from "react";

function SimpleAudioPlayer() {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={playAudio}>Play Audio</button>
      <audio ref={audioRef}>
        <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default SimpleAudioPlayer;
