import React, { useRef } from "react";

const Home = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-black"
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src="/prank.mp4"
        loop
        playsInline
        controls
        className="max-w-full max-h-full"
      />
      <p className="absolute bottom-4 text-white text-sm">
        Click to play with sound
      </p>
    </div>
  );
};

export default Home;
