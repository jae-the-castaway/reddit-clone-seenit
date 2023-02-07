import { Children, useState, useRef, createRef } from "react"
import { FaPlay, FaPause } from "react-icons/fa"

function Video({ data }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleClick = ( ) => {
        console.log(isPlaying)
        
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

    return (
        <>
<video  loop ref={videoRef} src={data.data.media.reddit_video.fallback_url}            className=" rounded-2xl my-0 w-full bg-origin-border bg-center bg-contain bg-no-repeat "></video>
                        {isPlaying ? <FaPause onClick={handleClick} className=" text-gray-200 hover:text-gray-100 absolute top-1/2 -translate-x-6 -translate-y-6 left-1/2 text-6xl invisible group-hover:visible hover:transform  drop-shadow-md z-50"/> : <FaPlay onClick={handleClick} className=" text-gray-200 hover:text-gray-100 absolute top-1/2 -translate-x-6 -translate-y-6 left-1/2 text-6xl invisible group-hover:visible hover:transform  drop-shadow-md z-50"/>}
                        <a href={data.data.media.reddit_video.fallback_url}   className="top-0  z-30 absolute w-full h-full"  ></a>
                        </>

    )
} 

export default Video