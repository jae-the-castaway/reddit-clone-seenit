import {
  HiDotsHorizontal,
  HiArrowUp,
  HiArrowDown,
  HiOutlineUpload,
  HiOutlineChatAlt,
} from "react-icons/hi";

import Video from "./Video.jsx";

function Contents({ data, isLoading }) {
  // videoRef.current = data.map((element, i) => videoRef.current[i]);

  // need to make a video component that contains this handleclick function and useRef for each videos
  // and in this Contents components, pass down videos's url
  // so that we can use useRef each video without declaring multiple useRef
  // Read chatGPT most recent chat before implementing

  return (
    <ul className=" mx-[5vw] flex min-h-screen flex-col rounded-xl border border-gray-300 bg-gray-300 sm:block sm:columns-2 md:columns-3 lg:columns-4 ">
      {isLoading ? (
        <div
          className=" absolute left-1/2 right-1/2 my-2 -translate-x-8 "
          role="status"
        >
          <svg
            aria-hidden="true"
            className="h-16 w-16  animate-spin fill-white text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {data.length === 0 ? (
            <div className="  absolute left-1/2 my-10 -translate-x-1/2 text-center ">
              {" "}
              <p className=" my-3 animate-bounce">
                Wrong subreddit or no contents to load. <br />
                Try again !
              </p>{" "}
            </div>
          ) : (
            <>
              {data.map((item) => (
                <li
                  key={item.data.id}
                  className=" group relative my-1 h-fit max-w-[640px]  hover:cursor-pointer "
                >
                  <div className="absolute z-30 h-full w-full rounded-2xl bg-card-top group-hover:bg-card-bottom  "></div>
                  <div className=" absolute grid h-full w-full grid-cols-3 grid-rows-[1fr_6fr_2fr_10px_1fr]">
                    <div className="z-40 mt-2 justify-self-start p-2 ">
                      <p className=" ml-4 p-2 text-gray-100 hover:bg-gray-700 md:text-sm ">
                        <a
                          href={
                            "https://www.reddit.com/r/" + item.data.subreddit
                          }
                        >
                          {" "}
                          r/{item.data.subreddit}
                        </a>
                      </p>
                    </div>
                    <HiDotsHorizontal className="invisible z-40 col-start-3 mx-4  self-center justify-self-end text-gray-100 hover:bg-gray-700 group-hover:visible " />
                    <h2 className="invisible z-40 col-span-3 row-start-3 mx-4 min-h-0 self-end justify-self-start overflow-y-scroll p-2 text-xl text-gray-100 hover:bg-gray-700 group-hover:visible md:text-base ">
                      <a href={"https://www.reddit.com" + item.data.permalink}>
                        {item.data.title.slice(0, 50)}
                        {item.data.title.length > 50 ? "..." : ""}
                      </a>
                    </h2>
                    <hr className=" invisible col-span-3 row-start-4 my-1 mx-8 border-gray-300 group-hover:visible "></hr>
                    <div className="invisible z-40 row-start-5 flex items-center justify-evenly text-gray-100 group-hover:visible md:text-sm">
                      <HiArrowUp className="  hover:bg-gray-700 " />
                      <p className="  p-2 hover:bg-gray-700 ">
                        <a
                          href={"https://www.reddit.com" + item.data.permalink}
                        >
                          {item.data.ups}
                        </a>
                      </p>
                      <HiArrowDown className=" hover:bg-gray-700" />
                    </div>
                    <div className="invisible z-40 row-start-5 flex self-center justify-self-center p-2 text-gray-100 hover:bg-gray-700 group-hover:visible md:text-sm ">
                      <a href={"https://www.reddit.com" + item.data.permalink}>
                        <HiOutlineChatAlt className=" mr-2 inline " />
                        <p className=" mr-2 inline">{item.data.num_comments}</p>
                      </a>
                    </div>
                    <div className="invisible z-40 row-start-5 flex self-center justify-self-center p-2 text-gray-100 hover:bg-gray-700 group-hover:visible md:text-sm ">
                      <HiOutlineUpload className=" mr-2" />
                      <p className="">Share</p>
                    </div>
                  </div>
                  {item.data.is_video === true ? ( //if content is video, render video
                    <Video data={item} />
                  ) : (
                    <div className="flex h-full w-full items-center">
                      <img
                        src={item.data.url}
                        className="  w-full  rounded-2xl"
                      />
                      {/* <a
                        className=" absolute top-0 z-30 h-full w-full"
                        href={item.data.url}
                      ></a> */}
                    </div>
                  )}
                </li>
              ))}
            </>
          )}
        </>
      )}
    </ul>
  );
}
export default Contents;
