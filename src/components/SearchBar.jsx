import { FaSearch } from "react-icons/fa";
function SearchBar({ handleChange }) {
  return (
    <>
      <div className=" align-center btn-shadow mx-[10vw] flex border-2 border-gray-900 bg-gray-100 px-5 py-3 text-xs focus-within:drop-shadow-[10px_10px_0_rgba(17,24,39)] ">
        <span className=" relative -left-1.5 flex-grow-0 text-lg text-gray-400 ">
          r/
        </span>
        <input
          onChange={(e) => handleChange(e.target.value)}
          className=" h-auto flex-grow bg-gray-100 text-lg text-gray-600 focus:outline-none "
          placeholder=" Type any subreddit"
          type="text"
        />
        <div className=" ">
          <FaSearch size="30px" color="" className=" flex-grow-0" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
