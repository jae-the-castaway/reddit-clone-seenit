import { Children, useState, useRef, createRef } from "react"
import { HiDotsHorizontal, HiArrowUp, HiArrowDown, HiOutlineUpload, HiOutlineChatAlt } from "react-icons/hi"

import Video  from './Video.jsx'




function Contents({data, isLoading}) {

    // videoRef.current = data.map((element, i) => videoRef.current[i]); 

// need to make a video component that contains this handleclick function and useRef for each videos
// and in this Contents components, pass down videos's url
// so that we can use useRef each video without declaring multiple useRef
// Read chatGPT most recent chat before implementing


    
    return(
        <ul className=" flex  flex-col mx-[5vw]  bg-gray-300 border-gray-300 border ">
            {isLoading ?
                        <div className="m-2 w-full" role="status">
                        <svg aria-hidden="true" className="w-16 h-16 my-2 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
            :
            <>
            { data.error ?
                <p>Wrong subreddit. Try again</p>
            :
                <>
                {
                data.map((item, i) => (
                    <li key={item.data.id} className="  group hover:cursor-pointer my-1 relative min-w-[300px]  max-w-[700px]">
    
                        <div className="rounded-2xl bg-card-top group-hover:bg-card-bottom w-full h-full absolute z-30  "></div>
                        <div className=" absolute grid grid-cols-3 grid-rows-[1fr_8fr_10px_1fr] w-full h-full">
                            <div className="z-40 justify-self-start p-2 mt-2 grid-1">
                                <p className=" hover:bg-gray-700 p-2 ml-4 text-gray-100 ">
                                   <a href={'https://www.reddit.com/r/'+item.data.subreddit}> r/{item.data.subreddit}</a>
                                </p>
                          </div>
                          < HiDotsHorizontal className="z-40 invisible group-hover:visible hover:bg-gray-700  text-gray-100 mx-4 self-center justify-self-end col-start-3 "/>
                          <h2 className="z-40 hover:bg-gray-700 p-2 self-end justify-self-start col-span-3 invisible group-hover:visible text-gray-100 text-xl mx-4 "><a href={'https://www.reddit.com'+item.data.permalink}>{item.data.title}</a></h2>
                          <hr className=" invisible group-hover:visible col-span-3 my-1 border-gray-300 mx-8 "></hr>
                          <div className= "z-40 invisible group-hover:visible items-center grid-10 flex justify-evenly text-gray-100"><HiArrowUp className="  hover:bg-gray-700 "/><p className="  hover:bg-gray-700 p-2 "><a href={'https://www.reddit.com'+item.data.permalink}>{item.data.ups}</a></p><HiArrowDown className=" hover:bg-gray-700"/></div>
                          <div className="z-40 hover:bg-gray-700 invisible group-hover:visible self-center grid-11 justify-self-center flex text-gray-100 p-2 "><a href={'https://www.reddit.com'+item.data.permalink}><HiOutlineChatAlt className=" inline mr-2 "/><p className=" inline mr-2">{item.data.num_comments}</p></a></div>
                          <div className="z-40 hover:bg-gray-700 invisible group-hover:visible justify-self-center self-center grid-12 flex text-gray-100 p-2 "><HiOutlineUpload className=" mr-2"/><p className="">Share</p></div>
                        </div>
                        {item.data.is_video === true  //if content is video, render video, if not t
                            ? 
                            <Video data={item}/>
                            : <><img  src={item.data.url} className="h-auto rounded-2xl     bg-origin-border bg-center bg-contain bg-no-repeat  " />
                            <a className=" absolute top-0 w-full h-full z-30" href={item.data.url}></a></>
                        }
                    </li>
                    ))
            }
                </>
            }
            </>

            
            

            }
        </ul>
    )
}
// z
export default Contents