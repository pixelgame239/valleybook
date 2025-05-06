import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = () => {
  return (
    <ReactAudioPlayer
      src={"/assets/audio/sach-noi-giet-con-chim-nhai.mp3"}
      autoPlay={true}
      controls={true}
      loop={false}
    />
  );
};

export default AudioPlayer;
