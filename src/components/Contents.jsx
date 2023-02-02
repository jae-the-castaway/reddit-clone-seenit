import { HiDotsHorizontal, HiArrowUp, HiArrowDown, HiOutlineUpload, HiOutlineChatAlt } from "react-icons/hi"




function Contents() {
    return(
        <div className=" flex  flex-col mx-[5vw]  bg-gray-300 border-gray-300 border ">
                {/* card 2 */}
                <div className="  group my-7 relative min-w-[300px]  max-w-[700px]">

                    <div className=" rounded-2xl bg-card-top group-hover:bg-card-bottom w-full h-full absolute z-10  "></div>
                    <div className=" absolute z-20 grid grid-cols-3 grid-rows-[1fr_4fr_10px_1fr] w-full h-full">
                        <div className=" self-center grid-1">
                            <p className=" ml-4 text-gray-100 ">
                                r/subreddit
                            </p>
                      </div>
                      < HiDotsHorizontal className=" text-gray-100 mx-4 self-center justify-self-end col-start-3 "/>
                      <h2 className=" self-end col-span-3  text-gray-100 text-xl mx-4 ">title of content, usually reddit has really long title...so...let's make it long just in case</h2>
                      <hr className="  col-span-3 my-1 border-gray-300 mx-8 "></hr>
                      <div className=" self-center grid-10 justify-self-center flex text-gray-100"><HiArrowUp className=" mr-2 "/><p className=" mr-2 ">123</p><HiArrowDown/></div>
                      <div className="self-center grid-11 justify-self-center flex text-gray-100 "><HiOutlineChatAlt className=" mr-2 "/><p className=" mr-2">123 Comments</p></div>
                      <div className="justify-self-center self-center grid-12 flex text-gray-100 "><HiOutlineUpload className=" mr-2"/><p className="">Share</p></div>
                    </div>
                    <video  src="/card3.mp4" className="h-auto rounded-2xl     bg-[url('/card2.mp4')] bg-origin-border bg-center bg-contain bg-no-repeat ">
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