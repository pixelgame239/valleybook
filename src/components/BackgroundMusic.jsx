import { useEffect, useRef } from "react";

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.55;

    // Đợi người dùng click để phát nhạc
    const handleUserGesture = () => {
      audio.play().catch((e) => {
        console.log("Tự động phát bị chặn:", e);
      });
      document.removeEventListener("click", handleUserGesture);
    };

    document.addEventListener("click", handleUserGesture);

    return () => {
      document.removeEventListener("click", handleUserGesture);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="https://asrqcfdysjuddpjxnnkx.supabase.co/storage/v1/object/sign/audio/web-sound-2.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby93ZWItc291bmQtMi5tcDMiLCJpYXQiOjE3NDYyODU4NDksImV4cCI6MTc0ODg3Nzg0OX0.I9S0BXIXKOEo_Gp0jftCRoQlfpjhy7yyyg2KDBegujc"
      loop
      preload="auto"
      muted
    />
  );
}

export default BackgroundMusic;
