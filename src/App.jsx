import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar.jsx'
import TagBar from './components/TagBar.jsx'
import Contents from './components/Contents.jsx'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [tag, setTag ] = useState(null);

  function handleChange(keyword) {
    setTag(keyword)
  }
  
  function getContents() {
    

    axios.get(`https://www.reddit.com/r/${tag ? tag : 'art' }.json`)
    .then(response => setData(Array.from(response.data.data.children).filter(item => item.data.is_reddit_media_domain === true ))).catch(err => {
      console.log(err); return err
    })
  }

  // if post_hint equals to 'l  ink' don't 
  useEffect(() => {
console.log(data)
    if (data) {
      getContents()
    }

  },[tag] );

  return (
    <>
      <h1 className=' font-logo text-center text-orange-600 font-bold '>Seenit</h1>
      <SearchBar handleChange={handleChange} />
      <TagBar handleChange={handleChange} />
      <Contents data={data} />
    </>
  ) 
}

export default App
