import { FaSearch } from 'react-icons/fa'
function SearchBar() {
    return(
        <>

        <div className=" btn-shadow focus-within:drop-shadow-[10px_10px_0_rgba(17,24,39)] bg-gray-100 flex border-gray-900 border-2 mx-[5vw] text-xs px-5 py-3 ">
        <span className=" relative flex-grow-0 text-gray-400 -left-1.5 ">r/</span>
        <input className=" focus:outline-none flex-grow bg-gray-100 text-gray-600 " placeholder=' Type any subreddit' type="text" />
        <div className=" "><FaSearch size='1rem' color='' className=' flex-grow-0'/></div>
        </div>
        </>
        )
}

export default SearchBar