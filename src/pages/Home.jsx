import React from "react";
import meme from "../assets/meme.jpg"; // Adjust the path as necessary
const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img
        src={meme} // Replace with your actual image path
        alt="Centered Content"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default Home;
