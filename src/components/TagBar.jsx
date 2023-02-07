
function TagBar( {handleChange} ) {
    return(
        <div className=" before:content-[''] before:w-10 before:h-10 overflow-auto whitespace-nowrap my-4 mx-[10vw]">
            <button onClick={()=> handleChange('popular')} className=" btn ">Popular</button>
            <button onClick={()=> handleChange('all')} className=" btn ">All</button>
            <button onClick={()=> handleChange('funnyvideos')} className=" btn ">Funny Videos</button>
            <button onClick={()=> handleChange('pics')} className=" btn ">Pics</button>
            <button onClick={()=> handleChange('art')} className=" btn ">Art</button>
            <button onClick={()=> handleChange('videos')} className=" btn ">Videos</button>
            <button onClick={()=> handleChange('aww')} className=" btn ">Aww</button>
            <button onClick={()=> handleChange('gifs')} className=" btn ">Gifs</button>
            <button onClick={()=> handleChange('earthPorn')} className=" btn ">EarthPorn</button>
            <button onClick={()=> handleChange('oldschoolcool')} className=" btn ">OldSchoolCool</button>
            <button className=" btn ">+</button>
        

        </div>
        )
}

export default TagBar

// Home, Popular, All, funnyvideos, +