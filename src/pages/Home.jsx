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
      {/* <video
        ref={videoRef}
        src="/public/prank.mp4"
        loop
        playsInline
        controls
        className="max-w-full max-h-full"
      /> */}
      <p className=" text-black text-sm">
        There's nothing on this page go Back!!
      </p>
    </div>
  );
};

export default Home;
