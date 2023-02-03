import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar.jsx'
import TagBar from './components/TagBar.jsx'
import Contents from './components/Contents.jsx'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);


  // if post_hint equals to 'link' don't 
  useEffect(() => {
    axios.get('https://www.reddit.com/r/popular.json')
      .then(response => setData(Array.from(response.data.data.children).filter(item => item.data.is_reddit_media_domain === true )))
    
  }, []);

  return (
    <>
      <h1 className=' font-logo text-center text-orange-600 font-bold '>Seenit</h1>
      <SearchBar />
      <TagBar />
      <Contents data={data} />
    </>
  )
}

export default App
