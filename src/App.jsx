import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar.jsx'
import TagBar from './components/TagBar.jsx'
import Contents from './components/Contents.jsx'
import axios from 'axios';

function App() {
  const [data, setData] = useState({});


  // if post_hint equals to 'link' don't 
  useEffect(() => {
    axios.get('https://www.reddit.com/r/home.json')
      .then(response => setData(response.data.data.children))
    console.log(data)
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
