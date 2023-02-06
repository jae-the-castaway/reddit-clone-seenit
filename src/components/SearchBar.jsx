import { FaSearch } from 'react-icons/fa'
function SearchBar({handleChange}) {
    return(
        <>

        <div className=" align-center btn-shadow focus-within:drop-shadow-[10px_10px_0_rgba(17,24,39)] bg-gray-100 flex border-gray-900 border-2 mx-[10vw] text-xs px-5 py-3 ">
        <span className=" relative flex-grow-0 text-lg text-gray-400 -left-1.5 ">r/</span>
        <input onChange={(e)=> handleChange(e.target.value)} className=" focus:outline-none text-lg flex-grow h-auto bg-gray-100 text-gray-600 " placeholder=' Type any subreddit' type="text" />
        <div className=" "><FaSearch size='1.5rem' color='' className=' flex-grow-0'/></div>
        </div>
        </>
        )
}

export default SearchBar

