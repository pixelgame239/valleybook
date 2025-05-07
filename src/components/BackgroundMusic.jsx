import {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

const BackgroundMusic = forwardRef(({ muted, onInit }, ref) => {
  const audioRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize audio when component mounts
  useEffect(() => {
    if (audioRef.current && !isInitialized) {
      audioRef.current.volume = 0.55;
      setIsInitialized(true);
      onInit?.();
      console.log("Audio initialized successfully");
    }
  }, [audioRef.current, isInitialized]);

  useImperativeHandle(
    ref,
    () => ({
      play: () => {
        if (!audioRef.current || !isInitialized) {
          console.error("Cannot play - audio not initialized");
          return;
        }
        return audioRef.current.play();
      },
      pause: () => {
        if (!audioRef.current || !isInitialized) {
          console.error("Cannot pause - audio not initialized");
          return;
        }
        return audioRef.current.pause();
      },
      volume: (value) => {
        if (!audioRef.current || !isInitialized) {
          console.error("Cannot set volume - audio not initialized");
          return;
        }
        audioRef.current.volume = value;
      },
    }),
    [isInitialized]
  );

  // Handle user gesture to start audio
  useEffect(() => {
    if (!audioRef.current || !isInitialized) return;

    const handleUserGesture = () => {
      audioRef.current.play().catch((e) => {
        console.log("Autoplay blocked:", e);
      });
      document.removeEventListener("click", handleUserGesture);
    };

    document.addEventListener("click", handleUserGesture);
    return () => document.removeEventListener("click", handleUserGesture);
  }, [isInitialized]);

  return (
    <audio
      ref={audioRef}
      src="https://asrqcfdysjuddpjxnnkx.supabase.co/storage/v1/object/sign/audio/web-sound-2.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby93ZWItc291bmQtMi5tcDMiLCJpYXQiOjE3NDYyODU4NDksImV4cCI6MTc0ODg3Nzg0OX0.I9S0BXIXKOEo_Gp0jftCRoQlfpjhy7yyyg2KDBegujc"
      loop
      preload="auto"
      muted={muted}
    />
  );
});

BackgroundMusic.displayName = "BackgroundMusic";
export default BackgroundMusic;
