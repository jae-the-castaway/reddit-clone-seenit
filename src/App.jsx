import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import TagBar from "./components/TagBar.jsx";
import Contents from "./components/Contents.jsx";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleChange(keyword) {
    setTag(keyword);
  }

  function getContents() {
    axios
      .get(`https://www.reddit.com/r/${tag ? tag : "popular"}.json`)
      .then((response) =>
        setData(
          Array.from(response.data.data.children).filter(
            (item) => item.data.is_reddit_media_domain === true
          )
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLoading(true);
    getContents();
    setLoading(false);
  }, [tag]);

  return (
    <>
      <h1 className=" text-center font-logo font-bold text-orange-600 ">
        Seenit
      </h1>
      <SearchBar handleChange={handleChange} />
      <TagBar handleChange={handleChange} />
      <Contents data={data} isLoading={loading} />
    </>
  );
}

export default App;
