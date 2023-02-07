import { Children, useState, useRef, createRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function Video({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    console.log(isPlaying);

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <video
        loop
        ref={videoRef}
        src={data.data.media.reddit_video.fallback_url}
        className=" my-0 w-full rounded-2xl bg-contain bg-center bg-no-repeat bg-origin-border "
      ></video>
      {isPlaying ? (
        <FaPause
          onClick={handleClick}
          className=" invisible absolute top-1/2 left-1/2 z-50 -translate-x-6 -translate-y-6 text-6xl text-gray-200 drop-shadow-md hover:transform  hover:text-gray-100 group-hover:visible"
        />
      ) : (
        <FaPlay
          onClick={handleClick}
          className=" invisible absolute top-1/2 left-1/2 z-50 -translate-x-6 -translate-y-6 text-6xl text-gray-200 drop-shadow-md hover:transform  hover:text-gray-100 group-hover:visible"
        />
      )}
      <a
        href={data.data.media.reddit_video.fallback_url}
        className="absolute  top-0 z-30 h-full w-full"
      ></a>
    </>
  );
}

export default Video;
