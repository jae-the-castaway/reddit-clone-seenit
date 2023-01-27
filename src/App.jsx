import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import TagBar from './components/TagBar.jsx'
import Contents from './components/Contents.jsx'

function App() {
  const [filter, setFilter] = useState('home')

  return (
    <>
      <h1 className=' text-center text-orange-600 font-bold '>SEENIT</h1>
      <SearchBar />
      <TagBar />
      <Contents />
    </>
  )
}

export default App
