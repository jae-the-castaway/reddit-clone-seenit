import { HiDotsHorizontal, HiArrowUp, HiArrowDown, HiOutlineUpload, HiOutlineChatAlt } from "react-icons/hi"




function Contents() {
    return(
        <div className=" flex  flex-col mx-[5vw]  bg-gray-300 border-gray-300 border ">
            <div className=" min-h-[600px] bg-[url('/card.jpg')] bg-pink-100 bg-origin-border bg-center bg-cover bg-no-repeat">
                <div className="   ">

                </div>
            </div>
                {/* card 2 */}
                <div className="  group my-7 relative min-w-[300px]  max-w-[700px]  bg-blue-400">

                    <div className=" group-hover:bg-card w-full h-full absolute z-10  "></div>
                    <div className=" absolute z-20 grid grid-cols-3 grid-rows-3 w-full h-full">
                        <div className="grid-1">
                            <p className="   text-lg text-center text-red-500">
                                r/subreddit . u/username
                            </p>
                            
                      </div>
                      < HiDotsHorizontal className=" justify-self-end col-start-3 "/>
                      <h2 className=" self-end col-span-3">title of content, usually reddit has really long title...so...let's make it long just in case</h2>
                      <div className=" self-end grid-7 justify-self-center"><HiArrowUp/>123<HiArrowDown/></div>
                      <div className="self-end grid-8 justify-self-center"><HiOutlineChatAlt/>123 Comments</div>
                      <div className="justify-self-center self-end grid-9"><HiOutlineUpload/>Share</div>
                    </div>
                    <video  src="/card3.mp4" className="h-auto rounded-2xl  border-2 border-red-500  bg-[url('/card2.mp4')] bg-origin-border bg-center bg-contain bg-no-repeat ">
                    </video>
                </div>
            <div className=" relative"></div>
        </div>
    )
}

export default Contents

// max-w-[700px] min-h-[300px]

//video attributes
// absolute top-[50%] -translate-y-1/2