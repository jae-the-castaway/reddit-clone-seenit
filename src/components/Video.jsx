import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import useSound from "use-sound";

function Video({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const getAudioFileLinks = () => {
    const serialNumber = data.data.media.reddit_video.fallback_url.match(
      /v\.redd\.it\/(.*)\/DASH_/
    )[1];
    const editedLink = `https://v.redd.it/${serialNumber}/DASH_audio.mp4`;
    return editedLink;
  };

  const handleClick = () => {
    if (isPlaying) {
      pause();
      videoRef.current.pause();
    } else {
      play();
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const soundUrl = getAudioFileLinks();
  const [play, { pause }] = useSound(soundUrl, {
    volume: 0.5,
    loop: true,
    interrupt: true,
  });

  return (
    <>
      <video
        loop
        ref={videoRef}
        src={data.data.media.reddit_video.fallback_url}
        className=" my-0 w-full rounded-2xl bg-contain bg-center bg-no-repeat bg-origin-border "
      ></video>
      {isPlaying ? (
        <FaPause className=" invisible absolute top-1/2 left-1/2  -translate-x-6 -translate-y-6 text-6xl text-gray-200 drop-shadow-md hover:transform  hover:text-gray-100 group-hover:visible" />
      ) : (
        <FaPlay className=" invisible absolute top-1/2 left-1/2  -translate-x-6 -translate-y-6 text-6xl text-gray-200 drop-shadow-md hover:transform  hover:text-gray-100 group-hover:visible" />
      )}
      <div
        onClick={handleClick}
        className="absolute  top-0 z-30 h-full w-full"
      ></div>
    </>
  );
}

export default Video;
