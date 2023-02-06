import { Children, useState, useRef, createRef } from "react"
import { HiDotsHorizontal, HiArrowUp, HiArrowDown, HiOutlineUpload, HiOutlineChatAlt } from "react-icons/hi"

import Video  from './Video.jsx'




function Contents({data}) {


    // videoRef.current = data.map((element, i) => videoRef.current[i]); 

// need to make a video component that contains this handleclick function and useRef for each videos
// and in this Contents components, pass down videos's url
// so that we can use useRef each video without declaring multiple useRef
// Read chatGPT most recent chat before implementing


    
    return(
        <ul className=" flex  flex-col mx-[5vw]  bg-gray-300 border-gray-300 border ">
            {
            data.map((item, i) => (
                    <li key={item.data.id} className="  group hover:cursor-pointer my-1 relative min-w-[300px]  max-w-[700px]">

                    <div className=" rounded-2xl bg-card-top group-hover:bg-card-bottom w-full h-full absolute z-10  "></div>
                    <div className=" absolute z-20 grid grid-cols-3 grid-rows-[1fr_8fr_10px_1fr] w-full h-full">
                        <div className=" self-center grid-1">
                            <p className=" ml-4 text-gray-100 ">
                               <a href={'https://www.reddit.com/r/'+item.data.subreddit}> r/{item.data.subreddit}</a>
                            </p>
                      </div>
                      < HiDotsHorizontal className=" text-gray-100 mx-4 self-center justify-self-end col-start-3 "/>
                      <h2 className=" self-end col-span-3  text-gray-100 text-xl mx-4 "><a href={'https://www.reddit.com'+item.data.permalink}>{item.data.title}</a></h2>
                      <hr className="  col-span-3 my-1 border-gray-300 mx-8 "></hr>
                      <div className=" self-center grid-10 justify-self-center flex text-gray-100"><HiArrowUp className=" mr-2 "/><p className=" mr-2 "><a href={'https://www.reddit.com'+item.data.permalink}>{item.data.ups}</a></p><HiArrowDown/></div>
                      <div className="self-center grid-11 justify-self-center flex text-gray-100 "><a href={'https://www.reddit.com'+item.data.permalink}><HiOutlineChatAlt className=" inline mr-2 "/><p className=" inline mr-2">{item.data.num_comments}</p></a></div>
                      <div className="justify-self-center self-center grid-12 flex text-gray-100 "><HiOutlineUpload className=" mr-2"/><p className="">Share</p></div>
                    </div>
                    {item.data.is_video === true  //if content is video, render video, if not t
                        ? 
                        <Video data={item}/>
                        : <img  src={item.data.url} className="h-auto rounded-2xl     bg-origin-border bg-center bg-contain bg-no-repeat  ">
                        </img>
                    }
                </li>
            ))
            }
        </ul>

        
    )
}
// z
export default Contents