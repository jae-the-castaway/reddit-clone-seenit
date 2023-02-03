import { Children, useState, useRef, createRef } from "react"
import { HiDotsHorizontal, HiArrowUp, HiArrowDown, HiOutlineUpload, HiOutlineChatAlt } from "react-icons/hi"
import { FaPlay, FaPause } from "react-icons/fa" 




function Contents({data}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    videoRef.current = data.map((element, i) => videoRef.current[i]); 

// need to make a video component that contains this handleclick function and useRef for each videos
// and in this Contents components, pass down videos's url
// so that we can use useRef each video without declaring multiple useRef
// Read chatGPT most recent chat before implementing

    const handleClick = ( i ) => {
        console.log(IsPlaying)
        
        if (IsPlaying) {
            videoRef.pause();
          console.log('video paused')
        } else {
            videoRef.play();
          console.log('video played')
        }
        setIsPlaying(!isPlaying);
      };
    
    return(
        <ul className=" flex  flex-col mx-[5vw]  bg-gray-300 border-gray-300 border ">
            {
            data.map((item, i) => (
                    <li key={item.data.id} className="  group my-1 relative min-w-[300px]  max-w-[700px]">

                    <div className=" rounded-2xl bg-card-top group-hover:bg-card-bottom w-full h-full absolute z-10  "></div>
                    <div className=" absolute z-20 grid grid-cols-3 grid-rows-[1fr_4fr_10px_1fr] w-full h-full">
                        <div className=" self-center grid-1">
                            <p className=" ml-4 text-gray-100 ">
                                r/{item.data.subreddit}
                            </p>
                      </div>
                      < HiDotsHorizontal className=" text-gray-100 mx-4 self-center justify-self-end col-start-3 "/>
                      <h2 className=" self-end col-span-3  text-gray-100 text-xl mx-4 ">{item.data.title}</h2>
                      <hr className="  col-span-3 my-1 border-gray-300 mx-8 "></hr>
                      <div className=" self-center grid-10 justify-self-center flex text-gray-100"><HiArrowUp className=" mr-2 "/><p className=" mr-2 ">{item.data.ups}</p><HiArrowDown/></div>
                      <div className="self-center grid-11 justify-self-center flex text-gray-100 "><HiOutlineChatAlt className=" mr-2 "/><p className=" mr-2">{item.data.num_comments} Comments</p></div>
                      <div className="justify-self-center self-center grid-12 flex text-gray-100 "><HiOutlineUpload className=" mr-2"/><p className="">Share</p></div>
                    </div>
                    {item.data.is_video === true 
                        ? <><video  muted loop src={item.data.media.reddit_video.fallback_url} className=" rounded-2xl my-0 w-full bg-origin-border bg-center bg-contain bg-no-repeat ">
                        </video>
                        {isPlaying ? <FaPause onClick={handleClick} className=" text-gray-200 hover:text-gray-100 absolute top-1/2 -translate-x-6 -translate-y-6 left-1/2 text-6xl invisible group-hover:visible hover:transform  drop-shadow-md z-30"/> : <FaPlay onClick={handleClick} className=" text-gray-200 hover:text-gray-100 absolute top-1/2 -translate-x-6 -translate-y-6 left-1/2 text-6xl invisible group-hover:visible hover:transform  drop-shadow-md z-30"/>}
                        
                        </>
                        : <img  ref={videoRef[i]} src={item.data.url} className="h-auto rounded-2xl     bg-origin-border bg-center bg-contain bg-no-repeat  ">
                        </img>
                    }
                </li>
            ))
            }
        </ul>

        
    )
}

export default Contents

// max-w-[700px] min-h-[300px]

//video attributes
// absolute top-[50%] -translate-y-1/2