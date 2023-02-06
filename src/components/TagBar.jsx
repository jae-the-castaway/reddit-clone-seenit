
function TagBar( {handleChange} ) {
    return(
        <div className=" before:content-[''] before:w-10 before:h-10 overflow-auto whitespace-nowrap my-4 mx-[10vw]">
            <button onClick={()=> handleChange('popular')} className=" btn ">Popular</button>
            <button onClick={()=> handleChange('funnyvideos')} className=" btn ">Funny Videos</button>
            <button onClick={()=> handleChange('pics')} className=" btn ">Pics</button>
            <button onClick={()=> handleChange('art')} className=" btn ">Art</button>
            <button onClick={()=> handleChange('digitalart')} className=" btn ">Digital Art</button>
            <button className=" btn ">+</button>
        

        </div>
        )
}

export default TagBar

// Home, Popular, All, funnyvideos, +